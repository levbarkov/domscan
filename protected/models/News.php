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
class News extends CActiveRecord
{

//	public $builderIds;
//	public $tags;
	
	public $category = 'Новости';
	public $category_url = '/news/';
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return CurrentCart the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'real_news';
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
			array('html, en_title, datepublish, additional, type, photo, seo_title, seo_description', 'safe'),
			//array('majka_id', 'unique', 'message'=>'This issue already exists.'),
		//	array('price', 'numerical', 'integerOnly'=>true),
		//	array('session_id', 'length', 'max'=>100),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id', 'safe', 'on'=>'search'),
			array('builderIds', 'safe'),
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
			'tags'=>array(self::MANY_MANY, 'Builder', 'real_news_to_builders(news_id, builder_id)','together'=>true),
		);
	}
	public function behaviors(){
          return array( 'CAdvancedArBehavior' => array(
            'class' => 'application.extensions.CAdvancedArBehavior'));
    }

	public $builderIds = array();
	public function afterFind()
    {
        if (!empty($this->tags))
        {
            foreach ($this->tags as $n => $builder)
                $this->builderIds[] = $builder->id;
        }

        parent::afterFind();
    }
    
    public function getViewURL()
    {
	    return '/news/'.$this->id.'-'.$this->en_title;
    }
    public function getDateString()
    {
		$months = array('','января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря');
	    return (int)date("d", strtotime($this->datepublish)).' '.$months[(int)date("m", strtotime($this->datepublish))].' '.date("Y", strtotime($this->datepublish)); 
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
			'tags' => 'Метки производителей',
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