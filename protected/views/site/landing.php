<?php
/* @var $this SiteController */
?>  
<div class="container" style="height:410px; padding:0px;">
        <div id="slides">
        <? $slides = SliderItem::model()->findAllByAttributes(array('active'=>1),array('order'=>'sortOrder ASC')); ?>
        <? foreach($slides as $slide): ?>
            <a href="<?= $slide->url ?>" target="_blank"><div class="slide">
                <div class="slide-meta">
                    <div class="slide-meta-text">
                        <p class="slide-title"><?= $slide->title ?></p>
                        <div class="slide-meta-desc"><?= $slide->html ?></div>
                    </div>
                </div>
                <div style="width:1280px; height:320px; background-image:url(<?= $slide->photo ?>?date=<?= $slide->datepublish ?>); background-size:cover; background-position:center;"></div>
    
            </div>
            </a>
        <? endforeach; ?>
            
            <a href="#" class="slidesjs-previous slidesjs-navigation"><i class="icon-chevron-left icon-large"></i></a>
            <a href="#" class="slidesjs-next slidesjs-navigation"><i class="icon-chevron-right icon-large"></i></a>
        </div>

        <div class="slider-search"  style="height:90px;">
            <form name="menu" action="/site/searchwork" class="slider-menu-form">
                <select name="type">
                    <option value="new" selected>Купить квартиру в новостройке</option>
                    <option value="flat">Купить квартиру на вторичном рынке</option>
                    <option value="commercial">Купить коммерческую недвижимость</option>
                    <option value="house">Купить загородную недвижимость</option>
                    <option value="land">Купить земельный участок</option>
                </select>
                кол-во комнат:
                <input type="radio" name="rooms" value="1" id="one">
                <label for="one" class="radio-text">
                    <p>1</p>
                </label>
                <input type="radio" name="rooms" value="2" id="two">
                <label for="two" class="radio-text">
                    <p>2</p>
                </label>
                <input type="radio" name="rooms" value="3" id="three">
                <label for="three" class="radio-text">
                    <p>3</p>
                </label>
                <input type="radio" name="rooms" value="4" id="four">
                <label for="four" class="radio-text">
                    <p>4</p>
                </label>
                <input type="radio" name="rooms" value="5" id="five">
                <label for="five" class="radio-text">
                    <p>5+</p>
                </label>
                <? /* ?>
                <? $districts = District::model()->findAllByAttributes() ?>
                <? $list = CHtml::listData($districts, 
                'id', 'name'); ?>
                <?php echo CHtml::dropDownList('district', $category, 
              $list,
              array('id'=>'district')); ?>
              	<? */ ?>
              	
              	<? $cities = City::model()->findAllByAttributes(); ?>
              	
              	<select is="district" name="district">	
              		
              		<option>Любой район</option>
              		
              		<? foreach($cities as $city): ?>
				  			<option class="boldgroup" value="city-<?= $city->id ?>"><b><?= $city->name ?></b></option>
			  			<optgroup>			  			
			  			<? foreach($city->districts as $district): ?>
			  				<option value="<?= $district->id ?>"><?= $district->name ?></option>
			  			<? endforeach; ?>
			  			</optgroup>
              		<? endforeach; ?>
              	</select>
              

                <button type="submit" id="show" class="filter-button">Показать варианты</button>
                <button type="submit" id="show" class="filter-button" formaction="/site/searchworkmap">Показать на карте</button>
                <? /* ?><div id="search-list">
                    <div id="search-link-group-wrapper">
                    	<? $districts = District::model()->findAllByAttributes(array('city_id'=>3),array('limit' => 8 )) ?>
                    	<? $i = 0; ?>
                    	<? foreach($districts as $district): ?>
                    		<? $count = Estate::model()->findAllByAttributes(array('type'=>'new','district'=>$district->id)) ?>
	                    	<? if($i == 0): ?>
	                        	<div class="search-links-group">
	                        <? endif ?>
	                        <p class="search-link-row"><a href="/catalog/new#?city=<?= $district->city->id ?>&district=<?= $district->id ?>"><?= $district->name ?></a> (<?= count($count) ?>)</p>	                        
	                    	<? if($i == 1): ?>
	                        	</div>
	                        <? endif ?>
	                        <? $i == 0 ? $i = 1 : $i = 0 ?>
                    	<? endforeach ?>
                    	<? if($i == 1): ?>
                        	</div>
                        <? endif ?>
                        
                    </div>
                </div><? */ ?>
            </form>
        </div>
    </div>
    
    
    
    
    
    
    
    
    
    <div class="middle-menu-wrapper">
        <div id="middle-menu">
            <a href="/catalog/flat">
                <div class="middle-button">
                    <img src="/img/middle-menu/1.png" />
                    <p>Вторичка</p>
                </div>
            </a>
            <a href="/catalog/flat#?subtype=rent">
                <div class="middle-button">
                    <img src="/img/middle-menu/2.png" />
                    <p>Аренда квартир</p>
                </div>
            </a>
            <a href="/catalog/commercial">
                <div class="middle-button">
                    <img src="/img/middle-menu/3.png" />
                    <p>Продажа коммерческой недвижимости</p>
                </div>
            </a>
            <a href="/catalog/house">
                <div class="middle-button">
                    <img src="/img/middle-menu/4.png" />
                    <p>Загородная недвижимость</p>
                </div>
            </a>
            <a href="/catalog/land">
                <div class="middle-button">
                    <img src="/img/middle-menu/6.png" />
                    <p>Земельные
                        <br> участки</p>
                </div>
            </a>
        </div>
    </div>
    
    
    
    <div id="guides">
        <div class="section-title-wrapper">
            <a href="/guides/"><p class="section-title">Спецраздел "Гайды"</p></a>
            <p class="section-desc">Пошаговые инструкции на злободневные вопросы: какой выбрать район города для покупки квартиры,
                <br> как не попасть в лапы мошенников, как оформить квартиру в собственность.</p>
        </div>
        <div class="guides-row">
	        <? foreach($guides_1 as $guide): ?>
	        	<? if($guide->type == 'wide') { ?>
	        		<?= $this->renderPartial('//guides/_preview_wide',array('model'=>$guide)); ?>
				<? } else { ?>
	        		<?= $this->renderPartial('//guides/_preview_default',array('model'=>$guide)); ?>
	        	<? } ?>
	        <? endforeach ?>              
            
            
			<?= $this->renderPartial('//site/_banner_370_180',array('id'=>'ad-370-180-1')); ?>
            

			<?= $this->renderPartial('//site/_banner_370_180',array('id'=>'ad-370-180-2')); ?>
           
        </div>
        <div class="guides-row">
        	<? foreach($guides_2 as $guide): ?>
	        	<? if($guide->type == 'wide') { ?>
	        		<?= $this->renderPartial('//guides/_preview_wide',array('model'=>$guide)); ?>
				<? } else { ?>
	        		<?= $this->renderPartial('//defaults/_preview_article',array('model'=>$guide)); ?>
	        	<? } ?>
	        <? endforeach ?>   
       

			<?= $this->renderPartial('//site/_banner_370_180',array('id'=>'ad-370-180-3')); ?>
			<?= $this->renderPartial('//site/_banner_370_180',array('id'=>'ad-370-180-4')); ?>
    
        </div>
    </div>
    
	<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'main_middle-befor-rating_1170-90')); ?> 
    
    <div id="rating" style="padding-top:1px">
        <table width="1170px" align="center" cols="6">
            <caption>
                <p>Каталог застройщиков г.Красноярск, г.Сосновоборск</p>
                <span id="rating-link-right-border"><a href="/zastroischiki/">Просмотреть полный рейтинг застройщиков</a></span>
                <span id="rating-link-left-border"><a href="/about_rating/">О рейтинге</a></span>
            </caption>
            <caption id="rating-links">
            </caption>
            <tr>
                <th>Место</th>
                <th>Название</th>
                <th>Год основания</th>
                <th>Сдано объектов</th>
                <th>Объекты на этапе строительства</th>
                <th>Рейтинг</th>
            </tr>
            <tr class="table-spacer"></tr>
            
            <? $i = 0; ?>
            <? foreach($buildersRating as $builder): ?>
            <tr>
                <td><? $i++; echo $i; ?></td>
                <td class="company-name"><a href="<?= $builder->getViewURL() ?>"><?= $builder->title ?></a></td>
                <td> <?= $builder->year ?></td>
                <td> <?= $builder->getFinishedObjectsCount() ?></td>
                <td> <?= $builder->getNonFinishedObjectsCount() ?></td>
                <td class="rating-num-<?= $builder->rating_change == "up" ? 'green' : '' ?><?= $builder->rating_change == 'down' ? 'red' : '' ?>"><?= ($builder->correctedRating) ?></td>
            </tr>
            <? endforeach ?>
         </table>
    </div>

	<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'main_middle-befor-newbilding_1170-90','class'=>'without-margin-bottom')); ?>
	
    <div id="new-buildings">
        <div class="section-title-wrapper">
            <a href="/novostroiki">
                <p class="section-title">Новостройки Красноярска</p>
            </a>
            <div class="section-links">
                <p class="section-links"><a href="/novostroiki">Просмотреть все предложения</a> <span>(<?= Condominium::model()->countByAttributes() ?>)</span></p>
            </div>
        </div>
        <div class="buildings-list-wrapper">
            <? foreach($condos as $item): ?>
            	<?// print_r($item->id); ?>
            	<?= $this->renderPartial('//novostroiki/_building_card',array('model'=>$item)) ?>
            <? endforeach?>
        </div>
    </div>
    <div id="new-buildings">
        <div class="section-title-wrapper">
            <a href="#">
                <p class="section-title">Квартиры в новостройках</p>
            </a>
            <div class="section-links">
                <p class="section-links"><a href="/catalog/new">Просмотреть все предложения</a> <span>(<?= Estate::model()->countByAttributes(array('type'=>'new','subtype'=>'sale','sold'=>0)) ?>)</span></p>
            </div>
        </div>
        <div class="buildings-list-wrapper">
            <? foreach($flats as $item): ?>
            	<?// print_r($item->id); ?>
            	<?= $this->renderPartial('//novostroiki/_flat_card',array('model'=>$item)) ?>
            <? endforeach?>
        </div>
    </div>

	<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'main_middle-befor-article_1170-90')); ?>

    <div id="news">
        <div class="section-title-wrapper">
            <a href="/news/">
                <p class="section-title">Статьи и новости строительной индустрии</p>
            </a>
        </div>
        <div class="news-wrapper">
        
            <? foreach($news as $item): ?>
            <div class="article">
                <a href="<?= $item->getViewURL(); ?>">
                    <p class="articles-title"><?= $item->title ?></p>
                </a>
                <div class="meta">
                    <p class="tag"><a href="<?= $item->category_url; ?>"><?= $item->category; ?></a></p>
                    <p class="date"><?= $item->getDateString(); ?></p>
                </div>
                <p class="article-desc"><?= htmlspecialchars($item->additional) ?></p>
            </div>
            <? endforeach?>
		</div>
    </div>
    
    <div id="summations">
        <div class="section-title-wrapper">
            <a href="/reviews/">
                <p class="section-title title-with-desc">Отчеты "Тайного покупателя"</p>
            </a>
            <p class="section-desc">У нас есть тайные репортеры, которые приезжают на строящиеся объекты и изучают их. Мы не предупреждаем застройщика о том, что приедем с инспекцией. Мы ведем себя как заинтересованный клиент, все фиксируем и выкладываем отчет на сайт.</p>
        </div>
        <? if($reviews): ?>
        <div class="summations-wrapper">
            <div class="guides-row">
			<? foreach($reviews as $guide): ?>
	        		<?= $this->renderPartial('//defaults/_preview_article',array('model'=>$guide)); ?>
	        <? endforeach ?>                 
            </div>
        </div>
        <? endif ?>
    </div>
	<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'main_bottom_1170-90','class'=>'footer-fix')); ?> 