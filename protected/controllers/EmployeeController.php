<?php

class EmployeeController extends Controller
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
		if(!Yii::app()->user->can('manage')) {
			$this->redirect('/user/auth');
			Yii::app()->end();
		}
		$model=new Employee;

		$this->performAjaxValidation($model);

		if(isset($_POST['Employee']))
		{
			$model->attributes=$_POST['Employee'];
		
			if($model->save()){
			
				$uploaded_file=CUploadedFile::getInstance($model,'photo');
				if($uploaded_file) {
							$fileextension = CFileHelper::getExtension($uploaded_file->getName());
							//$filename = $model->s_image->getName();				
							$filename = $model->getPrimaryKey();				
							@unlink(dirname(Yii::app()->request->scriptFile).$model->photo);
							$uploaded_file->saveAs(dirname(Yii::app()->request->scriptFile).'/uploads/employees/'.$filename.'_image.'.$fileextension);
							$model->photo = '/uploads/employees/'.$filename.'_image.'.$fileextension; 	
							
				//			$magicianObj = new imageLib(dirname(Yii::app()->request->scriptFile).$model->photo);
				//			$magicianObj -> resizeImage(640, 270, 'crop',true);
				//			$magicianObj -> saveImage(dirname(Yii::app()->request->scriptFile).$model->photo);	
		
				}	
			}			
			
			if($model->save())
				$this->redirect(array('admin'));
		}

		$this->render('create',array(
			'model'=>$model,
		));
	}

	public function actionUpdate()
	{
		if(!Yii::app()->user->can('manage')) {
			$this->redirect('/user/auth');
			Yii::app()->end();
		}
		$model=$this->loadModel();

		$this->performAjaxValidation($model);

		if(isset($_POST['Employee']))
		{
			$model->attributes=$_POST['Employee'];
		
		
			if($model->save()){
			
				$uploaded_file=CUploadedFile::getInstance($model,'photo');
				if($uploaded_file) {
							$fileextension = CFileHelper::getExtension($uploaded_file->getName());
							//$filename = $model->s_image->getName();				
							$filename = $model->getPrimaryKey();				
							@unlink(dirname(Yii::app()->request->scriptFile).$model->photo);
							$uploaded_file->saveAs(dirname(Yii::app()->request->scriptFile).'/uploads/employees/'.$filename.'_image.'.$fileextension);
							$model->photo = '/uploads/employees/'.$filename.'_image.'.$fileextension; 	
							
				//			$magicianObj = new imageLib(dirname(Yii::app()->request->scriptFile).$model->photo);
				//			$magicianObj -> resizeImage(640, 270, 'crop',true);
				//			$magicianObj -> saveImage(dirname(Yii::app()->request->scriptFile).$model->photo);	
		
				}	
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
		//if(Yii::app()->request->isPostRequest)
		//{
			$this->loadModel()->delete();

			if(!isset($_GET['ajax']))
				$this->redirect(array('admin'));
		//}//
		//else
		//	throw new CHttpException(400,
		//			Yii::t('app', 'Invalid request. Please do not repeat this request again.'));
	}

	public function actionIndex()
	{
		$this->redirect('/');
	}

	public function actionAdmin()
	{
		if(!Yii::app()->user->can('manage')) {
			$this->redirect('/user/auth');
			Yii::app()->end();
		}
		$model = Employee::model()->findAll();
		$this->render('admin',array(
			'model'=>$model,
		));

	}

	public function loadModel()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
				$this->_model=Employee::model()->findbyPk($_GET['id']);
			if($this->_model===null)
				throw new CHttpException(404, Yii::t('app', 'The requested page does not exist.'));
		}
		return $this->_model;
	}

	protected function performAjaxValidation($model)
	{
		if(isset($_POST['ajax']) && $_POST['ajax']==='employee-form')
		{
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}
	}
}
