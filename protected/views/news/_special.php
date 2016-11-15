<? if($builder) {
 		$specials = Estate::model()->findAllByAttributes(array('special'=>true,'sold'=>false,'zastroishik'=>$builder->en_title) , array('order'=>'rand()', 'limit'=>'1')); 
 	} else {
 		$specials = Estate::model()->findAllByAttributes(array('special'=>true,'sold'=>false,'city'=>$this->city_id) , array('order'=>'rand()', 'limit'=>'1')); 	
 	}
 		
 	?>
<? foreach($specials as $special): ?>

    <? /*  style="background:url(<?= $special->image ?>);" */ ?>
    <a href="/<?= $special->type ?>/<?= $special->id ?>-<?= $special->slug ?>">
    <div class="sidebar-special" style="background:url(<?= $special->image ?>); background-size:cover;">
        <div class="sidebar-special-meta">
        	<div class="sidebar-special-meta-wrapper">
	            <p class="sidebar-special-price"><?= number_format($special->cost, 0, ",", " ") ?> <? if($special->subtype == 'sale'): ?>руб.<? else: ?>р/мес.<? endif ?></p>
	            <p class="sidebar-special-info"><?= $special->title ?></p>
        	</div>
        </div>
        <div class="special-price-place">
            <p>Специальная цена</p>
        </div>
    </div>
     </a>      
<? endforeach; ?>