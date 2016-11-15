<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return array(
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
	'name'=>'Домскан',
	'language'=>'ru',

	// preloading 'log' component
	'preload'=>array('log'),

	// autoloading model and component classes
	'import'=>array(
		'application.models.*',
		'application.components.*',
	//	'application.modules.user.models.*',
	//	'application.modules.role.models.*',
		'application.modules.phpimage.*',
		'application.extensions.*',
		'application.helpers.*',
		'ext.YiiMailer.YiiMailer',
		'application.extensions.CAdvancedArBehavior',
		'application.extensions.easyimage.EasyImage',
	),

	'modules'=>array(
		// uncomment the following to enable the Gii tool
	/*	'user' => array(
		'debug' => false,
		'userTable' => 'nluk_user',
		'translationTable' => 'nluk_translation',
		),
		'role' => array(
		'roleTable' => 'nluk_role',
		'userRoleTable' => 'nluk_user_role',
		'actionTable' => 'nluk_action',
		'permissionTable' => 'nluk_permission',
		),*/
		/*'gii'=>array(
			'class'=>'system.gii.GiiModule',
			'password'=>'iddqd',
			'generatorPaths'=>array(
	          'ext.gtc',   // Gii Template Collection
	          ),
	        
			// If removed, Gii defaults to localhost only. Edit carefully to taste.
			'ipFilters'=>array('127.0.0.1','::1','94.73.199.245'),
		),*/
		
	),

	// application components
	'components'=>array(
		'dompdf'=>array(
            'class'=>'ext.yiidompdf.yiidompdf'
        ),
         'easyImage' => array(
		    'class' => 'application.extensions.easyimage.EasyImage',
		    'driver' => 'GD',
		    'quality' => 100,
		    'cachePath' => '/assets/easyimage/',
		    'cacheTime' => 2592000,
		    'retinaSupport' => true,
		  ),
		'user'=>array(
			// enable cookie-based authentication
			'allowAutoLogin'=>true,
		),
		'cache' => array(
            'class' => 'CDbCache'
        ),
        'apiClient' => array(
            'class' => 'application.extensions.DGApiClient.DGApiClient',
            'behaviors' => array(
                'LonLatBehavior' => array(
                    'class' => 'application.extensions.DGApiClient.LonLatBehavior',
                )
            ),
            'apiUrl' => 'http://catalog.api.2gis.ru',
            'apiKey' => 'ruewer2408',  // paste you API key here
            'apiVersion' => '1.3',
            'apiLanguage' => 'ru',
            'webBrowser' => 'webBrowser'
        ),
        'webBrowser' => array(
            'class' => 'application.extensions.WebBrowser.DGWebBrowser',
            'adapter' => 'curl'
        ),
	  	//'cache' => array('class' => 'system.caching.CDummyCache'),
				// uncomment the following to enable URLs in path-format
		
		'urlManager'=>array(
			'urlFormat'=>'path',
			'showScriptName'=>false,
			'rules'=>array(
				'sitemap.xml'=>'sitemap/index',
				'dgis/' => 'dgis/index',
				
				'zastroischiki/' => 'zastroischiki/index',
				'zastroischiki/admin' => 'zastroischiki/admin',
				'zastroischiki/admin/create' => 'zastroischiki/create',
				'zastroischiki/admin/rating' => 'zastroischiki/rating',
				'zastroischiki/admin/recalculate' => 'zastroischiki/recalculate',
				'zastroischiki/<en_title:[\w\-]+>' => 'zastroischiki/view',
				'zastroischiki/<en_title:[\w\-]+>/news'=>'zastroischiki/news',
				'zastroischiki/<en_title:[\w\-]+>/flats'=>'zastroischiki/flats',			
				'zastroischiki/<en_title:[\w\-]+>/flats/page/<page_id:\d+>'=>'zastroischiki/flats',	
				'zastroischiki/<en_title:[\w\-]+>/flats/<district:[\w\-]+>'=>'zastroischiki/flats',	
				'zastroischiki/<en_title:[\w\-]+>/flats/<district:[\w\-]+>/page/<page_id:\d+>'=>'zastroischiki/flats',	
				'zastroischiki/<en_title:[\w\-]+>/update'=>'zastroischiki/update',	
				'zastroischiki/<en_title:[\w\-]+>/delete'=>'zastroischiki/delete',	
				
				
				'zastroischiki/<en_title:[\w\-]+>/all_buildings'=>'zastroischiki/buildings',	
				
				'zastroischiki/<en_title:[\w\-]+>/createPage'=>'zastroischikiPages/create',	
				'zastroischiki/<en_title:[\w\-]+>/listPages'=>'zastroischikiPages/admin',	
				'zastroischiki/<en_title:[\w\-]+>/<en_page_title:[\w\-]+>'=>'zastroischikiPages/view',	
				'zastroischiki/<en_title:[\w\-]+>/<en_page_title:[\w\-]+>/update'=>'zastroischikiPages/update',	
				'zastroischiki/<en_title:[\w\-]+>/<en_page_title:[\w\-]+>/delete'=>'zastroischikiPages/delete',	
				
				
				'novostroiki/admin/create'=>'novostroiki/create',
				'novostroiki/admin' => 'novostroiki/admin',				
				'novostroiki/update/<id:\d+>' => 'novostroiki/update',
				'novostroiki/delete/<id:\d+>' => 'novostroiki/delete',				
				'novostroiki/ajaxChooseImage'=>'novostroiki/ajaxChooseImage',		
				'novostroiki/ajaxDeleteImage'=>'novostroiki/ajaxDeleteImage',		
				'novostroiki/ajaxDeleteAllImages'=>'novostroiki/ajaxDeleteAllImages',	
				
				'novostroiki/' => 'novostroiki/list',
				'novostroiki/page/<page_id:\d+>' => 'novostroiki/list',
				'novostroiki/<city_title:[\w\-]+>' => 'novostroiki/list',
				'novostroiki/<city_title:[\w\-]+>/page/<page_id:\d+>' => 'novostroiki/list',
				
				
				'novostroiki/<city_title:[\w\-]+>/<id:\d+>-<slug:\w+>' => 'novostroiki/view',
				
				
				'novostroiki/<city_title:[\w\-]+>/<id:\d+>-<slug:\w+>/flats'=>'novostroiki/flats',	
				'novostroiki/<city_title:[\w\-]+>/<id:\d+>-<slug:\w+>/flats/page/<page_id:\d+>'=>'novostroiki/flats',	
				'novostroiki/<city_title:[\w\-]+>/<id:\d+>-<slug:\w+>/commercial'=>'novostroiki/commercial',	
				'novostroiki/<city_title:[\w\-]+>/<id:\d+>-<slug:\w+>/commercial/page/<page_id:\d+>'=>'novostroiki/commercial',	
				
				'novostroiki/<city_title:[\w\-]+>/<id:\d+>-<slug:\w+>/createPage'=>'novostroikiPages/create',	
				'novostroiki/<city_title:[\w\-]+>/<id:\d+>-<slug:\w+>/listPages'=>'novostroikiPages/admin',	
				'novostroiki/<city_title:[\w\-]+>/<id:\d+>-<slug:\w+>/<en_title:[\w\-]+>/update'=>'novostroikiPages/update',	
				'novostroiki/<city_title:[\w\-]+>/<id:\d+>-<slug:\w+>/<en_title:[\w\-]+>/delete'=>'novostroikiPages/delete',
				'novostroiki/<city_title:[\w\-]+>/<id:\d+>-<slug:\w+>/<en_title:[\w\-]+>'=>'novostroikiPages/view',
				'novostroiki/<city_title:[\w\-]+>/<id:\d+>-<slug:\w+>/<en_title_parent:[\w\-]+>/<en_title:[\w\-]+>'=>'novostroikiPages/view',		
				
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>' => 'novostroiki/list',
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>/page/<page_id:\d+>' => 'novostroiki/list',
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>/<id:\d+>-<slug:\w+>' => 'novostroiki/view',
				
				
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>/<id:\d+>-<slug:\w+>/flats'=>'novostroiki/flats',	
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>/<id:\d+>-<slug:\w+>/flats/page/<page_id:\d+>'=>'novostroiki/flats',	
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>/<id:\d+>-<slug:\w+>/commercial'=>'novostroiki/commercial',	
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>/<id:\d+>-<slug:\w+>/commercial/page/<page_id:\d+>'=>'novostroiki/commercial',	
				
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>/<id:\d+>-<slug:\w+>/createPage'=>'novostroikiPages/create',	
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>/<id:\d+>-<slug:\w+>/listPages'=>'novostroikiPages/admin',	
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>/<id:\d+>-<slug:\w+>/<en_title:[\w\-]+>/update'=>'novostroikiPages/update',	
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>/<id:\d+>-<slug:\w+>/<en_title:[\w\-]+>/delete'=>'novostroikiPages/delete',
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>/<id:\d+>-<slug:\w+>/<en_title:[\w\-]+>'=>'novostroikiPages/view',
				'novostroiki/<city_title:[\w\-]+>/<district_title:[\w\-]+>/<id:\d+>-<slug:\w+>/<en_title_parent:[\w\-]+>/<en_title:[\w\-]+>'=>'novostroikiPages/view',		
							
				
				'news/' => 'news/index',
				'news/<id:\d+>-<en_title:[\w\-]+>'=>'news/view',				
				'news/admin/page/<page_id:\d+>'=>'news/admin',	
				'articles/' => 'articles/index',
				'articles/<id:\d+>-<en_title:[\w\-]+>'=>'articles/view',				
				'articles/admin/page/<page_id:\d+>'=>'articles/admin',	
				'reviews/' => 'reviews/index',
				'reviews/<id:\d+>-<en_title:[\w\-]+>'=>'reviews/view',				
				'reviews/admin/page/<page_id:\d+>'=>'reviews/admin',	
				'guides/' => 'guides/index',
				'guides/<id:\d+>-<en_title:[\w\-]+>'=>'guides/view',			
				'guides/admin/page/<page_id:\d+>'=>'guides/admin',	
				'analytics/' => 'analytics/index',
				'analytics/<id:\d+>-<en_title:[\w\-]+>'=>'analytics/view',				
				'analytics/admin/page/<page_id:\d+>'=>'analytics/admin',	
				
				'sotrudniki/' => 'sotrudniki/index',
				'cabinet/<action:\w+>' => 'cabinet/<action>',
				'cabinet/' => 'cabinet/index',
				'flat/<id:\d+>-<slug:\w+>'=>'objects/view',
				'new/<id:\d+>-<slug:\w+>'=>'objects/view',
				'commercial/<id:\d+>-<slug:\w+>'=>'objects/view',
				'land/<id:\d+>-<slug:\w+>'=>'objects/view',
				'house/<id:\d+>-<slug:\w+>'=>'objects/view',
				'news/pdf/<id:\d+>-<en_title:[\w\-]+>'=>'news/pdf',
				'flat/pdf/<id:\d+>-<slug:\w+>'=>'objects/pdf',
				'new/pdf/<id:\d+>-<slug:\w+>'=>'objects/pdf',
				'commercial/pdf/<id:\d+>-<slug:\w+>'=>'objects/pdf',
				'land/pdf/<id:\d+>-<slug:\w+>'=>'objects/pdf',
				'house/pdf/<id:\d+>-<slug:\w+>'=>'objects/pdf',
				'<controller:\w+>/<id:\d+>'=>'<controller>/view',
				'special/'=>'site/special',	
				'objects/type/<type:\w+>'=>'objects/list',						
				'objects/create'=>'objects/create',			
				'objects/type/<type:\w+>/city/<city_id:\d+>/create'=>'objects/create',				
				'objects/type/<type:\w+>/page/<page_id:\d+>'=>'objects/list',	
				'objects/type/<type:\w+>/city/<city_id:\d+>'=>'objects/list',	
				'objects/type/<type:\w+>/city/<city_id:\d+>/page/<page_id:\d+>'=>'objects/list',								
				'objects/type/<type:\w+>/city/<city_id:\d+>/create'=>'objects/create',				
				'<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>',				
				'<controller:\w+>/<action:\w+>/<en_title:\w+>'=>'<controller>/<action>',
				'<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
				'faq/'=>'faq/index',
				'admin/'=>'site/admin',
				'<en_title:[\w\-]+>'=>'pages/view',	
				'pages/<en_title:[\w\-]+>'=>'pages/view',	
				

	

				//'admin/'=>'/course/admin',
			),
		),
		
	//	'db'=>array(
	//		'connectionString' => 'sqlite:'.dirname(__FILE__).'/../data/testdrive.db',
	//	),
		// uncomment the following to use a MySQL database
		
		'db'=>array(
			'connectionString' => 'mysql:host=localhost;dbname=nextangel_domsnew',
			'emulatePrepare' => true,
			'username' => 'nextangel_doms',
			'password' => 'xe4KXAM9',
			'charset' => 'utf8',
		//	'tablePrefix' => 'nluk_',
       // 'enableProfiling'=>true,
        // показываем значения параметров
       // 'enableParamLogging' => true,
		),
		
		'errorHandler'=>array(
			// use 'site/error' action to display errors
			'errorAction'=>'site/error',
		),
		'log'=>array(
			'class'=>'CLogRouter',
			'routes'=>array(
				array(
					'class'=>'CFileLogRoute',
					'levels'=>'error, warning',
				),
				// uncomment the following to show log messages on web pages
				
				/*array(
					'class'=>'CWebLogRoute',
				),*/
		/*		array(
		            // направляем результаты профайлинга в ProfileLogRoute (отображается
		            // внизу страницы)
		            'class'=>'CProfileLogRoute',
		            'levels'=>'profile',
		            'enabled'=>true,
		        ),*/
				
			),
		),
	),

	// application-level parameters that can be accessed
	// using Yii::app()->params['paramName']
	'params'=>array(
		// this is used in contact page
		'site_url' => 'http://real-estate-dev.bureauit.com/',
		'adminEmail'=>'webmaster@example.com',
        'searchMethod' => 'search',
        'mapsApiUrl' => 'http://maps.api.2gis.ru/1.0',
        'defaultLimit' => 10,
	),
);