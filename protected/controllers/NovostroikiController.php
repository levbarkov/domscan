<?php

class NovostroikiController extends Controller
{
	public $layout='//layouts/admin_template';
	public $objects_loaded_type = false;
	public $title;
	public $seoblock_name = 'novostroiki';
	public $banner = 'new-buildings-section_top_1170-90';
	
	private $_model;

	public function filters()
	{
		return array(
			'accessControl', 
		);
	}

	public function accessRules()
	{
		return array(
			array('allow',  
				'actions'=>array('index','create','update','admin','delete','view','commercial','list','flats','pdf','newpdf'),
				'users'=>array('*'),
			),
			array('allow', 
				'actions'=>array('create','update','list','ajaxdeleteimage','ajaxdeleteallimages','ajaxchooseimage'),
				'users'=>array('@'),
			),
			array('allow', 
				'actions'=>array('admin','delete'),
				'users'=>array('admin'),
			),
			array('deny', 
				'users'=>array('*'),
			),
		);
	}


	public function actionAjaxDeleteImage()
	{
		$this->checkPermissions(array('admin','manager'));
		
		if(Yii::app()->request->isAjaxRequest){
			$imageId = $_POST['imageId'];
			$articleId = $_POST['objectId'];
			if (CondominiumImage::deleteImage($imageId, $articleId))
				echo (true);
			else
				echo (false);
			Yii::app()->end();
		}
	}
	
	
	public function actionAjaxChooseImage()
	{
		$this->checkPermissions(array('admin','manager'));
		
		if(Yii::app()->request->isAjaxRequest){
			$imageId = $_POST['imageId'];
			$articleId = $_POST['objectId'];
			if (CondominiumImage::chooseImageFileAsMain($imageId, $articleId))
				echo (true);
			else
				echo (false);
			Yii::app()->end();
		}
	}
	
	public function actionAjaxDeleteAllImages()
	{
		$this->checkPermissions(array('admin','manager'));
		
		if(Yii::app()->request->isAjaxRequest){
			$articleId = $_POST['objectId'];
			if (CondominiumImage::deleteAllImages($articleId))
				echo (true);
			else
				echo (false);
			Yii::app()->end();
		}
	}
	
	public function actionFlats($id)
	{
		$this->layout = 'landing';

		$current_page = (int)Yii::app()->request->getParam('page_id', 1);
		$offset = 16*($current_page-1);

		$city_title = Yii::app()->request->getParam('city_title', false);
		$district_title = Yii::app()->request->getParam('district_title', false);
		
		$model = Condominium::model()->findByPk($id);
		if(!$model)
			throw new CHttpException(404, Yii::t('app', 'The requested page does not exist.'));
			
		$latitude = $model->latitude;
		$longitude = $model->longitude;
		
		$criteria = new CDbCriteria;		
		$criteria->offset = $offset;
		$criteria->addBetweenCondition('latitude', $latitude-0.0007, $latitude+0.00070);
		$criteria->addBetweenCondition('longitude', $longitude-0.0007, $longitude+0.0007);
		$criteria->addCondition("type = 'new' OR type = 'flat'");	
		$criteria->addCondition("subtype = 'sale'");	
		$criteria->addCondition("sold = 0");
		
		$estate_count = Estate::model()->count($criteria); 
		
		$criteria->limit = 16;
		
		$estate = Estate::model()->findAll($criteria); 
		
		$this->title = 'Все квартиры новостройки '.$model->title;

		$count = $estate_count;
		$page_count = ceil($count/16);
		
	 	$this->setPageTitle($this->title);
	 				
		$this->render('condo_flats_view',array(
			'model'=>$estate, 
			'condo'=>$model,
			'condo_url'=>$model->getFlatsPage(),
			'entries_count'=>$count, 
			'page_count' => $page_count,
			'current_page' => $current_page,
		));

	}
	
	public function actionCommercial($id)
	{
		$this->layout = 'landing';

		$current_page = (int)Yii::app()->request->getParam('page_id', 1);
		$offset = 16*($current_page-1);

		$city_title = Yii::app()->request->getParam('city_title', false);
		$district_title = Yii::app()->request->getParam('district_title', false);
		
		$model = Condominium::model()->findByPk($id);
		if(!$model)
			throw new CHttpException(404, Yii::t('app', 'The requested page does not exist.'));
			
		$latitude = $model->latitude;
		$longitude = $model->longitude;
		
		$criteria = new CDbCriteria;		
		$criteria->offset = $offset;
		$criteria->addBetweenCondition('latitude', $latitude-0.001, $latitude+0.001);
		$criteria->addBetweenCondition('longitude', $longitude-0.001, $longitude+0.001);
		$criteria->addCondition("type = 'commercial'");
		
		$estate_count = Estate::model()->count($criteria); 
		
		$criteria->limit = 16;
		
		$estate = Estate::model()->findAll($criteria); 
		
		$this->title = 'Все коммерческие объекты новостройки '.$model->title;

		$count = $estate_count;
		$page_count = ceil($count/16);
		
	 	$this->setPageTitle($this->title);
		
	 				
		$this->render('condo_flats_view',array(
			'model'=>$estate, 
			'condo'=>$model,
			'condo_url'=>$model->getCommercialPage(),
			'entries_count'=>$count, 
			'page_count' => $page_count,
			'current_page' => $current_page,
		));

	}
	
	public function actionList()
	{
		$this->layout = 'landing';

		$current_page = (int)Yii::app()->request->getParam('page_id', 1);
		$offset = 16*($current_page-1);
		$criteria = new CDbCriteria;			
		$criteria->offset = $offset;
		$criteria->limit = 16;

		$city_title = Yii::app()->request->getParam('city_title', false);
		
		if($city_title)
	 		$this->seoblock_name = $city_title;
		$district_title = Yii::app()->request->getParam('district_title', false);
		
		$getstatus = Yii::app()->request->getParam('status', false);
		if(!in_array($getstatus, array('in_process','completed')))
			$getstatus = false;
			
		if($getstatus == 'completed')
			$criteria->addCondition("finished = '1'");
		if($getstatus == 'in_process')
			$criteria->addCondition("finished = '0'");
		
		$this->title = 'Все новостройки';
		if($city_title) {
			$city = City::model()->findByAttributes(array('en_slug'=>$city_title));
			$selected_city = $city;
			$this->title = 'Все новостройки, '.$selected_city->name;
		}
		
		if($city_title && $district_title) {
			$district = District::model()->findByAttributes(array('city_id'=>$city->id,'en_title'=>$district_title));
			$selected_district = $district;
			$this->title = 'Все новостройки, '.$selected_city->name.', '.$selected_district->name;
		}
		
		if(!$city) {
			$model_count = Condominium::model()->countByAttributes(array());
			$model = Condominium::model()->findAllByAttributes(array(),$criteria);
		} else if(!$district) {
			$model_count = Condominium::model()->countByAttributes(array('city'=>$city->id));
			$model = Condominium::model()->findAllByAttributes(array('city'=>$city->id),$criteria);
		} else {
			$model_count = Condominium::model()->countByAttributes(array('city'=>$city->id,'district'=>$district->id));
			$model = Condominium::model()->findAllByAttributes(array('city'=>$city->id,'district'=>$district->id),$criteria);
		}
		$count = $model_count;
		$page_count = ceil($count/16);
		
		
	 	$this->setPageTitle($this->title);
	 	
			
		$this->render('district_view',array(
			'model'=>$model, 
			'district'=>$district_title, 
			'city'=>$city_title, 
			'selected_city'=>$selected_city, 
			'selected_district' => $selected_district,
			'entries_count'=>$count, 
			'page_count' => $page_count,
			'current_page' => $current_page,
			'getstatus' => $getstatus,
		));

	}
		
	public function actionView($id)
	{
		$this->layout = 'landing';
		$this->banner = 'new-buildings-page_top_1170-90';
		
		$model = Condominium::model()->findByPk($id);
		//print_r($model);
		$builder = Builder::model()->findByAttributes(array('en_title'=>$model->zastroishik));
		
			
		$latitude = $model->latitude;
		$longitude = $model->longitude;
		
		$criteria = new CDbCriteria;
		$criteria->addBetweenCondition('latitude', $latitude-0.00070, $latitude+0.00070);
		$criteria->addBetweenCondition('longitude', $longitude-0.00070, $longitude+0.00070);	
		$criteria->addCondition("type = 'new' OR type = 'flat'");
		$criteria->addCondition("subtype = 'sale'");	
		$criteria->addCondition("sold = 0");
		$estate_count = Estate::model()->count($criteria); 
		
		$criteria->limit = 4;
		
		$estate = Estate::model()->findAll($criteria); 

		
		$criteria_commercial = new CDbCriteria;
		$criteria_commercial->addBetweenCondition('latitude', $latitude-0.001, $latitude+0.001);
		$criteria_commercial->addBetweenCondition('longitude', $longitude-0.001, $longitude+0.001);
		
		$criteria_commercial->addCondition("type = 'commercial'");
		$criteria_commercial->addCondition("sold = 0");
		$commercial_count = Estate::model()->count($criteria_commercial); 
		
		$criteria_commercial->limit = 4;
		$commercial = Estate::model()->findAll($criteria_commercial); 
		
		
		$criteria = new CDbCriteria;
		$criteria->addCondition("district = ".$model->district);
		$criteria->addCondition("id != ".$model->id);
		
		$condos = Condominium::model()->findAll($criteria);
			
		$criteria = new CDbCriteria;
		$criteria->addCondition("district = ".$model->district);
		$criteria->addCondition("finished = '1'");
		$condos_built = Condominium::model()->count($criteria);
		
		$criteria = new CDbCriteria;
		$criteria->addCondition("district = ".$model->district);
		$criteria->addCondition("finished = '0'");
		$condos_inprocess = Condominium::model()->count($criteria);
		
		
        $this->pageDescriptionOverride = true;
        $this->pageDescription = 'Квартиры в '.$model->title.', '.$model->district_name->name.', '.$model->city_name->name;
        

		
		$this->setPageTitle($model->title.', '.$model->district_name->name.', '.$model->city_name->name); 
	

		
		$this->render('condo_view',array(
			'model'=>$model, 
			'estate'=>$estate,
			'commercial'=>$commercial,
			'estate_count'=>$estate_count,
			'commercial_count'=>$commercial_count,
			'builder'=>$builder,
			'podryadchik'=>$podryadchik,
			'condos'=>$condos,
			'condos_built'=>$condos_built,
			'condos_inprocess'=>$condos_inprocess,
		));

	}
	
	public function actionCreate()
	{
		$this->checkPermissions(array('admin','manager'));
		
		$model=new Condominium;
		$model->city = (int)Yii::app()->request->getParam('city_id', 1);
		$model->type = Yii::app()->request->getParam('type', 'flat');
		if(!in_array($model->type, array('house','flat','new','commercial','land'))) {
			$model->type = 'flat';
		}
		
		
		$type = Yii::app()->request->getParam('type');	
		if($type) {
			if(in_array($type, array('house','flat','new','commercial','land'))) {
				$model->type = $type;
			} else {
				$model->type = 'flat';
			}
		}		
		$subtype = Yii::app()->request->getParam('subtype');	
		if($subtype) {
			if(in_array($subtype, array('sale','rent'))) {
				$model->subtype = $subtype;
			} else {
				$model->subtype = 'sale';
			}
		}
		if($model->type == 'new') $model->subtype = 'sale';
		
		if(!$model->subtype) $model->subtype = 'sale';
		
		
		$model->mortgage = true;
		$type_config=EstateConfig::model()->findByAttributes(array('type'=> $model->type));
		$fields_main = EstateConfigNew::model()->findAllByAttributes(array('type_'.$model->type => true, 'parent'=>'', 'block' => 'main'),array('order'=>'sorting ASC'));
		$fields_sub = EstateConfigNew::model()->findAllByAttributes(array('type_'.$model->type => true,'parent'=>'', 'block' => 'sub'),array('order'=>'sorting ASC'));
		
		$this->performAjaxValidation($model);
		
		$converter = ConverterHelper::GetTransliteration();

		if(isset($_POST['Condominium']))
		{
			$model->attributes=$_POST['Condominium'];
			$model->podryadchiki = $model->podryadIds;
			
			$images = $_POST['Images'];

		
			$string = mb_strtolower($model->title, 'UTF-8');; 
			$string = trim($string);
			//$string = mb_strtolower($string);
		
			$model->slug = strtr($string, $converter); 
		
			$model->slug = preg_replace('/[^A-Za-z0-9\-_]/', '', $model->slug);
		
			$tour=CUploadedFile::getInstance($model,'upload_pano');
			//print_r($model->tour);print_r($model->tour->name);
			//return true;
			if($tour):
				$model->tour='/uploads/panoramas/'.$model->id.'_'.$tour->name;
			endif; 
			
				$cache=new CDbCache();
				$cache->flush();
			
			if($this->saveEntry($model, $images)) {
				
				$photos = $_POST['Condominium']['photo'];
				//echo print_r($photos, true);
				$command = Yii::app()->db->createCommand();
				foreach($photos as $key => $photo) {
					if($photo != '') {
						$id = $model->id;
						
						$uploaddir = dirname(Yii::app()->request->scriptFile).'/uploads/condos/item_'. $id . '/';
						if (!is_dir($uploaddir)) {
							mkdir($uploaddir);
						}
						$photo = urldecode($photo);
						$magicianObj = new imageLib(dirname(Yii::app()->request->scriptFile).$photo);
						
						$photo = strtr($photo, $converter); 
						$photo = $id.$photo.'.jpg';
						//echo $uploaddir.$photo;
						//die();
						$magicianObj->saveImage($uploaddir.$photo);
						
						//die();
						
						$command->insert('real_condominium_image', array(
							'parent' => $id,
						//	'url' => $randomName,
							'name' => $photo,
							'uploaddir' => '/uploads/condos/item_'. $id . '/',
							'main' => false
							//'create_time' => date("Y-m-d H:i:s"),
						));

					
					}

				}
				
				if($tour):
					$tour->saveAs(dirname(Yii::app()->request->scriptFile).'/uploads/panoramas/'.$model->id.'_'.$tour->name);					
				endif;
				$this->redirect(array('novostroiki/admin/'));
			}

		}



		$this->render('create',array(
			'model'=>$model, 'type_config'=>$type_config
		));
		
	/*	$this->layout = 'main';
		$this->render('//cabinet/administrator_add2',array(
			'model'=>$model, 'type_config'=>$type_config, 'fields_main'=>$fields_main, 'fields_sub'=>$fields_sub, 'images'=>$images, 'objects_loaded_type' => $objects_loaded_type
		)); */
	}

	public function actionUpdate()
	{
	
		$this->checkPermissions(array('admin','manager'));
		$_SESSION['KCFINDER']['disabled'] = false; // enables the file browser in the admin
		$_SESSION['KCFINDER']['uploadURL'] = Yii::app()->baseUrl."/uploads/"; // URL for the uploads folder
		$_SESSION['KCFINDER']['uploadDir'] = Yii::app()->basePath."/../uploads/"; // path to the uploads folder
		/*if(!Yii::app()->user->can('manage')) {
			$this->redirect('/user/auth');
			Yii::app()->end();
		}*/
		$model=$this->loadModel();
						
		$validation_error = false;
		
		$images = $model->attached_images;
		
		//$photos = $_POST['Condominium']['photo'];
		//echo print_r($photos, true);
		foreach($photos as $key => $photo) {
		//	echo $key;
		//	echo $photo;
		}
		//die();
		
		$converter = ConverterHelper::GetTransliteration();

		$this->performAjaxValidation($model);

		if(isset($_POST['Condominium']))
		{
			
			
			$model->attributes=$_POST['Condominium'];
			
			
		//	die($model->text);
			$model->podryadchiki = $model->podryadIds;
			
			
			$images = $_POST['Images'];
		
			
			$model->slug = preg_replace('/[^A-Za-z0-9\-_]/', '', $model->slug);
			if (!$model->slug) {
				$string = mb_strtolower($model->title, 'UTF-8');; 
				$string = trim($string);
				$string = mb_strtolower($string);
				$model->slug = strtr($string, $converter); 
			}
			
			$tour=CUploadedFile::getInstance($model,'upload_pano');
			//print_r($model->tour);print_r($model->tour->name);
			//return true;
			
			if($_POST['delete_pano']) {
				@unlink(dirname(Yii::app()->request->scriptFile).$oldtour);
				$model->tour = '';
			}
			
			if($tour):
				$oldtour = $model->tour;
				$model->tour='/uploads/panoramas/'.$model->id.'_'.$tour->name;
			endif; 
			
			
			$cache=new CDbCache();
			$cache->flush();
			
			if($this->saveEntry($model, $images)) {
				$photos = $_POST['Condominium']['photo'];
				//echo print_r($photos, true);
				$command = Yii::app()->db->createCommand();
				foreach($photos as $key => $photo) {
					if($photo != '') {
						$id = $model->id;
						$photo = urldecode($photo);
						
						$uploaddir = dirname(Yii::app()->request->scriptFile).'/uploads/condos/item_'. $id . '/';
						if (!is_dir($uploaddir)) {
							mkdir($uploaddir);
						}
						$magicianObj = new imageLib(dirname(Yii::app()->request->scriptFile).$photo);
						
						$photo = strtr($photo, $converter); 
						$photo = $id.$photo.'.jpg';
						//echo $uploaddir.$photo;
						//die();
						$magicianObj->saveImage($uploaddir.$photo);
						
						//die();
						
						$command->insert('real_condominium_image', array(
							'parent' => $id,
						//	'url' => $randomName,
							'name' => $photo,
							'uploaddir' => '/uploads/condos/item_'. $id . '/',
							'main' => false
							//'create_time' => date("Y-m-d H:i:s"),
						));

					
					}

				}
						
				
				if($tour):
					@unlink(dirname(Yii::app()->request->scriptFile).$oldtour);
					$tour->saveAs(dirname(Yii::app()->request->scriptFile).'/uploads/panoramas/'.$model->id.'_'.$tour->name);					
				endif;
				
				$this->redirect(array('novostroiki/admin'));
			}
		
			$images = $model->attached_images;
		}

	//	$this->render('update',array(

	//	$this->layout = 'main';
		$this->render('update',array(
			'model'=>$model, 'fields_main'=>$fields_main, 'fields_sub'=>$fields_sub, 'images'=>$images, 'objects_loaded_type' => $objects_loaded_type
		));
	}

	public function actionDelete()
	{
		$this->checkPermissions(array('admin','manager'));

		$model = $this->loadModel();
		CondominiumImage::deleteAllImages($model->id);	
		@unlink(dirname(Yii::app()->request->scriptFile).$model->tour);
		@unlink(dirname(Yii::app()->request->scriptFile).$model->image);
		$model->delete();

			if(!isset($_GET['ajax']))
				$this->redirect($_SERVER['HTTP_REFERER']);
	
	}

	public function actionIndex()
	{
		$this->redirect('/');
	}

	public function actionAdmin()
	{
			$this->checkPermissions(array('admin','manager'));
		
			$objects_type = Yii::app()->request->getParam('type', 'flat');
			
			$current_page = (int)Yii::app()->request->getParam('page_id', 1);
			
			$offset = 25*($current_page-1);
			
			if(!in_array($objects_type, array('house','flat','new','commercial','land'))) {
				$objects_type = 'flat';
			}
		
		
			$criteria = new CDbCriteria;
			
			$id_search = trim(Yii::app()->request->getParam('id_search'));			
			if(!$id_search){
						
				$city_id = Yii::app()->request->getParam('city_search', 'all');
				if(!$city_id) $city_id = 'all';
				if($city_id != 'all' && $city_id) {
					$criteria->addInCondition('city',array($city_id));			
				}
				
				$builder_search = Yii::app()->request->getParam('builder_search', 'all');
				if(!$builder_search) $builder_search = 'all';
				if($builder_search != 'all' && $builder_search) {
					$criteria->addInCondition('zastroishik',array($builder_search));			
				}
				
				//$criteria->addInCondition('type',array($objects_type));		
			

				
				$address_search = Yii::app()->request->getParam('address_search');
				$criteria->addSearchCondition('address', $address_search,true,'AND');
			} else {		
				$id_search = explode(',', $id_search);
				$criteria->addInCondition('id',$id_search);		
				$id_search = implode(',', $id_search);		
			}
		
			$criteria->order = ('id DESC');
			
			$model_count = Condominium::model()->count(
				$criteria
				); 
				
			$criteria->offset = $offset;
			$criteria->limit = 25;
			
			$model = Condominium::model()->findAll(
				$criteria
				); 

		$count = $model_count;
		$page_count = ceil($count/25);
		
		$this->render('admin',array(
			'model'=>$model,
			'city_id'=>$city_id,
			'entries_count'=>$count,
			'page_count'=>$page_count,
			'current_page'=>$current_page,
			'type'=>$objects_type,
			'address_search'=>$address_search,
			'id_search'=>$id_search,
			'builder_search'=>$builder_search,
		));
	}


	protected function saveEntry($object, $images)
	{
		$transaction = $object->dbConnection->beginTransaction();
			try {
				if($object->save()) {
					if (isset($images))
						CondominiumImage::saveImages($images, $object->id, 'Condominium');
					$transaction->commit();
				} else {
					$transaction->rollback();
					return false;
				}
			} catch(Exception $e){
				$transaction->rollback();
				return false;
			}
		return true;
	}
	
	public function loadModel()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
				$this->_model=Condominium::model()->findbyPk($_GET['id']);
			if($this->_model===null)
				throw new CHttpException(404, Yii::t('app', 'The requested page does not exist.'));
		}
		return $this->_model;
	}

	protected function performAjaxValidation($model)
	{
		if(isset($_POST['ajax']) && $_POST['ajax']==='setting-form')
		{
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}
	}
	
	
}
