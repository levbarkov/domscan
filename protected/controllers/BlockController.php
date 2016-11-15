<?php

class BlockController extends Controller
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
		
		$model=new Block;

		$this->performAjaxValidation($model);

		if(isset($_POST['Block']))
		{
			$model->attributes=$_POST['Block'];
		

			if($model->save())
				$this->redirect(array('admin','id'=>$model->id));
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

		if(isset($_POST['Block']))
		{
			$model->attributes=$_POST['Block'];
		
			if($model->save())
				$this->redirect(array('admin','id'=>$model->id));
		}

		$this->render('update',array(
			'model'=>$model,
		));
	}

	public function actionDelete()
	{
		$this->checkPermissions(array('admin'));

		

			$this->loadModel()->delete();

			if(!isset($_GET['ajax']))
				$this->redirect(array('admin'));

	}

	public function actionIndex()
	{
		$this->redirect('/');
	}

	public function actionAdmin()
	{
		$this->checkPermissions(array('admin'));

		
		$model = Block::model()->findAll(); 

		$this->render('admin',array(
			'model'=>$model,
		));
	}

	public function loadModel()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
				$this->_model=Block::model()->findbyPk($_GET['id']);
			if($this->_model===null)
				throw new CHttpException(404, Yii::t('app', 'The requested page does not exist.'));
		}
		return $this->_model;
	}

	protected function performAjaxValidation($model)
	{
		if(isset($_POST['ajax']) && $_POST['ajax']==='block-form')
		{
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}
	}
}
