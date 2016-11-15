<?php

class OptionList extends CActiveRecord
{
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_option_list';
	}

	public function rules()
	{
		return array(
			array('en_option_name, value, parent, en_parent_name', 'required'),
			array('en_option_name, value', 'length', 'max'=>255),
			array('id, parent, en_parent_name, en_name, value', 'safe', 'on'=>'search'),
		);
	}

	public function relations()
	{
		return array(
			'Option'   => array(self::BELONGS_TO,   'Option',   '', 'on'=>'en_name = en_parent_name','joinType'=>'INNER JOIN', 'alias'=>'Option'),
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
			'en_option_name' => Yii::t('app', 'Название'),
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
