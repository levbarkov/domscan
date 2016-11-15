<?php

class City extends CActiveRecord
{
	public $city_id;
	
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_cities';
	}

	public function rules()
	{
		return array(
			array('name, en_slug', 'required'),
			array('en_slug, important, sort', 'safe'),
		);
	}

	public function relations()
	{
		return array(
			'districts'   => array(self::HAS_MANY,   'District',    'city_id', 'order'=>'name ASC'),
			'builders'=>array(self::MANY_MANY, 'Builder', 'real_builders_to_cities(city_id, builder_id)')
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
			'en_slug' => Yii::t('app', 'slug'),
			'info' => Yii::t('app', 'Описание'),
			'sort' => Yii::t('app', 'Сортировка'),
			'important' => Yii::t('app', 'Выделить'),
		);
	}

	public function setSlug()
	{
		$converter = array( 
		' ' => '_', '.' =>'', ',' =>'', '#' => '', '№'=> '', '-' =>'_','–' =>'_', '"' => '',
		'а' => 'a', 'б' => 'b', 'в' => 'v', 
		'г' => 'g', 'д' => 'd', 'е' => 'e', 
		'ё' => 'e', 'ж' => 'zh', 'з' => 'z', 
		'и' => 'i', 'й' => 'y', 'к' => 'k', 
		'л' => 'l', 'м' => 'm', 'н' => 'n', 
		'о' => 'o', 'п' => 'p', 'р' => 'r', 
		'с' => 's', 'т' => 't', 'у' => 'u', 
		'ф' => 'f', 'х' => 'h', 'ц' => 'c', 
		'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 
		'ь' => '', 'ы' => 'y', 'ъ' => '', 
		'э' => 'e', 'ю' => 'yu', 'я' => 'ya'); 
		
		$string = mb_strtolower($this->name, 'UTF-8');; 
		$string = trim($string);
		$this->en_slug = strtr($string, $converter); 
		
		return true;
	}	
	public function beforeSave()
	{
	    
	    if(!$this->en_slug) { 
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
