<?php

class AnalyticsController extends Controller
{
	public $layout='//layouts/admin_template';
	public $objects_loaded_type = false;
	private $_model;
	public $banner = 'all-news-section_top_1170-90';

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
				'actions'=>array('index','create','update','admin','delete','view','list'),
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

	public function actionAdmin()
	{

		$this->checkPermissions(array('admin'));
		
		$current_page = (int)Yii::app()->request->getParam('page_id', 1);
		$offset = 15*($current_page-1);
			
		$criteria = new CDbCriteria;
		
		$criteria->order = ('datepublish DESC');
			
		$model_count = Analytics::model()->count(
			$criteria
		); 
					
		$criteria->offset = $offset;
		$criteria->limit = 15;
			
		$model = Analytics::model()->findAll($criteria); 
				
		$count = $model_count;
		$page_count = ceil($count/15);
		
		$this->render('admin',array(
			'model'=>$model, 
			'entries_count'=>$count, 
			'page_count' => $page_count,
			'current_page' => $current_page,

		));
	}


	public function actionView()
	{
		$this->banner = 'all-news-pages_top_1170-90';
		$this->layout = '//layouts/landing';
		$model = $this->loadModel();		
		
		if($model->seo_description) {
			$this->pageDescriptionOverride = true;
			$this->pageDescription = $model->seo_description;
		}		
		
		$this->render('//news/view',array(
			'model'=>$model, 'pagination_url'=>'/analytics', 'title'=>'Аналитика', 'show_menu'=>false
		));
	}

	public function saveImage($model) 
	{
		if($model->save()){	
			$uploaded_file=CUploadedFile::getInstance($model,'photo');
			if($uploaded_file) {
				$checkdir = dirname(Yii::app()->request->scriptFile).'/uploads/analytics/';
				if (!is_dir($checkdir)) {
					mkdir($checkdir);
				}
				$fileextension = CFileHelper::getExtension($uploaded_file->getName());
				//$filename = $model->s_image->getName();				
				$filename = $model->getPrimaryKey();				
				@unlink(dirname(Yii::app()->request->scriptFile).$model->photo);
				$uploaded_file->saveAs(dirname(Yii::app()->request->scriptFile).'/uploads/analytics/'.$filename.'_image.'.$fileextension);
				
				$model->photo = '/uploads/analytics/'.$filename.'_image.'.$fileextension; 							
				
				$magicianObj = new imageLib(dirname(Yii::app()->request->scriptFile).$model->photo);
				$magicianObj -> resizeImage(370, 180, 'crop',true);
				$magicianObj -> saveImage(dirname(Yii::app()->request->scriptFile).$model->photo);	
			}	
		}	
		return $model;	
	}

	
	public function actionCreate()
	{
		$this->checkPermissions(array('admin','manager'));
		$_SESSION['KCFINDER']['disabled'] = false; // enables the file browser in the admin
		$_SESSION['KCFINDER']['uploadURL'] = Yii::app()->baseUrl."/uploads/"; // URL for the uploads folder
		$_SESSION['KCFINDER']['uploadDir'] = Yii::app()->basePath."/../uploads/"; // path to the uploads folder
		
		$model=new Analytics;
		
		
		$this->performAjaxValidation($model);
		
		$converter = array( 
		' ' => '_', '.' =>'', ',' =>'', '#' => '', '№'=> '', '-' =>'_','–' =>'_',
		'а' => 'a', 'б' => 'b', 'в' => 'v', 
		'г' => 'g', 'д' => 'd', 'е' => 'e', 
		'ё' => 'e', 'ж' => 'zh', 'з' => 'z', 
		'и' => 'i', 'й' => 'y', 'к' => 'k', 
		'л' => 'l', 'м' => 'm', 'н' => 'n', 
		'о' => 'o', 'п' => 'p', 'р' => 'r', 
		'с' => 's', 'т' => 't', 'у' => 'u', 
		'ф' => 'f', 'х' => 'h', 'ц' => 'c', 
		'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 
		'ь' => '', 'ы' => 'y', 'ъ' => '', 
		'э' => 'e', 'ю' => 'yu', 'я' => 'ya'); 

		if(isset($_POST['Analytics']))
		{
			$model->attributes=$_POST['Analytics'];
			
			
			$model = $this->saveImage($model);
		
			$string = mb_strtolower($model->title, 'UTF-8');; 
			$string = trim($string);
			
			//$string = mb_strtolower($string);
		
			$string = strtr($string, $converter); 
			$model->en_title = preg_replace('/[^A-Za-z0-9\-_]/', '', $string);
		
						//print_r($model->tour);print_r($model->tour->name);
			$cache=new CDbCache();
			$cache->flush();
			
			if($model->save()) {
				$this->redirect(array('analytics/'.$model->id));
			}

		}


		$this->render('create',array(
			'model'=>$model, 'type_config'=>$type_config
		));
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
	

		
		
		$converter = array( 
		' ' => '_', '.' =>'', ',' =>'', '#' => '', '№'=> '', '-' =>'_','–' =>'_',
		'а' => 'a', 'б' => 'b', 'в' => 'v', 
		'г' => 'g', 'д' => 'd', 'е' => 'e', 
		'ё' => 'e', 'ж' => 'zh', 'з' => 'z', 
		'и' => 'i', 'й' => 'y', 'к' => 'k', 
		'л' => 'l', 'м' => 'm', 'н' => 'n', 
		'о' => 'o', 'п' => 'p', 'р' => 'r', 
		'с' => 's', 'т' => 't', 'у' => 'u', 
		'ф' => 'f', 'х' => 'h', 'ц' => 'c', 
		'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 
		'ь' => '', 'ы' => 'y', 'ъ' => '', 
		'э' => 'e', 'ю' => 'yu', 'я' => 'ya'); 



		$this->performAjaxValidation($model);

		if(isset($_POST['Analytics']))
		{
			$model->attributes=$_POST['Analytics'];

		
			$string = mb_strtolower($model->title, 'UTF-8');; 
			$string = trim($string);
			//$string = mb_strtolower($string);
		
		
			$string = strtr($string, $converter); 
			$model->en_title = preg_replace('/[^A-Za-z0-9\-_]/', '', $string);
			
						
			$cache=new CDbCache();
			$cache->flush();


			$model = $this->saveImage($model);
			
			if($model->save()) {
			//	$this->redirect(array('Analytics/'.$model->id));
			}
		}

		$this->render('update',array(
			'model'=>$model, 'type_config'=>$type_config, 'images'=>$images, 'objects_loaded_type' => $objects_loaded_type
		));
	}

	public function actionDelete()
	{
		$this->checkPermissions(array('admin','manager'));

		$model = $this->loadModel();
		$model->delete();

		if(!isset($_GET['ajax']))
			$this->redirect($_SERVER['HTTP_REFERER']);
	
	}

	public function actionIndex()
	{
		$this->layout = '//layouts/landing';
		
		$date['date_start'] = '1014-12-01';
		$date['date_end'] = '3014-12-31';
		
		$selected_year = Yii::app()->request->getParam('y');
		$selected_month = Yii::app()->request->getParam('m');
		
		if($selected_year && $selected_month) {			
			$date['date_start'] = $selected_year.'-'.$selected_month.'-01';
			$date['date_end'] = $selected_year.'-'.$selected_month.'-31';
		}
		
		$current_page = Yii::app()->request->getParam('page','1');
		
		$attribs = array();
		$criteria = new CDbCriteria(array('order'=>'datepublish DESC'));
		$criteria->addBetweenCondition('datepublish', $date['date_start'], $date['date_end']);
		$count = Analytics::model()->countByAttributes($attribs, $criteria);
		$criteria->limit = 8;
		$criteria->offset = $criteria->limit * ($current_page-1);
		$page_count = $count / $criteria->limit;
			
		$model = Analytics::model()->findAllByAttributes($attribs, $criteria);
		//(array('datepublish'=>''),array('order'=>'datepublish DESC'));
		$this->render('//news/index',array(
			'news_list'=>$model, 'page_count'=>$page_count, 'pagination_url'=>'/analytics', 'current_page'=>$current_page, 'title'=>'Аналитика', 'show_menu'=>false));
	}
	
	public function loadModel()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
				$this->_model=Analytics::model()->findbyPk($_GET['id']);
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
