<?php

class ModeratorLog extends CActiveRecord
{
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_modlog';
	}

	public function rules()
	{
		return array(
			array('unique_id, text', 'required'),
			array('text, url, time, user', 'safe'),
		);
	}

	public function relations()
	{
		return array(
			'user_ok'   => array(self::BELONGS_TO,   'SiteUser',   'user'),
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
			'time' => Yii::t('app', 'Время'),

			'text' => Yii::t('app', 'Содержание'),
			'url' => Yii::t('app', 'Ссылка'),
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
