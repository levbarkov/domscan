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
class BuilderStaticPage extends CActiveRecord
{

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
		return 'real_builders_pages';
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
			array('html, en_title, type, parent_id', 'safe'),
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
			'parent'   => array(self::BELONGS_TO,   'Builder',    'parent_id'),
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
		);
	}
	
	public function pageViewURL()
	{
		return '/zastroischiki/'.$this->parent->en_title.'/'.$this->en_title;
	}
	
	public function pageListURL()
	{
		return '/zastroischiki/'.$this->parent->en_title.'/listPages';
	}
	
	public function pageEditURL()
	{
		return '/zastroischiki/'.$this->parent->en_title.'/'.$this->en_title.'/update';
	}
	
	public function pageDeleteURL()
	{
		return '/zastroischiki/'.$this->parent->en_title.'/'.$this->en_title.'/delete';
	}
	
	public function setSlug()
	{
	
		$converter = ConverterHelper::GetTransliteration();
		
		$string = mb_strtolower($this->title, 'UTF-8');; 
		$string = trim($string);
		$i = 0;
		$this->en_title = strtr($string, $converter); 
		$check = BuilderStaticPage::model()->findByAttributes(array('parent_id'=>$this->parent->id,'en_title'=>$this->en_title));
		while($check) {
			$i++;
			$this->en_title = strtr($string, $converter).'_'.$i; 
			$check = BuilderStaticPage::model()->findByAttributes(array('parent_id'=>$this->parent->id,'en_title'=>$this->en_title));
		}
		
		return true;
	}
	public function beforeSave()
	{
	
		$this->setSlug();
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