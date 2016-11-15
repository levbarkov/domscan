<?php

class NovostroikiPagesController extends Controller
{
	public $defaultAction='index';
	public $layout='admin_template';
	private $_model;
	public $seoblock_name = 'novostroiki';


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
	public function actionView()
	{
	
	 	$this->layout='landing';
	
		$en_title = Yii::app()->request->getParam('en_title', '0');		
		$parent_id = Yii::app()->request->getParam('id', '0');
		//if (Yii::app()->request->getParam('region', '0') != '0')
		//	$this->redirect('http://hochumaiky.ru/page/'.Yii::app()->request->getParam('en_title', 0));

		
		$model = CondominiumStaticPage::model()->findByAttributes(array('parent_id' => $parent_id, 'en_title'=>$en_title));
		
		if (count($model) == 0)
				throw new CHttpException(404,'The requested page does not exist.');
				
		if($model->type != 'ipoteka') {
			//$max = Estate::model()->countByAttributes(array('special'=>true));
			//$offset = rand(0,$max);
			$specials = Estate::model()->findAllByAttributes(array('special'=>true,'city'=>$this->city_id) , array('order'=>'rand()', 'limit'=>'3'));
			
			$this->render('index',array('model'=>$model, 'specials'=>$specials));
		} else {
			
			$this->render('wide',array('model'=>$model));
		}
		
	}

	public function actionAdmin()
	{
		$this->checkPermissions(array('admin','manager'));
		
		$parent_id = Yii::app()->request->getParam('id', '0');
		
		$condo = Condominium::model()->findByPk($parent_id);
		if (!$condo)
			throw new CHttpException(404,'The requested page does not exist.');
		
		$model = CondominiumStaticPage::model()->findAllByAttributes(array('parent_id'=>$parent_id)); 
		
		$this->render('admin',array(
			'model'=>$model, 'condo' => $condo
		));
	}
	
	
	public function actionCreate()
	{
		$this->checkPermissions(array('admin','manager'));
		
		$_SESSION['KCFINDER']['disabled'] = false; // enables the file browser in the admin
		$_SESSION['KCFINDER']['uploadURL'] = Yii::app()->baseUrl."/uploads/"; // URL for the uploads folder
		$_SESSION['KCFINDER']['uploadDir'] = Yii::app()->basePath."/../uploads/"; // path to the uploads folder
		$model=new CondominiumStaticPage;

		$id = Yii::app()->request->getParam('id', '0');
		
		$model->parent_id = $id;
		//получаем список жанров
		//$types = Types::model()->findAll();
		//если получены данные игры
		if(isset($_POST['CondominiumStaticPage']))
		{
			//записываем атрибуты
			$model->attributes=$_POST['CondominiumStaticPage'];
			
			//сохраняем игру
			//$model->save();
			if($model->save())
				$this->redirect($model->pageListURL());
		}
		//показываем форму
		$this->render('create',array('model'=>$model));//, 'types'=>$types));
	}


	public function actionDelete()
	{
		$this->checkPermissions(array('admin','manager'));
		//if(Yii::app()->request->isPostRequest)
		//{			
		
		$en_title = Yii::app()->request->getParam('en_title', '0');		
		$parent_id = Yii::app()->request->getParam('id', '0');
		$model = CondominiumStaticPage::model()->findByAttributes(array('parent_id' => $parent_id, 'en_title'=>$en_title));
		
		if (count($model) == 0)
				throw new CHttpException(404,'The requested page does not exist.');
				
			// we only allow deletion via POST request
			$model->delete();

			// if AJAX request (triggered by deletion via admin grid view), we should not redirect the browser
			if(!isset($_GET['ajax']))
				$this->redirect($model->pageListURL());
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

		$en_title = Yii::app()->request->getParam('en_title', '0');		
		$parent_id = Yii::app()->request->getParam('id', '0');
		$model = CondominiumStaticPage::model()->findByAttributes(array('parent_id' => $parent_id, 'en_title'=>$en_title));
		
		if (count($model) == 0)
				throw new CHttpException(404,'The requested page does not exist.');
		if(isset($_POST['CondominiumStaticPage']))
		{
			//записываем атрибуты
			$model->attributes=$_POST['CondominiumStaticPage'];
			
			if($model->save())
				$this->redirect($model->pageListURL());
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
				$this->_model=CondominiumStaticPage::model()->findByPk($_GET['id'], $condition);
			}
			if($this->_model===null)
				throw new CHttpException(404,'The requested page does not exist.');
		}
		return $this->_model;
	}
	/**
	 * Displays the login page
	 */
	public function actionLogin()
	{
		$model=new LoginForm;

		// if it is ajax validation request
		if(isset($_POST['ajax']) && $_POST['ajax']==='login-form')
		{
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}

		// collect user input data
		if(isset($_POST['LoginForm']))
		{
			$model->attributes=$_POST['LoginForm'];
			// validate user input and redirect to the previous page if valid
			if($model->validate() && $model->login())
				$this->redirect(Yii::app()->user->returnUrl);
		}
		// display the login form
		$this->render('login',array('model'=>$model));
	}

	/**
	 * Logs out the current user and redirect to homepage.
	 */
	public function actionLogout()
	{
		Yii::app()->user->logout();
		$this->redirect(Yii::app()->homeUrl);
	}
}