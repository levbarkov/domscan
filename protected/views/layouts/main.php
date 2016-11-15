<!DOCTYPE html>
<!--[if IE 8]>
<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php echo isset($this->pageTitle) ? $this->pageTitle : Yii::app()->name; ?></title>
    <meta name="description" content="">
    <link rel="icon" href="/favicon.png" type="image/x-icon">
	<link rel="shortcut icon" href="/favicon.png" type="image/x-icon">

    <link rel="stylesheet" href="/bower_components/please-wait/build/please-wait.css"/>
    <script src="/bower_components/please-wait/build/please-wait.min.js"></script>


    <link rel="stylesheet" href="/bower_components/ion.rangeSlider/css/ion.rangeSlider.css"/>
    <link rel="stylesheet" href="/bower_components/ion.rangeSlider/css/ion.rangeSlider.skinNice.css">
    <link rel="stylesheet" href="/bower_components/chosen/chosen.min.css">
    <link rel="stylesheet" href="/bower_components/nprogress/nprogress.css">
    <link rel="stylesheet" href="/bower_components/fotorama/fotorama.css">
    <link rel="stylesheet" href="/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css">
    <link rel="stylesheet" href="/bower_components/PruneCluster/dist/LeafletStyleSheet.css">
    <link rel="stylesheet" href="/bower_components/drop/css/drop-theme-basic.css">
    <link rel="stylesheet" href="/bower_components/drop/css/drop-theme-arrows-bounce.css">
    <link rel="stylesheet" href="/bower_components/drop/css/drop-theme-hubspot-popovers.css">

    <link rel="stylesheet" href="/css/style.css"/>
    <style>
    .user__data-listings-table-cell-floor-material {
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    min-width: 100px;
	    max-width: 100px;
	    overflow: hidden;
	    text-align: left;
    }
    
    </style>
    <!--<link rel="stylesheet" href="/css/style.min.css"/>-->
</head>
<body <?= ($this->getUniqueId() == 'site') ? 'ng-app="app"' : '' ?>>
<? if($this->getUniqueId() == 'site') { ?>
    <script>
      window.load_screen = pleaseWait({
      	logo: "/img/logo.svg",
      	backgroundColor: "#fff",
      	loadingHtml: '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'
      });
    </script>
<? } ?>
<? $this->renderPartial('//site/_googletag'); ?>
<!--[if lt IE 9]>
<style>
    .gradient {
        filter: none;
    }

    .browsehappy {
        margin: 0.2em 0;
        background: #ccc;
        color: #000;
        padding: 0.2em 0;
    }
</style>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
    your browser</a> to improve your experience.</p>
<![endif]-->

<div class="header">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-3">
                <div class="header__logo">
                    <a class="not-underline" href="/">
                        <img src="/img/logo.svg" alt="" width="82%"/>
                        <p class="header__logo-title">
                            Легкий поиск недвижимости
                        </p>
                    </a>


                </div>
            </div>
            <div class="col-xs-2 header__btn-add-col">
                <!--<a class="btn btn-default header__btn-add" href="#">Добавить объявление</a>-->
                <p class="header__logo-city-title">
                    Ваш город:
                </p>
                <a class="header__logo-city show-modal" href="#city">
                    <?= $this->city_title ?>
                </a>
            </div>
            <div class="col-xs-2 header__col-find">
                <li class="header__menu-list-item <? if(Yii::app()->controller->id == 'site' && Yii::app()->controller->action->id == 'index') echo ' active'; ?>">
                    <a class="" href="/">
                        Поиск квартир
                    </a>
                </li>
            </div>
            <div class="col-xs-5">
                <div class="header__menu">
                    <table>
                        <tr>
                            <td>
                                <li class="header__menu-list-item special <? if(Yii::app()->controller->action->id == 'special') echo ' active'; ?>">
                                    <a class="" href="/special/">
                                        Спецпредложения
                                    </a>
                                    <span class="info">!</span>
                                </li>
                                <li class="header__menu-list-item <? if(Yii::app()->controller->id == 'faq' && Yii::app()->controller->action->id == 'index') echo ' active'; ?>">
                                    <a class="" href="/faq/">
                                        Вопрос ответ
                                    </a>
                                </li>
                            </td>
                            <td>
                                <li class="header__menu-list-item <? if(Yii::app()->controller->id == 'news') echo ' active'; ?>">
                                    <a class="" href="/news/">
                                        Новости
                                    </a>
                                </li>
                                <li class="header__menu-list-item <? if(Yii::app()->controller->id == 'sotrudniki') echo ' active'; ?>">
                                    <a class="not-underline" href="/sotrudniki/">
                                        Сотрудники
                                    </a>
                                </li>
                            </td>
                            <td class="header__menu-last">
		                        <? if(Yii::app()->user->isGuest || !$this->checkUserIndeed()): ?>
		                        <li class="header__menu-list-item">
		                            <a class="show-modal link-dotted" href="#reg">
		                                Вход/Регистрация
		                            </a>
		                        </li>
		                        <? else: ?>
		                        
		                        <li class="header__menu-list-item header__menu-list-item-dropdown-container"><a href="/cabinet/" class="link-dotted"><?= Yii::app()->user->name ?></a>
			                      <div class="header__menu-list-item-dropdown-wrapper">
			                        <div class="header__menu-list-item-dropdown">
			                          <div class="header__menu-list-item-dropdown-content">
			                            <ul class="header__menu-list-item-dropdown-list">
			                              <li class="header__menu-list-item-dropdown-list-item"><a href="/cabinet/">Мои обьявляения</a></li>
			                              <li class="header__menu-list-item-dropdown-list-item"><a href="/cabinet/personal">Настройки</a></li>
			                              <li class="header__menu-list-item-dropdown-list-item logout"><a href="/site/logout">Выйти</a></li>
			                            </ul>
			                          </div>
			                        </div>
			                      </div>
			                    </li>
                    
                                
								<? endif ?>
								<? $favorites = Favorited::model()->findAllByAttributes(array('user_id'=>Yii::app()->user->id));                                     
									$favarray = array();										
									if($favorites) {
										foreach($favorites as $favorite) {
											$favarray[] = $favorite->object_id;
										}
										$favorites = Estate::model()->findAllByAttributes(array('id'=>$favarray));	
									}	
										
									$cookie_favorite = Yii::app()->request->cookies['favorite']->value;
									$cookie_favorite = json_decode($cookie_favorite);
									
									$cookie_fav_wrap = array();
									
									
									foreach($cookie_favorite as $cookie_key => $cookie_value) {
									    if ($cookie_value) {
									        $cookie_fav_wrap[] = $cookie_key;
									    }
									    $favorites = $cookie_fav_wrap;
									}
																
                                    ?>
			                    <li class="header__menu-list-item">
			                    	<a href="/cabinet/favorites" class="link-dotted">Избранное</a>
			                    	<span class="info favorite-counter"><?= count($favorites) ?></span>
			                    </li>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<?php echo $content; ?>

<div class="mymodal" id="city">
            <div class="mymodal__window">

        <div class="header__logo-city-change-wrapper">
            <a class="header__logo-city-change-wrapper-close mymodal__close" href="#">
                <img src="/img/icon-city-close.png" alt="#"/>
            </a>
            <h2>Выберите город</h2>
            
            <? $arrCities = City::model()->cache(120)->findAll(array('order'=>'sort ASC')); 
	            $len = count($arrCities);

				$firsthalfCities = array_slice($arrCities, 0, round($len / 2));
				$secondhalfCities = array_slice($arrCities, round($len / 2));

            ?>
            <div class="row">
            <? //print_r( CDbConnection::queryCacheID) ?>
                <div class="col-xs-6">
                    <ul class="header__logo-city-change-list">
                    	<? foreach($firsthalfCities as $city_item): ?>
                    	
	                        <li class="header__logo-city-change-list-item <?= $city_item->important ? 'bold' : '' ?>">
	                            <a class="header__logo-city-change-link " href="/?locale=<?= $city_item->en_slug ?>"><?= $city_item->name ?></a>
	                        </li>
                    	
                    	<? endforeach ?>

                    </ul>
                </div>
                <div class="col-xs-6">
                    <ul class="header__logo-city-change-list">
                    	<? foreach($secondhalfCities as $city_item): ?>
                    	
	                        <li class="header__logo-city-change-list-item <?= $city_item->important ? 'bold' : '' ?>">
	                            <a class="header__logo-city-change-link " href="/?locale=<?= $city_item->en_slug ?>"><?= $city_item->name ?></a>
	                        </li>
                    	
                    	<? endforeach ?>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<? if(Yii::app()->user->isGuest || !$this->checkUserIndeed()): ?>
<?= $this->renderPartial('//layouts/_login_modal') ?>
<? endif ?>
	
    <script src="http://maps.api.2gis.ru/2.0/loader.js" data-id="dgLoader"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="/bower_components/lodash/lodash.min.js"></script>
    <script src="/bower_components/jquery-ui/ui/core.js"></script>
    <script src="/bower_components/jquery-ui/ui/widget.js"></script>
    <script src="/bower_components/jquery-ui/ui/accordion.js"></script>
    <script src="/bower_components/ion.rangeSlider/js/ion.rangeSlider.min.js"></script>
    <script src="/bower_components/angular/angular.min.js"></script>
    <script src="/bower_components/angular-route/angular-route.min.js"></script>
    <script src="/bower_components/angular-cookies/angular-cookies.min.js"></script>
    <script src="/bower_components/chosen/chosen.jquery.min.js"></script>
    <script src="/bower_components/jquery.cookie/jquery.cookie.js"></script>
    <script src="/bower_components/nprogress/nprogress.js"></script>
    <script src="/bower_components/fotorama/fotorama.js"></script>
    <script src="/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="/bower_components/jquery-backstretch/jquery.backstretch.min.js"></script>
    <script src="/bower_components/drop/drop.min.js"></script>
    <script src="/bower_components/floatThead/dist/jquery.floatThead.min.js"></script>
    <script src="/bower_components/angular-float-thead/angular-floatThead.js"></script>
    <script src="/bower_components/jquery.maskedinput/dist/jquery.maskedinput.min.js"></script>
    <script src="/js/app.js"></script>
	<script src="/js/jquery.autocomplete.js"></script>
	<script src="/js/jquery.autoellipsis.js"></script>
	<script src="/js/additions.js"></script>

	<script>
	    load_screen.finish();
	</script>
	<script>	
		
		
    
			$(".popup-special").each(function () {
                var a = new Drop({
                    target: this,
                    content: "Данная услуга является платной.<br>Прочитайте <a href='/special_service' target='_blank'>условия по её заказу.</a><br> (ссылка откроется в новом окне)",
                    position: 'top right',
                    openOn: 'hover',
                    classes: 'drop-theme-arrows-bounce drop-hero'
                });
            });
	</script>
	

</body>
</html>
