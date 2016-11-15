<?php
/* @var $this SiteController */

$city_id = $this->city_id;
$city = City::model()->cache(300)->findByPk($city_id);

if(!isset($selected_type))
	$selected_type = 'new';

?>  
    
    <div class="content" ng-class="{'is-map': (vm.view == 'map')}">
      <div class="container-fluid">
	  	<ol ng-if="vm.view == 'grid' || vm.view == 'table'" class="breadcrumb">
            <li><a href="/">Главная</a></li>
            <li><?= $this->title ?></li>
        </ol>
		<h1 ng-if="vm.view == 'grid' || vm.view == 'table'"><?= $this->title ?></h1>
        <div class="search">
          <!--ANGULARJS ДИРЕКТИТИВА УКАЗЫВАЮЩЯЯ ГОРОД ПО УМОЛЧАНИЮ-->
          <div filter="" filter-field="city" filter-value="<?= $city_id ?>" class="ng-isolate-scope"></div>
          <div filter="" filter-field="type" filter-value="<?= $selected_type ?>" class="ng-isolate-scope"></div>
          

          <!--ГЛАВНЫЙ БЛОК - БОКОВАЯ ПАНЭЛЬ И СПИСОК КВАРТИР-->
          <div class="row">
            <!--БОКОВАЯ ПАНЭЛЬ-->
            <!--ОТОБРАЖЕНИЯ КВАРТИР-->
            <div class="col-xs-9">
				<div ng-if="vm.view == 'map'" class="search__map-type">
					<ul class="search__map-type-list">
					  <li class="search__map-type-list-item"><span class="search__map-type-list-item-color search__map-type-list-item-color--orange"></span><span class="search__map-type-list-item-description">  Спецпредложения</span></li>
					  <li class="search__map-type-list-item"><span class="search__map-type-list-item-color search__map-type-list-item-color--blue"></span><span class="search__map-type-list-item-description">  Объекты</span></li>
					</ul>
				  </div>
				  
              <!--ОТСУТСТВИЕ ДАННЫХ-->
              <div ng-if="vm.table.items.length &lt; 1 &amp;&amp; vm.view === 'table' || vm.grid.items.length &lt; 1 &amp;&amp; vm.view === 'grid'" class="search__empty">
                <p class="search__empty-text"> {{infoText}}</p>
              </div>
              <!--ОТОБРАЖЕНИЕ СПИСКОМ-->
              <div ng-if="vm.view === 'table' &amp;&amp; vm.table.items.length &gt; 0" class="search__table control-over-map">
                <table float-thead="vm.floatTheadSettings" class="search_table">
                  <thead>
                    <tr class="search__table-line search__table-line-header">
                      <th ng-repeat="field in vm.tableHeaders" ng-class="field.class" class="search__table-line-box search__table-line-box-text search__table-line-box-header"><span ng-if="!field.sort">{{field.name}}</span><span ng-if="field.sort" class="search__sort-item">
                          <div ng-click="vm.sort({sort:vm.sorts[field.sortField].value, direction: vm.sorts[field.sortField].direction})" class="search__sort-btn search__table-line-box-sort-btn"><span ng-bind-html="vm.trustDangerousSnippet(field.name)" class="search__sort-btn-text"></span><span ng-if="vm.sorts[field.sortField].direction === 'asc'" class="icon icon-filter-sort-arrow search__sort-btn-icon"></span><span ng-if="vm.sorts[field.sortField].direction === 'desc'" class="icon icon-filter-sort-arrow-down search__sort-btn-icon"></span></div></span><br><span ng-bind-html="vm.trustDangerousSnippet(field.additional)" class="search__table-line-box-additional"></span></th>
                    </tr>
                  </thead>
           <tbody ng-if="vm.building == 'flat'">
		                <tr ng-click="vm.goLink(item.uri)" ng-class="{'search__table-line-special': item.special}" ng-repeat="item in vm.table.items" class="search__table-line data-list">
		                    
		                      <!--Special-->
		                      <td ng-if="item.special == true" class="search__table-line-box search__table-line-box-text">
		                        <div data-id="{{item.uid}}" ng-class="{active: vm.isFavorite(item.uid)}" favorite popup popup-text="В избранном можно сравнивать объявления" popup-position="top left" class="search__table-cell-favorite search__list-item-favorite item-favorite popup-favorite"></div><img ng-src="{{item.image}}" alt="" class="search__table-cell-img">
		                      </td>
		                      <!--Noraml-->
		                      <td ng-if="item.special == false" class="search__table-line-box search__table-cell-address search__table-cell-photo-link search__table-line-box-text search__table-cell-gallery">
		                        <div data-id="{{item.uid}}" ng-class="{active: vm.isFavorite(item.uid)}" favorite popup popup-text="В избранном можно сравнивать объявления" popup-position="top left" class="search__table-cell-favorite search__list-item-favorite item-favorite popup-favorite"></div>
		                        <div class="search__table-cell-photo-link-wrapper"><img ng-src="/img/photo-count.png" alt="" class="search__table-cell-img"><span class="search__table-cell-photo-link-text">{{item.image_count}} фото</span></div>
		                      </td>
		                                     
		                    <td class="search__table-line-box search__table-line-box-text">
		                        <strong>{{item.rooms}}</strong>
		                    </td>
		                    <td class="search__table-line-box search__table-line-box-text search__table-cell-address">
		                        {{item.address}}
		                    </td>
		                    <td class="search__table-line-box search__table-line-box-text search__table-line-box-floor">
		                        <strong>{{item.floor}}</strong>/{{item.top_floor}}
		                        <br/><span class="search__table-line-box-additional">{{item.material | cut:false:7:'...'}}</span>
		                    </td>
		                    <td class="search__table-line-box search__table-line-box-text">
		                        <strong>{{item.square}}</strong> м<sup>2</sup>
		                    </td>
		                    <td class="search__table-line-box search__table-line-box-text search__table-line-box-type">
		                        {{item.plan || "Не указан"}}                  
		                    </td>
		                    <td class="search__table-line-box search__table-line-box-text search__table-cell-cost">
		                        <strong>{{item.cost}} р.</strong>
		                        <br/>
		                        <span class="search__table-line-icons">
		                            <a ng-if="item.mortgage === '1'" class="search__table-line-icons-icon prosent popup-ipo"></a>
		                            <a ng-if="item.matcapital === '1'" class="search__table-line-icons-icon baby popup-mother"></a>
		                            <a ng-if="item.rassrochka === '1'" class="search__table-line-icons-icon credit popup-rasr"></a>
		                        </span>
		                        <span ng-if="item.subtype !== &quot;rent&quot;" class="search__table-cell-cost-mini">
		                            ~{{item.square_price}} т.р./м<sup>2</sup>
		                        </span>
		                        <div class="search__table-line-special-promo" ng-if="item.special == true">
		                            <span class="search__table-line-special-promo-text">
		                            </span>
		                        </div>
		                        <div ng-if="item.sold" class="search__table-line-sold"></div>
		                    </td>
		                </tr>
		            </tbody>
		
					<tbody ng-if="vm.building == 'new'">
		                <tr ng-click="vm.goLink(item.uri)" ng-class="{'search__table-line-special': item.special}" ng-repeat="item in vm.table.items" class="search__table-line data-list">
		                      <!--Special-->
		                      <td ng-if="item.special == true" class="search__table-line-box search__table-line-box-text">
		                        <div data-id="{{item.uid}}" ng-class="{active: vm.isFavorite(item.uid)}" favorite popup popup-text="В избранном можно сравнивать объявления" popup-position="top left" class="search__table-cell-favorite search__list-item-favorite item-favorite popup-favorite"></div><img ng-src="{{item.image}}" alt="" class="search__table-cell-img">
		                      </td>
		                      <!--Noraml-->
		                      <td ng-if="item.special == false" class="search__table-line-box search__table-cell-address search__table-cell-photo-link search__table-line-box-text search__table-cell-gallery">
		                        <div data-id="{{item.uid}}" ng-class="{active: vm.isFavorite(item.uid)}" favorite popup popup-text="В избранном можно сравнивать объявления" popup-position="top left" class="search__table-cell-favorite search__list-item-favorite item-favorite popup-favorite"></div>
		                        <div class="search__table-cell-photo-link-wrapper"><img ng-src="/img/photo-count.png" alt="" class="search__table-cell-img"><span class="search__table-cell-photo-link-text">{{item.image_count}} фото</span></div>
		                      </td>
		                    <td class="search__table-line-box search__table-line-box-text">
		                        <strong>{{item.rooms}}</strong>
		                    </td>
		                    <td class="search__table-line-box search__table-line-box-text search__table-cell-address">
		                        {{item.address}}
		                    </td>
		                    <td class="search__table-line-box search__table-line-box-text search__table-line-box-floor">
		                        <strong>{{item.floor}}</strong>/{{item.top_floor}}
		                        <br/><span class="search__table-line-box-additional">{{item.material | cut:false:7:'...'}}</span>
		                    </td>
		                    <td class="search__table-line-box search__table-line-box-text">
		                        <strong>{{item.square}}</strong> м<sup>2</sup>
		                    </td>
		                    <td class="search__table-line-box search__table-line-box-text search__table-line-box-type">
		                        {{item.plan || "Не указан"}}
		                        <br/><span class="search__table-line-box-additional">{{item.year || "Не указан"}}</span>
		                    </td>
		                    <td class="search__table-line-box search__table-line-box-text search__table-cell-cost">
		                        <strong>{{item.cost}} р.</strong>
		                        <br/>
		                        <span class="search__table-line-icons">
		                            <a ng-if="item.mortgage === '1'" class="search__table-line-icons-icon prosent popup-ipo"></a>
		                            <a ng-if="item.matcapital === '1'" class="search__table-line-icons-icon baby popup-mother"></a>
		                            <a ng-if="item.rassrochka === '1'" class="search__table-line-icons-icon credit popup-rasr"></a>
		                        </span>
		                        <span ng-if="item.subtype !== &quot;rent&quot;" class="search__table-cell-cost-mini">
		                            ~{{item.square_price}} т.р./м<sup>2</sup>
		                        </span>
		                        <div class="search__table-line-special-promo" ng-if="item.special == true">
		                            <span class="search__table-line-special-promo-text">
		                            </span>
		                        </div>
		                        <div ng-if="item.sold" class="search__table-line-sold"></div>
		                    </td>
		                </tr>
		            </tbody>
		
					
		            <!-- таблица для домов недвижимости -->
					<tbody ng-if="vm.building == 'house'">
			            <tr ng-click="vm.goLink(item.uri)" ng-class="{'search__table-line-special': item.special}" ng-repeat="item in vm.table.items" class="search__table-line data-list">
		                      <!--Special-->
		                      <td ng-if="item.special == true" class="search__table-line-box search__table-line-box-text">
		                        <div data-id="{{item.uid}}" ng-class="{active: vm.isFavorite(item.uid)}" favorite popup popup-text="В избранном можно сравнивать объявления" popup-position="top left" class="search__table-cell-favorite search__list-item-favorite item-favorite popup-favorite"></div><img ng-src="{{item.image}}" alt="" class="search__table-cell-img">
		                      </td>
		                      <!--Noraml-->
		                      <td ng-if="item.special == false" class="search__table-line-box search__table-cell-address search__table-cell-photo-link search__table-line-box-text search__table-cell-gallery">
		                        <div data-id="{{item.uid}}" ng-class="{active: vm.isFavorite(item.uid)}" favorite popup popup-text="В избранном можно сравнивать объявления" popup-position="top left" class="search__table-cell-favorite search__list-item-favorite item-favorite popup-favorite"></div>
		                        <div class="search__table-cell-photo-link-wrapper"><img ng-src="/img/photo-count.png" alt="" class="search__table-cell-img"><span class="search__table-cell-photo-link-text">{{item.image_count}} фото</span></div>
		                      </td>
			                <td class="search__table-line-box search__table-line-box-text">
			                    <strong>{{item.rooms}}</strong>
			                </td>
			                <td class="search__table-line-box search__table-line-box-text search__table-cell-address">
			                    {{item.address}}
			                </td>
			                <td class="search__table-line-box search__table-line-box-text">
			                    <strong>{{item.top_floor}}</strong>
			                </td>
			                <td class="search__table-line-box search__table-line-box-text">
			                    <strong>{{item.square}}</strong> м<sup>2</sup>
			                </td>
			                <td class="search__table-line-box search__table-line-box-text">
			                    <strong>{{item.square_land}}</strong> соток
			                </td>
			                <td class="search__table-line-box search__table-line-box-text search__table-cell-cost">
			                    <strong>{{item.cost}} р.</strong>
								<br/>
		                        <span class="search__table-line-icons">
		                            <a ng-if="item.mortgage === '1'" class="search__table-line-icons-icon prosent popup-ipo"></a>
		                            <a ng-if="item.matcapital === '1'" class="search__table-line-icons-icon baby popup-mother"></a>
		                            <a ng-if="item.rassrochka === '1'" class="search__table-line-icons-icon credit popup-rasr"></a>
		                        </span>
		
			                    <div class="search__table-line-special-promo" ng-if="item.special == true">
			                        <span class="search__table-line-special-promo-text">
			
			                        </span>
			                    </div>
			                </td>
			
			            </tr>
					</tbody>
		            
		            <!-- таблица для коммерческой недвижимости -->
					<tbody ng-if="vm.building == 'commercial'">
			            <tr ng-click="vm.goLink(item.uri)" ng-class="{'search__table-line-special': item.special}" ng-repeat="item in vm.table.items" class="search__table-line data-list">
		                      <!--Special-->
		                      <td ng-if="item.special == true" class="search__table-line-box search__table-line-box-text">
		                        <div data-id="{{item.uid}}" ng-class="{active: vm.isFavorite(item.uid)}" favorite popup popup-text="В избранном можно сравнивать объявления" popup-position="top left" class="search__table-cell-favorite search__list-item-favorite item-favorite popup-favorite"></div><img ng-src="{{item.image}}" alt="" class="search__table-cell-img">
		                      </td>
		                      <!--Noraml-->
                      <td ng-if="item.special == false" class="search__table-line-box search__table-cell-address search__table-cell-photo-link search__table-line-box-text search__table-cell-gallery">
                        <div data-id="{{item.uid}}" ng-class="{active: vm.isFavorite(item.uid)}" favorite popup popup-text="В избранном можно сравнивать объявления" popup-position="top left" class="search__table-cell-favorite search__list-item-favorite item-favorite popup-favorite"></div>
                        <div class="search__table-cell-photo-link-wrapper"><img ng-src="/img/photo-count.png" alt="" class="search__table-cell-img"><span class="search__table-cell-photo-link-text">{{item.image_count}} фото</span></div>
                      </td>
			                <td class="search__table-line-box search__table-line-box-text search__table-cell-address">
			                    {{item.address}}
			                </td>
			                <td class="search__table-line-box search__table-line-box-text">
			                    <strong>{{item.square}}</strong> м<sup>2</sup>
			                </td>
			                <td class="search__table-line-box search__table-line-box-text">
			                    {{item.commercial_type}}
			                </td>
			                
			                <td class="search__table-line-box search__table-line-box-text">
			                    {{item.commercial_business || "Не указан"}}
			                </td>
			                <td class="search__table-line-box search__table-line-box-text search__table-cell-cost">
			                    <strong>{{item.cost}} р.</strong><br/>
		                        <span class="search__table-line-icons">
		                            <a ng-if="item.mortgage === '1'" class="search__table-line-icons-icon prosent popup-ipo"></a>
		                            <a ng-if="item.matcapital === '1'" class="search__table-line-icons-icon baby popup-mother"></a>
		                            <a ng-if="item.rassrochka === '1'" class="search__table-line-icons-icon credit popup-rasr"></a>
		                        </span>
			                    <span ng-if="item.subtype !== &quot;rent&quot;" class="search__table-cell-cost-mini">
		                            ~{{item.square_price}} т.р./м<sup>2</sup>
		                        </span>
			
			                    <div class="search__table-line-special-promo" ng-if="item.special == true">
			                        <span class="search__table-line-special-promo-text">
			
			                        </span>
			                    </div>
			                </td>
			
			            </tr>
					</tbody>
		            <!-- таблица для участков -->
					<tbody ng-if="vm.building == 'land'">
			            <tr ng-click="vm.goLink(item.uri)" ng-class="{'search__table-line-special': item.special}" ng-repeat="item in vm.table.items" class="search__table-line data-list">		
		                      <!--Special-->
		                      <td ng-if="item.special == true" class="search__table-line-box search__table-line-box-text">
		                        <div data-id="{{item.uid}}" ng-class="{active: vm.isFavorite(item.uid)}" favorite popup popup-text="В избранном можно сравнивать объявления" popup-position="top left" class="search__table-cell-favorite search__list-item-favorite item-favorite popup-favorite"></div><img ng-src="{{item.image}}" alt="" class="search__table-cell-img">
		                      </td>
		                      <!--Noraml-->
		                      <td ng-if="item.special == false" class="search__table-line-box search__table-cell-address search__table-cell-photo-link search__table-line-box-text search__table-cell-gallery">
		                        <div data-id="{{item.uid}}" ng-class="{active: vm.isFavorite(item.uid)}" favorite popup popup-text="В избранном можно сравнивать объявления" popup-position="top left" class="search__table-cell-favorite search__list-item-favorite item-favorite popup-favorite"></div>
		                        <div class="search__table-cell-photo-link-wrapper"><img ng-src="/img/photo-count.png" alt="" class="search__table-cell-img"><span class="search__table-cell-photo-link-text">{{item.image_count}} фото</span></div>
		                      </td>
		
			                <td class="search__table-line-box search__table-line-box-text search__table-cell-address">
			                    {{item.address}}
			                </td>
			                <td class="search__table-line-box search__table-line-box-text">
			                    <strong>{{item.square}}</strong> соток
			                </td>
			                <td class="search__table-line-box search__table-line-box-text search__table-cell-cost">
			                    <strong>{{item.cost}} р.</strong>
			                    <br/>
		                        <span class="search__table-line-icons">
		                            <a ng-if="item.mortgage === '1'" class="search__table-line-icons-icon prosent popup-ipo"></a>
		                            <a ng-if="item.matcapital === '1'" class="search__table-line-icons-icon baby popup-mother"></a>
		                            <a ng-if="item.rassrochka === '1'" class="search__table-line-icons-icon credit popup-rasr"></a>
		                        </span>
			                    <span ng-if="item.subtype !== &quot;rent&quot;" class="search__table-cell-cost-mini">
		                            ~{{item.square_price}} т.р./м<sup>2</sup>
		                        </span>
		
			
			                    <div class="search__table-line-special-promo" ng-if="item.special == true">
			                        <span class="search__table-line-special-promo-text">
			
			                        </span>
			                    </div>
			                </td>
			
			            </tr>
					</tbody>
                </table>
              </div>
              <!--ОТОБРАЖЕНИЕ ТАБЛИЦЕЙ-->
              <div ng-if="vm.view === 'grid' &amp;&amp; vm.grid.items.length &gt; 0" class="search__list control-over-map">
                <div class="search__sort-col">
                  <div class="search__sort"><span class="search__sort-title">Сортировать по:</span>
                    <div ng-repeat="item in vm.gridSorts" ng-click="vm.sort({sort:vm.sorts[item.value].value, direction: vm.sorts[item.value].direction})" class="search__sort-btn"><span class="search__sort-btn-text">{{item.name}}</span><span ng-if="vm.sorts[item.value].direction === 'asc'" class="icon icon-filter-sort-arrow search__sort-btn-icon"></span><span ng-if="vm.sorts[item.value].direction === 'desc'" class="icon icon-filter-sort-arrow-down search__sort-btn-icon"></span></div>
                  </div>
                </div>
                <div ng-repeat="item in vm.grid.items" class="search__list-item-col fadeInUp animated data-list">
                  <div ng-class="{special: item.special}" class="search__list-item">
                    <div class="search__list-item-body">
                      <div data-id="{{item.uid}}" ng-class="{active: vm.isFavorite(item.uid)}" favorite popup popup-text="В избранном можно сравнивать объявления" popup-position="top left" class="search__list-item-favorite item-favorite popup-favorite"></div><span class="special-banner">Специальная цена</span>
                      <div class="search__list-item-icons"><a ng-if="item.rassrochka === '1'" href="/" popup popup-text="В рассрочку" popup-position="top right" class="search__list-item-icons-icon prosent popup-rasr"></a><a ng-if="item.mortgage === '1'" href="/" popup popup-text="В ипотеку" popup-position="top right" class="search__list-item-icons-icon credit popup-ipo"></a><a ng-if="item.matcapital === '1'" href="/" popup popup-text="Материнский капитал" popup-position="top right" class="search__list-item-icons-icon baby popup-mother"></a></div><a ng-href="{{item.uri}}" class="search__list-item-title"><img ng-src="{{item.image}}" alt="" class="img img-responsive search__list-item-img">{{item.title}}
                        <div ng-if="item.sold" class="search__list-item-sold"></div></a>
                      <p><span class="search__list-item-info-label">Адрес:</span><span class="search__list-item-info">{{item.address}}</span></p>
                      <p ng-if="item.top_floor &gt; 0"><span class="search__list-item-info-label">Этаж:</span><span class="search__list-item-info">{{item.floor}}/{{item.top_floor}}</span></p>
                      <p><span class="search__list-item-info-label">Площадь:</span><span class="search__list-item-info">{{item.square}} м<sup>2</sup></span></p>
                      <div ng-if="vm.transactions.buy.active === true" class="search__list-item-cost">{{item.cost}} р.
                        <div class="search__list-item-cost-line"></div><span class="search__list-item-cost-small"> ~{{item.square_price}} т.р.</span>
                      </div>
                      <p ng-if="vm.transactions.rent.active === true" class="search__list-item-cost">{{item.cost}} р/м.</p><a ng-href="{{item.uri}}" class="search__list-item-link-more">Смотреть подробнее</a>
                    </div>
                  </div>
                </div>
              </div>
              <!--ПАГИНАЦИЯ-->
              <div ng-if="vm.view === 'table' &amp;&amp; vm.table.pages.length &gt; 1" class="pager-list control-over-map"><span ng-class="{active: page.active}" ng-click="vm.goPage(page.value)" ng-repeat="page in vm.table.pages" class="pager page-number">{{page.value}}</span></div>
              <div ng-if="vm.view === 'grid' &amp;&amp; vm.grid.pages.length &gt; 1" class="pager-list control-over-map"><span ng-class="{active: page.active}" ng-click="vm.goPage(page.value)" ng-repeat="page in vm.grid.pages" class="pager page-number">{{page.value}}</span></div>
              <!--ОТОБРАЖЕНИЕ КАРТА-->
              <div ng-if="vm.view == 'map'" class="search__map">
                <div class="row search__map-special-wrapper">
                  <?
				    $types = array('new','flat','house','commercial','land'); 
				    foreach($types as $type): ?>
					    <? $specials = Estate::model()->findAllByAttributes(array('type'=>$type,'special'=>true,'city'=>$this->city_id) , array('order'=>'rand()', 'limit'=>'3')); ?>
					    <? foreach($specials as $special): ?>
					      <div class="col-xs-4" ng-if="vm.building == '<?= $type ?>'">
		                    <div class="search__map-special-item-wrapper">
		                      <div class="search__map-special-item--decore">
		                        <div class="search__map-special-item"><span class="search__map-special-item-cost"><?= number_format($special->cost, 0, ",", " ") ?> <span class="search__map-special-item-cost-value"><? if($special->subtype == 'sale'): ?>руб.<? else: ?>р/мес.<? endif ?></span></span><a href="/<?= $special->type ?>/<?= $special->id ?>-<?= $special->slug ?>" class="search__map-special-item-address"><?= $special->title ?></a></div>
		                      </div>
		                      <div class="search__map-special-item-img-wrapper"><img src="<?= $special->image ?>" alt="<?= $special->title ?>" class="img-responsive search__map-special-item-img"></div>
		                    </div>
		                  </div>
					        
					    <? endforeach; ?>
					<? endforeach; ?>
                </div>
              </div>
            </div>
            <div class="col-xs-3 control-over-map">
             
              <!--ТИП ТРАНЗАКЦИИ МЕНЮ-->
              <!--include ./modules/view/transation-->
              <!--АККОРДИОН МЕНЮ-->
              
              <div class="btn-group-shadow">
				  <div class="btn-group btn-group-justified search__type control-over-map">
					<div ng-repeat="view in vm.views" class="btn-group">
					  <div ng-class="{active: view.active}" class="btn-select">
					  	<a ng-click="vm.selectViewType(view.value)" class="btn-select-link"><span ng-class="{active: view.active}" class="btn-select-text search__btn-view"><span ng-class="'icon-view-'+view.value" class="icon search__btn-view-icon"></span>{{view.text}}</span></a>
					  </div>
					</div>
				  </div>
			  </div>
				  
              <div id="accordion-wrapper">
                <? if(Yii::app()->controller->action->id == 'special'): ?>
				 	<div class="ng-isolate-scope" filter="" filter-field="onlyspecial" filter-value="true"></div>
				<? endif ?> 
                <div class="accordion-box-shadow">
                    <div id="accordion">
                      	<? $this->renderPartial('//site/_filter_'.$selected_type,array('city'=>$city,'city_id'=>$city_id)); ?>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <!--КОПИРАЙТ-->
        </div>
		<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'real-estate-filler-section_bottom_1170-90','class'=>'footer-fix always_display')); ?> 
      </div>
    </div>
    <!--ДУБЛЬ ГИС КАРТА-->
    <div id="map" ng-controller="MapController" class="map"></div>
    <!--МОДАЛЬНЫЕ ОКНА-->
    
    
    