
	<div class="content">		
		<div class="container-fluid">
			<ol class="breadcrumb">
				<li><a href="/">Главная</a></li>
				<li><a href="/novostroiki/">Новостройки</a></li>
				<li><a href="/novostroiki/<?= $condo->city_name->en_slug ?>/"><?= $condo->city_name->name ?></a></li>
				<li><a href="/novostroiki/<?= $condo->city_name->en_slug ?>/<?= $condo->district_name->en_title ?>"><?= $condo->district_name->name ?></a></li>
				<li><a href="<?= $condo->pagesViewSelf() ?>"><?= $condo->title ?></a></li>
			</ol>
		</div>
    </div>
    <div id="content">
        <h1 id="content-title"><?php echo $this->title; ?></h1>
        
    </div>
    <div id="building-list" class="building-page-list">
        <div class="buildings-list-wrapper district-fix">
        
<? 		foreach($model as $object) {
			echo $this->renderPartial('_flat_card',array('model'=>$object));
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
						$assemble_link = $condo_url.'/page/'.$item['value'];  
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
    