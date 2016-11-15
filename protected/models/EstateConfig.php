<?php

class EstateConfig extends CActiveRecord
{
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_estate_config';
	}

	public function rules()
	{
		return array(
			array('type', 'required'),
			array('type', 'length', 'max'=>255),			
			array('type, rooms, square, ceiling_height, square_living, square_kitchen, square_land, floor, top_floor, material, sanuzel, balcony, plan, address, cost, special, mortgage, seller_name, seller_phone, seller_email, city, type, district, latitude, longitude, location, commercial_business, commercial_type, zoom', 'safe'),
			array('id, name, info, value', 'safe', 'on'=>'search'),
		);
	}

	public function relations()
	{
		return array(
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
			'address' => Yii::t('app', 'Адрес'),
			'rooms' => Yii::t('app', 'Комнат'),
			'square' => Yii::t('app', 'Общая площадь'),
			'square_living' => Yii::t('app', 'Жилая площадь'),
			'square_kitchen' => Yii::t('app', 'Площадь кухни'),
			'square_land' => Yii::t('app', 'Площадь участка'),
			'ceiling_height' => Yii::t('app', 'Высота потолка'),
			'floor' => Yii::t('app', 'Этаж'),
			'top_floor' => Yii::t('app', 'Всего этажей'),
			'material' => Yii::t('app', 'Материал стен'),
			'sanuzel' => Yii::t('app', 'Санузел'),
			'plan' => Yii::t('app', 'Планировка'),
			'balcony' => Yii::t('app', 'Балкон'),
			'mortgage' => Yii::t('app', 'Есть ипотека?'),
			'seller_name' => Yii::t('app', 'Имя продавца'),
			'seller_email' => Yii::t('app', 'e-mail продавца'),
			'seller_phone' => Yii::t('app', 'Телефон продавца'),
			'commercial_type' => Yii::t('app', 'Тип коммерческого объекта'),
			'commercial_business' => Yii::t('app', 'Тип бизнеса'),
		);
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
