<?php
/** 
 * Demo controller
 * 
 * @category   DoubleGIS
 * @package    Demo
 * @subpackage Controllers
 * @copyright  2012 DoubleGIS
 * @version    1.0
 * @link       http://api.2gis.ru/doc/
 */
class DgisController extends CController
{
    /**
     * @var string
     */
    public $defaultAction = 'index';
    
    /**
     * @var bool
     */
    public $showSearchForm = true;
    
    /**
     * @var array
     */
    public $params;
    
    /**
     * Initializes controller
     */
    public function init() {
        $this->pageTitle = 'API 2ГИС';
        
        $request = Yii::app()->request;
        $this->params['what']               = $request->getParam('what', '');
        $this->params['rubric']             = $request->getParam('rubric', '');
        $this->params['where']              = $request->getParam('where', '');
        $this->params['q']                  = $request->getParam('q');
        $this->params['sort']               = $request->getParam('sort', 'relevance');
        $this->params['search_condition']   = $request->getParam('search_condition', 'where');
        $this->params['lat']                = $request->getParam('lat', '54.991984');
        $this->params['lon']                = $request->getParam('lon', '82.901886');
        $this->params['radius']             = $request->getParam('rad', '1000');
        $this->params['workingNow']         = $request->getParam('workingNow', false);
        
        if ($rubric = $request->getParam('rubric', '')) $this->params['what'] = $rubric;
    }

    /**
     * Action for demo site main page
     */
    public function actionIndex()
    {
        echo 'u wot?';
    }
	
    public function actionGeoSearchInput()
    {
        $this->render('input', array(

        ));
    }

    public function actionGeoSearchCoordinates()
    {
        $request = Yii::app()->request;    
        $searchType = $request->getParam('searchType', 'byName');       
		
        $string = $request->getParam('q', 'Красноярск, Мира проспект, 53');
		$searchParams = array('q' => $string);
        $searchParams['format'] = 'short';
		$searchParams['types'] = 'house, street';
		$searchParams['limit'] = '1';
		
		$jst = microtime(true);
        
        
        if(isset($searchParams['q'])) {
        	$string = $searchParams['q'];
			$cache = DgisCache::model()->findByAttributes(array('cache_string'=>$string,'cache_type'=>'coordinates'));
			if(!$cache) { 
		        try {
		            $json = Yii::app()->apiClient->geoSearch($searchParams);
		        } catch (Exception $e) {
		            $json = '{}';
		        }
		
		        $jet = microtime(true);
		        Yii::trace(print_r($json, true), 'demo.geoSearch.result');
		
		
		        $geoms = json_decode($json);
		        
		        $cache = new DgisCache;
				$cache->cache_string = $string;
				$cache->cache_type = 'coordinates';
				$cache->cache_storage = json_encode($geoms);
				$current = date('Y-m-d');
				$cache->cache_expires = strtotime(date("Y-m-d", strtotime($date)) . " +1 month");//'2016-01-01';
				$cache->save();
				
				
				
				
				
			} else {
				
		
				$geoms = json_decode($cache->cache_storage);
				
			}
				
        }

   
		
		$center = null;
		if (isset($geoms->result) && isset($geoms->result[count($geoms->result) - 1]->centroid)) {
			$center = $geoms->result[count($geoms->result) - 1]->centroid;
		}
 
        
		
		$geometries = array();
		try {
		
			if(isset($geoms->result)) {
				foreach ($geoms->result as $geom) {
					$point = $geom->centroid;
					$point = preg_replace("/[^0-9,. ]/", "", $point);
					$point = explode(' ', $point);
					
					$point['error'] = false;
					$point['lat'] = $point[0];
					$point['long'] = $point[1];
					unset($point[0]); unset($point[1]);
					
					$geometries = $point;
					break;
				}
				echo json_encode($geometries);
			} else {
				$json = array();
				$json['error'] = true;
				$json['text'] = 'Невозможно найти координаты указанного объекта';
				echo json_encode($json);
			
			}
		}
		catch (Exception $e) {
				$json = array();
				$json['error'] = true;
				$json['text'] = 'Невозможно найти координаты указанного объекта';
				echo json_encode($json);
			
        }
	}
	
    public function actionGeoSearchJSON()
    {
        $request = Yii::app()->request;    
        $searchType = $request->getParam('searchType', 'byName');       
        switch ($searchType) {
            case 'byName':
                $where = $request->getParam('q', 'Мира');
                $city = $request->getParam('city', 'Красноярск');
                
				if($request->getParam('searchByType','street') == 'house') {
					$city = $request->getParam('city', 'Красноярск');
					$street = $request->getParam('street', 'Мира');
					$where = $request->getParam('q', 'Мира');
				
					$searchParams = array('q' => $city.', '.$street.', '.$where);
				} else {
					$searchParams = array('q' => $city.', '.$where);
				}
                break;
            case 'byPoint':
                $lat = $request->getParam('lat', '54.991984');
                $lon = $request->getParam('lon', '82.901886');
                $searchParams = array('q' => $lon . ',' . $lat);
                break;
        }
        
		
		$searchParams['format'] = 'full';
        $searchParams['types'] = 'street';
		
		if($request->getParam('searchByType','street') == 'house')
			$searchParams['types'] = 'house';
							   
        if(isset($searchParams['q'])) {
        	$string = $searchParams['q'];
			$cache = DgisCache::model()->findByAttributes(array('cache_string'=>$string,'cache_type'=>$searchParams['types']));
			if(!$cache) { 
			
			
		        $searchParams['limit'] = 10;
		     
		        $jst = microtime(true);
		        
		        try {
		            $json = Yii::app()->apiClient->geoSearch($searchParams);
		        } catch (Exception $e) {
		            $json = '{}';
		        }
		
		        $jet = microtime(true);
		        Yii::trace(print_r($json, true), 'demo.geoSearch.result');
		        $xst = microtime(true);
		        
		        try {
		            $xml = Yii::app()->apiClient->geoSearch($searchParams, 'xml');
		        } catch (Exception $e) {
		            $xml = '';
		        }
		        
		        $xet = microtime(true);
		
		        $geoms = json_decode($json);
		        switch ($searchType) {
		            case 'byName':
		                $center = null;
		                if (isset($geoms->result) && isset($geoms->result[count($geoms->result) - 1]->centroid)) {
		                    $center = $geoms->result[count($geoms->result) - 1]->centroid;
		                }
		                break;
		            case 'byPoint':
		                $center = 'POINT(' . $lon . ' ' . $lat . ')';
		                break;
		        }
				
				$geometries = array();
		            foreach ($geoms->result as $geom) {
		                $geometries[] = $geom->short_name;
		                
		            }
				
				$arrayFinal = array();
				$arrayFinal['query'] = $where;
				$arrayFinal['suggestions'] = $geometries;
		
				$cache = new DgisCache;
				$cache->cache_string = $string;
				$cache->cache_type = $searchParams['types'];
				$cache->cache_storage = json_encode($arrayFinal['suggestions']);
				$cache->cache_expires = '2016-01-01';
				$cache->save();
				
				
				
				
				
			} else {
				
				$arrayFinal = array();
				$arrayFinal['query'] = $where;
				$arrayFinal['suggestions'] = json_decode($cache->cache_storage);
				
			}
				
        }


		echo json_encode($arrayFinal);

        /*$this->render('geom_list', array(
            'geoms' => $geoms,
            'where' => isset($where) ? $where : null,
            'lat' => isset($lat) ? $lat : null,
            'lon' => isset($lon) ? $lon : null,
            'workingNow' => false,
            'searchType' => $searchType,
            'center' => $center,
            'rawJson' => Helper::jsonPrettify($json),
            'rawXml' => $xml,
            'rawRe' => Yii::app()->apiClient->lastRequest,
            'jsonRespTime' => $jet - $jst,
            'xmlRespTime' => $xet - $xst,
        ));*/
    }
    
    /**
     * Action for handling errors
     */
    public function actionError()
    {
        $this->pageTitle = 'Страница не найдена';
        $this->showSearchForm = false;
        $this->render('notfound');
    }
}
