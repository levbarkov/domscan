<?
	$this->setPageTitle('Избранное – Личный Кабинет');
	//$page_manager = Setting::model()->findByAttributes(array('name'=>'default_name'))->value; 
	//$manager_email = Setting::model()->findByAttributes(array('name'=>'default_email'))->value; 
	$material = OptionList::model()->cache(3600)->findAllByAttributes(array('en_parent_name'=>'material'));
	$material_array = array();
       if($material && count($material) > 0) {
       		foreach($material as $material_item) {
       			$material_array[$material_item->en_option_name] = $material_item->value;
       		}
	   } 
    $plan = OptionList::model()->cache(3600)->findAllByAttributes(array('en_parent_name'=>'plan'));
	$plan_array = array();
       if($plan && count($plan) > 0) {
       		foreach($plan as $district) {
       			$plan_array[$district->en_option_name] = $district->value;
       		}
	   } 
	   
	$order_dir == 'asc' ? $order_reverse = 'desc' : $order_reverse = 'asc';

?>
<div class="content">
	<?= $this->renderPartial('_cabinet_header') ?>
<div class="container-fluid">
<div class="row">
<div class="col-xs-12">
<div class="user__wrapper">
                	<?= $this->renderPartial('_user_title'); ?>
<div class="user__data-listings lk-content">
<div class="user__data-listings">
    <h3 class="user__data-listings-title">Избранное</h3>
    
    <? if($objects): ?>
	    <table class="user__data-listings-table">
	    <tr class="user__data-listings-table-row ">
	        <th class="user__data-listings-table-cell-header user__data-listings-table-cell-header-favorite">
	
	        </th>
	        <th class="user__data-listings-table-cell-header user__data-listings-table-cell-header-img">
	            Фото
	        </th>
	        <th class="user__data-listings-table-cell-header ">
	            <a href="?order=rooms&dir=<?=$order_reverse?>" class="user__data-listings-table-cell-header-rooms">
	                                            <span class="user__data-listings-table-cell-header-rooms-text">
	                                              Комнат
	                                            </span>
	
	                <span class="user__data-listings-table-cell-header-rooms-desc <?= ($order_dir == 'desc' && $order_field == 'rooms') ? 'active' : '' ?>"></span>
	                <span class="user__data-listings-table-cell-header-rooms-asc <?= ($order_dir == 'asc' && $order_field == 'rooms') ? 'active' : '' ?>"></span>
	            </a>
	        </th>
	        <th class="user__data-listings-table-cell-header user__data-listings-table-cell-header-adress">
	            Адрес
	        </th>
	        <th class="user__data-listings-table-cell-header ">
	            <div class="user__data-listings-table-cell-header-floor-wrapper">
	                                            <span class="user__data-listings-table-cell-header-floor">
	                                                Этаж
	                                            </span>
	
	                                            <span class="user__data-listings-table-cell-header-floor-material">
	                                                Материал
	                                            </span>
	            </div>
	        </th>
	        <th class="user__data-listings-table-cell-header ">
	            <a href="?order=square&dir=<?=$order_reverse?>" class="user__data-listings-table-cell-header-floor-area">
	
	                                            <span class="user__data-listings-table-cell-header-floor-area-text">
	                                                Площадь, м<sup>2</sup>
	                                            </span>
	                <span class="user__data-listings-table-cell-header-floor-area-desc <?= ($order_dir == 'desc' && $order_field == 'square') ? 'active' : '' ?>"></span>
	                <span class="user__data-listings-table-cell-header-floor-area-asc <?= ($order_dir == 'asc' && $order_field == 'square') ? 'active' : '' ?>"></span>
	            </a>
	        </th>
	        <th class="user__data-listings-table-cell-header ">
	            <div class="user__data-listings-table-cell-header-type-wrapper">
	
	                                            <span class="user__data-listings-table-cell-header-type">
	                                                Тип жилья
	                                            </span>
	
	                                            <span class="user__data-listings-table-cell-header-type-year">
	                                                Год сдачи
	                                            </span>
	            </div>
	        </th>
	        <th class="user__data-listings-table-cell-header">
	            <div class="user__data-listings-table-cell-header-cost-wrapper">
	                <a href="?order=cost&dir=<?=$order_reverse?>" class="user__data-listings-table-cell-header-cost">
	                                                   <span class="user__data-listings-table-cell-header-cost-text">
	                                                       Цена, р.
	                                                   </span>
	                    <span class="user__data-listings-table-cell-header-cost-desc <?= ($order_dir == 'desc' && $order_field == 'cost') ? 'active' : '' ?>"></span>
	                    <span class="user__data-listings-table-cell-header-cost-asc <?= ($order_dir == 'asc' && $order_field == 'cost') ? 'active' : '' ?>"></span>
	                </a>
	                                            <span class="user__data-listings-table-cell-header-cost-meter">
	                                                Цена за м<sup>2</sup>
	                                            </span>
	            </div>
	        </th>
	    </tr>
	    
	    <? foreach($objects as $item): ?>
		    <tr class="user__data-listings-table-row ">
		        <td class="user__data-listings-table-cell">
	                <span class="user__data-listings-favorite">
	                    <a href="/cabinet/favorites/?unfavorite=<?= $item->id ?>" class="search__table-cell-favorite-icon added"></a>
	                </span>
		        </td>
		        <td class="user__data-listings-table-cell">
		            <div class="type-page__table-gallery-btn">
		                <span class="icon icon-photo type-page__table-gallery-icon"></span>
		                <?= count($item->attached_images) ? count($item->attached_images) : 'Нет' ?> фото
		            </div>
		        </td>
		        <td class="user__data-listings-table-cell user__data-listings-table-cell-rooms"><?= $item->rooms ?></td>
		        <td class="user__data-listings-table-cell">
		            <a href="/<?= $item->type ?>/<?= $item->id ?>-<?= $item->slug ?>" class="user__data-listings-table-cell-address">
	                    <?= $item->address ?>
	                </a>
		        </td>
		        <td class="user__data-listings-table-cell">
		            <div class="user__data-listings-table-cell-floor-wrapper">
		                                            <span class="user__data-listings-table-cell-floor">
		                                               <b><?= $item->floor ?></b> / <?= $item->top_floor ?>
		                                                 <span class="user__data-listings-table-cell-floor-material">
		                                                    <?= $material_array[$item->material] ?>
		                                                 </span>
		                                            </span>
		            </div>
		        </td>
		        <td class="user__data-listings-table-cell user__data-listings-table-cell-floor-area">
		            <?= $item->square ?>
		        </td>
		        <td class="user__data-listings-table-cell">
		            <div class="user__data-listings-table-cell-type-wrapper">
		                                            <span class="user__data-listings-table-cell-type">
		                                                <?= $plan_array[$item->plan] ?>
		                                            </span>
		
		                                            <span class="user__data-listings-table-cell-type-year">
		                                                <!-- 4кв.2014 -->
		                                            </span>
		            </div>
		        </td>
		        <td class="user__data-listings-table-cell">
		            <div class="user__data-listings-table-cell-cost-wrapper">
	                                            <span class="user__data-listings-table-cell-cost">
	                                                <?= number_format($item->cost, 0, ",", " ") ?>
	                                                 <span class="user__data-listings-table-cell-cost-meter">
	                                                 <? $calculate_square_price = (int)$item->cost / (double)$item->square;
														 $calculate_square_price = $calculate_square_price / 1000; ?>
	                                                     ~<?= number_format($calculate_square_price, 0, ",", " ") ?> т.р.
	                                                 </span>
	                                            </span>
		            </div>
		        </td>
		        <td class="user__data-listings-table-cell-edit">
		
		
		
		        </td>
		    </tr>
	    <? endforeach ?>
	    </table>
	<? else: ?>
		<p>Ваше избранное пусто</p>
    <? endif ?>
</div>
</div>
</div>
	<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'personal-account-section_bottom_1170-90','class'=>'footer-fix')); ?> 

</div>
</div>
</div>
</div>
