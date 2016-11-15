<?php

class FaqCategory extends CActiveRecord
{
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_faq';
	}

	public function rules()
	{
		return array(
			array('title', 'required'),
			array('title, sort', 'safe'),
		);
	}

	public function relations()
	{
		return array(
			'items'   => array(self::HAS_MANY,   'FaqItem',    'faq_id','order'=>'sort ASC'),
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
