<?php

class Option extends CActiveRecord
{
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_option';
	}

	public function rules()
	{
		return array(
			array('en_name, value', 'required'),
			array('en_name, value', 'length', 'max'=>255),
			array('en_name', 'unique'),
			array('id, en_name, value', 'safe', 'on'=>'search'),
		);
	}

	public function relations()
	{
		return array(	
			'options'   => array(self::HAS_MANY,   'OptionList',   'parent'),
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
			'en_name' => Yii::t('app', 'Название'),
			'info' => Yii::t('app', 'Описание'),
			'value' => Yii::t('app', 'Значение'),
		);
	}

	public function search()
	{
		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);

		$criteria->compare('name',$this->name,true);

		$criteria->compare('info',$this->info,true);

		$criteria->compare('value',$this->value,true);

		return new CActiveDataProvider(get_class($this), array(
			'criteria'=>$criteria,
		));
	}
}
