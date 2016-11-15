<?php

class MenuController extends Controller
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
				'actions'=>array('create','update','updatemenu','updateobjectsnew','settinglist','updatebank','createbank','deletebank'),
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
		$model=new MenuMain;

		$this->performAjaxValidation($model);

		if(isset($_POST['MenuMain']))
		{
			$model->attributes=$_POST['MenuMain'];
		
			if (isset($_POST['urls']) && isset($_POST['titles'])) {
				$i = 0;
				$helperArray = array();
				foreach($_POST['urls'] as $key => $value)
				{ 
			//		echo $i;
					$helperArray[] = array('title'=>$_POST['titles'][$i],'url'=> $_POST['urls'][$i],'text'=>$_POST['text'][$i]);					
					$i++;
				}
				
				$model->value = serialize($helperArray);
			}
			
			//	die(print_r($helperArray));
		//	die($model->value);

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

		if(isset($_POST['MenuMain']))
		{
			$model->attributes=$_POST['MenuMain'];
				
			if (isset($_POST['urls']) && isset($_POST['titles'])) {
				$i = 0;
				$helperArray = array();
				foreach($_POST['urls'] as $key => $value)
				{ 
			//		echo $i;
					$helperArray[] = array('title'=>$_POST['titles'][$i],'url'=> $_POST['urls'][$i],'text'=>$_POST['text'][$i]);
					$i++;
				}
				
				$model->value = serialize($helperArray);
			}
			
			if($model->save())
				$this->redirect(array('admin'));
		}

		$this->render('update',array(
			'model'=>$model,
		));
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
		
		$model = MenuMain::model()->findAll(); 
		
		$this->render('admin',array(
			'model'=>$model,

		));
	}
	
	public function loadModel()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
				$this->_model=MenuMain::model()->findbyPk($_GET['id']);
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
