<?php

class SliderController extends Controller
{
	public $defaultAction='index';
	public $layout='admin_template';
	private $_model;


	/**
	 * @return array action filters
	 */
	public function filters()
	{
		return array(
			'accessControl', // perform access control for CRUD operations
		);
	}
	
	public function accessRules()
	{
		//в этом массиве перечисляем методы доступ к которым разрешен
		//пользовалям
		return array(
			//array('allow',  // для гостей
				//'actions'=>array('list','show','archive'),
				//'users'=>array('*'),
			//),
			//array('allow', // для администратора (убрали из списка 'create', т.о. заблокировали эту операцию)
				//'actions'=>array('update'),
				//'users'=>array('@'),
			//),
			array('allow', // для администратора
				'actions'=>array('index','admin','delete','create','update'),
				'users'=>array('@'),
			),
			array('deny',  // deny all users
				'actions'=>array('index','admin','delete','create','update'),
				'users'=>array('*'),
			),
		);
	}
	
	/**
	 * Declares class-based actions.
	 */
	public function actions()
	{
		return array(
			// captcha action renders the CAPTCHA image displayed on the contact page
			'captcha'=>array(
				'class'=>'CCaptchaAction',
				'backColor'=>0xFFFFFF,
			),
			// page action renders "static" pages stored under 'protected/views/site/pages'
			// They can be accessed via: index.php?r=site/page&view=FileName
			'page'=>array(
				'class'=>'CViewAction',
			),
		);
	}

	/**
	 * This is the default 'index' action that is invoked
	 * when an action is not explicitly requested by users.
	 */
	public function actionIndex()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		$this->redirect('/');
	}
	
	public function actionSort()
	{
		$this->checkPermissions(array('admin','manager'));
	    if (isset($_POST['items']) && is_array($_POST['items'])) {
	        $i = 0;
	        foreach ($_POST['items'] as $item) {
	            $slide = SliderItem::model()->findByPk($item);
	            $slide->sortOrder = $i;
	            $slide->save();
	            $i++;
	        }
	    }
	}

	
	public function actionAdmin()
	{
		$this->checkPermissions(array('admin','manager'));
		$model = SliderItem::model()->findAllByAttributes(array(),array('order'=>'sortOrder ASC')); 
		
		$this->render('admin',array(
			'model'=>$model,
		));
	}
	
	public function saveImage($model,$oldfilename) 
	{
		$model->photo = urldecode($model->photo);
		if($model->save()){	
			if(file_exists(dirname(Yii::app()->request->scriptFile).$model->photo)) {
				if($model->photo != $oldfilename) {
						$checkdir = dirname(Yii::app()->request->scriptFile).'/uploads/slider/';
						if (!is_dir($checkdir)) {
							mkdir($checkdir);
						}
						$fileextension = CFileHelper::getExtension(dirname(Yii::app()->request->scriptFile).$model->photo);
						//$filename = $model->s_image->getName();				
						$filename = $model->getPrimaryKey();				
												
						$cached_image = $model->photo;	
												
						$model->photo = '/uploads/slider/'.$filename.'_image.'.$fileextension; 	
						
						$model->datepublish = date('Y-m-d');						
						
						$magicianObj = new imageLib(dirname(Yii::app()->request->scriptFile).$cached_image);
						$magicianObj -> resizeImage(1920, 480, 'crop',true);
						$magicianObj -> saveImage(dirname(Yii::app()->request->scriptFile).$model->photo);	
				}
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
		$model=new SliderItem;
		//получаем список жанров
		//$types = Types::model()->findAll();
		//если получены данные игры
		if(isset($_POST['SliderItem']))
		{
			//записываем атрибуты
			$model->attributes=$_POST['SliderItem'];
			
			$model = $this->saveImage($model,'');
			
			$model->sortOrder = 100;

			//сохраняем игру
			//$model->save();
			if($model->save()) {
				$this->redirect(array('admin'));				
			}
		}
		//показываем форму
		$this->render('create',array('model'=>$model));//, 'types'=>$types));
	}


	public function actionDelete()
	{
		$this->checkPermissions(array('admin','manager'));
		//if(Yii::app()->request->isPostRequest)
		//{			
			$model=$this->loadModel();
			// we only allow deletion via POST request

			@unlink(dirname(Yii::app()->request->scriptFile).$model->photo);
			$model->delete();
			

			// if AJAX request (triggered by deletion via admin grid view), we should not redirect the browser
			if(!isset($_GET['ajax']))
				$this->redirect(array('admin'));
		//}
		//else
		//	throw new CHttpException(400,'Invalid request. Please do not repeat this request again.');
	}

	public function actionUpdate()
	{
		$this->checkPermissions(array('admin','manager'));
		$_SESSION['KCFINDER']['disabled'] = false; // enables the file browser in the admin
		$_SESSION['KCFINDER']['uploadURL'] = Yii::app()->baseUrl."/uploads/"; // URL for the uploads folder
		$_SESSION['KCFINDER']['uploadDir'] = Yii::app()->basePath."/../uploads/"; // path to the uploads folder
		$model=$this->loadModel();
		$oldfilename = $model->photo;
		

		if(isset($_POST['SliderItem']))
		{
			//записываем атрибуты
			$model->attributes=$_POST['SliderItem'];
			
			$model = $this->saveImage($model,$oldfilename);

			if($model->save())
				$this->redirect(array('admin'));
		}
		//показываем форму
		$this->render('update',array('model'=>$model));//, 'types'=>$types));
	}

	public function loadModel()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
			{
				$condition='';
				$this->_model=SliderItem::model()->findByPk($_GET['id'], $condition);
			}
			if($this->_model===null)
				throw new CHttpException(404,'The requested page does not exist.');
		}
		return $this->_model;
	}
	
}