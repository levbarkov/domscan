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
	
$has_canonical = false;						
$canonical = 'http' . (isset($_SERVER['HTTPS']) ? 's' : '') . '://' . "{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
if(substr($canonical, -1) == '/') {
    $canonical = substr($canonical, 0, -1);
    $has_canonical = true;
}


$page = (int)Yii::app()->request->getParam('page_id', 1);
if($page) {
	$pagestringcount = mb_strlen('/page/'.$page);
	if(substr($canonical, -$pagestringcount) == '/page/'.$page) {
	    $canonical = substr($canonical, 0, -$pagestringcount);
		$has_canonical = true;	
	}
}


?>
<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8" />
	<meta name="description" content="<? echo isset($this->pageDescription) ? htmlspecialchars($this->pageDescription) : Yii::app()->name; ?>" />
	<? if($has_canonical && false): ?><link rel="canonical" href="<? echo $canonical ?>" /><? endif; ?>

    <link rel="stylesheet" href="/bower_components/please-wait/build/please-wait.css"/>
    <script src="/bower_components/please-wait/build/please-wait.min.js"></script>
    <script src="/js/banners.js"></script>
    <script src="/js/pdfobject.js"></script>
	
    <link rel="stylesheet" href="/bower_components/ion.rangeSlider/css/ion.rangeSlider.css">
    <link rel="stylesheet" href="/bower_components/ion.rangeSlider/css/ion.rangeSlider.css">
    <link rel="stylesheet" href="/bower_components/ion.rangeSlider/css/ion.rangeSlider.skinNice.css">
    <link rel="stylesheet" href="/bower_components/chosen/chosen.min.css">
    <link rel="stylesheet" href="/bower_components/nprogress/nprogress.css">
    <link rel="stylesheet" href="/bower_components/fotorama/fotorama.css">
    <link rel="stylesheet" href="/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css">
    <link rel="stylesheet" href="/bower_components/PruneCluster/dist/LeafletStyleSheet.css">
    <link rel="stylesheet" href="/bower_components/drop/css/drop-theme-basic.css">
    <link rel="stylesheet" href="/bower_components/drop/css/drop-theme-arrows-bounce.css">
    <link rel="stylesheet" href="/bower_components/drop/css/drop-theme-hubspot-popovers.css">
    <link rel="stylesheet" href="/css/landing.css">
    <link rel="stylesheet" href="/css/style-old.css">
    <link rel="stylesheet" href="/css/additional.css">

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

    <title><?php echo isset($this->pageTitle) ? $this->pageTitle : Yii::app()->name; ?></title>
</head>

<body <? if(isset($this->application) && $this->application): ?>ng-app="app"  ng-controller="AppController as vm"<? endif?>>

<? if(isset($this->application) && $this->application) { ?>
    <script>
      window.load_screen = pleaseWait({
      	logo: "/img/logo.svg",
      	backgroundColor: "#fff",
      	loadingHtml: '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'
      });
    </script>
<? } ?>
	<? $this->renderPartial('//site/_googletag'); ?>
	<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>$this->banner)); ?> 
    <div>
        <header>
            <nav>
                <div class="nav-menu" ng-if="vm.view == 'grid' || vm.view == 'table'">
                    <div id="city_title">
                        <span class="city-help"><a>Красноярск и города спутники</a></span>
                    </div>
                    <div class="nav-links">
                        <div>
                            <span><a href="/news/">Новости</a></span>
                        </div>
                        <div>
                            <span><a href="/reviews/">Обзоры новостроек</a></span>
                        </div>
                        <div>
                            <span><a href="/guides/">Гайды</a></span>
                        </div>
                        <div>
                            <span><a href="/analytics/">Аналитика</a></span>
                        </div>
                        <div class="favorite">
                            <span><a href="/cabinet/favorites">Избранное</a></span>
                            <span id="fav-num" class="favorite-counter"><?= count($favorites) ?></span>
                        </div>
                        <div>
						
							<? if(Yii::app()->user->isGuest || !$this->checkUserIndeed()): ?>
								<span><a class="show-modal" href="#reg">Добавить объявление</a></span>
							<? else: ?>
								<span><a href="/cabinet/add">Добавить объявление</a></span>
							<? endif ?>
                        </div>
                        <div>
							<? if(Yii::app()->user->isGuest || !$this->checkUserIndeed()): ?>
                            	<span><a class="show-modal" href="#reg"><img src="/img/login.png"/></a></span>
							<? else: ?>
                            	<span><a class="show-modal" href="/cabinet/"><img src="/img/login.png"/></a></span>
                            	<span><a href="/site/logout/">Выйти</a></span>
							<? endif ?>
                        </div>
                    </div>
                </div>
                <div id="info-menu-bg" ng-class="{'map-menu': (vm.view == 'map')}">
                    <div class="info-menu">
                        <div class="logo">
                            <a href="/"><img src="/img/logo.png"/></a>
                        </div>
                        <div class="info-menu-links">
                            <a href="/zastroischiki/">
	                            <div class="info-menu-link">
	                                <div>
	                                    <span class="nums"><?= Builder::model()->countByAttributes() ?></span>
	                                </div>
	                                <div class="info-text-wrapper">
	                                    <span class="info-text">Застройщиков</span>
	                                </div>
	                            </div>
                            </a>
                            <a href="/novostroiki/">
	                            <div class="info-menu-link">
	                                <div>
	                                    <span class="nums"><?= Condominium::model()->countByAttributes() ?></span>
	                                </div>
	                                <div class="info-text-wrapper">
	                                    <span class="info-text">Новостроек</span>
	                                </div>
	                            </div>
                            </a>
                            <a href="/catalog/new/">
	                            <div class="info-menu-link">
	                                <div>
	                                    <span class="nums"><?= Estate::model()->countByAttributes(array('type'=>'new','sold'=>0)) ?></span>
	                                </div>
	                                <div class="info-text-wrapper">
	                                    <span class="info-text">Квартир<br> в новых домах</span>
	                                </div>
	                            </div>
                            </a>
                            <div class="info-menu-link">
                                <div>
                                    <span class="nums"><?= Estate::model()->countByAttributes(array('type'=>array('flat', 'commercial', 'house', 'land'),'sold'=>0)) ?></span>
                                </div>
                                <div class="info-text-wrapper dropdown-link-wrapper">
                                    <span class="info-text">Другая<br> недвижимость</span>
                                </div>
                                <div class="dropdown-menu-top">
                                    <ul>
                                        <a href="/catalog/flat/">
                                            <li>Вторичка</li>
                                        </a>
                                        <a href="/catalog/flat_rent#?subtype=rent">
                                            <li>Аренда квартир</li>
                                        </a>
                                        <a href="/catalog/commercial/">
                                            <li>Коммерческая недвижимость</li>
                                        </a>
                                        <a href="/catalog/commercial_rent#?subtype=rent">
                                            <li>Аренда коммерческой недвижимости</li>
                                        </a>
                                        <a href="/catalog/house/">
                                            <li>Загородная недвижимость</li>
                                        </a>
                                        <a href="/catalog/land/">
                                            <li>Земельные участки</li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                            <div class="info-menu-link">
                                <div id="faq-circle">
                                </div>
                                <? $spravochnayaMenu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'spravochnaya')); ?>
                                <div class="info-text-wrapper dropdown-link-wrapper">
                                    <span class="info-text"><?= $spravochnayaMenu->title ?></span>
                                </div>
                                <? $spravochnayaMenuItems = unserialize($spravochnayaMenu->value); ?>
                                <div class="dropdown-menu-top">
                                    <ul>
                                    <? foreach($spravochnayaMenuItems as $item): ?>
                                    	<? if($item['title'] && $item['url']) { ?>
                                        <a href="<?= $item['url'] ?>">
                                            <li><?= $item['title'] ?></li>
                                        </a>
                                        <? } ?>
                                    <? endforeach ?>                                  
                                    </ul>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
    <?= $content ?>
    <? $seoblock = SEOBlock::model()->findByAttributes(array('en_name'=>$this->seoblock_name)); ?>    	
    <? if($seoblock->text) { ?> 
    <div id="footer-bg" ng-if="vm.view == 'grid' || vm.view == 'table'">
        <div class="footer">
            <div class="footer-state-wrapper">
            	<? if($seoblock->text) { ?> 
                <div class="footer-state">
                    <?= $seoblock->text ?>
                </div>
                <? } ?>
            	<? if($seoblock->text_2) { ?> 
                <div class="footer-state">
                    <?= $seoblock->text_2 ?>
                </div>
                <? } ?>
            </div>
            <div class="footer-state-wrapper">
            	<? if($seoblock->text_3) { ?> 
                <div class="footer-state">
                    <?= $seoblock->text_3 ?>                    
                </div>
                <? } ?>
            	<? if($seoblock->text_4) { ?> 
                <div class="footer-state">
                    <?= $seoblock->text_4 ?>                    
                </div>
                <? } ?>
            </div>
        </div>
    </div>
	<? } ?>
    <div id="footer-bottom-bg" style="clear:both;" ng-if="vm.view == 'grid' || vm.view == 'table'">
        <div id="footer-bottom-wrapper">
            <div class="bottom-links-wrapper">
                <div class="footer-bottom-links-col">
                    <div class="footer-bottom-links">
                    	<? $Menu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'footer_01')); ?>
                        <?= $this->renderPartial('//defaults/_footer_menu',array('Menu'=>$Menu)); ?>
                    </div>
                    <div class="footer-bottom-links">
                    	<? $Menu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'footer_02')); ?>
                        <?= $this->renderPartial('//defaults/_footer_menu',array('Menu'=>$Menu)); ?>
                    </div>
                    <div class="footer-bottom-links">
                    	<? $Menu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'footer_03')); ?>
                        <?= $this->renderPartial('//defaults/_footer_menu',array('Menu'=>$Menu)); ?>
                    </div>
                    <div class="footer-bottom-links">
						<? $Menu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'footer_help')); ?>
                        <?= $this->renderPartial('//defaults/_footer_menu',array('Menu'=>$Menu)); ?>
                    </div>
                </div>
                <div class="footer-bottom-links-col">
                    <div class="footer-bottom-links">
                    	<? $Menu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'footer_04')); ?>
                        <?= $this->renderPartial('//defaults/_footer_menu',array('Menu'=>$Menu)); ?>
                    </div>
                    <div class="footer-bottom-links">
						<? $Menu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'footer_05')); ?>

                        <?= $this->renderPartial('//defaults/_footer_menu',array('Menu'=>$Menu)); ?>
                    </div>
                </div>
                <div class="footer-bottom-links-col">
                    <div class="footer-bottom-links">
                    	<? $Menu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'footer_06')); ?>
                        <?= $this->renderPartial('//defaults/_footer_menu',array('Menu'=>$Menu)); ?>
                    </div>
                    <div class="footer-bottom-links">
                        <? $Menu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'footer_07')); ?>
                        <?= $this->renderPartial('//defaults/_footer_menu',array('Menu'=>$Menu)); ?>

                    </div>
                </div>
                <div class="footer-bottom-links-col">
                    <div class="footer-bottom-links">
                        <? $Menu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'footer_08')); ?>
                        <?= $this->renderPartial('//defaults/_footer_menu',array('Menu'=>$Menu)); ?>
                    </div>
                </div>
                <div class="footer-bottom-links-col">
                    <div class="footer-bottom-links">
                    
                        <? $Menu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'footer_09')); ?>
                        <?= $this->renderPartial('//defaults/_footer_menu',array('Menu'=>$Menu)); ?>
                                              
                    </div>
                </div>
                <div class="footer-bottom-links-col">
                    <div class="footer-bottom-links last-footer-group">
                    
                        <? $Menu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'footer_10')); ?>
                        <?= $this->renderPartial('//defaults/_footer_menu',array('Menu'=>$Menu,'last'=>true)); ?>
                    </div>
                </div>
            </div>
            <div id="social">
                <a href="/our_contacts/">Наши контакты</a>
            </div>
        </div>
    </div>
    <div id="copyright-footer-bg" ng-if="vm.view == 'grid' || vm.view == 'table'">
        <div id="copyright-footer">
            <div class="copyright">
                <p>©2015 · Domscan.ru · Все права защищены.</p>
                <ul>
                	
                    <? $Menu = MenuMain::model()->cache(60)->findByAttributes(array('name'=>'footer_menu')); ?>
                    <? $MenuItems = unserialize($Menu->value); ?>
                    <? foreach($MenuItems as $item): ?>
                    	<? if($item['title'] && $item['url']) { ?>
				        <li><a href="<?= $item['url'] ?>"><?= $item['title'] ?></a></li>     
				        <? } ?>                                      
				    <? endforeach ?>
                    <li id="copyright-last"><a href="/contacts">Контакты</a></li>
                </ul>
            </div>
            <div class="copyright" id="copyright-right">
                <p>Разработка <a href="http://bureauit.ru">"Бюро Интернет Технологий"</a> · 2015</p>
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
	<script src="/js/app-landing.js"></script>
	<script src="/js/jquery.autocomplete.js"></script>
	<script src="/js/jquery.autoellipsis.js"></script>
	<script src="/js/additions.js"></script>
	
	    <!-- SlidesJS Required: Link to jquery.slides.js -->
    <script src="/js/jquery.slides.min.js"></script>
    <!-- End SlidesJS Required -->

    <!-- SlidesJS Required: Initialize SlidesJS with a jQuery doc ready -->
    <script>
        $(function () {
        	
		
			$('.guide-desc, .article-desc').ellipsis();
    
			if($('#slides .slide').length > 1) {
				$('#slides').slidesjs({
					width: 1280,
					height: 528,
					navigation: false,
					play: {
						interval: 30000,
						auto: true
					},
					effect: {
				      slide: {
				        // Slide effect settings.
				        speed: 200
				          // [number] Speed in milliseconds of the slide animation.
				      },
				      fade: {
				        speed: 300,
				          // [number] Speed in milliseconds of the fade animation.
				        crossfade: true
				          // [boolean] Cross-fade the transition.
				      }
				    }
				});
			}
			
			
			if($('#slides .slide').length > 0) {
			
			}
        });
    </script>
    <!-- End SlidesJS Required -->
    <script src="/js/jquery.simpleselect.js"></script>

<? if(isset($this->application) && $this->application) { ?>
	<script>
	    load_screen.finish();
	</script>
<? } ?>
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
			$(".city-help").each(function () {
                var a = new Drop({
                    target: this,
                    content: "Красноярск, Сосновоборск, Железногорск, Дивногорск",
                    position: 'top right',
                    openOn: 'hover',
                    classes: 'drop-theme-arrows-bounce drop-hero'
                });
            });
	</script>
	
</body>

</html>