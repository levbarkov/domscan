<?php

class CabinetController extends Controller
{

	public $layout = '//layouts/landing';
	public $banner = 'personal-account-section_top_1170-90';
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
		
		$this->checkUser();
		$this->checkActivation();
		
		$user_id = Yii::app()->user->id;
		
		
		$cookie_favorite = Yii::app()->request->cookies['favorite']->value;
		$cookie_favorite = json_decode($cookie_favorite);
		
		$cookie_fav_wrap = array();
		
		while ($fruit_name = current($cookie_favorite)) {
		    if ($fruit_name == 1) {
		        $cookie_fav_wrap[] = key($cookie_favorite);
		    }
		    next($cookie_favorite);
		}
		
		foreach($cookie_fav_wrap as $fav_item) {
			$favorite = Favorited::model()->findByAttributes(array('user_id' => $user_id, 'object_id' => $fav_item));
			if(!$favorite) {
				$record = new Favorited;
				$record->user_id = $user_id;
				$record->object_id = $fav_item;
				$record->save();
			}
		}
		unset(Yii::app()->request->cookies['favorite']);
			
		$order_dir = Yii::app()->request->getParam('dir', 'asc');
		if(!in_array($order_dir, array('desc','asc'))) {
			$order_dir = 'asc';
		}
		$order_field = Yii::app()->request->getParam('order', 'rooms');
		if(!in_array($order_field, array('rooms','square','cost'))) {
			$order_field = 'rooms';
		}
			
		$favorites = Favorited::model()->findAllByAttributes(array('user_id'=>Yii::app()->user->id));
		
		$favarray = array();
		
		if($favorites) {
			
			$cookie_fav_wrap = array();
			foreach($favorites as $favorite) {
				$favarray[] = $favorite->object_id;
				$cookie_fav_wrap[$favorite->object_id] = true;
			}
			$cookie_favorite = json_encode($cookie_fav_wrap);
			
			$cookie = new CHttpCookie('favorite',$cookie_favorite);
			
			$cookie->expire = time() + 2592000;
			Yii::app()->request->cookies['favorite'] = $cookie;
		}
		
		
		foreach($favorites as $fav) {
			$faved = Estate::model()->findByAttributes(array('id'=>$fav->object_id));
			if(!$faved)	
				$fav->delete();
		}	

			
		$flats = Estate::model()->findAllByAttributes(array('user_id'=>Yii::app()->user->id),array('order'=>$order_field.' '.$order_dir));
		
		$this->render('index',array('flats'=>$flats, 'favarray'=>$favarray,'order_field'=>$order_field,'order_dir'=>$order_dir));
	}
	public function actionFavorites()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		
			
		$unfavorite = Yii::app()->request->getParam('unfavorite');
		$user_id = Yii::app()->user->id;
		

		if($unfavorite && $user_id) {
			
			$record = Favorited::model()->findByAttributes(array('user_id' => $user_id, 'object_id' => $unfavorite));
		//	die(print_r($record));
			if($record)
				$record->delete();
		//	$this->redirect('/cabinet/favorites');
		//	 Yii::app()->end();

		}	


		
		if($user_id) {
			$cookie_favorite = Yii::app()->request->cookies['favorite']->value;
			$cookie_favorite = json_decode($cookie_favorite);
			
			$cookie_fav_wrap = array();
			
			while ($fruit_name = current($cookie_favorite)) {
			    if ($fruit_name == 1) {
			        $cookie_fav_wrap[] = key($cookie_favorite);
			    }
			    next($cookie_favorite);
			}
			
			foreach($cookie_fav_wrap as $fav_item) {
				$favorite = Favorited::model()->findByAttributes(array('user_id' => $user_id, 'object_id' => $fav_item));
				if(!$favorite) {
					$record = new Favorited;
					$record->user_id = $user_id;
					$record->object_id = $fav_item;
					$record->save();
				}
			}
		}
		
		//$this->checkUser();
		$favarray = array();
		
		$cookie_favorite = Yii::app()->request->cookies['favorite']->value;
		$cookie_favorite = json_decode($cookie_favorite);
		
		$cookie_fav_wrap = array();
		
		//echo print_r($cookie_favorite, true);
		
		foreach($cookie_favorite as $cookie_key => $cookie_value) {
			
		    if ($cookie_value && $unfavorite != $cookie_key) {
		        $cookie_fav_wrap[] = $cookie_key;
		    }
		}
		
		
		foreach($cookie_fav_wrap as $fav_item) {
			if ($unfavorite != $fav_item) 
				$favarray[] = $fav_item;
					
		}
		
		
					
		$order_dir = Yii::app()->request->getParam('dir', 'asc');
		if(!in_array($order_dir, array('desc','asc'))) {
			$order_dir = 'asc';
		}
		$order_field = Yii::app()->request->getParam('order', 'rooms');
		if(!in_array($order_field, array('rooms','square','cost'))) {
			$order_field = 'rooms';
		}
		
				
		$favorites = Favorited::model()->findAllByAttributes(array('user_id'=>Yii::app()->user->id));
	
		foreach($favorites as $fav) {
			$faved = Estate::model()->findByAttributes(array('id'=>$fav->object_id));
			if(!$faved)	
				$fav->delete();
			if($fav->object_id == $unfavorite)
				$fav->delete();
		}	
		
		if($favorites) {
			
			$cookie_fav_wrap = array();
			foreach($favorites as $favorite) {
				if($unfavorite != $favorite->object_id) {
					$favarray[] = $favorite->object_id;
					$cookie_fav_wrap[$favorite->object_id] = true;
				} else {				
					$cookie_fav_wrap[$favorite->object_id] = false;
				}
			}
			
			unset(Yii::app()->request->cookies['favorite']);	
			unset($_COOKIE['favorite']);
			$cookie_favorite = json_encode($cookie_fav_wrap);
			$cookie = new CHttpCookie('favorite',$cookie_favorite);
			$cookie->expire = time() + 2592000;
			$cookie->path = '/';
			Yii::app()->request->cookies['favorite'] = $cookie;

			
			$objects = Estate::model()->findAllByAttributes(array('id'=>$favarray),array('order'=>$order_field.' '.$order_dir));
			
		} else {
			if(!$user_id && $unfavorite) {
				foreach($favarray as $favorite) {
					$cookie_fav_wrap[$favorite] = true;

				}
				
				unset(Yii::app()->request->cookies['favorite']);	
				unset($_COOKIE['favorite']);
				$cookie_favorite = json_encode($cookie_fav_wrap);
				$cookie = new CHttpCookie('favorite',$cookie_favorite);
				$cookie->expire = time() + 2592000;
				$cookie->path = '/';
				Yii::app()->request->cookies['favorite'] = $cookie;
			
			}
			
			
			$objects = Estate::model()->findAllByAttributes(array('id'=>$favarray),array('order'=>$order_field.' '.$order_dir));
			
		}

		
		$this->render('favorites',array('objects'=>$objects,'order_field'=>$order_field,'order_dir'=>$order_dir));
	}
	
	public function actionSuccess()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
				
		$email = Yii::app()->request->getParam('email');
		$this->render('success', array('email'=>$email,'is_found'=>true));
	}
	
	public function actionAdd()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		
		
		$this->checkUser();
		$this->checkActivation();
		$model = new Estate;
		$model->city = (int)Yii::app()->request->getParam('city_id', 1);
		//$model->type = Yii::app()->request->getParam('type', 'flat');
		//if(!in_array($model->type, array('house','flat','new','commercial','land'))) {
		//	$model->type = 'flat';
		//}
		
		$type = Yii::app()->request->getParam('type');	
		
		if($type) {
			if(in_array($type, array('house','flat','new','commercial','land'))) {
				$model->type = $type;
			} else {
				$model->type = 'flat';
			}
		}
				
		$subtype = Yii::app()->request->getParam('subtype');	
		
		if($subtype) {
			if(in_array($subtype, array('sale','rent'))) {
				$model->subtype = $subtype;
			} else {
				$model->subtype = 'sale';
			}
		}
		
		if(!$model->type) $model->type = 'flat';
		if(!$model->subtype) $model->subtype = 'sale';
		
		if($model->type == 'new') $model->subtype = 'sale';
		
		$type_config=EstateConfig::model()->findByAttributes(array('type'=> $model->type));
		
		$fields_main = EstateConfigNew::model()->findAllByAttributes(array('type_'.$model->type => true, 'parent'=>'', 'block' => 'main','admin'=>false),array('order'=>'sorting ASC'));
		$fields_sub = EstateConfigNew::model()->findAllByAttributes(array('type_'.$model->type => true,'parent'=>'', 'block' => 'sub','admin'=>false),array('order'=>'sorting ASC'));
		//$this->performAjaxValidation($model);
		
		$converter = array( 
		' ' => '_', '.' =>'', ',' =>'', '#' => '', '№'=> '', '-' =>'_','–' =>'_',
		'а' => 'a', 'б' => 'b', 'в' => 'v', 
		'г' => 'g', 'д' => 'd', 'е' => 'e', 
		'ё' => 'e', 'ж' => 'zh', 'з' => 'z', 
		'и' => 'i', 'й' => 'y', 'к' => 'k', 
		'л' => 'l', 'м' => 'm', 'н' => 'n', 
		'о' => 'o', 'п' => 'p', 'р' => 'r', 
		'с' => 's', 'т' => 't', 'у' => 'u', 
		'ф' => 'f', 'х' => 'h', 'ц' => 'c', 
		'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 
		'ь' => '', 'ы' => 'y', 'ъ' => '', 
		'э' => 'e', 'ю' => 'yu', 'я' => 'ya'); 

		if(isset($_POST['Estate']))
		{
		
			$images = $_POST['Images'];
			$_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
			$model->attributes=$_POST['Estate'];


			
			
			if(!in_array($model->type, array('house','flat','new','commercial','land'))) {
				$model->type = 'flat';
			}		
			$model->subtype = Yii::app()->request->getParam('subtype', 'sale');
			if(!in_array($model->subtype, array('sale','rent'))) {
				$model->subtype = 'sale';
			}	
			
			if(!$model->address) {
				if($model->address_street && $model->address_house) {
				    $model->address = $model->address_street . ' ' . $modelthis->address_house;
			    }
				if($model->address_street && $model->address_house && $model->address_building) {
				    $model->address = $model->address_street . ' ' . $model->address_house. ', стр.'.$model->address_building;
			    }
			    if($model->address_street && $model->address_house && $model->address_flat) {
				    $model->address = $model->address_street . ' ' . $model->address_house . ', кв.'. $model->address_flat;
			    }
			    if($model->address_street && $model->address_house && $model->address_building && $model->address_flat) {
				    $model->address = $model->address_street . ' ' . $model->address_house . ', стр.'.$model->address_building.', кв.'. $model->address_flat;
			    }
			}
		
			if($model->type == 'flat' || $model->type == 'new')  
				$model->title = $model->rooms."-ком. квартира на ".$model->address;
			if($model->type == 'house')  
				$model->title = "Дом на ".$model->address;
			if($model->type == 'land')  
				$model->title = "Земельный участок на ".$model->address;
			if($model->type == 'commercial')  
				$model->title = "Нежилое на ".$model->address;
			
			$string = mb_strtolower($model->title, 'UTF-8');; 
			$string = trim($string);
			//$string = mb_strtolower($string);
			
		
			$model->slug = strtr($string, $converter); 
		
		//	$model->subtype = 'sale';
			
			$model->user_id = Yii::app()->user->id;
			//$tour=CUploadedFile::getInstance($model,'upload_pano');
			//print_r($model->tour);print_r($model->tour->name);
			//return true;
			//if($tour):
			//	$model->tour='/uploads/panoramas/'.$model->id.'_'.$tour->name;
			//endif; 
			
			$cache=new CDbCache();
			$cache->flush();
			
			$model->validate();
			
			if($this->saveEntry($model, $images)) {
				//if($tour):
				//	$tour->saveAs(dirname(Yii::app()->request->scriptFile).'/uploads/panoramas/'.$model->id.'_'.$tour->name);					
				//endif;
				ModeratorLogHelper::AddToLog('created-'.$model->type.'-'.$model->id,'Добавлен объект #'.$model->id.' '.$model->title,'/'.$model->type.'/'.$model->id.'-'.$model->slug,$model->user_id);
				$this->redirect(array('/'.$model->type.'/'.$model->id.'-'.$model->slug));
			}

		}

		$this->render('add2',array('model'=>$model, 'type_config'=>$type_config, 'fields_main' => $fields_main, 'fields_sub' => $fields_sub));
	}
	
	
	
	public function actionEdit()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		
		
		$this->checkUser();
		$this->checkActivation();
	//	$model = new Estate;
		
		if($model===null)
		{
			if(isset($_GET['id']))
				$model=Estate::model()->findbyPk($_GET['id']);
			if($model===null)
				throw new CHttpException(404, Yii::t('app', 'The requested page does not exist.'));
		}
		
		if($model->user_id != Yii::app()->user->id) {
			throw new CHttpException(503, Yii::t('app', 'Нет прав'));
			return true;
		}
		//$model->city = (int)Yii::app()->request->getParam('city_id', 1);
		//$model->type = Yii::app()->request->getParam('type', 'flat');
		//if(!in_array($model->type, array('house','flat','new','commercial','land'))) {
		//	$model->type = 'flat';
		//}
		
		$type = Yii::app()->request->getParam('type');	
		
		if($type) {
			if(in_array($type, array('house','flat','new','commercial','land'))) {
				$model->type = $type;
			} else {
				$model->type = 'flat';
			}
		}
		
		$subtype = Yii::app()->request->getParam('subtype');	
		
		if($subtype) {
			if(in_array($subtype, array('sale','rent'))) {
				$model->subtype = $subtype;
			} else {
				$model->subtype = 'sale';
			}
		}
		if($model->type == 'new') $model->subtype = 'sale';

		$images = $model->attached_images;
		$type_config=EstateConfig::model()->findByAttributes(array('type'=> $model->type));
		$fields_main = EstateConfigNew::model()->findAllByAttributes(array('type_'.$model->type => true, 'parent'=>'', 'block' => 'main','admin'=>false),array('order'=>'sorting ASC'));
		$fields_sub = EstateConfigNew::model()->findAllByAttributes(array('type_'.$model->type => true,'parent'=>'', 'block' => 'sub','admin'=>false),array('order'=>'sorting ASC'));
	
		//$this->performAjaxValidation($model);
		
		$converter = array( 
		' ' => '_', '.' =>'', ',' =>'', '#' => '', '№'=> '', '-' =>'_','–' =>'_',
		'а' => 'a', 'б' => 'b', 'в' => 'v', 
		'г' => 'g', 'д' => 'd', 'е' => 'e', 
		'ё' => 'e', 'ж' => 'zh', 'з' => 'z', 
		'и' => 'i', 'й' => 'y', 'к' => 'k', 
		'л' => 'l', 'м' => 'm', 'н' => 'n', 
		'о' => 'o', 'п' => 'p', 'р' => 'r', 
		'с' => 's', 'т' => 't', 'у' => 'u', 
		'ф' => 'f', 'х' => 'h', 'ц' => 'c', 
		'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 
		'ь' => '', 'ы' => 'y', 'ъ' => '', 
		'э' => 'e', 'ю' => 'yu', 'я' => 'ya'); 

		if(isset($_POST['Estate']))
		{
		
			$images = $_POST['Images'];
			$_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
			$model->attributes= $_POST['Estate'];
		
					
		
			if(!in_array($model->type, array('house','flat','new','commercial','land'))) {
				$model->type = 'flat';
			}		
			//$model->subtype = Yii::app()->request->getParam('subtype', 'sale');
			
			if(!in_array($model->subtype, array('sale','rent'))) {
				$model->subtype = 'sale';
			}	
		
			
			if($model->type == 'flat' || $model->type == 'new')  
				$model->title = $model->rooms."-ком. квартира на ".$model->address;
			if($model->type == 'house')  
				$model->title = "Дом на ".$model->address;
			if($model->type == 'land')  
				$model->title = "Земельный участок на ".$model->address;
			if($model->type == 'commercial')  
				$model->title = "Нежилое на ".$model->address;
				
			$string = mb_strtolower($model->title, 'UTF-8');; 
			$string = trim($string);
			//$string = mb_strtolower($string);
			
			
		//	$model->text = htmlspecialchars($model->text);
		//	$model->text = htmlspecialchars($model->text);
		
			$model->slug = strtr($string, $converter); 
		
		//	$model->subtype = 'sale';
			
			$model->user_id = Yii::app()->user->id;
			//$tour=CUploadedFile::getInstance($model,'upload_pano');
			//print_r($model->tour);print_r($model->tour->name);
			//return true;
			//if($tour):
			//	$model->tour='/uploads/panoramas/'.$model->id.'_'.$tour->name;
			//endif; 
			
			$cache=new CDbCache();
			$cache->flush();
			
			$model->validate();
			
			if($this->saveEntry($model, $images)) {
				//if($tour):
				//	$tour->saveAs(dirname(Yii::app()->request->scriptFile).'/uploads/panoramas/'.$model->id.'_'.$tour->name);					
				//endif;
				ModeratorLogHelper::AddToLog('edited-'.$model->id,'Отредактирован объект #'.$model->id.' '.$model->title,'/'.$model->type.'/'.$model->id.'-'.$model->slug,$model->user_id);
				$this->redirect(array('/'.$model->type.'/'.$model->id.'-'.$model->slug));
			}

		}

		$this->render('add2',array('model'=>$model, 'images'=>$images, 'type_config'=>$type_config,'action'=>'edit', 'fields_sub' => $fields_sub, 'fields_main' => $fields_main));
	}
	
	public function actionDelete()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		
		
		$this->checkUser();
		$this->checkActivation();
	//	$model = new Estate;
		
		if($model===null)
		{
			if(isset($_GET['id']))
				$model=Estate::model()->findbyPk($_GET['id']);
			if($model===null)
				throw new CHttpException(404, Yii::t('app', 'The requested page does not exist.'));
		}
		
		EstateImage::deleteAllImages($model->id);	
		@unlink(dirname(Yii::app()->request->scriptFile).$model->tour);
		@unlink(dirname(Yii::app()->request->scriptFile).$model->image);
		
		$model->delete();
		
		
		ModeratorLogHelper::AddToLog('deleted-estate-'.$model->id,'Удален объект #'.$model->id.' '.$model->title,null,$model->user_id);
		$this->redirect('/cabinet/index');
		
	}

	public function actionSettings()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		
		
		$this->checkUser();
		
		$record = SiteUser::model()->findByAttributes(array('id'=> Yii::app()->user->id));
		
		if($record===null)
				throw new CHttpException(404, Yii::t('app', 'Internal server error.'));

		
		if(isset($_POST['SiteUser']))
		{
			$record->attributes=$_POST['SiteUser'];
		
			

			ModeratorLogHelper::AddToLog('edited-user-'.$record->id,'Изменены данные пользователя '.$record->email,null,$record->id);
			if($record->save())
				$this->redirect(array('personal'));
		}
		
		$this->render('settings',array('user'=>$record));
	}
	public function actionPersonal()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		
		
		$this->checkUser();
		
		$record = SiteUser::model()->findByAttributes(array('id'=> Yii::app()->user->id));
		$this->render('personal',array('user'=>$record));
	}
	
	
	public function actionConfirmation()
    {
		if (isset($_GET['string']) && $_GET['string'] != '') {
		    $user = SiteUser::model()->findByAttributes(array('activation_string'=>$_GET['string']));
		    //echo print_r($user,true);
		    if($user) {
			    $user->activation_string = '';
			    $user->save();
			    
				$this->render('confirmationsuccess');
			
			}
		}
		$this->render('confirmationfail');
    }

    public function actionNotactivated()
    {
		$this->render('notactivated');
    }
    public function actionActivationsent()
    {

		$this->render('activationsent');
    }

    public function actionResendactivation()
    {
    
    
    	if(Yii::app()->user->id) {
    		$user = SiteUser::model()->findByPk(Yii::app()->user->id);
    		if($user && isset($user->activation_string) && $user->activation_string) {
    		//	echo $this->uniqueid;
    			$model = $user;

	    		$subject = Yii::t('SiteUser.user', 'Письмо подтверждения аккаунта с сайта Domscan.ru');
				$message = Yii::t('SiteUser.user', 'Спасибо, вы успешно зарегистрировались. Вам нужно активировать ваш аккаунт по ссылке: {activation_url}', array('{site_name}' => Yii::app()->name, '{activation_url}' => '<a href="http://real-estate-dev.bureauit.com/cabinet/confirmation/?string='.$model->activation_string.'">http://real-estate-dev.bureauit.com/cabinet/confirmation/?string='.$model->activation_string.'</a>',));
	
				//get template 'simple' from /themes/default/views/mail
				$mail = new YiiMailer('simple', array('message' => $message, 'description' => Yii::t('SiteUser.user', '')));
				//render HTML mail, layout is set from config file or with $mail->setLayout('layoutName')
				$mail->render();
				//set properties as usually with PHPMailer
				$mail->From = 'null@domscan.ru';
				$mail->FromName = 'Domscan';
				$mail->Subject = $subject;
				$mail->AddAddress($model->email);
				if ($mail->Send()) {
				    $mail->ClearAddresses();
				}
				
    		}
    		
    		
    	}

		$this->redirect('/cabinet/activationsent');
    }

	
	
	public function actionChangepassword()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		
		
		$this->checkUser();
		
		$record = SiteUser::model()->findByAttributes(array('id'=> Yii::app()->user->id));
	
		if(isset($_POST['SiteUser']))
		{	
			if(trim($_POST['SiteUser']['password']) != '') {
				$record->password = $_POST['SiteUser']['password'];
				
			} 		
			if(trim($_POST['SiteUser']['password']) == trim($_POST['SiteUser']['repeat_password'])) {
				$record->repeat_password = $record->password;
			}	
			
			if($record->validate()) {
				$record->repeat_password = $record->password = crypt($record->password);
				if($record->save())
					$this->redirect(array('personal'));
			}
			else {
				$record->repeat_password = $record->password = '';
			}

		}	

		$this->render('changepassword',array('record'=>$record));
	}
	
	protected function saveEntry($object, $images)
	{
		$transaction = $object->dbConnection->beginTransaction();
			try {
				if($object->save()) {
					if (isset($images))
						EstateImage::saveImages($images, $object->id, 'Estate');
					$transaction->commit();
				} else {
					$transaction->rollback();
					return false;
				}
			} catch(Exception $e){
				$transaction->rollback();
				return false;
			}
		return true;
	}
	
	
	
	public function actionAjaxDeleteImage()
	{
		$this->checkUser();
		
		$user_id = Yii::app()->user->id;
		$articleId = $_POST['objectId'];
		
		$item = Estate::model()->findByPk($articleId);
		
		if($item->user_id == $user_id) {
			//do nothing;	
		}
		else {
			echo 'NO PERMISSION';		
			return 'fuck you';
		}
		
		
		if(Yii::app()->request->isAjaxRequest){
			$imageId = $_POST['imageId'];
			$articleId = $_POST['objectId'];
			if (EstateImage::deleteImage($imageId, $articleId))
				echo (true);
			else
				echo (false);
			Yii::app()->end();
		}
	}
	
	
	public function actionAjaxChooseImage()
	{
		$this->checkUser();
		
		$user_id = Yii::app()->user->id;
		$articleId = $_POST['objectId'];
		
		$item = Estate::model()->findByPk($articleId);
		
		if($item->user_id == $user_id) {
			//do nothing;	
		}
		else {
			echo 'NO PERMISSION';		
			return 'fuck you';
		}
		
		if(Yii::app()->request->isAjaxRequest){
			$imageId = $_POST['imageId'];
			$articleId = $_POST['objectId'];
			if (EstateImage::chooseImageFileAsMain($imageId, $articleId))
				echo (true);
			else
				echo (false);
			Yii::app()->end();
		}
	}
	
	public function actionAjaxDeleteAllImages()
	{
		$this->checkUser();
		
		$user_id = Yii::app()->user->id;
		$articleId = $_POST['objectId'];
		
		$item = Estate::model()->findByPk($articleId);
		
		if($item->user_id == $user_id) {
			//do nothing;	
		}
		else {
			echo 'NO PERMISSION';		
			return 'fuck you';
		}
		
		if(Yii::app()->request->isAjaxRequest){
			$articleId = $_POST['objectId'];
			if (EstateImage::deleteAllImages($articleId))
				echo (true);
			else
				echo (false);
			Yii::app()->end();
		}
	}
	/**
	 * Logs out the current user and redirect to homepage.
	 */
	public function actionLogout()
	{
		Yii::app()->user->logout();
		$this->redirect(Yii::app()->homeUrl);
	}
	
	
	public function checkActivation() {
		if(Yii::app()->user->id) {
    		$user = SiteUser::model()->findByPk(Yii::app()->user->id);
    		if($user) {
    		//	echo $this->uniqueid;
    			
	    			if($user->activation_string)
	    				$this->redirect('/cabinet/notactivated');
				
    		}
    	}
	}

}