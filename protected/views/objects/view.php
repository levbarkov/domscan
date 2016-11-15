<?
	$this->setPageTitle($model->title);
	
	switch($model->type) {
		case 'flat': $type_string = 'квартир'; break;
		case 'land': $type_string =  'земельных участков'; break;
		case 'commercial': $type_string =  'коммерческой недвижимости'; break;
		case 'new': $type_string =  'новостроек'; break;
		case 'house': $type_string =  'домов'; break;
	}
	
	switch($model->subtype) {
		case 'sale': $subtype_string = 'Продажа'; break;
		case 'rent': $subtype_string =  'Аренда'; break;
	}
	
?>
<div class="content">
<div class="container-fluid">
	<div class="row">
        <div class="col-xs-12">
            <div class="property__wrapper">
            	<div class="property__title-wrapper">           	
					<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'single-property_top_1170-90','class'=>'footer-fix')); ?> 
                    <ol class="breadcrumb">
                        <li><a href="/">Главная</a></li>
                        <li><a href="/catalog/<?= $model->type ?>/#?view=table&type=<?= $model->type ?>&subtype=<?= $model->subtype ?>"><?= $subtype_string ?> <?= $type_string ?></a></li>
                        <? if($condominium){ ?>
                        <li><a href="<?= $condominium->pagesViewSelf() ?>"><?= $condominium->title ?></a></li>
                        <? } ?>
                        <li><?= $model->title ?></li>
                    </ol>
					<h1 class="property__title"><?= $subtype_string ?>: <?= $model->title ?><? if($this->checkEditablePermissions()): ?> <a href="/objects/update/<?= $model->id ?>">(редактировать)</a><? endif ?></h1>
                    <? if($model->sold): ?><span class="property__title-sale active"></span><? endif ?>
                    
					<div>ID объекта: <b><?= $model->id ?></b></div>
                </div>
                <div class="row">
                    <div class="col-xs-8" ng-app="property" ng-controller="propertyCtrl">

                        <div class="btn-group property__tabs">
                        
						<? if($model->attached_images): ?>
                            <button id="phototab" type="button" ng-class="{active: toggle=='gallery'}" ng-click="changeToggle('gallery')"
                                    class="btn btn-default property__tabs-list-item">
                                <span class="icon icon-photo-tabs property__tabs-list-item-icon"></span>
                                <span class="property__tabs-list-item-text">Фото</span>
                            </button>
                        <? endif ?>
						<? if($model->latitude != 0): ?>
                            <button id="maptab" type="button" ng-class="{active: toggle=='map'}" ng-click="changeToggle('map')"
                                    class="btn btn-default property__tabs-list-item">
                                <span class="icon icon-map-tabs property__tabs-list-item-icon"></span>
                                <span class="property__tabs-list-item-text">На карте</span>
                            </button>
                        <? endif ?>
						<? if($model->tour): ?>
                            <button type="button" ng-class="{active: toggle=='3d'}" ng-click="changeToggle('3d')"
                                    class="btn btn-default property__tabs-list-item">
                                <span class="icon icon-square-tabs property__tabs-list-item-icon"></span>
                                <span class="property__tabs-list-item-text">3D-тур</span>
                            </button>
						<? endif ?>
                        </div>						
						<div class="property__print">
					        <a href="/<?= $model->type ?>/pdf/<?= $model->id ?>-<?= $model->slug ?>" class="property__print-link">
					            <span class="icon-pdf property__print-link-icon"></span>
					            <span class="property__print-link-text">Распечатать PDF</span>
					        </a>
					    </div>
					    
						<? if($model->attached_images): ?>		
							<? if($model->attached_images): ?>
								<div class="gallery property__gallery" ng-show="toggle == 'gallery'">
							<? else: ?>
								<div class="gallery property__gallery" ng-show="toggle == 'gallery'">
                            <? endif ?>
                            <div data-keyboard="true" data-width="100%" data-height="400px" class="fotorama" data-nav="thumbs"  data-loop="true">
                            <? if($model->image_large): ?>
                                <img src="<?= $model->image_large ?>">
                                <? $date = Yii::app()->easyImage->thumbOf($_SERVER['DOCUMENT_ROOT'].$image->image_large, array('type' => 'jpg','watermark' => array('watermark' => '/img/watermark-2.png', 'opacity' => 95)));
								//echo $date; ?> 
                            <? endif ?>
                            <? foreach($model->attached_images as $image): ?>  
                            	<? if(substr($image->name, -4) == '.gif') { ?>                    
                                	<img src="<?= $image->uploaddir.$image->name ?>">   
                                <? } else {
	                                $date = Yii::app()->easyImage->thumbOf($_SERVER['DOCUMENT_ROOT'].$image->uploaddir.$image->name, array('type' => 'jpg','watermark' => array('watermark' => '/img/watermark-2.png', 'opacity' => 95)));
									echo $date; 
									} ?>                     
                            <? endforeach ?>
                            </div>
                        </div>
                        <? endif; ?>
            
						<? if($model->latitude != 0): ?>
							<? if($model->attached_images): ?>
	                        	<div class="gallery" ng-show="toggle == 'map'">
	                        <? else: ?>
	                        	<div class="gallery" ng-show="toggle == 'map' || toggle == 'gallery'">
                            <? endif ?>
	                            <div ng-init="center=[<?= $model->latitude ?>, <?= $model->longitude ?>]" id="map" style="width:100%; height:500px; margin-bottom: 30px;"></div>
	                        </div>
                        <? endif ?>
			
						<? if($model->tour): ?>
			            <div class="gallery" ng-show="toggle == '3d'">
			                <embed src="<?= $model->tour ?>" style="width:100%; height:400px;">
			            </div>
			            <? endif ?>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="property__info">
                                    <div class="row">
                                        <div class="col-xs-6 property__info-table-col-left">
                                            <table class="property__info-table-left">
                                            
											<? foreach($firsthalfProperties as $table_item): ?>
                                                <tr class="property__info-table-row">
                                                    <td class="property__info-table-col"><?= $table_item['title'] ?></td>
                                                    <td class="property__info-table-col-right"><?= $table_item['value'] ?></td>
                                                </tr>
                                            <? endforeach ?>
                                            
                                            </table>
                                        </div>
                                        <div class="col-xs-6">
                                            <table class="property__info-table-right">
											<? foreach($secondhalfProperties as $table_item): ?>
                                                <tr class="property__info-table-row">
                                                    <td class="property__info-table-col"><?= $table_item['title'] ?></td>
                                                    <td class="property__info-table-col-right"><?= $table_item['value'] ?></td>
                                                </tr>
                                            <? endforeach ?>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        
                        
                        <p class="property__about">
                            <?= $model->text ?>
                        </p>
                    </div>

                    <div class="col-xs-4 ">

						<? if(!Yii::app()->user->isGuest && $this->checkUserIndeed()): ?>
							<? $favorited = Favorited::model()->findAllByAttributes(array('user_id' => Yii::app()->user->id,'object_id' => $model->id)); ?>
						<? else: ?>
							<?
							
								$cookie_favorite = Yii::app()->request->cookies['favorite']->value;
								$cookie_favorite = json_decode($cookie_favorite);
								
								$cookie_fav_wrap = array();
		
								while ($fruit_name = current($cookie_favorite)) {
								    if ($fruit_name == 1) {
								        $cookie_fav_wrap[key($cookie_favorite)] = true;
								    }
								    next($cookie_favorite);
								}
								$favorited = false;
								if($cookie_fav_wrap[$model->id])
									$favorited = true;


							?>
						
						<? endif; ?>
						
			
						    
				        <div class="property__favorite-wrapper">
					        <!--<a class="search__list-item-favorite "></a>-->
					        <a href="#" class="property__favorite-link">
					            <span data-id="<?= $model->id ?>" class="search__list-item-favorite item-favorite <?= ($favorited) ? 'active' : '' ?>">
					                В избранное
					            </span>
					        </a>
					    </div>
   
	                    
						<? //endif ?>

                        <div class="property__alert">
                            <div class="property__alert-rectangle"></div>
                            <span class="property__alert-price"><?= number_format($model->cost, 0, ",", " ") ?> <? if($model->subtype == 'sale'): ?>руб.<? else: ?>р/мес.<? endif ?></span>
                            <span class="property__alert-square"><?
                            	$calculate_square_price = (int)$model->cost / (double)$model->square;
                            	echo number_format($calculate_square_price, 0, ",", " ");
                            ?> руб. за м&#178;</span>
                        </div>
                        <div class="property__veiws">
                            Просмотрено <?= $model->views ?> раз
                        </div>

						
						<div class="property__available">
							<? if($model->mortgage || $model->matcapital || $model->rassrochka): ?>
	                            <span class="property__available-title">
	                                Доступно:
	                            </span>
                            <? endif ?>
                            
							<? if($model->mortgage && $model->subtype == 'sale'): ?>
	                            <a class="property__available-mortgages" href="/ipoteka">
	                                В ипотеку
	                            </a>
	                        <? endif ?>
							<? if($model->matcapital && $model->subtype == 'sale'): ?>
                            <a class="property__available-parent" href="/materinskiy-capital">
                                С материнским капиталом
                            </a>
	                        <? endif ?>
							<? if($model->rassrochka && $model->subtype == 'sale'): ?>
                            <a class="property__available-installment-plan" href="/rassrochka">
                                В рассрочку
                            </a>
	                        <? endif ?>
                        </div>



						<? if(mb_strlen($model->seller_phone) > 3 || mb_strlen($model->seller_email) > 3): ?>
                        <span class="property__contacts-title">Обращайтесь по всем вопросам:</span>

			            <div class="property__contacts">
                            <span class="icon-contacts property__contacts-icon"></span>
			                <span class="property__contacts-name"><?= $model->seller_name ?></span>
			
							<? if ($model->seller_phone): ?>
	                            <ul class="property__contacts-list-phone">
	                                <li class="property__contacts-list-phone-item">
	                                	<a href="#" id="show_phone" style="color: #393939; border-bottom:1px dotted; font-family: 'OpenSans', sans-serif; font-size: 18px; margin-left: 6px;" onclick="yaCounter26324040.reachGoal('show_phone');return false;">Показать телефон</a>
	                                    <a style="display:none;" href="tel:<?= $model->seller_phone ?>" class="property__contacts-list-phone-item-link">
	                                        <?= $model->seller_phone ?>
	                                    </a>
	                                </li>
	                            </ul>
                            <? endif; ?>
                            
							<? if ($model->seller_email): ?>
	                            <ul class="property__contacts-list-mail">
	                                <li class="property__contacts-list-mail-item">
	                                    <a href="mailto:<?= $model->seller_email ?>" class="property__contacts-list-mail-item-link">
	                                        <?= $model->seller_email ?>
	                                    </a>
	                                </li>
	                            </ul>
                            <? endif; ?>
                            
							<? if ($model->seller_additional): ?>
	                            <ul class="property__contacts-list-mail">
	                                <li class="property__contacts-list-mail-item">
	                                	<?= $model->seller_additional ?>	                                    
	                                </li>
	                            </ul>
                            <? endif; ?>

			            </div>
						<? endif ?>
						<!--<span class="property__help-title">Посмотреть похожие квартиры на карте:</span>-->
						<?
							$menu = Menu::model()->cache(60)->findByAttributes(array('name'=>'estate_menu'));
						 ?>
						<? if($menu): ?>
                        <div class="property__help">
                            <span class="property__help-title"><?= $menu->title ?></span>
                            <ul class="property__help-list">
                            <? foreach (unserialize($menu->value) as $key => $value) {
								foreach($value as $key2 => $item) {
									if ($key2 == 'url' && $item) {
										$page_name = StaticPage::model()->cache(3600)->findByAttributes(array('en_title'=>$item));
										?>
										<li class="property__help-list-item">
		                                    <a class="property__help-list-item-link" href="/<?= $item ?>"><?= $page_name->title ?></a>
		                                </li>									
										<?									
									}			
								}																		
							} ?>
                            </ul>
                        </div>
                        <? endif ?>

						<? $share_url = 'http://domscan.ru/'.$model->type.'/'.$model->id.'-'.$model->slug ?>
						
						<!-- Go to www.addthis.com/dashboard to generate a new set of sharing buttons -->
						<a href="https://api.addthis.com/oexchange/0.8/forward/vk/offer?url=<?= urlencode($share_url) ?>&pubid=ra-52d4e7f57e49e99e&ct=1&title=<?= urlencode($model->title) ?>&pco=tbxnj-1.0" target="_blank"><img src="https://cache.addthiscdn.com/icons/v2/thumbs/32x32/vk.png" border="0" alt="VKontakte"/></a>
						<a href="https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=<?= urlencode($share_url) ?>&pubid=ra-52d4e7f57e49e99e&ct=1&title=<?= urlencode($model->title) ?>&pco=tbxnj-1.0" target="_blank"><img src="https://cache.addthiscdn.com/icons/v2/thumbs/32x32/facebook.png" border="0" alt="Facebook"/></a>
						<a href="https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=<?= urlencode($share_url) ?>&pubid=ra-52d4e7f57e49e99e&ct=1&title=<?= urlencode($model->title) ?>&pco=tbxnj-1.0" target="_blank"><img src="https://cache.addthiscdn.com/icons/v2/thumbs/32x32/twitter.png" border="0" alt="Twitter"/></a>
						<a href="https://api.addthis.com/oexchange/0.8/forward/mymailru/offer?url=<?= urlencode($share_url) ?>&pubid=ra-52d4e7f57e49e99e&ct=1&title=<?= urlencode($model->title) ?>&pco=tbxnj-1.0" target="_blank"><img src="https://cache.addthiscdn.com/icons/v2/thumbs/32x32/mymailru.png" border="0" alt="Mail.ru"/></a>
						<a href="https://api.addthis.com/oexchange/0.8/forward/odnoklassniki_ru/offer?url=<?= urlencode($share_url) ?>&pubid=ra-52d4e7f57e49e99e&ct=1&title=<?= urlencode($model->title) ?>&pco=tbxnj-1.0" target="_blank"><img src="https://cache.addthiscdn.com/icons/v2/thumbs/32x32/odnoklassniki_ru.png" border="0" alt="Odnoklassniki"/></a><br><br>



                    </div>
                </div>
            </div>

        </div>
    </div>
    
</div>

<? if(count($special)): ?>
<div class="container-fluid">
    <div class="row">
        <div class="col-xs-12">
            <div class="property__wrapper">
                <h1 class="property__footer-title">Специальные предложения</h1>
            </div>
        </div>
        <div class="col-xs-12">
            <div class="row">
            
            <? foreach($special as $spec_item): ?>
                <div class="col-xs-3 data-list ng-scope">
                    <div class="search__list-item special">
                        <div class="search__list-item-body">
                            <span class="special-banner">Специальная цена</span>
                            <a class="search__list-item-title ng-binding" ng-href="/<?= $spec_item->type ?>/<?= $spec_item->id ?>-<?= $spec_item->slug ?>"
                               href="/<?= $spec_item->type ?>/<?= $spec_item->id ?>-<?= $spec_item->slug ?>">
                                <img class="img img-responsive search__list-item-img" ng-src="<?= $spec_item->image ?>" alt=""
                                     src="<?= $spec_item->image ?>">
                                <?= $spec_item->title ?>
                            </a>

                            <p class="">
                                <span class="search__list-item-info-label">Адрес:</span>
                                <span class="search__list-item-info ng-binding"><?= $spec_item->address ?></span>
                            </p>

                            <p>
                                <span class="search__list-item-info-label">Этаж:</span>
                                <span class="search__list-item-info ng-binding"><?= $spec_item->floor ?>/<?= $spec_item->top_floor ?></span>
                            </p>

                            <p class="">
                                <span class="search__list-item-info-label">Площадь:</span>
                                <span class="search__list-item-info ng-binding"><?= $spec_item->square ?> м<sup>2</sup></span>
                            </p>

                            <p class="search__list-item-cost ng-binding ng-scope"><?= number_format($spec_item->cost, 0, ",", " ") ?> р.</p>

                            <!-- ngIf: filter.subtype == 'rent' -->
                            <a class="search__list-item-link-more" ng-href="/<?= $spec_item->type ?>/<?= $spec_item->id ?>-<?= $spec_item->slug ?>"
                               href="/<?= $spec_item->type ?>/<?= $spec_item->id ?>-<?= $spec_item->slug ?>">Смотреть подробнее</a>
                        </div>
                    </div>
                </div>
           <? endforeach ?>
                
            </div>
        </div>
    </div>
</div>
<? endif ?>
					<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'single-property_bottom_1170-90','class'=>'footer-fix')); ?>
</div>

<? if($model->subtype == 'sale' && ($model->type == 'flat' || $model->type == 'new')): ?>
<? $this->renderPartial('_tags', array('model'=>$model)); ?>
<? endif; ?>