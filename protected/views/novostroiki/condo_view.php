
	<div class="content">		
		<div class="container-fluid">
			<ol class="breadcrumb">
	            <li><a href="/">Главная</a></li>
	            <li><a href="/novostroiki/">Новостройки</a></li>
				<li><a href="/novostroiki/<?= $model->city_name->en_slug ?>/"><?= $model->city_name->name ?></a></li>
	            <li><a href="/novostroiki/<?= $model->city_name->en_slug ?>/<?= $model->district_name->en_title ?>"><?= $model->district_name->name ?></a></li>
	            <li><a href="<?= $model->pagesViewSelf() ?>"><?= $model->title ?></a></li>
			</ol>
		</div>
    </div>

    <div class="three-building-content-wrapper">
        <div id="content" class="three-building-content content-footer">
            <h1 id="content-title" class="three-building-content-title"><?= $model->title ?></h1>
			<? if($this->checkEditablePermissions()): ?> <a href="<?= $model->getUpdateURL() ?>">(редактировать)</a><? endif ?>

            <div class="gallery-wrapper">
                <div ng-app="property" ng-controller="propertyCtrl">
                    <div class="btn-group property__tabs">
                        <button type="button" ng-class="{active: toggle=='gallery'}"
                    ng-click="changeToggle('gallery')"
                    class="btn btn-default property__tabs-list-item">
                <span class="icon icon-photo-tabs property__tabs-list-item-icon"></span>
                <span class="property__tabs-list-item-text">Фото</span>
                        </button>
                        <button type="button" ng-class="{active: toggle=='map'}" ng-click="changeToggle('map')"
                    class="btn btn-default property__tabs-list-item gallery-map-button">
                <span class="icon icon-map-tabs property__tabs-list-item-icon"></span>
                <span class="property__tabs-list-item-text">На карте</span>
                        </button>
                        
                    </div>
                    <div class="gallery property__gallery" ng-show="toggle == 'gallery'">
                        <div data-keyboard="true" class="fotorama" data-nav="thumbs">
                        <? foreach($model->attached_images as $image): ?>
								<? $date = Yii::app()->easyImage->thumbOf($_SERVER['DOCUMENT_ROOT'].$image->uploaddir.$image->name, array('type' => 'jpg','watermark' => array('watermark' => '/img/watermark-2.png', 'opacity' => 95)));
								echo $date; ?>    
						<? endforeach ?>
                        </div>
                    </div>
                
                    <div class="gallery" ng-show="toggle == 'map'">
                        <div ng-init="center=[<?= $model->latitude ?>, <?= $model->longitude ?>]" id="map"
                 style="width:100%; height:500px; margin-bottom: 30px;"></div>
                    </div>
                
                    <div class="gallery" ng-show="toggle == '3d'">
                        3
                    </div>
                </div>
            </div>

            <div class="building-desc">
                <?= $model->text ?>
            </div>
            <!--<a href="#" class="building-btn-wrapper"><div class="building-btn">
                    <p>Записаться на просмотр</p>
                </div></a>-->

        </div>


        <div class="builder-sidebar">
        	<? if($builder): ?>
            <img src="<?= $builder->photo ?>">
            <div class="sidebar-group">
                <p><b>Застройщик: </b><a href="<?= $builder->getViewURL() ?>"><?= $builder->title ?></a></p>
				<? if($model->podryadchiki ): ?>
					<p><b>Подрядчики: </b>
					<? foreach($model->podryadchiki as $podryadchik): ?>
						<? $string[] = '<a href="'.$podryadchik->getViewURL().'">'.$podryadchik->title.'</a>'; ?>
					<? endforeach; ?>
					<? echo implode(', ', $string); ?>
					</p>
            	<? endif; ?>
                <p><b>Офис продаж: </b> <?= $model->seller_phone ?></p>
            </div>
            <? endif; ?>
            <p class="sidebar-group"><b>Адрес: </b><?= $model->address ?></p>
            <div class="sidebar-group">
                <!--<p><b>Технология: </b>монолит-кирпич</p>-->
                <? if($model->condo_type != ''): ?><p><b>Класс жилого дома: </b><a href="/class_buildings/"><?= $model->condo_type ?></a></p><? endif; ?>
                <p><b>Кол-во этажей: </b><?= $model->top_floor ?></p>
                <p><b>Кол-во подъездов: </b><?= $model->porches ?></p>
            </div>
            <div class="sidebar-group">
                <p><b>Начало и конец строительства: </b></p>
                <p><?= $model->begin_and_end ?></p>
            </div>
			<? if($model->fz214): ?>
				<p class="sidebar-group"><b>Дом соответствует ФЗ 214</b></p>
			<? endif?>
			
			<? 
			$pages = array();
			$attached_pages = CondominiumStaticPage::model()->findAllByAttributes(array('parent_id'=>$model->id,'parent_page_id'=>array('0','')));
			foreach($attached_pages as $page):  
				$url = $page->pageViewURL();
	            $pages[$page->type][] = array($url, $page->title);				
	        endforeach; ?>
					
					
			<? if(!empty($pages['main'])){ ?>
            <ul class="sidebar-group">
                <p class="sidebar-title"><b>Основное:</b></p>
				<? foreach($pages['main'] as $page_item): ?>
                <li><a href="<?= $page_item[0] ?>"><?= $page_item[1] ?></a></li>
				<? endforeach ?>
			</ul>
			<? } ?>
			<? if(!empty($pages['about'])){ ?>
            <ul class="sidebar-group">
                <p class="sidebar-title"><b>О доме:</b></p>
				<? foreach($pages['about'] as $page_item): ?>
                <li><a href="<?= $page_item[0] ?>"><?= $page_item[1] ?></a></li>
				<? endforeach ?>
			</ul>
			<? } ?>
			<?
				$menu = Menu::model()->cache(60)->findByAttributes(array('name'=>'condo_menu'));
			 ?>
			<? if($menu): ?>
            <p class="sidebar-title"><b><?= $menu->title ?></b></p>
            <ul class="sidebar-group">
			<? foreach (unserialize($menu->value) as $key => $value) {
				foreach($value as $key2 => $item) {
					if ($key2 == 'url' && $item) {
						$page_name = StaticPage::model()->cache(3600)->findByAttributes(array('en_title'=>$item));
						?>
						<li>
							<a href="/<?= $item ?>"><?= $page_name->title ?></a>
						</li>									
						<?									
					}			
				}																		
			} ?>
            </ul>
			<? endif; ?>
        </div>
    </div>

	<? if($estate_count > 0): ?>
    <div id="new-buildings">
        <div class="section-title-wrapper">
            <a href="<?= $model->getFlatsPage() ?>">
                <p class="section-title">Квартиры в этом доме</p>
            </a>
            <div class="section-links">
                <a href="<?= $model->getFlatsPage() ?>">Просмотреть все предложения</a> <span class="section-link-margin">(<?= $estate_count ?>)</span>
            </div>
        </div>
        <div class="buildings-list-wrapper">            
			<? foreach($estate as $object) {
				$this->renderPartial('_flat_card',array('model'=>$object));
			} ?>		
        </div>
    </div>
    <? endif; ?>
	<? if($commercial): ?>
    <div id="new-buildings">
        <div class="section-title-wrapper">
            <a href="<?= $model->getCommercialPage() ?>">
                <p class="section-title">Коммерческая недвижимость на продажу</p>
            </a>
            <div class="section-links">
                <p class="section-links"><a href="<?= $model->getCommercialPage() ?>">Просмотреть все предложения</a> <span>(<?= $commercial_count ?>)</span></p>
            </div>
        </div>
        <div class="buildings-list-wrapper">
            <? foreach($commercial as $object) {
				$this->renderPartial('_flat_card',array('model'=>$object));
			} ?>	
        </div>
    </div>
	<? endif; ?>
    <? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'new-buildings-page_middle_1170-90','class'=>'footer-fix')); ?> 
	<? if($condos): ?>
    <div id="new-buildings" class="buildings-footer-fix">
        <div class="section-title-wrapper">
            <a href="/novostroiki/<?= $model->city_name->en_slug ?>/<?= $model->district_name->en_title ?>">
                <p class="section-title">Другие новостройки в <?= $model->district_name->name ?></p>
            </a>
            <div class="section-links">
                <? if($condos_inprocess): ?><a href="/novostroiki/<?= $model->city_name->en_slug ?>/<?= $model->district_name->en_title ?>?status=in_process">На этапе строительства</a> <span class="section-link-margin">(<?= $condos_inprocess ?>)</span><? endif; ?>
                <? if($condos_built): ?><a href="/novostroiki/<?= $model->city_name->en_slug ?>/<?= $model->district_name->en_title ?>?status=completed">Построено</a> <span>(<?= $condos_built ?>)</span><? endif; ?>
            </div>
        </div>
        <div class="buildings-list-wrapper">
			<? foreach($condos as $object) {
				$this->renderPartial('_building_card',array('model'=>$object));
			} ?>	   
        </div>
    </div>
	<? endif; ?>
    <? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'new-buildings-page_bottom_1170-90','class'=>'footer-fix')); ?> 