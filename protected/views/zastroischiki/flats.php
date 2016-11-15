<div id="bread-crumbs">
        <ul>
            <li><a href="/">Главная</a> / </li>
            <li><a href="/zastroischiki/">Застройщики</a> / </li>
            <li><a href="/zastroischiki/<?= $model->en_title ?>/"><?= $model->title ?></a></li>
            <li>  / <a href="/zastroischiki/<?= $model->en_title ?>/flats">Все квартиры</a></li>
            <? if($selected_district): ?><li>  / <a><?= $selected_district->name ?></a></li><? endif; ?>
        </ul>
    </div>
    <div id="content">
        <h1 id="content-title"><?php echo $this->title; ?></h1>
			<? $flatDistricts = $this->partition($flatDistricts, 2); ?>
            <div class="title-menu-districts-wrapper">
                <div class="title-menu-districts">

					<? foreach($flatDistricts[0] as $district): ?>					
						<p class="title-menu-district-name"><a <? if($selected_district->id == $district->district_title->id) echo 'class="selected"'; ?> href="<?= $district->getDistrictBuilderURL($model->en_title) ?>"><?= $district->district_title->name; ?></a> (<?= $district->getCountWithBuilder($model->en_title) ?>)</p>
					<? endforeach; ?>
                </div>
                <div class="title-menu-districts">
				
					<? foreach($flatDistricts[1] as $district): ?>
						<p class="title-menu-district-name"><a <? if($selected_district->id == $district->district_title->id) echo 'class="selected"'; ?> href="<?= $district->getDistrictBuilderURL($model->en_title) ?>"><?= $district->district_title->name; ?></a> (<?= $district->getCountWithBuilder($model->en_title) ?>)</p>
					<? endforeach; ?>
                </div>
                <!--<p class="commercial"><a href="#">Коммерческая недвижимость</a> (53)</p>-->
            </div>
    </div>
    <div id="building-list" class="building-page-list">
        <div class="buildings-list-wrapper district-fix">
        
<? 		foreach($flats as $object) {
			echo $this->renderPartial('//novostroiki/_flat_card',array('model'=>$object));
		}
		?>
                        
        </div>
    </div>
    <div id="list-control-wrapper">
        <div id="list-control">
            <ul>
	            <? $pagination = PaginationHelper::GetPaginationArray($page_count, $current_page); ?>
				
				<? foreach($pagination as $item): ?>
					<? 
						$part = '';
						if($district_title)
							$part = $district_title.'/';
						$assemble_link = '/zastroischiki/'.$model->en_title.'/flats/'.$part.'page/'.$item['value'];  
					?>
					<? if($item['value'] != false) { ?>
						<li><a <? if($item['active']) echo 'class="active-link"' ?> href="<?= $assemble_link ?>"><?= $item['text'] ?></a></li>
					<? } else { ?>
						<li><span><?= $item['text'] ?></span></li>					
					<? } ?>
				<? endforeach ?>
            </ul>
        </div>
    </div>
    