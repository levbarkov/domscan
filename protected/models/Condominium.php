<?php

class Condominium extends CActiveRecord
{
	public $photo;
	
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_condo';
	}

	public function rules()
	{
		return array(
			array('title', 'required'),
			array('title', 'length', 'max'=>255),	
			array('finished, show_all_pages', 'boolean'),		
			array('title, slug, address_street, address_house, address_building, address_flat, subtype, ceiling_height, top_floor, material, sanuzel, balcony, plan, address, cost, special, mortgage, rassrochka, matcapital, seller_name, seller_phone, seller_email, seller_additional, city, type, district, text, latitude, longitude, location, commercial_type, commercial_business, zoom, zastroishik, user_id, year', 'safe'),
			array('fz214, begin_and_end, porches, advertisement, condo_type, podryadchik', 'safe'),
            array('tour', 'file', 'types'=>'flv, swf', 'allowEmpty'=>true),
			array('id, name, info, value', 'safe', 'on'=>'search'),
			array('podryadIds, all_rooms, all_squares, use_data, photo', 'safe'),
			array('update_time','default',
              'value'=>new CDbExpression('NOW()'),
              'setOnEmpty'=>false,'on'=>'update'),
	        array('update_time','default',
	              'value'=>new CDbExpression('NOW()'),
	              'setOnEmpty'=>false,'on'=>'insert')
		);
	}

	public function relations()
	{
		return array(
			'attached_images'   => array(self::HAS_MANY,   'CondominiumImage',   'parent'),
			'attached_pages'   => array(self::HAS_MANY,   'CondominiumStaticPage',   'parent_id'),
			'user'   => array(self::BELONGS_TO,   'SiteUser',   'user_id'),
			'city_name'   => array(self::BELONGS_TO,   'City',   'city'),
			'district_name'   => array(self::BELONGS_TO,   'District',   'district'),	
			'podryadchiki'=>array(self::MANY_MANY, 'Builder', 'real_podryadchiki_to_condos(condo_id, builder_id)'),
		);
	}
	

	public function behaviors()
	{
		return array('CAdvancedArBehavior',
				array('class' => 'ext.CAdvancedArBehavior')
				);
	}

	public function attributeLabels()
	{
		return array(
			'id' => Yii::t('app', 'ID'),
			'subtype' => Yii::t('app', 'Тип объявления'),
			'text' => Yii::t('app', 'Текст'),
			
			'show_all_pages' => Yii::t('app', 'Показывать все подстраницы на странице объекта'),

			'finished' => Yii::t('app', 'Дом сдан?'),
			'city' => Yii::t('app', 'Город'),
			'district' => Yii::t('app', 'Район'),
			'cost' => Yii::t('app', 'Стоимость'),
			'special' => Yii::t('app', 'Специальное предложение'),
			'address' => Yii::t('app', 'Адрес'),
			'address_street' => Yii::t('app', 'Улица'),
			'address_house' => Yii::t('app', 'Дом'),
			'address_building' => Yii::t('app', 'Строение'),
			'rooms' => Yii::t('app', 'Комнат'),
			'square' => Yii::t('app', 'Общая площадь'),
			'square_living' => Yii::t('app', 'Жилая площадь'),
			'square_kitchen' => Yii::t('app', 'Площадь кухни'),
			'square_land' => Yii::t('app', 'Площадь участка'),
			'ceiling_height' => Yii::t('app', 'Высота потолка, м.'),
			'top_floor' => Yii::t('app', 'Всего этажей'),
			'material' => Yii::t('app', 'Материал стен'),
			'sanuzel' => Yii::t('app', 'Санузел'),
			'plan' => Yii::t('app', 'Планировка'),
			'balcony' => Yii::t('app', 'Балкон'),
			'mortgage' => Yii::t('app', 'Есть ипотека?'),
			'rassrochka' => Yii::t('app', 'Доступна рассрочка'),
			'matcapital' => Yii::t('app', 'Материнский капитал'),
			'seller_name' => Yii::t('app', 'Имя продавца'),
			'seller_email' => Yii::t('app', 'e-mail продавца'),
			'seller_phone' => Yii::t('app', 'Телефон продавца'),
			'seller_additional' => Yii::t('app', 'Дополнительная информация о продавце (Skype и аналоги)'),
			'title' => Yii::t('app', 'Название объявления'),
			'commercial_type' => Yii::t('app', 'Тип коммерческого объекта'),
			'commercial_business' => Yii::t('app', 'Тип бизнеса'),
			'zastroishik' => Yii::t('app', 'Застройщик'),
			'year' => Yii::t('app', 'Год сдачи'),
			'fz214' => Yii::t('app', 'Дом соответствует ФЗ 214'),
			'begin_and_end' => Yii::t('app', 'Начало и конец строительства'),
			'porches' => Yii::t('app', 'Подъездов'),
			'condo_type' => 'Класс жилого дома',
			'podryadchik' => 'Подрядчик',
			'podryadchiki' => 'Подрядчики',
			
			'all_squares' => 'Общая площадь помещений, кв.м.',
			'all_rooms' => 'Общее количество помещений',
			'use_data' => 'Использовать введенные данные при расчете рейтинга',
		);
	}
	
    public function afterFind()
    {
		if (!$this->address_street) {
		 	$this->address_street = $this->address;
		}
		$elements_view = Yii::app()->request->getParam('view', 'grid');
		if($elements_view == 'map')
			$this->address_street = $this->address_street . ' ' . $this->address_house;
			
		$p = new CHtmlPurifier();
		$p->options = array('HTML.Allowed'=>'', 'URI.AllowedSchemes'=>array(
		  'http' => true,
		  'https' => true,
		));

		//foreach($this->attributes as &$attribute) {
		//	$attribute = $p->purify($attribute);
		//}
		//$this->text = $p->purify($this->text);	
		
        if (!empty($this->podryadchiki))
        {
            foreach ($this->podryadchiki as $n => $podryadchik)
                $this->podryadIds[] = $podryadchik->id;
        }
        
	    
		parent::afterFind();
    }
    
	public $podryadIds = array();
    
    public function countFlatsToSale()
    {
    		
		$criteria = new CDbCriteria;
		$criteria->addBetweenCondition('latitude', $this->latitude-0.0007, $this->latitude+0.0007);
		$criteria->addBetweenCondition('longitude', $this->longitude-0.0007, $this->longitude+0.0007);
		$criteria->addCondition('sold = 0');
		$criteria->addCondition('subtype = "sale"');
		
		$estate = Estate::model()->findAll($criteria); 

	    return count($estate);
    }
    
    public function getSquarePrice()
    {
    	$criteria = new CDbCriteria;
		$criteria->addBetweenCondition('latitude', $this->latitude-0.0007, $this->latitude+0.0007);
		$criteria->addBetweenCondition('longitude', $this->longitude-0.0007, $this->longitude+0.0007);
		$criteria->addCondition('cost != 0');
		$criteria->addCondition('sold = 0');
		$criteria->addCondition('subtype = "sale"');
		$criteria->order = 'cost/square ASC';
		$criteria->limit = 1;
		
		$estate = Estate::model()->findAll($criteria); 

		if($estate)
	    	return $estate[0]->cost/$estate[0]->square;
	    else
	    	return 0;
    }
	
	public function getDistrictUrl() 
	{
		if($this->district_name->en_title)
			return $this->district_name->en_title.'/';
		else
			return '';
	}
	public function getUpdateURL()
	{
		return '/novostroiki/update/'.$this->id;
	}
	public function getFlatsPage()
	{
		
		return '/novostroiki/'.$this->city_name->en_slug.'/'.$this->getDistrictUrl().$this->id.'-'.$this->slug.'/flats';
	}
	public function getCommercialPage()
	{
		return '/novostroiki/'.$this->city_name->en_slug.'/'.$this->getDistrictUrl().$this->id.'-'.$this->slug.'/commercial';
	}
	public function getViewUrl() {
		return $this->pagesViewSelf();
	}
	public function pagesViewSelf()
	{
		return '/novostroiki/'.$this->city_name->en_slug.'/'.$this->getDistrictUrl().$this->id.'-'.$this->slug.'/';
	}
	public function pagesAdminURL()
	{
		return '/novostroiki/'.$this->city_name->en_slug.'/'.$this->getDistrictUrl().$this->id.'-'.$this->slug.'/listPages';
	}
	public function pagesCreateURL()
	{
		return '/novostroiki/'.$this->city_name->en_slug.'/'.$this->getDistrictUrl().$this->id.'-'.$this->slug.'/createPage';
	}
	
	public function beforeDelete()
	{
		foreach($this->attached_pages as $page) {
			$page->delete();
		}
	    return parent::beforeDelete();
	}
	public function beforeSave()
	{
	
		$p = new CHtmlPurifier();
		$p->options = array('HTML.Allowed'=>'', 'URI.AllowedSchemes'=>array(
		  'http' => true,
		  'https' => true,
		));
		
		$criteria = new CDbCriteria;
		$criteria->addBetweenCondition('latitude', $this->latitude-0.0003, $this->latitude+0.0003);
		$criteria->addBetweenCondition('longitude', $this->longitude-0.0003, $this->longitude+0.0003);
		
		$estate = Condominium::model()->findAll($criteria); 
		
		$estate = Condominium::model()->count($criteria); 
		
		if($estate > 1) {
			$this->latitude = $this->latitude-0.00031;
			$this->longitude = $this->longitude+0.00031;
		}
		
		
		//die(print_r($estate, true));

		

		//foreach($this->attributes as &$attribute) {
		//	$attribute = $p->purify($attribute);
		//}
		//$this->text = $p->purify($this->text);
		$this->address_street = $p->purify($this->address_street);
		$this->seller_name = $p->purify($this->seller_name);
	
	    if($this->address_street && $this->address_house) {
		    $this->address = $this->address_street . ' ' . $this->address_house;
	    }
		if($this->address_street && $this->address_house && $this->address_building) {
		    $this->address = $this->address_street . ' ' . $this->address_house. ', стр.'.$this->address_building;
	    }
	    if($this->address_street && $this->address_house && $this->address_flat) {
		    $this->address = $this->address_street . ' ' . $this->address_house . ', кв.'. $this->address_flat;
	    }
	    if($this->address_street && $this->address_house && $this->address_building && $this->address_flat) {
		    $this->address = $this->address_street . ' ' . $this->address_house . ', стр.'.$this->address_building.', кв.'. $this->address_flat;
	    }
	    
	    if(!$this->date) { // || $this->date == '0000-00-00') {
		    $this->date = date('Y-m-d');
	    }
	    return parent::beforeSave();
	}

	public function search()
	{
		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);


		return new CActiveDataProvider(get_class($this), array(
			'criteria'=>$criteria,
		));
	}
}
