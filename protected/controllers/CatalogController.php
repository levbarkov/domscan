<?php

class CatalogController extends Controller
{

	public $application = false;
	public $title;
	public $banner = 'real-estate-filter-section_top_1170-90';
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


	
	public function actionNew()
	{
		$this->application = true; 
		$this->seoblock_name = 'new';
		$this->layout = '//layouts/landing';
		$this->title = 'Каталог новостроек';
		$this->render('//site/index',array('selected_type'=>'new'));
	}
	public function actionFlat()
	{
		$this->application = true; 
		$this->seoblock_name = 'sale';
		$this->layout = '//layouts/landing';
		$this->title = 'Каталог вторичного жилья';
		$this->render('//site/index',array('selected_type'=>'flat'));
	}
	public function actionFlat_rent()
	{
		$this->application = true; 
		$this->seoblock_name = 'flat_rental';
		$this->layout = '//layouts/landing';
		$this->title = 'Аренда вторичного жилья';
		$this->render('//site/index',array('selected_type'=>'flat'));
	}
	public function actionHouse()
	{
		$this->application = true; 
		$this->seoblock_name = 'home';
		$this->layout = '//layouts/landing';
		$this->title = 'Каталог загородной недвижимости';
		$this->render('//site/index',array('selected_type'=>'house'));
	}
	public function actionCommercial()
	{
		$this->application = true; 
		$this->seoblock_name = 'commercial';
		$this->layout = '//layouts/landing';
		$this->title = 'Каталог коммерческой недвижимости';
		$this->render('//site/index',array('selected_type'=>'commercial'));
	}
	public function actionCommercial_rent()
	{
		$this->application = true; 
		$this->seoblock_name = 'commercial';
		$this->layout = '//layouts/landing';
		$this->title = 'Аренда коммерческой недвижимости';
		$this->render('//site/index',array('selected_type'=>'commercial'));
	}
	public function actionLand()
	{
		$this->application = true; 
		$this->seoblock_name = 'land';
		$this->layout = '//layouts/landing';
		$this->title = 'Каталог земельных участков';
		$this->render('//site/index',array('selected_type'=>'land'));
	}
	/**
	 * This is the default 'index' action that is invoked
	 * when an action is not explicitly requested by users.
	 */
	
	

}