<?php

class SotrudnikiController extends Controller
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
				'actions'=>array('index','create','update','admin','delete','view','post'),
				'users'=>array('*'),
			),
			array('allow', 
				'actions'=>array('create','update','deleteotziv'),
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
							
							$magicianObj = new imageLib(dirname(Yii::app()->request->scriptFile).$model->photo);
							$magicianObj -> resizeImage(400, 396, 'crop',true);
							$magicianObj -> saveImage(dirname(Yii::app()->request->scriptFile).$model->photo);	
		
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
	
		$this->checkPermissions(array('admin'));
		
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
							
							$magicianObj = new imageLib(dirname(Yii::app()->request->scriptFile).$model->photo);
							$magicianObj -> resizeImage(400, 396, 'crop',true);
							$magicianObj -> saveImage(dirname(Yii::app()->request->scriptFile).$model->photo);	
		
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

		$this->checkPermissions(array('admin'));
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
		$this->layout = '//layouts/landing';
		
		$order_dir = Yii::app()->request->getParam('sort', 'desc');
		if(!in_array($order_dir, array('desc','asc'))) {
			$order_dir = 'desc';
		}
		$model = Employee::model()->findAllByAttributes(array(),array('order'=>'(positive - negative) '.$order_dir));
		
		//(array('datepublish'=>''),array('order'=>'datepublish DESC'));
		$this->render('index',array(
			'employ_list'=>$model, 'order_dir'=>$order_dir));

	}
	
	
	public function actionPost()
	{
	
		$this->checkUser();
		
		$this->layout = '//layouts/main';
		$employ_id = Yii::app()->request->getParam('employ_id', 0);
		$model = Employee::model()->findByPk($employ_id);
		if($model===null)
			throw new CHttpException(404, Yii::t('app', 'The requested page does not exist.'));
		else {
			$new_otziv = new EmployeeOtziv;
			$new_otziv->employee = $employ_id;
			$new_otziv->user_id = Yii::app()->user->id;
			$new_otziv->vote = Yii::app()->request->getParam('vote', 0);
			$new_otziv->visible = 1;
			$text = Yii::app()->request->getParam('text');;
			$new_otziv->text = htmlspecialchars(strip_tags($text));
			$new_otziv->date = date('Y').'-'.date('m').'-'.date('d').' '.date('h').':00:00';
			$new_otziv->save();
			
			$positive_votes = EmployeeOtziv::model()->countByAttributes(array('employee'=>$employ_id,'vote'=>1));
			$negative_votes = EmployeeOtziv::model()->countByAttributes(array('employee'=>$employ_id,'vote'=>0));
			$model->negative = $negative_votes;
			$model->positive = $positive_votes;
			$model->save();
		}
		//(array('datepublish'=>''),array('order'=>'datepublish DESC'));
		$this->redirect('/sotrudniki/');

	}

	public function actionAdmin()
	{

		$this->checkPermissions(array('admin'));
		$model = Employee::model()->findAll();
		$this->render('admin',array(
			'model'=>$model,
		));

	}

	public function actionDeleteotziv()
	{

		$this->checkPermissions(array('admin'));
		//if(Yii::app()->request->isPostRequest)
		//{
		
		$otziv = EmployeeOtziv::model()->findByPk($_GET['id']);
		$employ_id = $otziv->employee;
		$otziv->delete();
		
		$model = Employee::model()->findByPk($employ_id);
		if($model===null) {
			
			}
		else {
			
			$positive_votes = EmployeeOtziv::model()->countByAttributes(array('employee'=>$employ_id,'vote'=>1));
			$negative_votes = EmployeeOtziv::model()->countByAttributes(array('employee'=>$employ_id,'vote'=>0));
			$model->negative = $negative_votes;
			$model->positive = $positive_votes;
			$model->save();
		}
		
			

			if(!isset($_GET['ajax']))
				$this->redirect(array('index'));
		//}//
		//else
		//	throw new CHttpException(400,
		//			Yii::t('app', 'Invalid request. Please do not repeat this request again.'));
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
