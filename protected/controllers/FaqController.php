<?php

class FaqController extends Controller
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
		$model=new FaqCategory;

		$this->performAjaxValidation($model);

		if(isset($_POST['FaqCategory']))
		{
			$model->attributes=$_POST['FaqCategory'];

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
		$model=new FaqItem;
		
		if(isset($_GET['parent']))
			$parent=FaqCategory::model()->findbyPk($_GET['parent']);
		if($parent===null)
			throw new CHttpException(404, Yii::t('app', 'The requested parent does not exist.'));


		$model->faq_id = $parent->id;

		$this->performAjaxValidation($model);

		if(isset($_POST['FaqItem']))
		{
			$model->attributes=$_POST['FaqItem'];

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

		if(isset($_POST['FaqCategory']))
		{
			$model->attributes=$_POST['FaqCategory'];
			
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
		$model=$this->loadModelFaqItem();

		$this->performAjaxValidation($model);

		if(isset($_POST['FaqItem']))
		{
			$model->attributes=$_POST['FaqItem'];
			
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
				$this->redirect('/faq/admin');
		/*}
		else
			throw new CHttpException(400,
					Yii::t('app', 'Invalid request. Please do not repeat this request again.'));*/
	}
	public function actionDeleteItem()
	{	
		$this->checkPermissions(array('admin'));		
		
		$this->loadModelFaqItem()->delete();

		if(!isset($_GET['ajax']))
			$this->redirect('/faq/admin');
	}

	public function actionIndex()
	{
		$this->layout = 'landing';
		$this->render('faq');
	}

	public function actionAdmin()
	{
		$this->checkPermissions(array('admin'));		
			
		$model = FaqCategory::model()->findAll(array('order'=>'sort ASC')); 
		
		$this->render('admin',array(
			'model'=>$model,
		));
	}
	

	public function loadModel()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
				$this->_model=FaqCategory::model()->findbyPk($_GET['id']);
			if($this->_model===null)
				throw new CHttpException(404, Yii::t('app', 'The requested page does not exist.'));
		}
		return $this->_model;
	}

	public function loadModelFaqItem()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
				$this->_model=FaqItem::model()->findbyPk($_GET['id']);
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
