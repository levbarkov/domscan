<?php

class District extends CActiveRecord
{
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_districts';
	}

	public function rules()
	{
		return array(
			array('city_id, name', 'required'),
			array('city_id, en_title', 'safe'),
		);
	}

	public function relations()
	{
		return array(
			'city'   => array(self::BELONGS_TO,   'City',    'city_id'),
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
			'name' => Yii::t('app', 'Название'),
			'info' => Yii::t('app', 'Описание'),
			'value' => Yii::t('app', 'Значение'),
		);
	}


	public function setSlug()
	{
		$converter = ConverterHelper::GetTransliteration();
		
		$string = mb_strtolower($this->name, 'UTF-8');; 
		$string = trim($string);
		$this->en_title = strtr($string, $converter); 
		
		return true;
	}	
	public function beforeSave()
	{
	    
	    if(!$this->en_title) { 
			$this->setSlug();
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
