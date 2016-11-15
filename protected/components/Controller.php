<?php
/**
 * Controller is the customized base controller class.
 * All controller classes for this application should extend from this base class.
 */
class Controller extends CController
{
	/**
	 * @var string the default layout for the controller view. Defaults to '//layouts/column1',
	 * meaning using a single column layout. See 'protected/views/layouts/column1.php'.
	 */
	public $layout='//layouts/landing';
	public $pageDescription='';
	public $pageDescriptionOverride = false;
	
	public $city_id;
	public $city_title;
	
	public $property_title = false;
	
	public $banner = 'main_top_1170-90';
	
	public $seoblock_name = 'main';
		
	public function init() {
		$city_name = Yii::app()->request->getParam('locale', null);	
		$default_city_name = Setting::model()->findByAttributes(array('name'=>'default_city'))->value;
		
		if (Yii::app()->user->getState("city") != $city_name && $city_name){
			Yii::app()->user->setState("city",$city_name);		
		}	else {
			$city_name = Yii::app()->user->getState("city");
		}
		
		$city = City::model()->cache(1600)->findByAttributes(array('en_slug'=>$city_name));
		if($city){
			$this->city_id = $city->id;
			$this->city_title = $city->name;
		}
		else {
			
			$city = City::model()->cache(1600)->findByAttributes(array('en_slug'=>$default_city_name));
			if($city) {
				$this->city_id = $city->id;
				$this->city_title = $city->name;			
			} else {	
				throw new CHttpException(500, 'Критическая внутренняя ошибка сервера. Неверная директива default_city');
			}
		}			
		return true;
	}
			
	/**
	 * @var array context menu items. This property will be assigned to {@link CMenu::items}.
	 */
	public $menu=array();
	/**
	 * @var array the breadcrumbs of the current page. The value of this property will
	 * be assigned to {@link CBreadcrumbs::links}. Please refer to {@link CBreadcrumbs::links}
	 * for more details on how to specify this property.
	 */
	public $breadcrumbs=array();
	
	public function recalculateRatings($forced = false)
	{
		//here we calculate rating daily
		$criteria = new CDbCriteria;
		$date_end = date("Y-m-d");
		//$date_end = '2016-02-03';
		if(!$forced)
			$criteria->condition = "date_rating < '$date_end' OR date_rating IS NULL";
		
		$model = Builder::model()->findAll($criteria);
		foreach($model as $item) {
			$item->old_rating = $item->auto_rating;
			
			$item->square_sdano = $item->getSdanoSquare(true);
			$item->square_building = $item->getSdanoSquare(false);		
			
			$item->sdano_pomesch = $item->getSdanoRooms(true);
			$item->building_pomesch = $item->getSdanoRooms(false);
			
			$item->auto_rating = $item->getNewRating();
			
			if(!$forced) {
				if($item->old_rating > $item->auto_rating) {
					$item->rating_change = 'down';
				} else if($item->old_rating == $item->auto_rating) {
					$item->rating_change = 'none';
				} else {
					$item->rating_change = 'up';
				}
			}
			
			
			
			$rating_model = BuilderRatingHistory::model()->findByAttributes(array('builder_id'=>$item->id,'date'=>$date_end));
			if($forced && $rating_model) {
			//	die(print_r($rating_model));
			
				$rating_model->builder_id = $item->id;
				$rating_model->rating = $item->auto_rating;
				$rating_model->date = $date_end;
				
				$rating_model->condo_sdano = $item->getFinishedObjectsCount();
				$rating_model->condo_stroitsya = $item->getNonFinishedObjectsCount();
				
				$rating_model->square_sdano = $item->square_sdano;
				$rating_model->square_building = $item->square_building;		
				
				$rating_model->sdano_pomesch = $item->sdano_pomesch;
				$rating_model->building_pomesch = $item->building_pomesch;
				
				$rating_model->save();				
			}			
			if(!$rating_model) {
				$rating_model = new BuilderRatingHistory;
				$rating_model->builder_id = $item->id;
				$rating_model->rating = $item->auto_rating;
				$rating_model->date = $date_end;
				
				$rating_model->condo_sdano = $item->getFinishedObjectsCount();
				$rating_model->condo_stroitsya = $item->getNonFinishedObjectsCount();
				
				$rating_model->square_sdano = $item->square_sdano;
				$rating_model->square_building = $item->square_building;		
				
				$rating_model->sdano_pomesch = $item->sdano_pomesch;
				$rating_model->building_pomesch = $item->building_pomesch;
				
				$rating_model->save();
			} 
			//die(print_r($rating_model));
			
			$item->date_rating = $date_end;
			$item->rating = $item->auto_rating;
			$item->save();
		}
	}
	public function checkPermissions($array = array('admin','manager'))
	{
		$record=AdminUser::model()->findByAttributes(array('username'=> Yii::app()->user->id));
		if($record && in_array($record->role, $array)) {
		//	echo $record->role;
			//all ok!
			$_SESSION['KCFINDER']['disabled'] = false; // enables the file browser in the admin
			$_SESSION['KCFINDER']['uploadURL'] = Yii::app()->baseUrl."/uploads/"; // URL for the uploads folder
			$_SESSION['KCFINDER']['uploadDir'] = Yii::app()->basePath."/../uploads/"; // path to the uploads folder
		} else if(!$record) {
			$this->redirect('/site/login');
			Yii::app()->end();
		} else {
			throw new CHttpException(403, Yii::t('app', 'Недостаточно прав.'));
		}

	}
	
		
	public function checkUser()
	{
		$record=SiteUser::model()->findByAttributes(array('id'=> Yii::app()->user->id));
		if($record && Yii::app()->user->getState('user_type') == 'site_user') {
		//	echo $record->role;
			//all ok!
		} else if(!$record) {
			$this->redirect('/site/user');
			Yii::app()->end();
		} else {
			throw new CHttpException(403, Yii::t('app', 'Недостаточно прав.'));
		}

	}
	
	public function checkUserIndeed()
	{
		$record=SiteUser::model()->findByAttributes(array('id'=> Yii::app()->user->id));
		if($record) {
			return true;
		} else if(!$record) {
			return false;
		} else {
			return false;
		}

	}

	
	public function checkEditablePermissions($array = array('admin','manager'))
	{
		$record=AdminUser::model()->findByAttributes(array('username'=> Yii::app()->user->id));
		if($record && in_array($record->role, $array)) {
			return true;

		} else if(!$record) {
			return false;
		} else {
			return false;
		}

	}
	
	//public function setPageTitle()
	//{
	//	return true;
	//}
	
	protected function beforeRender($view)
    {	
		$seoblock = SEOBlock::model()->findByAttributes(array('en_name'=>$this->seoblock_name));
		if($seoblock && !$this->pageDescriptionOverride) 
		{
			$this->pageDescription = $seoblock->description;
			
			if(!$this->property_title) {
				$this->setPageTitle($seoblock->title);
			} else {
				$this->pageDescription = $this->property_title;
			}
		}
		return true;
	}
}