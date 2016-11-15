<?php

class Block extends CActiveRecord
{
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_blocks';
	}

	public function rules()
	{
		return array(
			array('en_name', 'required'),
			array('en_name', 'length', 'max'=>255),
			array('en_name, text, text_2, text_3, email_info', 'safe'),
			array('id, en_name, text, text_2, text_3, email_info', 'safe', 'on'=>'search'),
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
			'en_name' => Yii::t('app', 'slug'),
			'text' => Yii::t('app', 'Содержимое'),
			'text_2' => Yii::t('app', 'Вторая, выделенная, строка'),
			'text_3' => Yii::t('app', 'Третья строка'),
			'email_info' => Yii::t('app', 'Содержание письма администратору'),
		);
	}

	public function search()
	{
		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);

		$criteria->compare('en_name',$this->en_name,true);

		$criteria->compare('text_1',$this->text_1,true);

		$criteria->compare('text_2',$this->text_2,true);

		$criteria->compare('text_3',$this->text_3,true);

		$criteria->compare('email_info',$this->email_info,true);

		return new CActiveDataProvider(get_class($this), array(
			'criteria'=>$criteria,
		));
	}
}
