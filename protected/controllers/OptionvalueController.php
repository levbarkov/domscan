<?php

class OptionvalueController extends Controller
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

		$model=new OptionList;
		
		$parent = Yii::app()->request->getParam('parent');
		$record=Option::model()->findByAttributes(array('en_name'=> $parent));
		if($record) {
			$model->parent = $record->id;
			$model->en_parent_name = $record->en_name;
		} else if(!$record) {
			throw new CHttpException(400, Yii::t('app', 'Invalid request. Do not make this request any more.'));
		} else {
			throw new CHttpException(403, Yii::t('app', 'Недостаточно прав.'));
		}
		

		$this->performAjaxValidation($model);

		if(isset($_POST['OptionList']))
		{
			$model->attributes=$_POST['OptionList'];
		

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
		
		$model=$this->loadModel();
		
		
		$this->performAjaxValidation($model);

		if(isset($_POST['OptionList']))
		{
			$model->attributes=$_POST['OptionList'];
		
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
		/*}
		else
			throw new CHttpException(400,
					Yii::t('app', 'Invalid request. Please do not repeat this request again.'));*/
	}

	public function actionIndex()
	{
		$this->redirect('/');
	}


	public function loadModel()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
				$this->_model=OptionList::model()->findbyPk($_GET['id']);
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
