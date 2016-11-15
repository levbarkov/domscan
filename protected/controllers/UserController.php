<?php

class UserController extends Controller
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
		
		$model=new AdminUser;

		$this->performAjaxValidation($model);

		if(isset($_POST['AdminUser']))
		{
			if($model->username != 'admin')
				$model->username = $_POST['AdminUser']['username'];
			//else if ($model->username == 'admin' && $_POST['User']['username'] != 'admin')
			//	Yii::app()->user->setFlash('username', 'New custom error message');
			
			
			if(trim($_POST['AdminUser']['password']) != '' && mb_strlen($_POST['AdminUser']['password']) > 4 ) {
				$model->password = $_POST['AdminUser']['password'];			
			}
			if(trim($_POST['AdminUser']['password']) == trim($_POST['AdminUser']['repeat_password'])) {
				$model->repeat_password = $model->password;
			}
				
				
			$model->role=$_POST['AdminUser']['role'];
			$model->email=$_POST['AdminUser']['email'];
		
		
			if($model->username == 'admin')
				$model->role = 'admin';
				
			if($model->role == '')
				$model->role = 'disabled';		

			if($model->validate()) {
				$model->repeat_password = $model->password = crypt($model->password);
				if($model->save())
					$this->redirect(array('admin'));
			}
			else {
				$model->repeat_password = $model->password = '';
			}
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

		if(isset($_POST['AdminUser']))
		{
			if($model->username != 'admin')
				$model->username = $_POST['AdminUser']['username'];
			else if($_POST['AdminUser']['username'] != 'admin')
				$model->addError('username','Пользователю admin нельзя изменять логин');
			//else if ($model->username == 'admin' && $_POST['User']['username'] != 'admin')
			//	Yii::app()->user->setFlash('username', 'New custom error message');
			
			
			if(trim($_POST['AdminUser']['password']) != '') {
				$model->password = $_POST['AdminUser']['password'];
				
			} 		
			if(trim($_POST['AdminUser']['password']) == trim($_POST['AdminUser']['repeat_password'])) {
				$model->repeat_password = $model->password;
			}		
				
			$model->role=$_POST['AdminUser']['role'];
			$model->email=$_POST['AdminUser']['email'];
		
			if($model->username == 'admin' && $model->role != 'admin') {
				$model->role = 'admin';
				$model->addError('username','У пользователя admin может быть только роль главного администратора.');
			}
				
			if($model->role == '')
				$model->role = 'disabled';
				
			
			if(!$model->hasErrors('username') && !$model->hasErrors('role') && $model->validate()) {
				$model->repeat_password = $model->password = crypt($model->password);
				if($model->save())
					$this->redirect(array('admin'));
			}
			else {
				$model->repeat_password = $model->password = '';
			}
		}

		$this->render('update',array(
			'model'=>$model,
		));
	}

	public function actionDelete()
	{
		$this->checkPermissions(array('admin'));
		

			$user = $this->loadModel();
			if($user->username != 'admin')
				$user->delete();
			else
				throw new CHttpException(400, Yii::t('app', 'Удаление главного администратора невозможно.'));


			if(!isset($_GET['ajax']))
				$this->redirect(array('/user/admin'));
	}

	public function actionIndex()
	{
		$this->redirect('/');
	}

	public function actionAdmin()
	{
		$this->checkPermissions(array('admin'));	
		
		$model = AdminUser::model()->findAll(array('order'=>'id ASC')); 
		
		$this->render('admin',array(
			'model'=>$model,
		));
	}
	
	public function loadModel()
	{
		if($this->_model===null)
		{
			if(isset($_GET['id']))
				$this->_model=AdminUser::model()->findbyPk($_GET['id']);
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
