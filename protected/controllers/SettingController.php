<?php

class SettingController extends Controller
{
	public $layout='//layouts/admin_template';
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
				'actions'=>array('index','create','update','admin','delete','view'),
				'users'=>array('*'),
			),
			array('allow', 
				'actions'=>array('create','update','updatemenu','updateobjectsnew','settinglist','migrate','updatebank','createbank','deletebank'),
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

	public function actionView()
	{
		$this->redirect('/');
	}

	public function actionCreate()
	{
	
		$this->checkPermissions(array('admin'));
		$model=new Setting;

		$this->performAjaxValidation($model);

		if(isset($_POST['Setting']))
		{
			$model->attributes=$_POST['Setting'];
		

			if($model->save())
				$this->redirect(array('admin'));
		}

		$this->render('create',array(
			'model'=>$model,
		));
	}

	public function actionUpdate()
	{
	
		$this->checkPermissions(array('admin'));
		$model=$this->loadModel();

		$this->performAjaxValidation($model);

		if(isset($_POST['Setting']))
		{
			$model->attributes=$_POST['Setting'];
		
			if($model->save())
				$this->redirect(array('admin'));
		}

		$this->render('update',array(
			'model'=>$model,
		));
	}
	
	public function actionMigrate()
	{
		$this->checkPermissions(array('admin'));
		
		
		$table = Yii::app()->db->schema->getTable('real_estate');
		if(!isset($table->columns['create_time'])) {
		    echo "Column create_time doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_estate', 'create_time', 'DATETIME');
		} else {
			echo 'column create_time exists!<br>';
		}
		
		
		$table = Yii::app()->db->schema->getTable('real_static_pages');
		if(!isset($table->columns['seo_title'])) {
		    echo "Column seo_title doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_static_pages', 'seo_title', 'TEXT');
		} else {
			echo 'column seo_title exists!<br>';
		}
		if(!isset($table->columns['seo_description'])) {
		    echo "Column seo_description doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_static_pages', 'seo_description', 'TEXT');
		} else {
			echo 'column seo_description exists!<br>';
		}
		
		
		
		$table = Yii::app()->db->schema->getTable('real_news');
		if(!isset($table->columns['seo_title'])) {
		    echo "Column seo_title doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_news', 'seo_title', 'TEXT');
		} else {
			echo 'column seo_title exists!<br>';
		}
		if(!isset($table->columns['seo_description'])) {
		    echo "Column seo_description doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_news', 'seo_description', 'TEXT');
		} else {
			echo 'column seo_description exists!<br>';
		}
		
		
		
		$table = Yii::app()->db->schema->getTable('real_articles');
		if(!isset($table->columns['seo_title'])) {
		    echo "Column seo_title in real_articles doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_articles', 'seo_title', 'TEXT');
		} else {
			echo 'column seo_title in real_articles exists!<br>';
		}
		if(!isset($table->columns['seo_description'])) {
		    echo "Column seo_description in real_articles doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_articles', 'seo_description', 'TEXT');
		} else {
			echo 'column seo_description in real_articles exists!<br>';
		}
		
		
		
		$table = Yii::app()->db->schema->getTable('real_guides');
		if(!isset($table->columns['seo_title'])) {
		    echo "Column seo_title in real_guides doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_guides', 'seo_title', 'TEXT');
		} else {
			echo 'column seo_title in real_guides exists!<br>';
		}
		if(!isset($table->columns['seo_description'])) {
		    echo "Column seo_description in real_guides doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_guides', 'seo_description', 'TEXT');
		} else {
			echo 'column seo_description in real_guides exists!<br>';
		}
		
		
		$table = Yii::app()->db->schema->getTable('real_reviews');
		if(!isset($table->columns['seo_title'])) {
		    echo "Column seo_title in real_reviews doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_reviews', 'seo_title', 'TEXT');
		} else {
			echo 'column seo_title in real_reviews exists!<br>';
		}
		if(!isset($table->columns['seo_description'])) {
		    echo "Column seo_description in real_reviews doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_reviews', 'seo_description', 'TEXT');
		} else {
			echo 'column seo_description in real_reviews exists!<br>';
		}
		
		
		$table = Yii::app()->db->schema->getTable('real_analytics');
		if(!isset($table->columns['seo_title'])) {
		    echo "Column seo_title in real_analytics doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_analytics', 'seo_title', 'TEXT');
		} else {
			echo 'column seo_title in real_analytics exists!<br>';
		}
		if(!isset($table->columns['seo_description'])) {
		    echo "Column seo_description in real_analytics doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_analytics', 'seo_description', 'TEXT');
		} else {
			echo 'column seo_description in real_analytics exists!<br>';
		}
		

		
		
		$table = Yii::app()->db->schema->getTable('real_estate');
		if(!isset($table->columns['parent_condo_id'])) {
		    echo "Column parent_condo_id doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_estate', 'parent_condo_id', 'INT(11)');
		} else {
			echo 'column parent_condo_id exists!<br>';
		}
		
		if(Yii::app()->db->schema->getTable('real_podryadchiki_to_condos'))
			echo 'real_podryadchiki_to_condos ok<br>';
		else {
			echo 'real_podryadchiki_to_condos not ok<br>';
		//	Yii::app()->db->schema->createTable('real_podryadchiki_to_condos',array('id'=>'pk','builder_id'=>'INT(11)','condo_id'=>'INT(11)'), 'ENGINE=InnoDB');
			Yii::app()->db->createCommand("CREATE TABLE real_podryadchiki_to_condos( id INT(11) NOT NULL AUTO_INCREMENT, condo_id INT(11) NOT NULL, builder_id INT(11) NOT NULL, PRIMARY KEY (id) ); ")->execute();
			
		}
		
		
		$table = Yii::app()->db->schema->getTable('real_builders');
		if(!isset($table->columns['correction'])) {
		    echo "Column correction doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_builders', 'correction', 'FLOAT');
		} else {
			echo 'column correction exists!<br>';
		}
		
		
		$criteria = new CDbCriteria;
		$criteria->condition = 'parent_condo_id is NULL';
		$items_prepare = Estate::model()->findAll($criteria);
		foreach($items_prepare as $single) {
			$condo = $single->getCondos();
				
			if($condo) {
				$condo = $condo[0];
				$single->parent_condo_id = $condo->id;
			} else {
				$single->parent_condo_id = 0;
			}
			$single->save();
		}
		
				
		$table = Yii::app()->db->schema->getTable('real_condo');
		if(!isset($table->columns['condo_type'])) {
		    echo "Column condo_type doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_condo', 'condo_type', 'TEXT');
		} else {
			echo 'column condo_type exists!<br>';
		}
		if(!isset($table->columns['podryadchik'])) {
		    echo "Column podryadchik doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_condo', 'podryadchik', 'TEXT');
		} else {
			echo 'column podryadchik exists!<br>';
		}
		
		
		if(!isset($table->columns['all_rooms'])) {
		    echo "Column all_rooms doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_condo', 'all_rooms', 'FLOAT');
		} else {
			echo 'column all_rooms exists!<br>';
		}
		
		
		if(!isset($table->columns['all_squares'])) {
		    echo "Column all_squares doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_condo', 'all_squares', 'FLOAT');
		} else {
			echo 'column all_squares exists!<br>';
		}
		
		
		
		if(!isset($table->columns['use_data'])) {
		    echo "Column use_data doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_condo', 'use_data', 'TINYINT');
		} else {
			echo 'column use_data exists!<br>';
		}
		
		$table = Yii::app()->db->schema->getTable('real_builders');
		if(!isset($table->columns['auto_rating'])) {
		    echo "Column auto_rating doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_builders', 'auto_rating', 'FLOAT');
		} else {
			echo 'column auto_rating exists!<br>';
		}
		if(!isset($table->columns['old_rating'])) {
		    echo "Column old_rating doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_builders', 'old_rating', 'FLOAT');
		} else {
			echo 'column old_rating exists!<br>';
		}
		if(!isset($table->columns['date_rating'])) {
		    echo "Column date_rating doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_builders', 'date_rating', 'DATE');
		} else {
			echo 'column date_rating exists!<br>';
		}
		if(!isset($table->columns['square_sdano'])) {
		    echo "Column square_sdano doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_builders', 'square_sdano', 'FLOAT');
		} else {
			echo 'column square_sdano exists!<br>';
		}
		if(!isset($table->columns['square_building'])) {
		    echo "Column square_building doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_builders', 'square_building', 'FLOAT');
		} else {
			echo 'column square_building exists!<br>';
		}
		if(!isset($table->columns['sdano_pomesch'])) {
		    echo "Column sdano_pomesch doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_builders', 'sdano_pomesch', 'FLOAT');
		} else {
			echo 'column sdano_pomesch exists!<br>';
		}
		if(!isset($table->columns['building_pomesch'])) {
		    echo "Column building_pomesch doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_builders', 'building_pomesch', 'FLOAT');
		} else {
			echo 'column building_pomesch exists!<br>';
		}
		
			
		$table = Yii::app()->db->schema->getTable('real_estate');
		if(!isset($table->columns['podryadchik'])) {
		    echo "Column podryadchik doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_estate', 'podryadchik', 'TEXT');
		    
		    $model = new EstateConfigNew;
		    $model->name = 'Подрядчик:';
		    $model->slug = 'podryadchik';
		    $model->type_new = 1;
		    $model->type_flat = 0;
		    $model->type_house = 1;
		    $model->type_land = 0;
		    $model->type_commercial = 0;
		    $model->method = 'dropdown';
		    $model->block = 'sub';
		    $model->sorting = 2;
		    $model->admin = 1;
		    $model->save();
		    
		} else {
			echo 'column podryadchik exists!<br>';
		}
		
		
		
		
		if(Yii::app()->db->schema->getTable('real_builders_rating'))
			echo 'real_builders_rating ok';
		else {
			echo 'real_builders_rating not ok';
		//	Yii::app()->db->schema->createTable('real_podryadchiki_to_condos',array('id'=>'pk','builder_id'=>'INT(11)','condo_id'=>'INT(11)'), 'ENGINE=InnoDB');
			Yii::app()->db->createCommand("
				CREATE TABLE IF NOT EXISTS `real_builders_rating` (
				`id` int(11) NOT NULL,
				  `builder_id` int(11) NOT NULL,
				  `rating` float NOT NULL,
				  `date` date NOT NULL,
				  `square_sdano` float NOT NULL,
				  `square_building` float NOT NULL,
				  `sdano_pomesch` float NOT NULL,
				  `building_pomesch` float NOT NULL,
				  `condo_sdano` float NOT NULL,
				  `condo_stroitsya` float NOT NULL
				)")->execute();
			
		}
		
		
		
		$table = Yii::app()->db->schema->getTable('real_builders');
		if(!isset($table->columns['correction'])) {
		    echo "Column correction doesn't exist, creating<br>";
		    $success = Yii::app()->db->createCommand()->addColumn('real_builders', 'correction', 'FLOAT');
		} else {
			echo 'column correction exists!<br>';
		}
		
		
	}

	public function actionUpdatemenu()
	{
		$this->checkPermissions(array('admin'));
		
		if($model===null)
		{
			if(isset($_GET['id']))
				$model=Menu::model()->findbyPk($_GET['id']);
			if($model===null)
				throw new CHttpException(404, Yii::t('app', 'The requested menu does not exist.'));
		}

		$this->performAjaxValidation($model);

		if(isset($_POST['Menu']))
		{
			$model->attributes=$_POST['Menu'];
		
			
			if (isset($_POST['urls'])) {
				$i = 0;
				$helperArray = array();
				foreach($_POST['urls'] as $key => $value)
				{ 
			//		echo $i;
					$helperArray[] = array(/*'title'=>$value,*/'url'=> $_POST['urls'][$i]);
					$i++;
				}
				

				$model->value = serialize($helperArray);
			}

			if($model->save())
				$this->redirect(array('admin'));
		}

		$this->render('updatemenu',array(
			'model'=>$model,
		));
	}
	
	
	public function actionUpdateobjects()
	{
		$this->checkPermissions(array('admin'));
		
		if($model===null)
		{
			if(isset($_GET['id']))
				$model=EstateConfig::model()->findbyPk($_GET['id']);
			if($model===null)
				throw new CHttpException(404, Yii::t('app', 'The requested object does not exist.'));
		}

		$this->performAjaxValidation($model);

		if(isset($_POST['EstateConfig']))
		{
			$model->attributes=$_POST['EstateConfig'];

			if($model->save())
				$this->redirect(array('admin'));
		}

		$this->render('updateobjects',array(
			'model'=>$model,
		));
	}
	
	public function actionUpdateobjectsnew()
	{
		$this->checkPermissions(array('admin'));
		
		if($model===null)
		{
			if(isset($_GET['id']))
				$model=EstateConfigNew::model()->findbyPk($_GET['id']);
			if($model===null)
				throw new CHttpException(404, Yii::t('app', 'The requested object does not exist.'));
		}

		$this->performAjaxValidation($model);

		if(isset($_POST['EstateConfigNew']))
		{
			$model->attributes=$_POST['EstateConfigNew'];

			if($model->save())
				$this->redirect(array('settinglist'));
		}

		$this->render('updateobjectsnew',array(
			'model'=>$model,
		));
	}
	
	
	public function actionCreatebank()
	{
		$this->checkPermissions(array('admin'));
		
		$model = new Bank();

		$this->performAjaxValidation($model);

		if(isset($_POST['Bank']))
		{
			$model->attributes=$_POST['Bank'];

			if($model->save()) {			
				$uploaded_file=CUploadedFile::getInstance($model,'image');
				if($uploaded_file) {
					//print_r($uploaded_file);
							$fileextension = CFileHelper::getExtension($uploaded_file->getName());
							//$filename = $model->s_image->getName();				
							$filename = $model->getPrimaryKey();				
							@unlink(dirname(Yii::app()->request->scriptFile).$model->image);
							$save_filename = '/uploads/banks/'.$filename.'_image.'.$fileextension;
							$uploaded_file->saveAs(dirname(Yii::app()->request->scriptFile).$save_filename);
							$model->image = $save_filename; 		
							
							
							$magicianObj = new imageLib(dirname(Yii::app()->request->scriptFile).$model->image);
							$magicianObj -> resizeImage(640, 50, 'portrait',true);
							$magicianObj -> saveImage(dirname(Yii::app()->request->scriptFile).$model->image);	
				}	
				
			
			}
			if($model->save())
				$this->redirect(array('admin'));
		}

		$this->render('updatebank',array(
			'model'=>$model,
		));
	}
	
	public function actionUpdatebank()
	{
		$this->checkPermissions(array('admin'));
		
		if($model===null)
		{
			if(isset($_GET['id']))
				$model=Bank::model()->findbyPk($_GET['id']);
			if($model===null)
				throw new CHttpException(404, Yii::t('app', 'The requested bank does not exist.'));
		}

		$this->performAjaxValidation($model);

		if(isset($_POST['Bank']))
		{
			$model->attributes=$_POST['Bank'];

			if($model->save()) {			
				$uploaded_file=CUploadedFile::getInstance($model,'image');
				if($uploaded_file) {
					//print_r($uploaded_file);
							$fileextension = CFileHelper::getExtension($uploaded_file->getName());
							//$filename = $model->s_image->getName();				
							$filename = $model->getPrimaryKey();				
							@unlink(dirname(Yii::app()->request->scriptFile).$model->image);
							$save_filename = '/uploads/banks/'.$filename.'_image.'.$fileextension;
							$uploaded_file->saveAs(dirname(Yii::app()->request->scriptFile).$save_filename);
							$model->image = $save_filename; 		
							
							
							$magicianObj = new imageLib(dirname(Yii::app()->request->scriptFile).$model->image);
							$magicianObj -> resizeImage(640, 50, 'portrait',true);
							$magicianObj -> saveImage(dirname(Yii::app()->request->scriptFile).$model->image);	
				}	
				
			
			}
			if($model->save())
				$this->redirect(array('admin'));
		}

		$this->render('updatebank',array(
			'model'=>$model,
		));
	}

	public function actionDeletebank()
	{
	
	
		$this->checkPermissions(array('admin'));
		
		if(isset($_GET['id']))
			$model=Bank::model()->findbyPk($_GET['id']);
		if($model===null)
			throw new CHttpException(404, Yii::t('app', 'The requested bank does not exist.'));
	

			@unlink(dirname(Yii::app()->request->scriptFile).$model->image);
			$model->delete();

			if(!isset($_GET['ajax']))
				$this->redirect(array('admin'));
	}
	
	public function actionDelete()
	{
		if(!Yii::app()->user->can('manage')) {
			$this->redirect('/user/auth');
			Yii::app()->end();
		}
		if(Yii::app()->request->isPostRequest)
		{
			$this->loadModel()->delete();

			if(!isset($_GET['ajax']))
				$this->redirect(array('index'));
		}
		else
			throw new CHttpException(400,
					Yii::t('app', 'Invalid request. Please do not repeat this request again.'));
	}

	public function actionIndex()
	{
		$this->redirect('/');
	}

	public function actionAdmin()
	{

		$this->checkPermissions(array('admin'));
		
		$model = Setting::model()->findAll(); 
		$banks = Bank::model()->findAll(); 
		$object_config = EstateConfig::model()->findAll(); 
		$menu = Menu::model()->findAll(); 
		$option_model = Option::model()->findAll(); 
		
		$this->render('admin',array(
			'model'=>$model,
			'banks'=>$banks,
			'menu'=>$menu,
			'options_model'=>$option_model,
			'object_config'=>$object_config

		));
	}

	public function actionSettinglist()
	{

		$this->checkPermissions(array('admin'));
		
		$fields_main = EstateConfigNew::model()->findAllByAttributes(array('block' => 'main'),array('order'=>'sorting ASC'));
		$fields_sub = EstateConfigNew::model()->findAllByAttributes(array('block' => 'sub'),array('order'=>'sorting ASC'));
		
		$this->render('settinglist',array(
			'fields_main'=>$fields_main,
			'fields_sub'=>$fields_sub

		));
	}
	
	public function loadModel()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
				$this->_model=Setting::model()->findbyPk($_GET['id']);
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
