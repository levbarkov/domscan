<?php

/**
 * This is the model class for table "{{cart_item}}".
 *
 * The followings are the available columns in table '{{cart_item}}':
 * @property integer $id
 * @property integer $item_id
 * @property integer $color_id
 * @property string $layouts_text
 * @property string $session_id
 * @property integer $status
 */
class Articles extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return CurrentCart the static model class
	 */
	 
	public $category = 'Статьи';
	public $category_url = '/articles/';
	
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'real_articles';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('title', 'required'),
			array('html, datepublish, additional, type, seo_title, seo_description', 'safe'),
			//array('majka_id', 'unique', 'message'=>'This issue already exists.'),
		//	array('price', 'numerical', 'integerOnly'=>true),
		//	array('session_id', 'length', 'max'=>100),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'title' => 'Заголовок',
			'en_title' => 'url',
			'html' => 'Содержимое',
			'type' => 'Шаблон',
			'session_id' => 'Session',
			'cookie_id' => 'Cookie ID',
			'status' => 'Status',
			'additional' => 'Краткий анонс',
			'datepublish' => 'Дата публикации',
			'seo_title' => 'СЕО заголовок',
			'seo_description' => 'СЕО описание',
		);
	}

	public function beforeSave()
	{
	
		if(!$this->datepublish)
			$this->datepublish = date('Y-m-d');
	    return parent::beforeSave();
	}

	public function afterDelete()
	{
	
		if($this->photo)
			if(is_file(dirname(Yii::app()->request->scriptFile).$this->photo))
				@unlink(dirname(Yii::app()->request->scriptFile).$this->photo);
	    return parent::afterDelete();
	}
	
	public function getViewURL()
    {
	    return '/articles/'.$this->id.'-'.$this->en_title;
    }
    public function getDateString()
    {
		$months = array('','января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря');
	    return (int)date("d", strtotime($this->datepublish)).' '.$months[(int)date("m", strtotime($this->datepublish))].' '.date("Y", strtotime($this->datepublish)); 
    }
	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
	 */
	public function search()
	{
		// Warning: Please modify the following code to remove attributes that
		// should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('title',$this->title);
		$criteria->compare('en_title',$this->en_title);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}