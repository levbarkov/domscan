<?php

class MetkiController extends Controller
{
	public $layout='//layouts/admin_template';
	public $objects_loaded_type = false;
	public $title;
	public $seoblock_name = 'novostroiki';
	public $banner = 'new-buildings-section_top_1170-90';
	
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
				'actions'=>array('index','create','update','admin','delete','view','commercial','list','flats','pdf','newpdf'),
				'users'=>array('*'),
			),
			array('allow', 
				'actions'=>array('create','update','list','ajaxdeleteimage','ajaxdeleteallimages','ajaxchooseimage'),
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

	public function actionIndex()
	{
		$this->redirect('/');
	}
	
	
	
	public function actionView()
	{
		$this->layout = 'landing';
		

		$en_title = Yii::app()->request->getParam('en_title', false);
		
		$en_title = explode('-', $en_title);
		
		$current_page = (int)Yii::app()->request->getParam('page_id', 1);
		$offset = 16*($current_page-1);
		
				
		$criteria = new CDbCriteria;		
		$criteria->offset = $offset;
		
		if($en_title[1] == 'vtorichky') {
			$criteria->addCondition("type = 'flat'");
			$type_string = 'вторичку';	
			}
		if($en_title[1] == 'kvartiry') {
			$criteria->addCondition("type = 'new'");
			$type_string = 'квартиру';	
			}
							
		if($en_title[0] == 'kupit') {
			$criteria->addCondition("subtype = 'sale'");
			$subtype_string = 'Купить';
		} else {
			$criteria->addCondition("subtype != 'sale'");
			$subtype_string = 'Снять';
		}
			
		switch($en_title[2]) {
			case 'odnokomnatnyiy': $rooms_string = 'однокомнатную'; $criteria->addCondition("rooms = 1"); break;
			case 'dvukhkomnatnyiy': $rooms_string = 'двухкомнатную'; $criteria->addCondition("rooms = 2"); break;
			case 'trexkomnatnyiy': $rooms_string = 'трехкомнатную'; $criteria->addCondition("rooms = 3"); break;
			case 'chetyrexkomnatnyiy': $rooms_string = 'четырехкомнатную'; $criteria->addCondition("rooms = 4"); break;
			case 'pyatikomnatnyiy': $rooms_string = 'пятикомнатную'; $criteria->addCondition("rooms = 5"); break;
		}	
		
		$price = $en_title[3].'-'.$en_title[4].'-'.$en_title[5];
		switch($price) {
			case 'za-million-': $price_string = 'миллион'; $criteria->addCondition("cost >= 0 AND cost <= 1500000"); break;
			case 'za-dva-milliona': $price_string = 'два миллиона'; $criteria->addCondition("cost >= 1500000 AND cost <= 2500000"); break;
			case 'za-tri-milliona': $price_string = 'три миллиона'; $criteria->addCondition("cost >= 2500000 AND cost <= 3500000"); break;
			case 'cnetyre-milliona': $price_string = 'четыре миллиона'; $criteria->addCondition("cost >= 3500000 AND cost <= 9500000"); break;
		}	
		
		$mikrorayon = $en_title[4];
		//die($mikrorayon);
		$district = District::model()->findByAttributes(array('en_title'=>$mikrorayon));
		if($district) {
			$criteria->addCondition("district = ".$district->id); 
		}	
			
				
		$criteria->addCondition("sold = 0");
		
		$estate_count = Estate::model()->count($criteria); 
		
		$criteria->limit = 16;
		
		$estate = Estate::model()->findAll($criteria); 
		
		if($district) {
			$this->title = $subtype_string.' '.$type_string.' '.$rooms_string.' в '.$district->name;
		} else {
			$this->title = $subtype_string.' '.$type_string.' '.$rooms_string.' за '.$price_string;
			
		}
		
		$count = $estate_count;
		$page_count = ceil($count/16);
		
	 	$this->setPageTitle($this->title);
 				
		$this->pageDescriptionOverride = true;
		$this->pageDescription = $this->title;

	 				
		$this->render('condo_flats_view',array(
			'model'=>$estate, 
			'en_title'=>$en_title,
			'entries_count'=>$count, 
			'page_count' => $page_count,
			'current_page' => $current_page,
		));

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
