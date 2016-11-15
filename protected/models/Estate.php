<?php

class Estate extends CActiveRecord
{
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_estate';
	}

	public function rules()
	{
		return array(
			array('title, square, address_street, address_house', 'required'),
			array('title', 'length', 'max'=>255),			
			array('title, rooms, address_street, address_house, address_building, address_flat, subtype, ceiling_height, square, square_living, square_kitchen, square_land, floor, top_floor, material, sanuzel, balcony, plan, address, cost, special, mortgage, rassrochka, matcapital, seller_name, seller_phone, seller_email, seller_additional, city, type, district, text, latitude, longitude, location, commercial_type, commercial_business, zoom, sold, zastroishik, podryadchik, user_id, year', 'safe'),
            array('tour', 'file', 'types'=>'flv, swf', 'allowEmpty'=>true),
			array('id, name, info, value', 'safe', 'on'=>'search'),
	        array('create_time','default',
	              'value'=>new CDbExpression('NOW()'),
	              'setOnEmpty'=>false,'on'=>'insert'),
	        array('update_time','default',
	              'value'=>new CDbExpression('NOW()'),
	              'setOnEmpty'=>false,'on'=>'insert')
		);
	}

	public function relations()
	{
		return array(
			'attached_images'   => array(self::HAS_MANY,   'EstateImage',   'parent'),
			'user'   => array(self::BELONGS_TO,   'SiteUser',   'user_id'),
			'district_title'   => array(self::BELONGS_TO,   'District',   'district'),
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

			'sold' => Yii::t('app', 'Продано?'),
			'city' => Yii::t('app', 'Город'),
			'district' => Yii::t('app', 'Район'),
			'cost' => Yii::t('app', 'Стоимость'),
			'special' => Yii::t('app', 'Специальное предложение'),
			'address' => Yii::t('app', 'Адрес'),
			'address_house' => Yii::t('app', 'Дом'),
			'rooms' => Yii::t('app', 'Комнат'),
			'square' => Yii::t('app', 'Общая площадь'),
			'square_living' => Yii::t('app', 'Жилая площадь'),
			'square_kitchen' => Yii::t('app', 'Площадь кухни'),
			'square_land' => Yii::t('app', 'Площадь участка'),
			'ceiling_height' => Yii::t('app', 'Высота потолка, м.'),
			'floor' => Yii::t('app', 'Этаж'),
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
		$this->text = $p->purify($this->text);	
	    
		parent::afterFind();
    }
	
    public function getCondos()
    {
    		
		$criteria = new CDbCriteria;
		$criteria->addBetweenCondition('latitude', $this->latitude-0.001, $this->latitude+0.001);
		$criteria->addBetweenCondition('longitude', $this->longitude-0.001, $this->longitude+0.001);
		
		$estate = Condominium::model()->findAll($criteria); 

	    return $estate;
    }
	
	public function getViewURL()
	{
		return '/'.$this->type.'/'.$this->id.'-'.$this->slug;
	}
	public function getMainImage()
	{
		if(!$this->image)
			return '/img/no_photo.jpg';
		else
			return $this->image;
	}
	public function getDistrictBuilderURL($builder)
	{
		return '/zastroischiki/'.$builder.'/flats/'.$this->district_title->en_title;
	}
	public function getCountWithBuilder($builder)
	{	
		$criteria = new CDbCriteria;			
		//$criteria->condition = '(zastroishik=:zastroishik AND (podryadchik="" OR podryadchik IS NULL) AND district = :district) OR (podryadchik=:zastroishik AND district = :district)';
		$criteria->condition = '(zastroishik=:zastroishik AND district = :district AND sold = 0) OR (podryadchik=:zastroishik AND district = :district AND sold = 0)';
		$criteria->params=array(':zastroishik'=>$builder,':district'=>$this->district);
			
		$builderFlatsCount = Estate::model()->count($criteria);
		return $builderFlatsCount;
	}
	
	public function beforeSave()
	{
	
		$p = new CHtmlPurifier();
		$p->options = array('HTML.Allowed'=>'', 'URI.AllowedSchemes'=>array(
		  'http' => true,
		  'https' => true,
		));

		$condo = $this->getCondos();
				
		if($condo) {
			$condo = $condo[0];
			$this->parent_condo_id = $condo->id;
		} else {
			$this->parent_condo_id = 0;
		}
			
		//foreach($this->attributes as &$attribute) {
		//	$attribute = $p->purify($attribute);
		//}
		$this->text = $p->purify($this->text);
		$this->address_street = trim($p->purify($this->address_street));
		$this->address_house = trim($p->purify($this->address_house));
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
