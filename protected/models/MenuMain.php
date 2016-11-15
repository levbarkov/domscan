<?php

class MenuMain extends CActiveRecord
{


	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_menu_main';
	}

	public function rules()
	{
		return array(
			array('name, title, value', 'required'),
			array('name', 'length', 'max'=>255),
			array('id, name, title, value', 'safe', 'on'=>'search'),
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
			'title' => Yii::t('app', 'Заголовок'),
			'value' => Yii::t('app', 'Пункты меню'),
		);
	}
	
	public function afterFind()
	{
	    //$this->value = unserialize($this->value);
	    if(!$this->value)
	     $this->value = serialize(array(array('title'=>'','url'=>''),array('title'=>'','url'=>''),
	     			array('title'=>'','url'=>''),array('title'=>'','url'=>''),array('title'=>'','url'=>''),
	     			array('title'=>'','url'=>''),array('title'=>'','url'=>''),array('title'=>'','url'=>''),
	     			array('title'=>'','url'=>'')));
	    return parent::afterFind();
	}

	public function beforeSave()
	{
	    //$this->value = serialize($this->value);
	    return parent::beforeSave();
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
