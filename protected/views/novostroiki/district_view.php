	<div class="content">		
		<div class="container-fluid">
			<ol class="breadcrumb">
				<li><a href="/">Главная</a></li>
				<li><a href="/novostroiki/">Новостройки</a></li>
				<? if($selected_city): ?><li><a href="/novostroiki/<?= $selected_city->en_slug ?>/"><?= $selected_city->name ?></a></li><? endif; ?>
				<? if($selected_district): ?><li><a href="/novostroiki/<?= $selected_city->en_slug ?>/<?= $selected_district->en_title ?>"><?= $selected_district->name ?></a></li><? endif; ?>
			</ol>
		</div>
    </div>
    <div id="content">
        <h1 id="content-title"><?php echo $this->title; ?></h1>
        <div id="district-list-wrapper">
        <? if(!$selected_city && !$selected_district): ?>
            <? $cities = City::model()->findAllByAttributes(array(),array('limit' => 9 )) ?>
        	<? $i = 0; ?>
        	<? foreach($cities as $city): ?>
        		<? $count = Condominium::model()->findAllByAttributes(array('city'=>$city->id)) ?>
            	<? if($i == 0): ?>
                	<ul class="district-list">
                <? endif; ?>
                <li><a href="/novostroiki/<?= $city->en_slug ?>/"><?= $city->name ?></a> (<?= count($count) ?>)</li>	                        
            	<? if($i != 0 && $i % 2 == 0 ): ?>
                	</ul>
                <? endif; ?>
                <? ($i != 0 && $i % 2 == 0) || $i > 2 ? $i = 0 : $i++ ?>
        	<? endforeach; ?>
        	<? if($i % 2 == 0 || $i > 2): ?>
            	</ul>
            <? endif; ?>
       <? endif; ?>
        <? if($selected_city && !$selected_district): ?>           
        	<? $districts = District::model()->findAllByAttributes(array('city_id'=>$selected_city->id),array('limit' => 9 )) ?>
        	<? $i = 0; ?>
        	<? foreach($districts as $district): ?>
        		<? $count = Condominium::model()->findAllByAttributes(array('district'=>$district->id)) ?>
            	<? if($i == 0): ?>
                	<ul class="district-list">
                <? endif; ?>
                <li><a href="/novostroiki/<?= $district->city->en_slug ?>/<?= $district->en_title ?>"><?= $district->name ?></a> (<?= count($count) ?>)</li>	                        
            	<? if($i != 0 && $i % 2 == 0 ): ?>
                	</ul>
                <? endif; ?>
                <? ($i != 0 && $i % 2 == 0) || $i > 2 ? $i = 0 : $i++ ?>
        	<? endforeach; ?>
        	<? if($i % 2 == 0 || $i > 2): ?>
            	</ul>
            <? endif; ?>
       <? endif; ?>
        </div>
    </div>
    <div id="building-list" class="building-page-list">
        <div class="buildings-list-wrapper district-fix">
        
<? 		foreach($model as $object) {
			echo $this->renderPartial('_building_card',array('model'=>$object));
		}
		?>
                        
        </div>
    </div>
    <div id="list-control-wrapper">
        <div id="list-control">
            <ul>
	            <? $pagination = PaginationHelper::GetPaginationArray($page_count, $current_page); ?>
				
				<? foreach($pagination as $item): ?>
					<? $in_url = ''; ?>
					<? if($selected_city): $in_url = $selected_city->en_slug.'/'; endif; ?>
					<? if($selected_district): $in_url = $selected_city->en_slug.'/'.$selected_district->en_title.'/'; endif; ?>
					<? 
						$assemble_link = '/novostroiki/'.$in_url.'page/'.$item['value'];  
					?>
					<? $params_url = ''; ?>
					<? if($getstatus) $params_url = '?status='.$getstatus; ?>
					<? if($item['value'] != false) { ?>
						<li><a <? if($item['active']) echo 'class="active-link"' ?> href="<?= $assemble_link ?><?= $params_url ?>"><?= $item['text'] ?></a></li>
					<? } else { ?>
						<li><span><?= $item['text'] ?></span></li>					
					<? } ?>
				<? endforeach ?>
            </ul>
        </div>
    </div>
    
	<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'new-buildings-section_bottom_1170-90','class'=>'footer-fix')); ?> 
