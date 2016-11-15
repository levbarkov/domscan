<?php

class OptionController extends Controller
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
				'actions'=>array('create','update'),
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
		$model=new Option;

		$this->performAjaxValidation($model);

		if(isset($_POST['Option']))
		{
			$model->attributes=$_POST['Option'];
		

			if($model->save())
				$this->redirect(array('/setting/admin'));
		}

		$this->render('create',array(
			'model'=>$model,
		));
	}

	public function actionUpdate()
	{
	
		$this->checkPermissions(array('admin'));	
		/*if(!Yii::app()->user->can('manage')) {
			$this->redirect('/user/auth');
			Yii::app()->end();
		}*/
		$model=$this->loadModel();

		$this->performAjaxValidation($model);

		if(isset($_POST['Option']))
		{
			$model->attributes=$_POST['Option'];
		
			if($model->save())
				$this->redirect(array('/setting/admin'));
		}

		$this->render('update',array(
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
				$this->redirect(array('/setting/admin'));
	/*	}
		else
			throw new CHttpException(400,
					Yii::t('app', 'Invalid request. Please do not repeat this request again.'));*/
	}

	public function actionIndex()
	{
		$this->redirect('/');
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
				$this->_model=Option::model()->findbyPk($_GET['id']);
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
