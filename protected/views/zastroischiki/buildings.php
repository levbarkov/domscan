<div id="bread-crumbs">
        <ul>
            <li><a href="/">Главная</a> / </li>
            <li><a href="/zastroischiki/">Застройщики</a> / </li>
            <li><a href="/zastroischiki/<?= $model->en_title ?>/"><?= $model->title ?></a></li>
            <li>  / <a href="/zastroischiki/<?= $model->en_title ?>/all_buildings">Все дома</a></li>
        </ul>
    </div>
    <div id="content">
        <h1 id="content-title"><?php echo $this->title; ?></h1>
            <ul class="title-menu">
                <li><a href="<?= $model->getAllBuildingsURL(); ?>">Смотреть все наши дома</a> (<?= $builderBuildingsCount ?>)</li>
                <li><a href="<?= $model->getConstructionBuildingsURL(); ?>">Строящиеся объекты</a> (<?= $model->getNonFinishedObjectsCount() ?>)</li>
                <li><a href="<?= $model->getFinishedBuildingsURL(); ?>">Построенные объекты</a> (<?= $model->getFinishedObjectsCount() ?>)</li>
            </ul>
    </div>
    <div id="building-list" class="building-page-list">
        <div class="buildings-list-wrapper district-fix">
        
<? 		foreach($buildings as $object) {
			echo $this->renderPartial('//novostroiki/_building_card',array('model'=>$object));
		}
		?>
                        
        </div>
    </div>
    <? $pagination = PaginationHelper::GetPaginationArray($page_count, $current_page); ?>
	<? if(count($pagination) > 1) { ?>
    <div id="list-control-wrapper">
        <div id="list-control">
            <ul>
					<? foreach($pagination as $item): ?>
						<? 
							$assemble_link = '/zastroischiki/'.$model->en_title.'/all_buildings/page/'.$item['value'];  
						?>
						<? $params_url = ''; ?>
						<? if($getstatus) $params_url = '?type='.$getstatus; ?>
						<? if($item['value'] != false) { ?>
							<li><a <? if($item['active']) echo 'class="active-link"' ?> href="<?= $assemble_link ?><?= $params_url ?>"><?= $item['text'] ?></a></li>
						<? } else { ?>
							<li><span><?= $item['text'] ?></span></li>					
						<? } ?>
					<? endforeach ?>
            </ul>
        </div>
    </div>
	<? } ?>
    