<?
	$this->setPageTitle($model->title);
?>

    
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
				<ol class="breadcrumb">
					<li><a href="/">Главная</a></li>
		            <li><a href="/zastroischiki/">Застройщики</a></li>
		            <li><a href="<?= $model->getViewURL(); ?>"></a><?= $model->title ?></li>
			    </ol>
            </div>
        </div>
    </div>
</div>
    
    <div class="three-building-content-wrapper">
        <div id="content" class="three-building-content">
        
            <h1 id="content-title" class="three-building-content-title"><?= $model->title ?></h1>
			<? if($this->checkEditablePermissions()): ?> <a href="<?= $model->getUpdateURL() ?>">(редактировать)</a><? endif ?>
            <ul class="title-menu">
                <li><a href="<?= $model->getAllBuildingsURL(); ?>">Смотреть все наши дома</a> (<?= $builderBuildingsCount ?>)</li>
                <li><a href="<?= $model->getConstructionBuildingsURL(); ?>">Строящиеся объекты</a> (<?= $model->getNonFinishedObjectsCount() ?>)</li>
                <li><a href="<?= $model->getFinishedBuildingsURL(); ?>">Построенные объекты</a> (<?= $model->getFinishedObjectsCount() ?>)</li>
            </ul>

			<? $builderBuildings_1 = array_slice($builderBuildings, 0, 3); $builderBuildings_2 = array_slice($builderBuildings, 3, 3); ?>
            <div class="three-building-list">
                <div class="three-building-list-wrapper">
                   <? 	foreach($builderBuildings_1 as $object) {
						echo $this->renderPartial('//novostroiki/_building_card',array('model'=>$object));
					}
					?>
                    
                </div>
                <div class="three-building-list-wrapper">
                    <? 		foreach($builderBuildings_2 as $object) {
						echo $this->renderPartial('//novostroiki/_building_card',array('model'=>$object));
					}
					?>       
                </div>
            </div>
			<div style="clear:both;"></div>

			<? if($builderFlatsCount){ ?>
	            <p id="content-title" class="three-building-content-title content-second-title">Наши квартиры</p>
	            <ul class="title-menu">
	                <li><a href="<?= $model->getAllFlatsURL() ?>">Посмотреть все квартиры</a> (<?= $builderFlatsCount ?>)</li>
	                <!--<li><a href="#">Квартиры со скидкой</a> (12)</li>-->
	            </ul>
	
				<? $flatDistricts = $this->partition($flatDistricts, 2); ?>
	            <div class="title-menu-districts-wrapper">
	                <div class="title-menu-districts">
	
						<? foreach($flatDistricts[0] as $district): ?>
							<p class="title-menu-district-name"><a <? // if($selected_district == $district->id) echo 'class="selected"'; ?> href="<?= $district->getDistrictBuilderURL($model->en_title) ?>"><?= $district->district_title->name; ?></a> (<?= $district->getCountWithBuilder($model->en_title) ?>)</p>
						<? endforeach; ?>
	                </div>
	                <div class="title-menu-districts">
					
						<? foreach($flatDistricts[1] as $district): ?>
							<p class="title-menu-district-name"><a href="<?= $district->getDistrictBuilderURL($model->en_title) ?>"><?= $district->district_title->name; ?></a> (<?= $district->getCountWithBuilder($model->en_title) ?>)</p>
						<? endforeach; ?>
	                </div>
	                <!--<p class="commercial"><a href="#">Коммерческая недвижимость</a> (53)</p>-->
	            </div>
				
				<? $builderFlats_1 = array_slice($builderFlats, 0, 3); $builderFlats_2 = array_slice($builderFlats, 3, 3); ?>
	            <div class="three-building-list">
	                <div class="three-building-list-wrapper">
	                     <? 	foreach($builderFlats_1 as $object) {
							echo $this->renderPartial('//novostroiki/_flat_card',array('model'=>$object));
						}
						?>  
	                </div>
	                <div class="three-building-list-wrapper">               
	                     <? 	foreach($builderFlats_2 as $object) {
							echo $this->renderPartial('//novostroiki/_flat_card',array('model'=>$object));
						}
						?>  
	                </div>
	            </div>
	        <? } ?>
			<div style="clear:both;"></div>

            <div id="builder-text-info" class="type-page">
            	<? if($model->html): ?>
                <div class="builder-text-wrapper">
                    <p class="builder-text-title">О компании</p>
                    <div class="builder-text-content"><?= $model->html ?></div>
                </div>
                <? endif; ?>
            	<? if($model->specprojects): ?>
                <div class="builder-text-wrapper">
                    <p class="builder-text-title">Спецпроекты</p>
                    <div class="builder-text-content"><?= $model->specprojects ?></div>
                </div>
                <? endif; ?>
            	<? if($model->gosreg): ?>
                <div class="builder-text-wrapper">
                    <p class="builder-license-title">Государственная регистрация:</p>
                    <div class="builder-text-content"><?= $model->gosreg ?></div>
                </div>
                <? endif; ?>
            	<? if($model->uchred): ?>
                <div class="builder-text-wrapper">
                    <p class="builder-license-title">Учредители:</p>
                    <div class="builder-text-content"><?= $model->uchred ?></div>
                </div>
                <? endif; ?>
            	<? if($model->licenses): ?>
                <div class="builder-text-wrapper">
                    <p class="builder-license-title">Лицензия, допуск к СРО:</p>
                    <div class="builder-text-content"><?= $model->licenses ?></div>
                </div>
                <? endif; ?>
            </div>

        </div>


        <div class="builder-sidebar">
            <img src="<?= $model->photo ?>">
            <a href="<?= $model->url ?>" class="builder-website">
                <p class="sidebar-group"><?= $model->url_text ?></p>
            </a>
            <p class="sidebar-group">Занимает <a href="/zastroischiki/"><?= $place ?>-е место</a> в рейтинге застройщиков</p>
            
			<? if($model->attached_pages): ?>
				<p class="sidebar-title"><b>Меню:</b></p>
				<ul class="sidebar-group">
					<? foreach($model->attached_pages as $page): ?>
						<li><a href="<?= $page->pageViewURL(); ?>"><?= $page->title ?></a></li>
					<? endforeach; ?>  
				</ul>
			<? endif; ?>
            <p class="sidebar-title"><b>Контакты:</b></p>
            <div class="sidebar-group">
                <?= $model->contacts ?>
            </div>
            <p class="sidebar-group"><b>Адрес:</b> <?= $model->address ?></p>
			
			<? if($model->worktime): ?>
            <p class="sidebar-title"><b>Режим работы:</b></p>
            <div class="sidebar-group"><?= $model->worktime ?></div>
            <? endif; ?>


			<?= $this->renderPartial('//news/_special',array('builder'=>$model)); ?>
			<? $this->renderPartial('//site/_banner_268',array('id'=>'developers-page_sidebar-top_270-380','class'=>'footer-fix')); ?>
			<? $this->renderPartial('//site/_banner_268',array('id'=>'developers-page_sidebar-bottom_270-380','class'=>'footer-fix')); ?>
        </div>
        <? if($model->news): ?>
        <div id="sidebar-news">
            <p class="sidebar-news-title"><a href="<?= $model->getNewsURL(); ?>">Наши новости</a> (<?= count($model->news) ?>)</p>
            <div class="news-wrapper">
            <? foreach($loadNews as $new): ?>
                <div class="article">
                    <a href="<?= $new->getViewURL() ?>">
                        <p class="articles-title"><?= $new->title ?></p>
                    </a>
                    <div class="meta">
                        <p class="tag"><a href="/news/">Новости рынка</a></p>
                        <p class="date"><?= $new->getDateString() ?></p>
                    </div>
                    <p class="article-desc"><?= substr($new->additional, 0, strpos(wordwrap($new->additional, 200), "\n")); ?></p>
                </div>
            <? endforeach; ?>
            </div>
        </div>
        <? endif; ?>
    </div>
	<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'developers-page_bottom_1170-90','class'=>'footer-fix')); ?>