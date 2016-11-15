<?php

class ZastroischikiController extends Controller
{
	public $defaultAction='index';
	public $layout='admin_template';
	public $title = '';
	private $_model;
	public $seoblock_name = 'zastroischiki';
	public $banner = 'developers-page_top_1170-90';


	/**
	 * @return array action filters
	 */
	public function filters()
	{
		return array(
			'accessControl', // perform access control for CRUD operations
		);
	}
	
	public function partition( $list, $p ) {
		$listlen = count( $list );
		$partlen = floor( $listlen / $p );
		$partrem = $listlen % $p;
		$partition = array();
		$mark = 0;
		for ($px = 0; $px < $p; $px++) {
			$incr = ($px < $partrem) ? $partlen + 1 : $partlen;
			$partition[$px] = array_slice( $list, $mark, $incr );
			$mark += $incr;
		}
		return $partition;
	}

	public function accessRules()
	{
		//в этом массиве перечисляем методы доступ к которым разрешен
		//пользовалям
		return array(
			//array('allow',  // для гостей
				//'actions'=>array('list','show','archive'),
				//'users'=>array('*'),
			//),
			//array('allow', // для администратора (убрали из списка 'create', т.о. заблокировали эту операцию)
				//'actions'=>array('update'),
				//'users'=>array('@'),
			//),
			array('allow', // для администратора
				'actions'=>array('index','admin','delete','create','update'),
				'users'=>array('@'),
			),
			array('deny',  // deny all users
				'actions'=>array('','admin','delete','create','update'),
				'users'=>array('*'),
			),
		);
	}
	
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
	public function saveImage($model) 
	{
		if($model->save()){	
			$uploaded_file=CUploadedFile::getInstance($model,'photo');
			if($uploaded_file) {
				$checkdir = dirname(Yii::app()->request->scriptFile).'/uploads/builders/';
				if (!is_dir($checkdir)) {
					mkdir($checkdir);
				}
				$fileextension = CFileHelper::getExtension($uploaded_file->getName());
				//$filename = $model->s_image->getName();				
				$filename = $model->en_title;				
				@unlink(dirname(Yii::app()->request->scriptFile).$model->photo);
				$uploaded_file->saveAs(dirname(Yii::app()->request->scriptFile).'/uploads/builders/'.$filename.'_image.'.$fileextension);
				
				$model->photo = '/uploads/builders/'.$filename.'_image.'.$fileextension; 							
				
				$magicianObj = new imageLib(dirname(Yii::app()->request->scriptFile).$model->photo);
				$magicianObj -> resizeImage(270, 270, 'auto',true);
				$magicianObj -> saveImage(dirname(Yii::app()->request->scriptFile).$model->photo);	
			}	
		}	
		return $model;	
	}



	/**
	 * This is the default 'index' action that is invoked
	 * when an action is not explicitly requested by users.
	 */
	 
	public function actionFlats()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		
	 	$this->layout='landing';
		
		$en_title = Yii::app()->request->getParam('en_title', '0');		
		$model = Builder::model()->findByAttributes(array('en_title'=>$en_title));
		
		$district_title = Yii::app()->request->getParam('district', false);
		
		$attributes = array();
		
		if($district_title) {
			$district = District::model()->findByAttributes(array('en_title'=>$district_title));
			$selected_district = $district;
			$attributes['district'] = $district->id;
			//$this->title = 'Все новостройки, '.$selected_city->name.', '.$selected_district->name;
		}
		
		
		
		$current_page = (int)Yii::app()->request->getParam('page_id', 1);
		$offset = 28*($current_page-1);
		$criteria = new CDbCriteria;			
		$criteria->offset = $offset;
		
		
		$criteria->condition = '(zastroishik IN("'.$model->en_title.'") OR podryadchik IN("'.$model->en_title.'")) AND sold = 0  ';
		if(isset($attributes['district']))
			$criteria->condition .= ' AND district = '.$attributes['district'];
			
	//	die($criteria->condition);
		
		$model_count = Estate::model()->count(
			$criteria
		); 
		
		$criteria->limit = 28;
		$flats = Estate::model()->findAllByAttributes($attributes,$criteria);
		
		
		$criteria = new CDbCriteria;	
		$criteria->condition = '(zastroishik IN("'.$model->en_title.'") OR podryadchik IN("'.$model->en_title.'")) AND sold= 0 ';
		if(isset($attributes['district']))
			$criteria->condition .= ' AND district = '.$attributes['district'];

		$criteria->params=array(':zastroishik'=>$en_title);		
		$criteria->limit = 28;			
		$criteria->offset = $offset;
		$flats = Estate::model()->findAll($criteria);
		
		
		
		$count = $model_count;
		$page_count = ceil($count/28);
		
		$this->title = 'Все квартиры застройщика '.$model->title;
	 	$this->setPageTitle($this->title);

		$condition = new CDbExpression('(zastroishik IN("'.$model->en_title.'") OR podryadchik IN("'.$model->en_title.'")) AND sold=0 AND district != ""');
		$flatDistricts=Estate::model()->findAll(array(
			'condition'=>$condition,
			'select'=>'t.district',
			'group'=>'t.district',
			'distinct'=>true,
		));
		
		foreach($flatDistricts as $key => $signle):
			if(!$signle->district_title)
				unset($flatDistricts[$key]);
		endforeach;
		
		
        $this->pageDescriptionOverride = true;
        $this->pageDescription = 'Квартиры от застройщика '.$model->title.': предложения, планировки квартир, срок сдачи.';
        
        if($current_page > 1) {
	        $this->pageDescription = $this->pageDescription.' стр №'.$current_page;
        }
		
		$this->render('flats',array(
			'model'=>$model, 
			'flats'=>$flats,
			'entries_count'=>$count, 
			'page_count' => $page_count,
			'district_title' => $district_title,
			'selected_district' => $selected_district,
			'current_page' => $current_page,
			'flatDistricts' => $flatDistricts,
		));
	}
	
	
	public function actionBuildings()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		
	 	$this->layout='landing';
		
		$en_title = Yii::app()->request->getParam('en_title', '0');		
		
		$getstatus = Yii::app()->request->getParam('type', false);
		if(!in_array($getstatus, array('in_construction','finished')))
			$getstatus = false;
			
			
		$model = Builder::model()->findByAttributes(array('en_title'=>$en_title));
		
		$current_page = (int)Yii::app()->request->getParam('page_id', 1);
		$offset = 28*($current_page-1);
		$criteria = new CDbCriteria;			
		$criteria->offset = $offset;
		
		$attributes = array('zastroishik'=>$en_title);
		$finished = '';
		if($getstatus == 'in_construction') {
			$criteria->condition = 'finished=false';
			$attributes['finished'] = false;
		}
		if($getstatus == 'finished') {
			$criteria->condition = 'finished=true';
			$attributes['finished'] = true;
		}
		
		$model_count = Condominium::model()->countByAttributes(
			$attributes
		); 
		
		$criteria->limit = 28;
		$buildings = Condominium::model()->findAllByAttributes($attributes,$criteria);
		
		
		
		$count = $model_count;
		$page_count = ceil($count/28);
		
		$this->title = 'Все дома застройщика '.$model->title;
		
		if($getstatus == 'in_construction')
			$this->title = 'Все строящиеся дома застройщика '.$model->title;
		if($getstatus == 'finished') 
			$this->title = 'Все построенные дома застройщика '.$model->title;
		
	 	$this->setPageTitle($this->title);	
		
        $this->pageDescriptionOverride = true;
        $this->pageDescription = 'Дома от застройщика '.$model->title.': предложения, планировки, ход строительства.';
        
		if($getstatus == 'in_construction')
        	$this->pageDescription = 'Строящиеся дома от застройщика '.$model->title.': предложения, планировки, ход строительства.';
		if($getstatus == 'finished') 
        	$this->pageDescription = 'Построенные дома от застройщика '.$model->title.': предложения, планировки квартир.';
        	
        	
        if($current_page > 1) {
	        $this->pageDescription = $this->pageDescription.' стр №'.$current_page;
        }

		
		$builderBuildingsCount = Condominium::model()->countByAttributes(array('zastroishik'=>$en_title));

		$this->render('buildings',array(
			'model'=>$model, 
			'buildings'=>$buildings,
			'entries_count'=>$count, 
			'page_count' => $page_count,
			'current_page' => $current_page,
			'getstatus' => $getstatus,
			'builderBuildingsCount' => $builderBuildingsCount,
		));
	}
	
	
	public function actionIndex()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		$this->recalculateRatings();
				
	 	$this->layout='landing';
	 	$this->seoblock_name = 'rating';
	 	
		$this->banner = 'developers-section_top_1170-90';
	 	$this->setPageTitle('Лучшие застройщики Красноярска');
		$model = Builder::model()->findAll(array('order'=>'rating DESC'));
		$this->render('index',array('model'=>$model));
	}
	public function actionView()
	{
	
	 	$this->layout='landing';
	
		$en_title = Yii::app()->request->getParam('en_title', '0');
		
		$region = Yii::app()->request->getParam('region', '0');
		//if (Yii::app()->request->getParam('region', '0') != '0')
		//	$this->redirect('http://hochumaiky.ru/page/'.Yii::app()->request->getParam('en_title', 0));

		if ($region != '0') {
			$model = Builder::model()->findByAttributes(array('en_title'=>$en_title));
			//if (count($model) == 0)
			//	$this->redirect('http://hochumaiky.ru/page/'.Yii::app()->request->getParam('en_title', 0));
				//$model = Builder::model()->findByAttributes(array('en_title'=>$en_title,'city'=>''));
		}
		else {
			$model = Builder::model()->findByAttributes(array('en_title'=>$en_title));
		}
		if (count($model) == 0)
				throw new CHttpException(404,'The requested page does not exist.');
				
		$findPlace = Builder::model()->findAll(array('order'=>'rating DESC'));
		
		$i = 0;
		foreach($findPlace as $place) {
			$i++;
			if($place->id == $model->id)
				break;
		}
		$place = $i;
		
		$builderBuildings = Condominium::model()->findAllByAttributes(array('zastroishik'=>$en_title),array('limit'=>6));
		$builderBuildingsCount = Condominium::model()->countByAttributes(array('zastroishik'=>$en_title));
		
		
	//	$builderFlats = Estate::model()->findAllByAttributes(array('zastroishik'=>$en_title),array('limit'=>6));
		
		
		$criteria = new CDbCriteria;	
		$criteria->condition = '(zastroishik IN("'.$model->en_title.'") OR podryadchik IN("'.$model->en_title.'")) AND sold = 0';
		$criteria->params=array(':zastroishik'=>$en_title);		
		$criteria->limit = 6;	
		$builderFlats = Estate::model()->findAll($criteria);
		
		
	//	$builderFlatsCount = Estate::model()->countByAttributes(array('zastroishik'=>$en_title));
	//	$builderFlatsCount = Estate::model()->countByAttributes(array('zastroishik'=>$en_title));
		
		
		$criteria = new CDbCriteria;	
		$criteria->condition = '((zastroishik=:zastroishik) OR (podryadchik=:zastroishik)) AND sold = 0';
		$criteria->params=array(':zastroishik'=>$en_title);			
		$builderFlatsCount = Estate::model()->count($criteria);
		
		$condition = new CDbExpression('(zastroishik IN("'.$model->en_title.'") OR podryadchik IN("'.$model->en_title.'")) AND sold = 0');
		$flatDistricts=Estate::model()->findAll(array(
			'condition'=>$condition,
			'select'=>'t.district',
			'group'=>'t.district',
			'distinct'=>true,
		));
		
		foreach($flatDistricts as $key => $signle):
		//	var_dump($signle->district);
			if(!$signle->district_title)
				unset($flatDistricts[$key]);
		endforeach;
		
		
        $cr=new CDbCriteria;
        $cr->distinct = true;
        $cr->condition = 'builder_id=:t_id';
        $cr->order = 'datepublish DESC';
        $cr->limit = 4;
        $cr->params = array(':t_id'=>$model->id);
        $loadNews = News::model()->with('tags')->findAll($cr); 
        
        $model->title = 'Строительная компания '.$model->title;
        $this->pageDescriptionOverride = true;
        $this->pageDescription = 'Все предложения от строителя '.$model->title.': дома, квартиры, ЖК, строящиейся и сданные. ';
            

		
		$this->render('wide',array(
			'model'=>$model,
			'builderBuildings'=>$builderBuildings,
			'builderBuildingsCount'=>$builderBuildingsCount,
			'builderFlats'=>$builderFlats,
			'builderFlatsCount'=>$builderFlatsCount,
			'flatDistricts'=>$flatDistricts,
			'place'=>$place,
			'loadNews'=>$loadNews,
		));
		
		
	}
	
	public function actionNews()
	{
	
		$en_title = Yii::app()->request->getParam('en_title', '0');
		$model = Builder::model()->findByAttributes(array('en_title'=>$en_title));
	
		if (count($model) == 0)
				throw new CHttpException(404,'The requested page does not exist.');			
				
		$this->layout = '//layouts/main';
		$cr=new CDbCriteria;
        $cr->distinct = true;
        $cr->condition = 'builder_id=:t_id';
        $cr->order = 'datepublish DESC';
        $cr->limit = 12;
        $cr->params = array(':t_id'=>$model->id);
        $loadNews = News::model()->with('tags')->findAll($cr); 
            
		
		$this->render('news',array(
			'model'=>$model,
			'loadNews'=>$loadNews,
		));

	}

	public function actionAdmin()
	{
		$this->checkPermissions(array('admin','manager'));
		$model = Builder::model()->findAll(); 
		
		$this->render('admin',array(
			'model'=>$model,
		));
	}
	
	public function actionRecalculate()
	{
		$this->recalculateRatings(true);
		$this->redirect('/zastroischiki/admin/rating/');
	}
	
	public function actionRating()
	{
		$this->checkPermissions(array('admin','manager'));
		
		if(isset($_POST['Builder']))
		{
			foreach($_POST['Builder'] as $key => $item) {
				$workmodel = Builder::model()->findByPk($key);
				if($workmodel) {
					foreach($item as $key => $item1) {
						if($key)
							$workmodel[$key] = $item1;
					}
				//	die(print_r($workmodel));
					$workmodel->save();
				}
			}	
		}
		
		$model = Builder::model()->findAll(array('order'=>'rating DESC')); 
		
		$this->render('rating',array(
			'model'=>$model,
		));
	}
	
	public function actionCreate()
	{
		$this->checkPermissions(array('admin','manager'));
		$_SESSION['KCFINDER']['disabled'] = false; // enables the file browser in the admin
		$_SESSION['KCFINDER']['uploadURL'] = Yii::app()->baseUrl."/uploads/"; // URL for the uploads folder
		$_SESSION['KCFINDER']['uploadDir'] = Yii::app()->basePath."/../uploads/"; // path to the uploads folder
		$model=new Builder;
		
		
		$model->worktime = '<p>Отдел продаж:</p>
							<p>Понедельник - пятница с 08:00 до 19:00</p>
							<p>Обеденный перерыв: без перерыва</p>
							<p>Выходные дни: суббота, воскресение</p>';
		//получаем список жанров
		//$types = Types::model()->findAll();
		//если получены данные игры
		if(isset($_POST['Builder']))
		{
			//записываем атрибуты
			$model->attributes=$_POST['Builder'];
			$model->cities = $model->cityIds;
			
			$model = $this->saveImage($model);
			
			//сохраняем игру
			//$model->save();
			if($model->save())
				$this->redirect(array('admin'));
		}
		//показываем форму
		$this->render('create',array('model'=>$model));//, 'types'=>$types));
	}


	public function actionDelete()
	{
		$this->checkPermissions(array('admin','manager'));
		//if(Yii::app()->request->isPostRequest)
		//{			
		$model=$this->loadModel();
		// we only allow deletion via POST request
		$model->delete();

		// if AJAX request (triggered by deletion via admin grid view), we should not redirect the browser
		if(!isset($_GET['ajax']))
			$this->redirect(array('admin'));
		//}
		//else
		//	throw new CHttpException(400,'Invalid request. Please do not repeat this request again.');
	}

	public function actionUpdate()
	{
		$this->checkPermissions(array('admin','manager'));
		$_SESSION['KCFINDER']['disabled'] = false; // enables the file browser in the admin
		$_SESSION['KCFINDER']['uploadURL'] = Yii::app()->baseUrl."/uploads/"; // URL for the uploads folder
		$_SESSION['KCFINDER']['uploadDir'] = Yii::app()->basePath."/../uploads/"; // path to the uploads folder
		
		$model=$this->loadModel();
		
		$reserveString = $model->en_title;
		//получаем список жанров
		//$types = Types::model()->findAll();
		//если получены данные игры
		if(isset($_POST['Builder']))
		{
			//записываем атрибуты
			$model->attributes=$_POST['Builder'];
			if($_POST['Builder']['cityIds'])
				$model->cities = $model->cityIds;
			else
				$model->cities = array();
			
			$model = $this->saveImage($model);
			
			$model->en_title = preg_replace('/[^A-Za-z0-9\-_]/', '', $model->en_title);
			if (!trim($model->en_title))
				$model->setSlug();
			
			if($model->save()) {				
				Estate::model()->updateAll(array('zastroishik'=>$model->en_title),'zastroishik="'.$reserveString.'"');
				Condominium::model()->updateAll(array('zastroishik'=>$model->en_title),'zastroishik="'.$reserveString.'"');
				$this->redirect(array('admin'));			
			}
		}
		//показываем форму
		$this->render('update',array('model'=>$model));//, 'types'=>$types));
	}

	public function loadModel()
	{
		if($this->_model===null)
		{
			if(isset($_GET['en_title']))
			{
				$condition='';
				$en_title = $_GET['en_title'];
				$this->_model=Builder::model()->findByAttributes(array('en_title'=>$en_title));
			}
			if($this->_model===null)
				throw new CHttpException(404,'The requested page does not exist.');
		}
		return $this->_model;
	}
	/**
	 * Displays the login page
	 */
}