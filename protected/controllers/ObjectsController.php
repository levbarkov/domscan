<?php

class ObjectsController extends Controller
{
	public $layout='//layouts/admin_template';
	public $objects_loaded_type = false;
	private $_model;
	public $property_title;

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
				'actions'=>array('index','create','update','admin','delete','view','list','pdf','newpdf'),
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

	public function actionPdf() 
	{	
		//$model = $this->loadModel();
		
		$this->layout = '//layouts/pdf';
		$model = $this->loadModel();
		$pdf=Yii::app()->dompdf;
		$pdf->dompdf->set_paper('a4');	
		
		$arrProperties = array();
		
		switch($model->type) {
			case 'flat': $type_string = 'Квартира'; break;
			case 'land': $type_string =  'Земельный участок'; break;
			case 'commercial': $type_string =  'Коммерческая недвижимость'; break;
			case 'new': $type_string =  'Новостройка'; break;
			case 'house': $type_string =  'Дом'; break;
		}
		$arrProperties[] = array('title'=>'Тип:','value'=>$type_string);
		
		$district = City::model()->findByPk($model->city); 
		if($district) 
			$arrProperties[] = array('title'=>'Город:','value'=>$district->name);
			
		$district = District::model()->findByPk($model->district); 
		if($district) 
			$arrProperties[] = array('title'=>'Район:','value'=>$district->name);
		
		$arrProperties[] = array('title'=>'Адрес:','value'=>$model->address);
		
		
		if($model->rooms)
			$arrProperties[] = array('title'=>'Комнат:','value'=>$model->rooms);
		
		$plan = OptionList::model()->findByAttributes(array('en_parent_name'=>'plan','en_option_name'=>$model->plan)); 
		if($plan)		
			$arrProperties[] = array('title'=>'Планировка:','value'=>$plan->value);
			
			
		if($model->square)
			$arrProperties[] = array('title'=>'Общая площадь:','value'=>$model->square.' м&#178;');
		if($model->square_living)
			$arrProperties[] = array('title'=>'Жилая площадь:','value'=>$model->square_living.' м&#178;');
		if($model->square_kitchen)
			$arrProperties[] = array('title'=>'Площадь кухни:','value'=>$model->square_kitchen.' м&#178;');
		if($model->square_land)
			$arrProperties[] = array('title'=>'Площадь участка:','value'=>$model->square_land.' м&#178;');
			
						
			
		if($model->ceiling_height)
			$arrProperties[] = array('title'=>'Высота потолка:','value'=>$model->ceiling_height.' м');
		
		if($model->floor || $model->top_floor):
			if($model->floor && $model->top_floor) {
				$arrProperties[] = array('title'=>'Этаж:','value'=>$model->floor.'/'.$model->top_floor);
			} else if(!$model->floor && $model->top_floor) {
				$arrProperties[] = array('title'=>'Этажей:','value'=>$model->top_floor);			
			}
		endif;
		
		$balcony = OptionList::model()->findByAttributes(array('en_parent_name'=>'balcony','en_option_name'=>$model->balcony)); 
        if($balcony)
			$arrProperties[] = array('title'=>'Балкон:','value'=>$balcony->value);
		$sanuzel = OptionList::model()->findByAttributes(array('en_parent_name'=>'sanuzel','en_option_name'=>$model->sanuzel)); 
        if($sanuzel)
			$arrProperties[] = array('title'=>'Санузел:','value'=>$sanuzel->value);
		$material = OptionList::model()->findByAttributes(array('en_parent_name'=>'material','en_option_name'=>$model->material)); 
		if($material)
			$arrProperties[] = array('title'=>'Материал стен:','value'=>$material->value);
			
			
		$material = OptionList::model()->findByAttributes(array('en_parent_name'=>'commercial_type','en_option_name'=>$model->commercial_type)); 
		if($material)
			$arrProperties[] = array('title'=>'Тип коммерческого объекта:','value'=>$material->value);
			
		$material = OptionList::model()->findByAttributes(array('en_parent_name'=>'commercial_business','en_option_name'=>$model->commercial_business)); 
		if($material)
			$arrProperties[] = array('title'=>'Тип бизнеса:','value'=>$material->value);
			
			
			
		if($model->year)
			$arrProperties[] = array('title'=>'Год сдачи:','value'=>$model->year);
			
		$zastroishik = Builder::model()->findByAttributes(array('en_title'=>$model->zastroishik)); 		
		if($zastroishik)
			$arrProperties[] = array('title'=>'Застройщик:','value'=>$zastroishik->title);
			
		$podryadchik = Builder::model()->findByAttributes(array('en_title'=>$model->podryadchik)); 		
		if($podryadchik)
			$arrProperties[] = array('title'=>'Подрядчик:','value'=>$podryadchik->title);
		
		
		$len = count($arrProperties);

		$firsthalfProperties = array_slice($arrProperties, 0, round($len / 2));
		$secondhalfProperties = array_slice($arrProperties, round($len / 2));
		
		$pdf->generate(
			$this->render('view_pdf',
				array(
					'model'=>$model,
					'firsthalfProperties'=>$firsthalfProperties,
					'secondhalfProperties'=>$secondhalfProperties,
				),
			true,true)
			,'laporan.pdf',false);

	}
	
	public function actionView()
	{
		$this->layout = '//layouts/landing';
		$model = $this->loadModel();
		$model->views++;
		$model->save();
		
		
		switch($model->type) {
			case 'flat': $type_string = 'Квартира'; break;
			case 'land': $type_string =  'Земельный участок'; break;
			case 'commercial': $type_string =  'Коммерческая недвижимость'; break;
			case 'new': $type_string =  'Новостройка'; break;
			case 'house': $type_string =  'Дом'; break;
		}
		switch($model->subtype) {
			case 'sale': $subtype_string = 'Продажа'; break;
			case 'rent': $subtype_string =  'Аренда'; break;
		}
		
		$this->property_title = $subtype_string.': '.$type_string.'. '.$model->title.' на сайте недвижимости DomScan';
		
		$arrProperties = array();
				
		$criteria = new CDbCriteria;		
		$criteria->offset = $offset;
		$criteria->addBetweenCondition('latitude', $model->latitude-0.0015, $model->latitude+0.0015);
		$criteria->addBetweenCondition('longitude', $model->longitude-0.0015, $model->longitude+0.0015);
	
		
		$condominium = Condominium::model()->find($criteria); 	
		
		//die(print_r($condominium, true));
			
		$arrProperties[] = array('title'=>'Тип:','value'=>$type_string);
			
		
		
		$district = City::model()->findByPk($model->city); 
		if($district) 
			$arrProperties[] = array('title'=>'Город:','value'=>$district->name);
			
		$district = District::model()->findByPk($model->district); 
		if($district) 
			$arrProperties[] = array('title'=>'Район:','value'=>$district->name);
		
		$arrProperties[] = array('title'=>'Адрес:','value'=>$model->address);
		
		$plan = OptionList::model()->findByAttributes(array('en_parent_name'=>'plan','en_option_name'=>$model->plan)); 
		if($plan)		
			$arrProperties[] = array('title'=>'Планировка:','value'=>$plan->value);
			
			
		if($model->square)
			$arrProperties[] = array('title'=>'Общая площадь:','value'=>$model->square.' м&#178;');
		if($model->square_living)
			$arrProperties[] = array('title'=>'Жилая площадь:','value'=>$model->square_living.' м&#178;');
		if($model->square_kitchen)
			$arrProperties[] = array('title'=>'Площадь кухни:','value'=>$model->square_kitchen.' м&#178;');
		if($model->square_land)
			$arrProperties[] = array('title'=>'Площадь участка:','value'=>$model->square_land.' м&#178;');
			
			
		if($model->ceiling_height)
			$arrProperties[] = array('title'=>'Высота потолка:','value'=>$model->ceiling_height.' м');
		
		if($model->floor || $model->top_floor):
			if($model->floor && $model->top_floor) {
				$arrProperties[] = array('title'=>'Этаж:','value'=>$model->floor.'/'.$model->top_floor);
			} else if(!$model->floor && $model->top_floor) {
				$arrProperties[] = array('title'=>'Этажей:','value'=>$model->top_floor);			
			}
		endif;
		
		$balcony = OptionList::model()->findByAttributes(array('en_parent_name'=>'balcony','en_option_name'=>$model->balcony)); 
        if($balcony)
			$arrProperties[] = array('title'=>'Балкон:','value'=>$balcony->value);
		$sanuzel = OptionList::model()->findByAttributes(array('en_parent_name'=>'sanuzel','en_option_name'=>$model->sanuzel)); 
        if($sanuzel)
			$arrProperties[] = array('title'=>'Санузел:','value'=>$sanuzel->value);
		$material = OptionList::model()->findByAttributes(array('en_parent_name'=>'material','en_option_name'=>$model->material)); 
		if($material)
			$arrProperties[] = array('title'=>'Материал стен:','value'=>$material->value);
			
			
			
		$material = OptionList::model()->findByAttributes(array('en_parent_name'=>'commercial_type','en_option_name'=>$model->commercial_type)); 
		if($material)
			$arrProperties[] = array('title'=>'Тип коммерческого объекта:','value'=>$material->value);
			
		$material = OptionList::model()->findByAttributes(array('en_parent_name'=>'commercial_business','en_option_name'=>$model->commercial_business)); 
		if($material)
			$arrProperties[] = array('title'=>'Тип бизнеса:','value'=>$material->value);
			
			
		if($model->year)
			$arrProperties[] = array('title'=>'Год сдачи:','value'=>$model->year);

		$zastroishik = Builder::model()->findByAttributes(array('en_title'=>$model->zastroishik)); 		
		if($zastroishik)
			$arrProperties[] = array('title'=>'Застройщик:','value'=>$zastroishik->title);
		$podryadchik = Builder::model()->findByAttributes(array('en_title'=>$model->podryadchik)); 		
		if($podryadchik)
			$arrProperties[] = array('title'=>'Подрядчик:','value'=>$podryadchik->title);

			
		$len = count($arrProperties);

		$firsthalfProperties = array_slice($arrProperties, 0, round($len / 2));
		$secondhalfProperties = array_slice($arrProperties, round($len / 2));
				
		
		$special = Estate::model()->findAllByAttributes(array('special'=>true,'sold'=>false,'type'=>$model->type, 'city'=>$model->city, 'subtype'=>$model->subtype), array(
			'condition' => 'id != '.$model->id,
		    'order' => 'ABS('.$model->cost.' - cost) asc',
		    'limit' => 4
		));
		
		$this->render('view',array(
			'model'=>$model,
			'special'=>$special,
			'condominium'=>$condominium,
			'firsthalfProperties'=>$firsthalfProperties,
			'secondhalfProperties'=>$secondhalfProperties,
		));
	}

	public function actionAjaxDeleteImage()
	{
		$this->checkPermissions(array('admin','manager'));
		
		if(Yii::app()->request->isAjaxRequest){
			$imageId = $_POST['imageId'];
			$articleId = $_POST['objectId'];
			if (EstateImage::deleteImage($imageId, $articleId))
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
			if (EstateImage::chooseImageFileAsMain($imageId, $articleId))
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
			if (EstateImage::deleteAllImages($articleId))
				echo (true);
			else
				echo (false);
			Yii::app()->end();
		}
	}
	
	public function actionCreate()
	{
		$this->checkPermissions(array('admin','manager'));
		
		$model=new Estate;
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

		if(isset($_POST['Estate']))
		{
			$model->attributes=$_POST['Estate'];
			$images = $_POST['Images'];

		
			$string = mb_strtolower($model->title, 'UTF-8');; 
			$string = trim($string);
			//$string = mb_strtolower($string);
		
			$model->slug = strtr($string, $converter); 
		
			$tour=CUploadedFile::getInstance($model,'upload_pano');
			//print_r($model->tour);print_r($model->tour->name);
			//return true;
			if($tour):
				$model->tour='/uploads/panoramas/'.$model->id.'_'.$tour->name;
			endif; 
			
				$cache=new CDbCache();
				$cache->flush();
			
			if($this->saveEntry($model, $images)) {
				if($tour):
					$tour->saveAs(dirname(Yii::app()->request->scriptFile).'/uploads/panoramas/'.$model->id.'_'.$tour->name);					
				endif;
				$this->redirect(array('objects/type/'.$model->type));
			}

		}



		//$this->render('create',array(
		//	'model'=>$model, 'type_config'=>$type_config
		//));
		
		$this->layout = 'main';
		$this->render('//cabinet/administrator_add2',array(
			'model'=>$model, 'type_config'=>$type_config, 'fields_main'=>$fields_main, 'fields_sub'=>$fields_sub, 'images'=>$images, 'objects_loaded_type' => $objects_loaded_type
		));
	}

	public function actionUpdate()
	{
	
		$this->checkPermissions(array('admin','manager'));
		/*if(!Yii::app()->user->can('manage')) {
			$this->redirect('/user/auth');
			Yii::app()->end();
		}*/
		$model=$this->loadModel();
		
		
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
				
		$validation_error = false;
		$type_config=EstateConfig::model()->findByAttributes(array('type'=> $model->type));
		$this->objects_loaded_type = $model->type;
		
		$images = $model->attached_images;
		
		
		$fields_main = EstateConfigNew::model()->findAllByAttributes(array('type_'.$model->type => true, 'parent'=>'', 'block' => 'main'),array('order'=>'sorting ASC'));
		$fields_sub = EstateConfigNew::model()->findAllByAttributes(array('type_'.$model->type => true,'parent'=>'', 'block' => 'sub'),array('order'=>'sorting ASC'));
		
		$converter = ConverterHelper::GetTransliteration();
		
		
	//	echo strlen($model->seller_phone); // 6
		$model->seller_phone = preg_replace("/[^0-9]/","",$model->seller_phone);
		if(strlen($model->seller_phone) < 17 && strlen($model->seller_phone) > 0) {
		
			$s = $model->seller_phone;
			$rx = "/
			    (1)?\D*     # optional country code
			    (\d{3})?\D* # optional area code
			    (\d{3})\D*  # first three
			    (\d{2})     # last four
			    (\d{2})     # last four
			    (?:\D+|$)   # extension delimiter or EOL
			    (\d*)       # optional extension
			/x";
			preg_match($rx, $s, $matches);
			if(!isset($matches[0])) return false;
			
			$country = $matches[1];
			$area = $matches[2];
			$three = $matches[3];
			$four = $matches[4];
			$five = $matches[5];
			$ext = $matches[6];
			
			$out = "$three-$four-$five";
			if(!empty($area)) 
				$out = "$area $out"; 
			else 
				$out = "(391) $out";
			if(!empty($country)) 
				$out = "+$country$out";
			else
				$out = "+7$out";
			if(!empty($ext)) $out .= "x$ext";
			$model->seller_phone = $out;
		}
//		die($model->seller_phone);

		$this->performAjaxValidation($model);

		if(isset($_POST['Estate']))
		{
			$model->attributes=$_POST['Estate'];
			$images = $_POST['Images'];
		
			$string = mb_strtolower($model->title, 'UTF-8');; 
			$string = trim($string);
			//$string = mb_strtolower($string);
		
			$model->slug = strtr($string, $converter); 
			
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
				if($tour):
					@unlink(dirname(Yii::app()->request->scriptFile).$oldtour);
					$tour->saveAs(dirname(Yii::app()->request->scriptFile).'/uploads/panoramas/'.$model->id.'_'.$tour->name);					
				endif;
				
				$this->redirect(array('objects/type/'.$model->type));
			}
		}

	//	$this->render('update',array(

		$this->layout = 'main';
		$this->render('//cabinet/administrator_add2',array(
			'model'=>$model, 'type_config'=>$type_config, 'fields_main'=>$fields_main, 'fields_sub'=>$fields_sub, 'images'=>$images, 'objects_loaded_type' => $objects_loaded_type
		));
	}

	public function actionDelete()
	{
		$this->checkPermissions(array('admin','manager'));

		$model = $this->loadModel();
		EstateImage::deleteAllImages($model->id);	
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

	public function actionList()
	{
			$this->checkPermissions(array('admin','manager'));
		
			
			$objects_type = Yii::app()->request->getParam('type', 'flat');
			
			$reset = Yii::app()->request->getParam('reset');
			if($reset == 'true' || $reset == true) {		
				Yii::app()->user->setState('id_search_'.$objects_type, null);
				Yii::app()->user->setState('sold_search_'.$objects_type, null);
				Yii::app()->user->setState('subtype_search_'.$objects_type, null);
				Yii::app()->user->setState('square_range_'.$objects_type, null);
				Yii::app()->user->setState('price_range_'.$objects_type, null);
				Yii::app()->user->setState('user_'.$objects_type, null);
				Yii::app()->user->setState('city_id_'.$objects_type, null);
				Yii::app()->user->setState('builder_search_'.$objects_type, null);
				Yii::app()->user->setState('floors_search_'.$objects_type, null);
				Yii::app()->user->setState('rooms_search_'.$objects_type, null);
				Yii::app()->user->setState('address_search_'.$objects_type, null);
			}
			
			$current_page = (int)Yii::app()->request->getParam('page_id', 1);
		
			$offset = 25*($current_page-1);
			
			if(!in_array($objects_type, array('house','flat','new','commercial','land'))) {
				$objects_type = 'flat';
			}
		
		
			$criteria = new CDbCriteria;
			
			$id_search = Yii::app()->request->getParam('id_search');	
			
			if(isset($id_search)) {
			//	die($id_search);
				Yii::app()->user->setState('id_search_'.$objects_type, $id_search);
			} else
				$id_search = Yii::app()->user->getState('id_search_'.$objects_type);
				
			$id_search = trim($id_search);
						
			if(!$id_search){
			
				$sold_search = Yii::app()->request->getParam('sold_search');
				
				if(isset($sold_search)) {
					Yii::app()->user->setState('sold_search_'.$objects_type, $sold_search);
				} else
					$sold_search = Yii::app()->user->getState('sold_search_'.$objects_type);
				
				if($sold_search == '0' || $sold_search == '1'){
					$criteria->addInCondition('sold',array($sold_search));	
					
				}
				
				$subtype_search = Yii::app()->request->getParam('subtype_search');
			
				if(isset($subtype_search)) {
					Yii::app()->user->setState('subtype_search_'.$objects_type, $subtype_search);
				} else
					$subtype_search = Yii::app()->user->getState('subtype_search_'.$objects_type);
				
				if($subtype_search == 'sale' || $subtype_search == 'rent'){
					$criteria->addInCondition('subtype',array($subtype_search));	
					
				}
				
			
				$square_range =  Yii::app()->request->getParam('square_range');
		
				if(isset($square_range)) {
					Yii::app()->user->setState('square_range_'.$objects_type, $square_range);
				} else
					$square_range = Yii::app()->user->getState('square_range_'.$objects_type);
					
				$square_search = explode(';',$square_range);
				if(trim($square_range) && $square_search[1]) {
					
					$criteria->addCondition('square >= "'.$square_search[0].'" ');
					$criteria->addCondition('square <= "'.$square_search[1].'" ');
				}
				
				$price_range =  Yii::app()->request->getParam('price_range');
		
				if(isset($price_range)) {
					Yii::app()->user->setState('price_range_'.$objects_type, $price_range);
				} else
					$price_range = Yii::app()->user->getState('price_range_'.$objects_type);
					
				$price_search = explode(';',$price_range);
				if(trim($price_range) && $price_search[1]) {
					
					$criteria->addCondition('cost >= "'.$price_search[0].'" ');
					$criteria->addCondition('cost <= "'.$price_search[1].'" ');
				}
			
				$user = Yii::app()->request->getParam('user');
	
				if(isset($user)) {
					Yii::app()->user->setState('user_'.$objects_type, $user);
				} else
					$user = Yii::app()->user->getState('user_'.$objects_type);
				
				$user = trim($user);
				$user_id = SiteUser::model()->findByAttributes(array('email'=>$user));
				if($user_id) {
					$user_id = $user_id->id;
					$criteria->addInCondition('user_id',array($user_id));			
				} else {
				//	$criteria->addInCondition('user_id',array('-1'));
					
				}
				
				$criteria->addInCondition('type',array($objects_type));	
				
				
				$city_id = Yii::app()->request->getParam('city_search');
	
				if(isset($city_id)) {
					Yii::app()->user->setState('city_id_'.$objects_type, $city_id);
				} else
					$city_id = Yii::app()->user->getState('city_id_'.$objects_type);
					
				if(!$city_id) $city_id = 'all';
				if($city_id != 'all' && $city_id) {
					$criteria->addInCondition('city',array($city_id));			
				}
				
				$builder_search = Yii::app()->request->getParam('builder_search');
				
				if(isset($builder_search)) {
					Yii::app()->user->setState('builder_search_'.$objects_type, $builder_search);
				} else
					$builder_search = Yii::app()->user->getState('builder_search_'.$objects_type);
				
				if(!$builder_search) $builder_search = 'all';
				if($builder_search != 'all' && $builder_search) {
					$criteria->addInCondition('zastroishik',array($builder_search));			
				}
				
				//$criteria->addInCondition('type',array($objects_type));		
			
				$floors_search = Yii::app()->request->getParam('floors_search');
		
				if(isset($floors_search)) {
					Yii::app()->user->setState('floors_search_'.$objects_type, $floors_search);
				} else
					$floors_search = Yii::app()->user->getState('floors_search_'.$objects_type);
					
				$floors_search = trim($floors_search); 
				if($floors_search || $floors_search == '0') {
					$floors_tokens = explode(',', $floors_search);
					foreach($floors_tokens as &$floor) {
						$floor = (int)$floor;
					}
					$criteria->addInCondition('floor',$floors_tokens);
				}
				
				$rooms_search = Yii::app()->request->getParam('rooms_search');
			
				if(isset($rooms_search)) {
					Yii::app()->user->setState('rooms_search_'.$objects_type, $rooms_search);
				} else
					$rooms_search = Yii::app()->user->getState('rooms_search_'.$objects_type);
					
				$rooms_search = trim($rooms_search); 
				if($rooms_search) {
					$rooms_tokens = explode(',', $rooms_search);
					foreach($rooms_tokens as &$room) {
						$room = (int)$room;
					}
					$criteria->addInCondition('rooms',$rooms_tokens);
				}
				
				$address_search = Yii::app()->request->getParam('address_search');
			
				if(isset($address_search)) {
					Yii::app()->user->setState('address_search_'.$objects_type, $address_search);
				} else
					$address_search = Yii::app()->user->getState('address_search_'.$objects_type);
					
				$criteria->addSearchCondition('address', $address_search,true,'AND');
			} else {		
				$id_search = explode(',', $id_search);
				$criteria->addInCondition('id',$id_search);		
				$id_search = implode(',', $id_search);		
			}
		
			$criteria->order = ('id DESC');
			
			$model_count = Estate::model()->count(
				$criteria
				); 
				
			$criteria->offset = $offset;
			$criteria->limit = 25;
			
			$model = Estate::model()->findAll(
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
			'sold_search'=>$sold_search,
			'floors_search'=>$floors_search,
			'rooms_search'=>$rooms_search,
			'id_search'=>$id_search,
			'user_search'=>$user,
			'price_range'=>$price_range,
			'square_range'=>$square_range,
			'subtype_search'=>$subtype_search,
			'builder_search'=>$builder_search,
		));
	}


	protected function saveEntry($object, $images)
	{
		$transaction = $object->dbConnection->beginTransaction();
			try {
				if($object->save()) {
					if (isset($images))
						EstateImage::saveImages($images, $object->id, 'Estate');
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
				$this->_model=Estate::model()->findbyPk($_GET['id']);
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
