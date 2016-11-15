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
class Builder extends CActiveRecord
{
	//public $correction;
	public $correctedRating;
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
		return 'real_builders';
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
			array('en_title', 'unique', 'message' => 'Названия застройщиков не могут повторяться'),
			array('html, type, en_title, url, url_text, contacts, worktime, address, year, licenses, uchred, gosreg, specprojects, square_sdano, square_building, sdano_pomesch, building_pomesch', 'safe'),
			//array('majka_id', 'unique', 'message'=>'This issue already exists.'),
		//	array('price', 'numerical', 'integerOnly'=>true),
		//	array('session_id', 'length', 'max'=>100),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id', 'safe', 'on'=>'search'),
			array('cityIds', 'safe'),
			array('update_time','default',
              'value'=>new CDbExpression('NOW()'),
              'setOnEmpty'=>false,'on'=>'update'),
	        array('update_time','default',
	              'value'=>new CDbExpression('NOW()'),
	              'setOnEmpty'=>false,'on'=>'insert')
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
			'attached_pages'   => array(self::HAS_MANY,   'BuilderStaticPage',   'parent_id'),
			'rating'   => array(self::HAS_MANY,   'BuilderRatingHistory',   'builder_id'),
			'cities'=>array(self::MANY_MANY, 'City', 'real_builders_to_cities(builder_id, city_id)'),
			'news'=>array(self::MANY_MANY, 'News', 'real_news_to_builders(builder_id, news_id)', 'together'=>true),
		);
	}
	public function behaviors(){
          return array( 'CAdvancedArBehavior' => array(
            'class' => 'application.extensions.CAdvancedArBehavior'));
    }


	public $cityIds = array();
	public function afterFind()
    {
        if (!empty($this->cities))
        {
            foreach ($this->cities as $n => $city)
                $this->cityIds[] = $city->id;
        }
        $this->correctedRating = $this->rating + $this->correction;

        parent::afterFind();
    }
	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'title' => 'Заголовок',
			'en_title' => 'URL',
			'html' => 'О компании',
			'type' => 'Шаблон',
			'published' => 'Опубликован',
			'session_id' => 'Session',
			'cookie_id' => 'Cookie ID',
			'status' => 'Status',
			'url' => 'Сайт', 'url_text' => 'Название сайта',
			'contacts' => 'Контакты',
			'worktime' => 'Режим работы',
			'specprojects' => 'Спецпроекты',
			'gosreg' => 'Государственная регистрация',
			'uchred' => 'Учредители',
			'licenses' => 'Лицензия, допуск к СРО',
			'cities' => 'Города',
			'year' => 'Год учреждения',
			'address' => 'Адрес',
			'photo' => 'Логотип',
			'square_sdano' => 'Сдано квадратов (м2)',
			'sdano_pomesch' => 'Сдано помещений',
			'square_building' => 'Строится квадратов (м2)',
			'building_pomesch' => 'Строится помещений',
		);
	}
	
	public function getNewRating()
	{
	
		//Колл. Баллов=(сдано. домов+(сдано м2/1000)+(сдано помещений/1000))+(строящиеся 
		//дома+((строящиеся м2/1000)*коэф.1)+((строящиеся помещения/1000)*коэф.2))+((текущий год-год 
		//основания)/коэф.3)
		
		$sdano_domov = $this->getFinishedObjectsCount();
		
		$sdano_square = $this->square_sdano;
		$sdano_pomesch = $this->sdano_pomesch;
		
		$building_doma = $this->getNonFinishedObjectsCount();
		$building_square = $this->square_building;
		$building_pomesch = $this->building_pomesch;
		
		$year = $this->year;
		
		$coefficient_1 = (float)Setting::model()->findByAttributes(array('name'=>'coefficient_1'))->value;
		$coefficient_2 = (float)Setting::model()->findByAttributes(array('name'=>'coefficient_2'))->value;
		$coefficient_3 = (float)Setting::model()->findByAttributes(array('name'=>'coefficient_3'))->value;
		
		
		$score = ($sdano_domov+($sdano_square/1000)+($sdano_pomesch/1000))
					+($building_doma+(($building_square/1000)*$coefficient_1)+(($building_pomesch/1000)*$coefficient_2));
			
		if($year)
			$score = $score +(((int)date("Y")-$year)/$coefficient_3);
					
		$score = round($score,1);
		return $score;
	}
	
	public function getFinishedObjectsCount()
	{
		$criteria=new CDbCriteria;
		$criteria->condition='(zastroishik=:zastroishik AND finished = 1)';
		$criteria->params=array(':zastroishik'=>$this->en_title);
	//	$criteria->params=array(':id'=>$list,':sdano'=>true);
		$count = Condominium::model()->count($criteria); 

		return $count;
	}
	public function getNonFinishedObjectsCount()
	{
	
		$criteria=new CDbCriteria;
		$criteria->condition='(zastroishik=:zastroishik AND finished = 0)';
		$criteria->params=array(':zastroishik'=>$this->en_title);
	//	$criteria->params=array(':id'=>$list,':sdano'=>true);
		$count = Condominium::model()->count($criteria); 

		return $count;
	}
	
	public function getSdanoSquare($sdano = true)
	{
	
	
		$criteria=new CDbCriteria;
		$criteria->select='parent_condo_id';  // подходит только то имя поля, которое уже есть в модели
		$criteria->distinct = true;
		$criteria->condition='(zastroishik=:zastroishik AND (podryadchik="" OR podryadchik IS NULL)) OR (podryadchik=:zastroishik)';
		$criteria->params=array(':zastroishik'=>$this->en_title);
		$condos = Estate::model()->findAll($criteria); 
		
		$list = array();
		foreach($condos as $condo) {
			if($condo['parent_condo_id'])
				$list[] = $condo['parent_condo_id'];
		}
		
		$condolist = implode(',', $list);
		$condolist = $list;
		$criteria=new CDbCriteria;
		if($sdano)
			$criteria->condition='finished=1 AND use_data=0';
		else
			$criteria->condition='finished=0 AND use_data=0';
		$criteria->addInCondition('id', $condolist);
		$condos = Condominium::model()->findAll($criteria); 
			
		$list = array();
		foreach($condos as $condo) {
			$list[] = $condo->id;
		}	
		
		$criteria=new CDbCriteria;
		if($sdano)
			$criteria->condition='finished=1 AND use_data=1';
		else
			$criteria->condition='finished=0 AND use_data=1';
		$criteria->addInCondition('id', $condolist);
		$condos2 = Condominium::model()->findAll($criteria); 
			
		$list2 = array();
		foreach($condos2 as $condo) {
			$list2[] = $condo->id;
		}
		
		if(empty($list2) && !empty($list)) $list2 = $list;
		if(empty($list) && !empty($list2)) $list = $list2;		
		
		$list = implode(',', $list);
		$list2 = implode(',', $list2);
	
		if(!empty($list) || !empty($list2)) {
			$criteria=new CDbCriteria;
		//	$criteria->distinct = false;
			$criteria->select='sum(square) as square';  
			
			$criteria->condition='(zastroishik=:zastroishik AND podryadchik IS NULL AND parent_condo_id IN(:condos)) OR (zastroishik=:zastroishik AND podryadchik = "" AND parent_condo_id IN(:condos)) OR (podryadchik=:zastroishik AND parent_condo_id IN(:condos)) OR (podryadchik=:zastroishik AND parent_condo_id IN(:countedcondos))';
			$criteria->params=array(':zastroishik'=>$this->en_title,':condos'=>$list,':countedcondos'=>$list2);
			
			$sBalance = Estate::model()->find($criteria)->square; 
			
	
		}
		else $sBalance = 0;
	
		if($sdano)
			$condos = Yii::app()->db->createCommand()
			    ->select('*')
			    ->from('real_condo u')
			    ->where('(u.zastroishik=:zastroishik AND u.finished=1 AND u.use_data=1)',
			    	 array(':zastroishik'=>$this->en_title))//,':podryadchik'=>$this->id))
			    ->queryAll();
		else
			$condos = Yii::app()->db->createCommand()
			    ->select('*')
			    ->from('real_condo u')
			    ->where('(u.zastroishik=:zastroishik AND u.finished=0 AND u.use_data=1)',
			    	 array(':zastroishik'=>$this->en_title))//,':podryadchik'=>$this->id))
			    ->queryAll();
		
		$nBalance = 0;
		
		foreach($condos as $condo) {
		
			$condoData = Condominium::model()->findByPk($condo['id']);
			
			$nBalance = $nBalance + $condoData->all_squares;
		} 
		
		$fBalance = $sBalance + $nBalance;
		if($fBalance)
			return round($fBalance);
		else
			return 0;
	}
	
	
	public function getSdanoRooms($sdano = true)
	{
		
		$criteria=new CDbCriteria;
		$criteria->select='parent_condo_id';  // подходит только то имя поля, которое уже есть в модели
		$criteria->distinct = true;
		$criteria->condition='(zastroishik=:zastroishik AND (podryadchik="" OR podryadchik IS NULL)) OR (podryadchik=:zastroishik)';
		$criteria->params=array(':zastroishik'=>$this->en_title);
		$condos = Estate::model()->findAll($criteria); 
		
		$list = array();
		foreach($condos as $condo) {
			if($condo['parent_condo_id'])
				$list[] = $condo['parent_condo_id'];
		}
		
		$condolist = implode(',', $list);
		$condolist = $list;
		$criteria=new CDbCriteria;
		if($sdano)
			$criteria->condition='finished=1 AND use_data=0';
		else
			$criteria->condition='finished=0 AND use_data=0';
		$criteria->addInCondition('id', $condolist);
		$condos = Condominium::model()->findAll($criteria); 
			
		$list = array();
		foreach($condos as $condo) {
			$list[] = $condo->id;
		}	
		
		$criteria=new CDbCriteria;
		if($sdano)
			$criteria->condition='finished=1 AND use_data=1';
		else
			$criteria->condition='finished=0 AND use_data=1';
		$criteria->addInCondition('id', $condolist);
		$condos2 = Condominium::model()->findAll($criteria); 
			
		$list2 = array();
		foreach($condos2 as $condo) {
			$list2[] = $condo->id;
		}
		
		if(empty($list2) && !empty($list)) $list2 = $list;
		if(empty($list) && !empty($list2)) $list = $list2;		
		
		$list = implode(',', $list);
		$list2 = implode(',', $list2);
	
		if(!empty($list) || !empty($list2)) {
			$criteria=new CDbCriteria;
		//	$criteria->distinct = false;
			$criteria->select='sum(rooms) as rooms';  
			
			$criteria->condition='(zastroishik=:zastroishik AND podryadchik IS NULL AND parent_condo_id IN(:condos)) OR (zastroishik=:zastroishik AND podryadchik = "" AND parent_condo_id IN(:condos)) OR (podryadchik=:zastroishik AND parent_condo_id IN(:condos)) OR (podryadchik=:zastroishik AND parent_condo_id IN(:countedcondos))';
			$criteria->params=array(':zastroishik'=>$this->en_title,':condos'=>$list,':countedcondos'=>$list2);
			
			$sBalance = Estate::model()->find($criteria)->rooms; 
			
	
		}
		else $sBalance = 0;
	
		if($sdano)
			$condos = Yii::app()->db->createCommand()
			    ->select('*')
			    ->from('real_condo u')
			    ->where('(u.zastroishik=:zastroishik AND u.finished=1 AND u.use_data=1)',
			    	 array(':zastroishik'=>$this->en_title))//,':podryadchik'=>$this->id))
			    ->queryAll();
		else
			$condos = Yii::app()->db->createCommand()
			    ->select('*')
			    ->from('real_condo u')
			    ->where('(u.zastroishik=:zastroishik AND u.finished=0 AND u.use_data=1)',
			    	 array(':zastroishik'=>$this->en_title))//,':podryadchik'=>$this->id))
			    ->queryAll();
		
		$nBalance = 0;
		
		foreach($condos as $condo) {
		
			$condoData = Condominium::model()->findByPk($condo['id']);
			
			$nBalance = $nBalance + $condoData->all_squares;
		} 
		
		$fBalance = $sBalance + $nBalance;
		if($fBalance)
			return round($fBalance);
		else
			return 0;	}
	
	public function getViewURL()
	{
		return '/zastroischiki/'.$this->en_title;
	}
	public function getNewsURL()
	{
		return '/zastroischiki/'.$this->en_title.'/news';
	}
		public function pagesViewSelf()
	{
		return '/zastroischiki/'.$this->en_title;
	}
	public function getAllBuildingsURL()
	{
		return '/zastroischiki/'.$this->en_title.'/all_buildings';
	}
	public function getAllFlatsURL()
	{
		return '/zastroischiki/'.$this->en_title.'/flats';
	}
	public function getConstructionBuildingsURL()
	{
		return '/zastroischiki/'.$this->en_title.'/all_buildings?type=in_construction';
	}
	public function getFinishedBuildingsURL()
	{
		return '/zastroischiki/'.$this->en_title.'/all_buildings?type=finished';
	}
	public function getUpdateURL()
	{
		return '/zastroischiki/'.$this->en_title.'/update';
	}
	public function getDeleteURL()
	{
		return '/zastroischiki/'.$this->en_title.'/delete';
	}
	public function pagesAdminURL()
	{
		return '/zastroischiki/'.$this->en_title.'/listPages';
	}
	public function pagesCreateURL()
	{
		return '/zastroischiki/'.$this->en_title.'/createPage';
	}
	
	public function setSlug()
	{
	
		$converter = ConverterHelper::GetTransliteration();
		
		$string = mb_strtolower($this->title, 'UTF-8');; 
		$string = trim($string);
		$string = strtr($string, $converter); 
		$this->en_title = preg_replace('/[^A-Za-z0-9\-_]/', '', $string);
		
		return true;
	}
	public function beforeSave()
	{
		if(!$this->en_title)
			$this->setSlug();
			
	    return parent::beforeSave();
	}
	public function afterDelete()
	{
		foreach($this->attached_pages as $page) {
			$page->delete();
		}
	    return parent::afterDelete();
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