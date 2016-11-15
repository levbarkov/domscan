<?php

class DgisCache extends CActiveRecord
{
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_2gis_cache';
	}

	public function rules()
	{
		return array(
			array('cache_string, cache_storage, cache_expires', 'required'),
			array('cache_string', 'length', 'max'=>255),
			array('cache_string, cache_storage, cache_expires', 'safe', 'on'=>'search'),
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
			'name' => Yii::t('app', 'Название'),
			'info' => Yii::t('app', 'Описание'),
			'value' => Yii::t('app', 'Значение'),
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
