<?php

class SiteController extends Controller
{

	public $headers = 'From: noreply@domscan.ru\r\nReply-To: noreply@domscan.ru\r\nX-Mailer: PHP/5.3'; 
	
	public $application = false;
	public $title;
	/**
	 * Declares class-based actions.
	 */
	public function actions()
	{
		return array(
			// captcha action renders the CAPTCHA image displayed on the contact page
			'captcha'=>array(
				'class'=>'CCaptchaAction',
				'backColor'=>0xFFFFFF,
			),
			// page action renders "static" pages stored under 'protected/views/site/pages'
			// They can be accessed via: index.php?r=site/page&view=FileName
			'page'=>array(
				'class'=>'CViewAction',
			),
		);
	}

	public function actionSearchwork()
	{
		$type = Yii::app()->request->getParam('type', 'new');
		$rooms = (int)Yii::app()->request->getParam('rooms');
		$district_id = Yii::app()->request->getParam('district');

		if($rooms == 0)
			$rooms = '';
		if($rooms != 0 && $rooms != '')
			$rooms = 'rooms='.$rooms.'&';
		if($district_id) {
			$district = District::model()->findByPk($district_id);
			//die($district->city_id);
			if($district) {
				//die($district->city->name);
				Yii::app()->user->setState("city",$district->city->en_slug);
				
				$this->city_id = $district->city->id;
				$this->city_title = $district->city->name;
			
				$district = 'district='.$district->id.'&city='.$district->city_id;
			} else
				$district = 'district='.$district_id;
		}
		
		$this->redirect('/catalog/'.$type.'/#?'.$rooms.$district.'&view='.$view);
	}
	public function actionSearchworkmap()
	{
		$type = Yii::app()->request->getParam('type', 'new');
		$rooms = (int)Yii::app()->request->getParam('rooms');
		$district_id = Yii::app()->request->getParam('district');

		
		if($rooms == 0)
			$rooms = '';
		if($rooms != 0 && $rooms != '')
			$rooms = 'rooms='.$rooms.'&';
		if($district_id) {
			$district = District::model()->findByPk($district_id);
			//die($district->city_id);
			if($district) {
				//die($district->city->name);
				Yii::app()->user->setState("city",$district->city->en_slug);
				
				$this->city_id = $district->city->id;
				$this->city_title = $district->city->name;
			
				$district = 'district='.$district->id.'&city='.$district->city_id;
			} else
				$district = 'district='.$district_id;
		}
		
		$this->redirect('/catalog/'.$type.'/#?'.$rooms.$district.'&view=map');
	}
	
	/**
	 * This is the default 'index' action that is invoked
	 * when an action is not explicitly requested by users.
	 */
	public function actionIndex()
	{
	
		$rand = (int)rand(0,10);
		
		if($rand > 8)
			$this->recalculateRatings();
		
		$this->layout = '//layouts/landing';
		
		$guides_1 = Guides::model()->findAll(array('limit'=>2,'order'=>'datepublish DESC'));
		$guides_2 = Guides::model()->findAll(array('offset'=>2,'limit'=>2,'order'=>'datepublish DESC'));
		
		
		$reviews = Reviews::model()->findAll(array('limit'=>3,'order'=>'datepublish DESC'));
		$news = News::model()->findAll(array('limit'=>4,'order'=>'datepublish DESC'));
		
		$buildersRating = Builder::model()->findAll(array('limit'=>5,'order'=>'rating+correction DESC'));
		
		
		$max = Condominium::model()->count();
		
		if($max<4)
			$countTo = $max;
		else
			$countTo = 4;
			
		$max--;
		$offset = rand(0, $max);
		$condos = array();
			
		$ids = array();
		
		for($i = 0; $i < $countTo; $i++) {
		
		//	if(!$max)
		//		break;
				
			if($i == 0) 
			{
			
				$maxAdv = Condominium::model()->count(array('condition' => 'advertisement = true'));
				$maxAdv--;
				$offsetAdv = rand(0, $maxAdv);
				$object = Condominium::model()->find(array(
					'condition' => 'advertisement = true', 	
					'offset'	=> $offsetAdv,			    
					'limit'     => 1
				));
				
				if(!$object)				
					$object = Condominium::model()->find(array(
					    'offset'    => $offset,
					    'limit'     => 1
					));
			}
			else
				$object = Condominium::model()->find(array(
				    'condition' => 'id NOT IN ('.implode($ids,',').')',
				    'offset'    => $offset,
				    'limit'     => 1
				));
			
			$ids[] = $object->id;
			
			if($object)
				$condos[] = $object;
			//echo $object->id;
			
			$max = $max - 1;
			$offset = rand(0, $max);
			
				
			//echo $max;
		}
		
		$max = Estate::model()->count(array('condition' => "type = 'new' AND subtype = 'sale' AND sold = 0"));
		
		if($max<4)
			$countTo = $max;
		else
			$countTo = 4;
			
		$max--;
		$offset = rand(0, $max);
		$flats = array();
			
		$ids = array();
		
		for($i = 0; $i < $countTo; $i++) {
	
			if($i == 0) 
			{						
				$object = Estate::model()->find(array(
					'condition' => "type = 'new' AND subtype = 'sale' AND sold = 0",
				    'offset'    => $offset,
				    'limit'     => 1
				));
			}
			else
				$object = Estate::model()->find(array(
				    'condition' => 'type = "new" AND subtype = "sale" AND sold = 0 AND id NOT IN ('.implode($ids,',').')',
				    'offset'    => $offset,
				    'limit'     => 1
				));
			
			$ids[] = $object->id;
			
			if($object)
				$flats[] = $object;
			//echo $object->id;
			
			$max = $max - 1;
			$offset = rand(0, $max);
			
				
		}

		
		$this->render('landing', 
			array(
				'guides_1'=>$guides_1,
				'guides_2'=>$guides_2,
				'buildersRating'=>$buildersRating,
				'condos'=>$condos,
				'flats'=>$flats,
				'reviews'=>$reviews,
				'news'=>$news,
			)
		);
	}
	
	public function actionCatalog()
	{
		
		$this->application = true; 
		$this->layout = '//layouts/landing';
		$this->render('index');
	}
	/**
	 * This is the default 'index' action that is invoked
	 * when an action is not explicitly requested by users.
	 */
	public function actionSpecial()
	{
		// renders the view file 'protected/views/site/index.php'
		// using the default layout 'protected/views/layouts/main.php'
		$this->application = true; 
		$this->layout = '//layouts/landing';
		$this->render('index');
	}

	/**
	 * This is the action to handle external exceptions.
	 */
	public function actionError()
	{
		$this->layout = '//layouts/landing';
		if($error=Yii::app()->errorHandler->error)
		{
			if(Yii::app()->request->isAjaxRequest)
				echo $error['message'];
			else
				$this->render('error', $error);
		}
	}
	
	public function actionAdmin()
	{
	
		$this->checkPermissions(array('admin','manager'));
		
		$this->layout = '//layouts/admin_template';
		
		ModeratorLogHelper::PurgeOldFromLog();
		
		$modlog = ModeratorLog::model()->findAll(array('order'=>'time DESC'));
		
		$this->render('admin', array('modlog'=>$modlog));
	}
	
	public function actionDistricts()
	{
		
		header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
		header("Access-Control-Allow-Origin: *");
		header('Content-type: application/json; charset=utf-8');
				
		$city_id = (int)Yii::app()->request->getParam('city', 1);
		
//echo $city_id;
		
		
		$criteria = new CDbCriteria();
		
		$criteria->condition = "city_id = ".$city_id." ORDER BY name ASC";
	
		$items_prepare = District::model()->findAll($criteria);
		
		$items = array();

		foreach($items_prepare as $item) {							
			$items[] = array('id' => (int)$item->id,
							'name' => $item->name, 
							 );
		}
		
		$city_name = City::model()->findByPk($city_id)->name;
		
		$json['city'] = $city_name;
		$json['districts'] = $items;
		

		echo json_encode($json); 
		
	}
	
	public function actionSearch()
	{
	
	//	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	//	header("Access-Control-Allow-Origin: *");
	//	header('Content-type: application/json; charset=utf-8');
		
		$sort_by = Yii::app()->request->getParam('sort', false);
		$sort_direction = Yii::app()->request->getParam('direction', false);		
		$sort_page = (int)Yii::app()->request->getParam('page', 1);
	
		$elements_per_page = 9;
		
		$elements_view = Yii::app()->request->getParam('view', 'grid');
		if($elements_view == 'table')
			$elements_per_page = 30;
		if($elements_view == 'map') {
			$elements_per_page = 2000;
			$sort_page = 1;	
			
		}
		
		$type = Yii::app()->request->getParam('type', 'flat');
		if(!in_array($type, array('flat','new','commercial','house','land'))) {
			$type = 'flat';
		}
		$subtype = Yii::app()->request->getParam('subtype', 'sale');
		if(!in_array($subtype, array('sale','rent'))) {
			$subtype = 'sale';
		}
		
		if($elements_view == 'map' && $type == 'new') {
				$base_m=10000;
				
				$max_new_price = Estate::model()->findByAttributes(array('type'=>'new'),array('order'=>'cost DESC'));
				
				
				if($max_new_price)
					$max_new_price = $base_m*(ceil((int)$max_new_price->cost/$base_m));
				else
					$max_new_price = 9000000;
			
		
			
			
				$min_new_price = Estate::model()->cache(3600)->findByAttributes(array('type'=>'new'),array('order'=>'cost ASC'));
				if($min_new_price)
					$min_new_price = $base_m*(floor((int)$min_new_price->cost/$base_m));
				else
					$min_new_price = 10000;
					
				if($min_new_price == $max_new_price) {
					$min_new_price = $min_new_price - 10000;
					$max_new_price = $max_new_price + 10000;
				}
				
				$base_m=10;
				
				
				$max_new_square = Estate::model()->cache(3600)->findByAttributes(array('type'=>'new'),array('order'=>'square DESC'));
				if($max_new_square)
					$max_new_square = $base_m*(ceil((int)$max_new_square->square/$base_m));
				else
					$max_new_square = 300;
					
					
				$min_new_square = Estate::model()->cache(3600)->findByAttributes(array('type'=>'new'),array('order'=>'square ASC'));
				if($min_new_square)
					$min_new_square = $base_m*(floor((int)$min_new_square->square/$base_m));
				else
					$min_new_square = 0;
					
				if($min_new_square == $max_new_square) {
					$min_new_square = $max_new_square - 10;
					$max_new_square = $min_new_square + 10;
				}

		} else {
			
					$min_new_price = 0;
					$max_new_price = 100000000000;					
					$min_new_square = 0;
					$max_new_square = 100000000000;
		}
	
		$price_min = (int)Yii::app()->request->getParam('price_min', $min_new_price);
		$price_max = (int)Yii::app()->request->getParam('price_max', $max_new_price);
		
		
		$square_min = (int)Yii::app()->request->getParam('square_min', $min_new_square);
		$square_max = (int)Yii::app()->request->getParam('square_max', $max_new_square);
		$square_living_min = (int)Yii::app()->request->getParam('square-live_min', 0);
		$square_living_max = (int)Yii::app()->request->getParam('square-live_max', 1000000000);
		
		$square_kitchen_min = (int)Yii::app()->request->getParam('square-kitchen_min', 0);
		$square_kitchen_max = (int)Yii::app()->request->getParam('square-kitchen_max', 1000000000);
		
		
		$square_land_min = (int)Yii::app()->request->getParam('square-house-land_min', 0);
		$square_land_max = (int)Yii::app()->request->getParam('square-house-land_max', 1000000000);
		
		
		$onlyspecial = Yii::app()->request->getParam('onlyspecial', 'false');
		if($onlyspecial == 'true')
			$onlyspecial = 'AND special = 1';
		else
			$onlyspecial = '';
			
			
		$status = Yii::app()->request->getParam('status', 'false');
		if($status == 'sold')
			$status = 'AND sold = 1';
		else if($status == 'in_stock')
			$status = 'AND sold = 0';
		else
			$status = '';
			
			
		$photo = Yii::app()->request->getParam('photo', 'false');
		if($photo == 'with')
			$photo = 'AND image != ""';
		else if($photo == 'without')
			$photo = 'AND image = ""';
		else
			$photo = '';
		
		
		$balcony = Yii::app()->request->getParam('balcony', 'any');
		
		$balcony = str_replace(array(' ','(',')','/',';','='), '', $balcony);		
		//разбор запроса по санузлам
		$balcony_sql_begin = '(';
		$balcony_sql = "balcony LIKE '%'";
		if($balcony != 'any' && $balcony != '') {
			$balcony_sql = '';
			$balcony = explode(',',$balcony);

			$balcony = array_diff( $balcony, array(0) );
			
			$balcony_sql_array = array();
			foreach($balcony as &$uzel) {
				$balcony_sql_array[] = 'balcony = "'.$uzel.'"';
			}
			$balcony_sql .= implode(' OR ', $balcony_sql_array);
			
			if ($balcony_sql == '')
				$balcony_sql = "balcony LIKE '%'";
		//	$array['balcony'] = $balcony;  //отладочная информация, можно удалить
		}
		$balcony_sql_end = ') AND';
		$balcony_sql = $balcony_sql_begin.$balcony_sql.$balcony_sql_end;
		
		$districts = Yii::app()->request->getParam('districts', 'any');
		$districts = Yii::app()->request->getParam('district', 'any');
		

			
		$city = (int)Yii::app()->request->getParam('city', 1);

		$rooms = Yii::app()->request->getParam('rooms', 'any');
		//разбор запроса к комнатам
		$rooms_sql_begin = '(';
		$rooms_sql = "rooms LIKE '%'";
		if($rooms != 'any' && $rooms != '') {
			$rooms_sql = '';
			$rooms = explode(',',$rooms);
			foreach($rooms as &$room) {
				$room = (int)$room;
			}
			$rooms = array_diff( $rooms, array(0) );
			
			$rooms_sql_array = array();
			foreach($rooms as &$room) {
				$rooms_sql_array[] = 'rooms = '.$room;
			}
			$rooms_sql .= implode(' OR ', $rooms_sql_array);
			
			if ($rooms_sql == '')
				$rooms_sql = "rooms LIKE '%'";
		//	$array['rooms'] = $rooms;  //отладочная информация, можно удалить
		}
		$rooms_sql_end = ') AND';
		$rooms_sql = $rooms_sql_begin.$rooms_sql.$rooms_sql_end;
		
		
		
		$builders = Yii::app()->request->getParam('builder', 'any');		
		$builders = str_replace(array(' ','(',')','/',';','='), '', $builders);		
		$builders_sql_begin = '(';
		$builders_sql = "zastroishik LIKE '%'";
		if($builders != 'any' && $builders != '') {
			$builders_sql = '';
			$builders = explode(',',$builders);

			$builders = array_diff( $builders, array(0) );
			
			$builders_sql_array = array();
			foreach($builders as &$builder) {
				$builders_sql_array[] = 'zastroishik = "'.$builder.'"';
			}
			$builders_sql .= implode(' OR ', $builders_sql_array);
			
			if ($builders_sql == '')
				$builders_sql = "zastroishik LIKE '%'";
		//	$array['builders'] = $builders;  //отладочная информация, можно удалить
		}
		$builders_sql_end = ') AND';
		$builders_sql = $builders_sql_begin.$builders_sql.$builders_sql_end;

		
		$sanuzel = Yii::app()->request->getParam('sanuzel', 'any');
		
		$sanuzel = str_replace(array(' ','(',')','/',';','='), '', $sanuzel);		
		//разбор запроса по санузлам
		$sanuzel_sql_begin = '(';
		$sanuzel_sql = "sanuzel LIKE '%'";
		if($sanuzel != 'any' && $sanuzel != '') {
			$sanuzel_sql = '';
			$sanuzel = explode(',',$sanuzel);

			$sanuzel = array_diff( $sanuzel, array(0) );
			
			$sanuzel_sql_array = array();
			foreach($sanuzel as &$uzel) {
				$sanuzel_sql_array[] = 'sanuzel = "'.$uzel.'"';
			}
			$sanuzel_sql .= implode(' OR ', $sanuzel_sql_array);
			
			if ($sanuzel_sql == '')
				$sanuzel_sql = "sanuzel LIKE '%'";
		//	$array['sanuzel'] = $sanuzel;  //отладочная информация, можно удалить
		}
		$sanuzel_sql_end = ') AND';
		$sanuzel_sql = $sanuzel_sql_begin.$sanuzel_sql.$sanuzel_sql_end;
		
		
		
		$plan = Yii::app()->request->getParam('plan', 'any');
		
		$plan = str_replace(array(' ','(',')','/',';','='), '', $plan);		
		//разбор запроса по санузлам
		$plan_sql_begin = '(';
		$plan_sql = "plan LIKE '%'";
		if($plan != 'any' && $plan != '') {
			$plan_sql = '';
			$plan = explode(',',$plan);

			$plan = array_diff( $plan, array(0) );
			
			$plan_sql_array = array();
			foreach($plan as &$uzel) {
				$plan_sql_array[] = 'plan = "'.$uzel.'"';
			}
			$plan_sql .= implode(' OR ', $plan_sql_array);
			
			if ($plan_sql == '')
				$plan_sql = "plan LIKE '%'";
		//	$array['plan'] = $plan;  //отладочная информация, можно удалить
		}
		$plan_sql_end = ') AND';
		$plan_sql = $plan_sql_begin.$plan_sql.$plan_sql_end;
		
		
		
		$material = Yii::app()->request->getParam('material', 'any');
		
		$material = str_replace(array(' ','(',')','/',';','='), '', $material);		
		//разбор запроса по санузлам
		$material_sql_begin = '(';
		$material_sql = "material LIKE '%'";
		if($material != 'any' && $material != '') {
			$material_sql = '';
			$material = explode(',',$material);

			$material = array_diff( $material, array(0) );
			
			$material_sql_array = array();
			foreach($material as &$uzel) {
				$material_sql_array[] = 'material = "'.$uzel.'"';
			}
			$material_sql .= implode(' OR ', $material_sql_array);
			
			if ($material_sql == '')
				$material_sql = "material LIKE '%'";
		//	$array['plan'] = $plan;  //отладочная информация, можно удалить
		}
		$material_sql_end = ') AND';
		$material_sql = $material_sql_begin.$material_sql.$material_sql_end;


		
		//$array['rooms_sql'] = $rooms_sql; //отладочная информация, можно удалить
		//конец разбора запроса к комнатам
		
		//разбор запроса к районам
		$districts_sql_begin = '(';
		$districts_sql = "district LIKE '%'";
		if($districts != 'any' && $districts != '') {
			$districts_sql = '';
			$districts = explode(',',$districts);
			foreach($districts as &$district3) {
				if(substr($district3,0,5) == 'city-')
				 {
				  //Do something
				  $cityid = str_replace("city-","",$district3);
				
				  $citydisc = City::model()->findByPk($cityid)->districts;
				  
				  foreach($citydisc as $itemosc) {
					 $districts[] = $itemosc->id; 
				  }
				  
				  $district3 = 999999999;
				  unset($district3);
								  
				 }
				//$district = (int)$district;
			}
		//	die(print_r($districts));
			foreach($districts as &$district) {
				$district = (int)$district;
			}
			$districts = array_diff( $districts, array(0) );
			
			$districts_sql_array = array();
			foreach($districts as &$district) {
				$districts_sql_array[] = 'district = '.$district;
			}
			$districts_sql .= implode(' OR ', $districts_sql_array);
			
			if ($districts_sql == '')
				$districts_sql = "district LIKE '%'";
		//	$array['districts'] = $districts;  //отладочная информация, можно удалить
		}
		$districts_sql_end = ') AND';
		$districts_sql = $districts_sql_begin.$districts_sql.$districts_sql_end;
		
		//$array['districts_sql'] = $districts_sql; //отладочная информация, можно удалить
		//конец разбора запроса к комнатам
		
		
		$floors = Yii::app()->request->getParam('floor', 'any');
			//разбор запроса к этажам
		$floors_sql_begin = '(';
		$floors_sql = "floor LIKE '%'";
		if($floors != 'any' && $floors != '') {
			$floors_sql = '';
			$floors = explode(',',$floors);
			//foreach($floors as &$floor) {
			//	$floor = (int)$floor;
			//}
			$floors = array_diff( $floors, array(0) );
			
			$floors_sql_array = array();
			foreach($floors as &$floor) {
				
				$floor = explode('-',$floor);
		//		print_r($floor);
				if(is_array($floor) && count($floor) > 1)
					$floors_sql_array[] = '(floor BETWEEN '.$floor[0].' AND '.$floor[1].') ';				
				else if(is_array($floor))
					$floors_sql_array[] = 'floor = '.$floor[0];
				else
					$floors_sql_array[] = 'floor = '.$floor;
			}
		//	die();
			$floors_sql .= implode(' OR ', $floors_sql_array);
			
			if ($floors_sql == '')
				$floors_sql = "floor LIKE '%'";
		//	$array['floors'] = $floors;  //отладочная информация, можно удалить
		}
		$floors_sql_end = ') AND';
		$floors_sql = $floors_sql_begin.$floors_sql.$floors_sql_end;



		
		$criteria = new CDbCriteria();
		$count_criteria = new CDbCriteria();
	//	$criteria->addCondition("email_id < :email_id");
	

	
		$min = ($elements_per_page*($sort_page-1));
		$max = $elements_per_page;
		
		$sort = 'DESC';
		if($sort_direction == 'asc') $sort = 'ASC';
		
		$order_by = 'id';
		
		if(in_array($sort_by, array('rooms','square','square_land','cost','floor'))) {
			$order_by = $sort_by;
		}
		

			

		//$array['sql'] = $criteria->condition;
		
	//	if($elements_view == 'map' && $type == 'new') {
			
	//		$items_prepare = Condominium::model()->findAll($criteria);
	//		$count = Condominium::model()->count($count_criteria);
	//	} else {
	
			
			$criteria->condition = $rooms_sql.' '.$sanuzel_sql.' '.$plan_sql.' '.$material_sql.' '.$balcony_sql.' '.$floors_sql.' '.$builders_sql.' '.$districts_sql.' type = "'.$type.'" AND subtype = "'.$subtype.'" AND city = '.$city.' AND square >= '.$square_min.' AND square <= '.$square_max.' AND square_living >= '.$square_living_min.' AND square_living <= '.$square_living_max.' AND square_kitchen >= '.$square_kitchen_min.' AND square_kitchen <= '.$square_kitchen_max.' AND square_land >= '.$square_land_min.' AND square_land <= '.$square_land_max.' AND cost >= '.$price_min.' AND cost <= '.$price_max.' '.$onlyspecial.' '.$status.' '.$photo.' ORDER BY '.$order_by.' '.$sort.' LIMIT '.$min.','.$max;
			$count_criteria->condition = $rooms_sql.' '.$sanuzel_sql.' '.$plan_sql.' '.$material_sql.' '.$balcony_sql.' '.$floors_sql.' '.$builders_sql.' '.$districts_sql.' type = "'.$type.'" AND subtype = "'.$subtype.'" AND city = '.$city.' AND square >= '.$square_min.' AND square <= '.$square_max.' AND square_living >= '.$square_living_min.' AND square_living <= '.$square_living_max.' AND square_kitchen >= '.$square_kitchen_min.' AND square_kitchen <= '.$square_kitchen_max.' AND square_land >= '.$square_land_min.' AND square_land <= '.$square_land_max.' AND cost >= '.$price_min.' AND cost <= '.$price_max.' '.$onlyspecial.' '.$status.'  '.$photo.' ORDER BY '.$order_by.' '.$sort;
			
			
			$criteria->condition = $rooms_sql.' '.$sanuzel_sql.' '.$plan_sql.' '.$material_sql.' '.$balcony_sql.' '.$floors_sql.' '.$builders_sql.' '.$districts_sql.' type = "'.$type.'" AND subtype = "'.$subtype.'" AND square >= '.$square_min.' AND square <= '.$square_max.' AND square_living >= '.$square_living_min.' AND square_living <= '.$square_living_max.' AND square_kitchen >= '.$square_kitchen_min.' AND square_kitchen <= '.$square_kitchen_max.' AND square_land >= '.$square_land_min.' AND square_land <= '.$square_land_max.' AND cost >= '.$price_min.' AND cost <= '.$price_max.' '.$onlyspecial.' '.$status.' '.$photo.' ORDER BY '.$order_by.' '.$sort.' LIMIT '.$min.','.$max;
			$count_criteria->condition = $rooms_sql.' '.$sanuzel_sql.' '.$plan_sql.' '.$material_sql.' '.$balcony_sql.' '.$floors_sql.' '.$builders_sql.' '.$districts_sql.' type = "'.$type.'" AND subtype = "'.$subtype.'" AND square >= '.$square_min.' AND square <= '.$square_max.' AND square_living >= '.$square_living_min.' AND square_living <= '.$square_living_max.' AND square_kitchen >= '.$square_kitchen_min.' AND square_kitchen <= '.$square_kitchen_max.' AND square_land >= '.$square_land_min.' AND square_land <= '.$square_land_max.' AND cost >= '.$price_min.' AND cost <= '.$price_max.' '.$onlyspecial.' '.$status.'  '.$photo.' ORDER BY '.$order_by.' '.$sort;
			
			
			if($elements_view == 'map' && $type == 'new') {				
				$criteria->distinct = true;
				$criteria->select = 'parent_condo_id';
				$count_criteria->distinct = true;
				$count_criteria->select = 'parent_condo_id';
			}
				
			$items_prepare = Estate::model()->findAll($criteria);
			$count = Estate::model()->count($count_criteria);			
			
			if($elements_view == 'map' && $type == 'new') {
				$items_buffer = Array();
				foreach($items_prepare as $workitem) {
					
					//print_r($workitem);
					
					if($workitem->parent_condo_id){
						$criteria2 = new CDbCriteria;
						
						//$criteria->addCondition('id',$workitem->parent_condo_id);
						$criteria2->condition = 'id = '.$workitem->parent_condo_id;
						
						$estate = Condominium::model()->findAll($criteria2);
						//$estate = Condominium::model()->findAll();
						
						if($estate) {
							$items_buffer[] = $estate[0];
						}
					}
		
				} 
				$items_prepare = $items_buffer;
				$count = count($items_prepare);
			}
	//	} 
	
		if($elements_view == 'map' && $type == 'new' && ($rooms == 'any' || $rooms == '') && $max_new_price == $price_max && $min_new_price == $price_min && $min_new_square == $square_min && $max_new_square == $square_max) {
			$criteria3 = new CDbCriteria();
			$criteria3->condition = $districts_sql.' '.$builders_sql.' 1=1 LIMIT '.$min.','.$max;

			$items_prepare = Condominium::model()->findAll($criteria3);
		}
		
		
		//$limited_count = Estate::model()->count($criteria);
		
		$converter = ConverterHelper::GetTransliteration();	
		
		$plan = OptionList::model()->cache(3600)->findAllByAttributes(array('en_parent_name'=>'plan'));
		$plan_array = array();
	       if($plan && count($plan) > 0) {
	       		foreach($plan as $district) {
	       			$plan_array[$district->en_option_name] = $district->value;
	       		}
		   } 
		$material = OptionList::model()->cache(3600)->findAllByAttributes(array('en_parent_name'=>'material'));
		$material_array = array();
	       if($material && count($material) > 0) {
	       		foreach($material as $material_item) {
	       			$material_array[$material_item->en_option_name] = $material_item->value;
	       		}
		   } 
		$commercial_type = OptionList::model()->cache(3600)->findAllByAttributes(array('en_parent_name'=>'commercial_type'));
		$commercial_type_array = array();
	       if($commercial_type && count($commercial_type) > 0) {
	       		foreach($commercial_type as $district) {
	       			$commercial_type_array[$district->en_option_name] = $district->value;
	       		}
		   } 
		$commercial_business = OptionList::model()->cache(3600)->findAllByAttributes(array('en_parent_name'=>'commercial_business'));
		$commercial_business_array = array();
	       if($commercial_business && count($commercial_business) > 0) {
	       		foreach($commercial_business as $district) {
	       			$commercial_business_array[$district->en_option_name] = $district->value;
	       		}
		   } 

		$favorited = array();

		if(!Yii::app()->user->isGuest) {
			$logged = true;
			$user_id = Yii::app()->user->id;
			
			$favorites = Favorited::model()->findAllByAttributes(array('user_id' => $user_id));
			
			foreach($favorites as $fave) {
				$favorited[$fave->object_id] = true;
			}
		} else {
			$logged = false;
		}


		foreach($items_prepare as $item) {			
				
			if($item->slug == '') {
				$string = mb_strtolower($item->title, 'UTF-8');; 
				$string = trim($string);
				//$string = mb_strtolower($string);
			
				$item->slug = strtr($string, $converter); 
			
			}
			
			if(!$item->image) $item->image = '/img/no_photo.jpg';
       	       	
        	
        	if($elements_view == 'map' && $type == 'new') {
				$items[] = array('uid' => (int)$item->id,
							'title' => $item->title, 
							'for_sale' => $item->countFlatsToSale(),
					//		'rooms' => (int)$item->rooms,
						//	'square' => (double)$item->square,
						//	'square_land' => (double)$item->square_land,
						//	'square_price' => (int)number_format($calculate_square_price, 0, ",", " "),
						//	'floor' => (int)$item->floor,
							'top_floor' => (int)$item->top_floor,
							'address' => $item->address,
							'address_street' => $item->address_street,
							'address_house' => $item->address_house,
							'address_flat' => $item->address_flat,
							'cost' => number_format($item->getSquarePrice(), 0, ",", " "),						
						//	'currency' => ($item->subtype == 'sale' ? 'руб.' : 'р./мес'),
							'image' => $item->image,
							'image_count' => count($item->attached_images) ? count($item->attached_images) : 'Нет',
							'type' => 'new',
							'subtype' => $item->subtype,
							'special' => (boolean)$item->special,
							'plan' => $plan_array[$item->plan],
							'material' => $material_array[$item->material],
							'commercial_type' => $commercial_type_array[$item->commercial_type],
							'commercial_business' => $commercial_business_array[$item->commercial_business],
							'lat' => $item->latitude,
							'long' => $item->longitude, 
							'favorite' => $logged ? ($favorited[(int)$item->id] ? true : false) : null, 
						//	'sold' => (boolean)$item->sold, 
							'rassrochka' => $item->rassrochka,
							'mortgage' => $item->mortgage,
							'matcapital' => $item->matcapital,
							'year' => ($item->year) ? $item->year : '',
							'uri' => $item->pagesViewSelf());
			} else {
			
        		$calculate_square_price = (int)$item->cost / (double)$item->square;
        		$calculate_square_price = $calculate_square_price / 1000;
        	
				$items[] = array('uid' => (int)$item->id,
							'title' => $item->title, 
							'rooms' => (int)$item->rooms,
							'square' => (double)$item->square,
							'square_land' => (double)$item->square_land,
							'square_price' => (int)number_format($calculate_square_price, 0, ",", " "),
							'floor' => (int)$item->floor,
							'top_floor' => (int)$item->top_floor,
							'address' => $item->address,
							'address_street' => $item->address_street,
							'address_house' => $item->address_house,
							'address_flat' => $item->address_flat,
							'cost' => number_format($item->cost, 0, ",", " "),						
						//	'currency' => ($item->subtype == 'sale' ? 'руб.' : 'р./мес'),
							'image' => $item->image,
							'image_count' => count($item->attached_images) ? count($item->attached_images) : 'Нет',
							'type' => $item->type,
							'subtype' => $item->subtype,
							'special' => (boolean)$item->special,
							'plan' => $plan_array[$item->plan],
							'material' => $material_array[$item->material],
							'commercial_type' => $commercial_type_array[$item->commercial_type],
							'commercial_business' => $commercial_business_array[$item->commercial_business],
							'lat' => $item->latitude,
							'long' => $item->longitude, 
							'favorite' => $logged ? ($favorited[(int)$item->id] ? true : false) : null, 
							'sold' => (boolean)$item->sold, 
							'rassrochka' => $item->rassrochka,
							'mortgage' => $item->mortgage,
							'matcapital' => $item->matcapital,
							'year' => ($item->year) ? $item->year : '',
							'uri' => '/'.$item->type.'/'.(int)$item->id.'-'.$item->slug, );
				
			}

		} 		
	
		$pagination = array();
		for ($i = 1; $i < (int)ceil($count / $elements_per_page) + 1; $i++) {
			
			if($sort_page + 2 >= $i && $sort_page - 2 <= $i || $i <= 1 || $i > ceil($count / $elements_per_page) - 1 || ($sort_page < 3 && $i <= 5)) {
	            $pagination[] = array(
	            
	                'value' => $i, 
	                'active' => ($i == $sort_page ? true : false)
	            );	         
				
				$not_placed = true; 
	        } else {
	        	if($not_placed) {
			        $pagination[] = array(            
		                'value' => '...', 
		                'active' => false
		            );
					$not_placed = false;
				}
	        }
            
          //  if(($i-1) == $previous_page)
            	
	            
	            
            
        }
		
		$array['view'] = $elements_view;
		$array['count'] = $count;
		$array['pages'] = ceil($count / $elements_per_page);
		$array['current_page'] = $sort_page;
		$array['paginate'] = $pagination;
		$array['items'] = $items;
		
		
		if($elements_view == 'table') {
			$array['table_fields'] = array();
			if($type == 'commercial') {			
				$array['table_fields'][] = array('name'=>'Фото','sortField'=>'img','sort'=>false,'class'=>'search__table-line-box-img');
				$array['table_fields'][] = array('name'=>'Адрес','sortField'=>'address','sort'=>false,'class'=>'search__table-line-box-address');
				$array['table_fields'][] = array('name'=>'Площадь','sortField'=>'square','sort'=>true);
				$array['table_fields'][] = array('name'=>'Тип объекта','sortField'=>'commercial_type','sort'=>false);
				$array['table_fields'][] = array('name'=>'Тип бизнеса','sortField'=>'commercial_business','sort'=>false);
				$array['table_fields'][] = array('name'=>'Цена, р.','additional'=>($subtype == 'sale') ? 'Цена за м<sup>2</sup>' : '','sortField'=>'cost','sort'=>true,'class'=>'search__table-line-box-cost');
				}		
			else if($type == 'land') {			
				$array['table_fields'][] = array('name'=>'Фото','sortField'=>'img','sort'=>false,'class'=>'search__table-line-box-img');
				$array['table_fields'][] = array('name'=>'Адрес','sortField'=>'address','sort'=>false,'class'=>'search__table-line-box-address');
				$array['table_fields'][] = array('name'=>'Площадь','sortField'=>'square','sort'=>true);
				$array['table_fields'][] = array('name'=>'Цена, р.','additional'=>'Цена за сотку','sortField'=>'cost','sort'=>true,'class'=>'search__table-line-box-cost');
				}		
			else if($type == 'house') {
				$array['table_fields'][] = array('name'=>'Фото','sortField'=>'img','sort'=>false,'class'=>'search__table-line-box-img');
				$array['table_fields'][] = array('name'=>'Комнат','sortField'=>'rooms','sort'=>true);
				$array['table_fields'][] = array('name'=>'Адрес','sortField'=>'address','sort'=>false,'class'=>'search__table-line-box-address');
				$array['table_fields'][] = array('name'=>'Этажей','sortField'=>'top_floor','sort'=>true);
				$array['table_fields'][] = array('name'=>'Площадь','sortField'=>'square','sort'=>true);
				$array['table_fields'][] = array('name'=>'Площадь участка','sortField'=>'square_land','sort'=>true);
				$array['table_fields'][] = array('name'=>'Цена, р.','sortField'=>'cost','sort'=>true,'class'=>'search__table-line-box-cost');
			} else if($type == 'new') {
				$array['table_fields'][] = array('name'=>'Фото','sortField'=>'img','sort'=>false,'class'=>'search__table-line-box-img');
				$array['table_fields'][] = array('name'=>'Комнат','sortField'=>'rooms','sort'=>true);
				$array['table_fields'][] = array('name'=>'Адрес','sortField'=>'address','sort'=>false,'class'=>'search__table-line-box-address');
				$array['table_fields'][] = array('name'=>'Этаж','additional'=>'Материал','sortField'=>'floor','sort'=>true, 'class'=> 'search__table-line-box-floor');
				$array['table_fields'][] = array('name'=>'Площадь','sortField'=>'square','sort'=>true);
				$array['table_fields'][] = array('name'=>'Тип жилья','additional'=>'Год сдачи','sortField'=>'plan','sort'=>false, 'class' => 'search__table-line-box-type');
				$array['table_fields'][] = array('name'=>'Цена, р.','additional'=>($subtype == 'sale') ? 'Цена за м<sup>2</sup>' : '','sortField'=>'cost','sort'=>true,'class'=>'search__table-line-box-cost');
			} else {
				$array['table_fields'][] = array('name'=>'Фото','sortField'=>'img','sort'=>false,'class'=>'search__table-line-box-img');
				$array['table_fields'][] = array('name'=>'Комнат','sortField'=>'rooms','sort'=>true);
				$array['table_fields'][] = array('name'=>'Адрес','sortField'=>'address','sort'=>false,'class'=>'search__table-line-box-address');
				$array['table_fields'][] = array('name'=>'Этаж','additional'=>'Материал','sortField'=>'floor','sort'=>true, 'class'=> 'search__table-line-box-floor');
				$array['table_fields'][] = array('name'=>'Площадь','sortField'=>'square','sort'=>true);
				$array['table_fields'][] = array('name'=>'Тип жилья','sortField'=>'plan','sort'=>false, 'class' => 'search__table-line-box-type');
				$array['table_fields'][] = array('name'=>'Цена, р.','additional'=>($subtype == 'sale') ? ($subtype == 'sale') ? 'Цена за м<sup>2</sup>' : '' : '','sortField'=>'cost','sort'=>true,'class'=>'search__table-line-box-cost');
			}
		} else if($elements_view == 'grid') {
			$array['grid_sorts'] = array();
			
			if($type == 'house') {
				$array['grid_sorts'][] = array('name'=>'Количеству комнат','value'=>'rooms');
				$array['grid_sorts'][] = array('name'=>'Этажам','value'=>'top_floor');
				$array['grid_sorts'][] = array('name'=>'Площади','value'=>'square');
				$array['grid_sorts'][] = array('name'=>'Площади участка','value'=>'square_land');
				$array['grid_sorts'][] = array('name'=>'Цене','value'=>'cost');

			} else {
				$array['grid_sorts'][] = array('name'=>'Количеству комнат','value'=>'rooms');
				$array['grid_sorts'][] = array('name'=>'Этажу','value'=>'floor');
				$array['grid_sorts'][] = array('name'=>'Площади','value'=>'square');
				$array['grid_sorts'][] = array('name'=>'Цене','value'=>'cost');
			}
		}
		
		echo json_encode($array);
	}

	public function actionLogin()
	{
		$model=new LoginForm;
		

		// if it is ajax validation request
		if(isset($_POST['ajax']) && $_POST['ajax']==='login-form')
		{
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}

		// collect user input data
		if(isset($_POST['LoginForm']))
		{
			$model->attributes=$_POST['LoginForm'];
			// validate user input and redirect to the previous page if valid
			if($model->validate() && $model->login())
				$this->redirect('/site/admin');
			//	$this->redirect(Yii::app()->user->returnUrl);
		}
		// display the login form
		$this->render('login',array('model'=>$model));
	}
	
	public function actionRecovery()
	{
		$email = Yii::app()->request->getParam('email_recovery');
		
		
		$model = SiteUser::model()->findByAttributes(array('email'=>$email));
		
		if($model) {
			$clonepassword = $model->password = substr(md5($model->email.rand(5,15)), 2, 7);	
			$sendmail = $model->email;
					
			$model->repeat_password = $model->password = crypt($model->password);
			$model->save();
			
			$message = 'Пароль для логина на сайте Domscan.ru: '.$clonepassword;
			$mail = new YiiMailer('simple', array('message' => $message, 'description' => Yii::t('SiteUser.user', 'Восстановление пароля!')));
			$mail->SMTPDebug = 1;
				//render HTML mail, layout is set from config file or with $mail->setLayout('layoutName')
				$mail->render();
				//set properties as usually with PHPMailer
				$mail->From = 'null@domscan.ru';
				$mail->FromName = 'Domscan';
				$mail->Subject = 'Восстановление пароля для сайта Domscan.ru';
				$mail->AddAddress($model->email);
				if($mail->Send()) {
				    $mail->ClearAddresses();
				    $this->render('recovery', array('email'=>$email,'is_found'=>true));
				} else {
					print_r($mail->getError());
				}
				

		} else {
			throw new CHttpException(404, Yii::t('app', 'The requested page does not exist.'));
		}
			
			
	}
	
	public function actionFavorite()
	{
		$value = Yii::app()->request->getParam('value');
		$id = (int)Yii::app()->request->getParam('id');
		
		
		if($value == 'true')
			$value = true;
		else
			$value = false;
			
		if(!Yii::app()->user->isGuest) {
			$logged = true;
			$user_id = Yii::app()->user->id;
			
			$record = Favorited::model()->findByAttributes(array('user_id' => $user_id, 'object_id' => 	$id ));
			
			if($record) {
				if($value == true) {
					
				} else {
					$record->delete();
				}
			} else {
				if($value == true) {
					$record = new Favorited;
					$record->user_id = $user_id;
					$record->object_id = $id;
					$record->save();
				} else {
					
				}
			} 
			
					
			$favorites = Favorited::model()->findAllByAttributes(array('user_id'=>Yii::app()->user->id)); 
			
			$count = count($favorites);
		
		
		} else {
			$logged = false;
			$cookie_favorite = Yii::app()->request->cookies['favorite']->value;
			$cookie_favorite = json_decode($cookie_favorite);
			
		//	$cookie_favorite[$id] = $value;
			
			$cookie_fav_wrap = array();
		
			while ($fruit_name = current($cookie_favorite)) {
			    if ($fruit_name == 1) {
			        $cookie_fav_wrap[key($cookie_favorite)] = true;
			    }
			    next($cookie_favorite);
			}
			if($value)
				$cookie_fav_wrap[$id] = $value;
			else
				unset($cookie_fav_wrap[$id]);
			
			//die('wit');
			$cookie_favorite = json_encode($cookie_fav_wrap);
			
			$cookie = new CHttpCookie('favorite',$cookie_favorite,array('path'=>'/'));
			
			$cookie->expire = time() + 2592000;
			Yii::app()->request->cookies['favorite'] = $cookie;
    
		//	die('wut');
			//print_r( $cookie_fav_wrap);
			//die();
			$count = false;
		}
			
			
		header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
		header("Access-Control-Allow-Origin: *");
		header('Content-type: application/json; charset=utf-8');

		
		echo json_encode(array('id' => $id, 'logged' => $logged, 'value' => $value, 'count' => $count));	

	}
	
	public function actionUser()
	{
		$this->layout = '//layouts/landing';
		$this->application = true;
		$model=new UserLoginForm;
		
		$_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

		// if it is ajax validation request
		if(isset($_POST['ajax']) && $_POST['ajax']==='login-form')
		{
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}

		// collect user input data
		if(isset($_POST['UserLoginForm']))
		{
			$model->attributes=$_POST['UserLoginForm'];
			// validate user input and redirect to the previous page if valid
			if($model->validate() && $model->login())
				$this->redirect('/cabinet');
			else
				$this->render('//site/error');
			//	$this->redirect(Yii::app()->user->returnUrl);
		}
		// display the login form
		
		
		$this->redirect('/');
		//$this->render('login',array('model'=>$model));
	}
	
	public function actionRegister()
	{
		$this->application = true;
		$model=new SiteUser;
		
		$model->scenario = 'registerwcaptcha';

		$_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
		// if it is ajax validation request
		if(isset($_POST['ajax']) && $_POST['ajax']==='login-form')
		{
			
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}

		// collect user input data
		if(isset($_POST['SiteUser']))
		{
			$model->attributes=$_POST['SiteUser'];
			
		//	$clonepassword = $model->password = 'testpassword';	
			$clonepassword = $model->password = substr(md5($model->email), 2, 8);	
			
			$sendmail = $model->email;
					
			$model->repeat_password = $model->password = crypt($model->password);
			
			$model->activation_string = md5(time().time()).md5(time());
			
			if($model->telephone == '123456')
				$this->redirect('/');
			
    
			// validate user input and redirect to the previous page if valid
			if($model->accept_terms == true && $model->validate()) {
				$model->scenario = NULL;
				if($model->save()) {
					ModeratorLogHelper::AddToLog('registered-user-'.$model->id,'Зарегистрирован новый пользователь '.$model->email,null,$model->id);
					$message = Yii::t('SiteUser.user', '{name}, вы создали свою учетную запись на сайте domscan.ru.<br> Если вы не создавали учетную учетную запись и не имеете понятия о нашем сайте пройдите пожалуйста <a href="'.Yii::app()->params['site_url'].'">по ссылке.</a>  <br><br>Ваш пароль для входа на сайт: <b>{password}</b><br><br><b>Для завершения регистрации  пройдите пожалуйста по {activation_url}</b>.', array('{site_name}' => Yii::app()->name, '{activation_url}' => '<a href="'.Yii::app()->params['site_url'].'cabinet/confirmation/?string='.$model->activation_string.'">ссылке</a>','{password}'=>$clonepassword, '{name}'=>$model->name));
					
					//get template 'simple' from /themes/default/views/mail
					$mail = new YiiMailer('simple', array('message' => $message, 'description' => Yii::t('SiteUser.user', 'Успешная регистрация!')));
					//render HTML mail, layout is set from config file or with $mail->setLayout('layoutName')
					$mail->render();
					//set properties as usually with PHPMailer
					$mail->From = 'null@domscan.ru';
					$mail->FromName = 'Domscan';
					$mail->Subject = 'Регистрация на сайте Domscan.ru';
					$mail->AddAddress($model->email);
					if ($mail->Send()) {
					    $mail->ClearAddresses();
						$this->redirect('/cabinet/success');
					}
					
					
				}
				else
					$this->render('//site/index');
			}
			else
			{		
							
				$this->render('//site/index');
			}
			//	$this->redirect(Yii::app()->user->returnUrl);
		}
		// display the login form
		
		
		$this->redirect('/');
		//$this->render('login',array('model'=>$model));
	}
	
	/**
	 * Logs out the current user and redirect to homepage.
	 */
	public function actionLogout()
	{
		Yii::app()->user->logout();
		$this->redirect(Yii::app()->homeUrl);
	}

}