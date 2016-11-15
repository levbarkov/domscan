<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return array(
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
	'name'=>'Real Estate Krasnoyarsk',
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
	
		'user'=>array(
			// enable cookie-based authentication
			'allowAutoLogin'=>true,
		),
		'cache' => array(
            'class' => 'CDbCache'
        ),
	  	//'cache' => array('class' => 'system.caching.CDummyCache'),
				// uncomment the following to enable URLs in path-format
		
		'urlManager'=>array(
			'urlFormat'=>'path',
			'showScriptName'=>false,
			'rules'=>array(
				'news/' => 'news/index',
				'cabinet/<action:\w+>' => 'cabinet/<action>',
				'cabinet/' => 'cabinet/index',
				'news/<id:\d+>-<en_title:[\w\-]+>'=>'news/view',
				'flat/<id:\d+>-<slug:\w+>'=>'objects/view',
				'new/<id:\d+>-<slug:\w+>'=>'objects/view',
				'commercial/<id:\d+>-<slug:\w+>'=>'objects/view',
				'land/<id:\d+>-<slug:\w+>'=>'objects/view',
				'house/<id:\d+>-<slug:\w+>'=>'objects/view',
				'<controller:\w+>/<id:\d+>'=>'<controller>/view',
				'special/'=>'site/special',	
				'objects/type/<type:\w+>'=>'objects/list',						
				'objects/type/<type:\w+>/create'=>'objects/create',			
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
			'connectionString' => 'mysql:host=localhost;dbname=bureauit2_real',
			'emulatePrepare' => true,
			'username' => 'bureauit2_real',
			'password' => 'dgekarta',
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
		'adminEmail'=>'webmaster@example.com',
	),
);