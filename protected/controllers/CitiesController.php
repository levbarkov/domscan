<?php

class CitiesController extends Controller
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
				'actions'=>array('create','update','createItem','updateItem','deleteItem'),
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
		$model=new City;

		$this->performAjaxValidation($model);

		if(isset($_POST['City']))
		{
			$model->attributes=$_POST['City'];

			if($model->save())
				$this->redirect(array('admin'));
		}

		$this->render('create',array(
			'model'=>$model,
		));
	}
	
	public function actionCreateItem()
	{		
		$this->checkPermissions(array('admin'));		
		$model=new District;
		
		if(isset($_GET['parent']))
			$parent=City::model()->findbyPk($_GET['parent']);
		if($parent===null)
			throw new CHttpException(404, Yii::t('app', 'The requested city does not exist.'));


		$model->city_id = $parent->id;

		$this->performAjaxValidation($model);

		if(isset($_POST['District']))
		{
			$model->attributes=$_POST['District'];

			if($model->save())
				$this->redirect(array('admin'));
		}

		$this->render('createItem',array(
			'model'=>$model, 'parent'=>$parent
		));
	}



	public function actionUpdate()
	{
		$this->checkPermissions(array('admin'));		
		$model=$this->loadModel();

		$this->performAjaxValidation($model);

		if(isset($_POST['City']))
		{
			$model->attributes=$_POST['City'];
			
			if($model->save())
				$this->redirect(array('admin'));
		}

		$this->render('update',array(
			'model'=>$model,
		));
	}
	public function actionUpdateItem()
	{
		$this->checkPermissions(array('admin'));		
		$model=$this->loadModelItem();

		$this->performAjaxValidation($model);

		if(isset($_POST['District']))
		{
			$model->attributes=$_POST['District'];
			
			if($model->save())
				$this->redirect(array('admin'));
		}

		$this->render('updateItem',array(
			'model'=>$model,
		));
	}

	public function actionDelete()
	{	
		$this->checkPermissions(array('admin'));		
		
	//	if(Yii::app()->request->isPostRequest)
	//	{
			$this->loadModel()->delete();

			if(!isset($_GET['ajax']))
				$this->redirect('/cities/admin');
		/*}
		else
			throw new CHttpException(400,
					Yii::t('app', 'Invalid request. Please do not repeat this request again.'));*/
	}
	public function actionDeleteItem()
	{	
		$this->checkPermissions(array('admin'));		
	
		$id = $_GET['id'];
		
		$check = Estate::model()->findByAttributes(array('district'=>$id));
		if($check) {
			echo 'Нельзя удалить район! Существуют привязанные к указанному району объекты!';
			die();
		}
		$this->loadModelItem()->delete();

		if(!isset($_GET['ajax']))
			$this->redirect('/cities/admin');
	}


	public function actionIndex()
	{
		$this->redirect('/');
	}

	public function actionAdmin()
	{
		$this->checkPermissions(array('admin'));		
			
		$model = City::model()->findAll(array('order'=>'sort ASC')); 
		
		$this->render('admin',array(
			'model'=>$model,
		));
	}
	
	public function checkPermissions($array = array('admin','manager'))
	{
		$record=AdminUser::model()->findByAttributes(array('username'=> Yii::app()->user->id));
		if($record && in_array($record->role, $array)) {
		//	echo $record->role;
			//all ok!
		} else if(!$record) {
			$this->redirect('/site/login');
			Yii::app()->end();
		} else {
			throw new CHttpException(403, Yii::t('app', 'Недостаточно прав.'));
		}

	}

	public function loadModel()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
				$this->_model=City::model()->findbyPk($_GET['id']);
			if($this->_model===null)
				throw new CHttpException(404, Yii::t('app', 'The requested page does not exist.'));
		}
		return $this->_model;
	}

	public function loadModelItem()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
				$this->_model=District::model()->findbyPk($_GET['id']);
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
