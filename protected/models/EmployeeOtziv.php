<?php

class EmployeeOtziv extends CActiveRecord
{
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_employee_otziv';
	}

	public function rules()
	{
		return array(
			//array('id', 'required'),
			array('id','safe'),
			array('id, text', 'safe', 'on'=>'search'),
		);
	}

	public function relations()
	{
		return array(
			'user'   => array(self::BELONGS_TO,   'SiteUser',   'user_id'),

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
			'photo' => Yii::t('app', 'Фотография'),
			'email' => Yii::t('app', 'Email'),
			'vk' => Yii::t('app', 'Vk'),
			'facebook' => Yii::t('app', 'Facebook'),
			'twitter' => Yii::t('app', 'Twitter'),
			'instagram' => Yii::t('app', 'Instagram'),
			'name' => Yii::t('app', 'ФИО'),
			'title' => Yii::t('app', 'Должность'),
			'text' => Yii::t('app', 'Text'),
		);
	}
	
	public function getItems()
	{
		return $this->findAll();
	}
	

	public function search()
	{
		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);

		$criteria->compare('photo',$this->photo,true);

		$criteria->compare('email',$this->email,true);

		$criteria->compare('vk',$this->vk,true);

		$criteria->compare('facebook',$this->facebook,true);

		$criteria->compare('twitter',$this->twitter,true);

		$criteria->compare('instagram',$this->instagram,true);

		$criteria->compare('name',$this->name,true);

		$criteria->compare('title',$this->title,true);

		$criteria->compare('text',$this->text,true);

		return new CActiveDataProvider(get_class($this), array(
			'criteria'=>$criteria,
		));
	}
	
	public function beforeDelete()
	{

	    
	    return parent::beforeDelete();
	}
}
