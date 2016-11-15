<?php

class EstateConfigNew extends CActiveRecord
{
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_estate_config_new';
	}

	public function rules()
	{
		return array(
			array('slug', 'required'),
			array('slug', 'length', 'max'=>255),			
			array('slug, name, type_flat, type_new, type_house, type_land, type_commercial, method, linked, parent, class, append, prepend, block, sorting, admin', 'safe'),
			array('id, slug, types, block, sorting', 'safe', 'on'=>'search'),
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
			'name' => Yii::t('app', 'Имя'),
			'parent' => Yii::t('app', 'Родительское свойство'),
			'linked' => Yii::t('app', 'Связанная опция'),
			'method' => Yii::t('app', 'Тип строки'),
			'class' => Yii::t('app', 'Вид текстового поля'),
			'sorting' => Yii::t('app', 'Сортировка'),
			'type_flat' => Yii::t('app', 'Квартиры'),
			'type_new' => Yii::t('app', 'Новостройки'),
			'type_house' => Yii::t('app', 'Дома'),
			'type_land' => Yii::t('app', 'Участки'),
			'type_commercial' => Yii::t('app', 'Коммерческая недвижимость'),
			'admin' => Yii::t('app', 'Администраторское поле (видимо только администратору)'),
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
