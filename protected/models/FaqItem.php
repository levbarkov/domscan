<?php

class FaqItem extends CActiveRecord
{
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_faq_item';
	}

	public function rules()
	{
		return array(
			array('title', 'required'),
			array('title, text, sort, faq_id', 'safe'),
		);
	}

	public function relations()
	{
		return array(
			'category'   => array(self::BELONGS_TO,   'FaqCategory',    'faq_id'),
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
			'title' => Yii::t('app', 'Заголовок'),
			'text' => Yii::t('app', 'Текст'),
			'sort' => Yii::t('app', 'Сортировка'),
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
