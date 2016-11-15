<?
	$this->setPageTitle('Личный Кабинет');
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

                    <div class="user__data-listings-rent">
                    <h3 class="user__data-listings-title">Ваши объекты</h3>
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
                    <? foreach($flats as $flat): ?>
                    <tr class="user__data-listings-table-row ">
                        <td class="user__data-listings-table-cell">
                            <span class="user__data-listings-favorite">                           
                                <a href="#" data-id="<?= $flat->id ?>" class="search__table-cell-favorite-icon <?= in_array($flat->id, $favarray) ? 'added' : '' ?>"></a>                        
                            </span>
                        </td>
                        <td class="user__data-listings-table-cell">
                            <div class="type-page__table-gallery-btn">
                                <span class="icon icon-photo type-page__table-gallery-icon"></span>
                                <?= count($flat->attached_images) ? count($flat->attached_images) : 'Нет' ?> фото
                            </div>
                        </td>
                        <td class="user__data-listings-table-cell user__data-listings-table-cell-rooms"><?= $flat->rooms ?></td>
                        <td class="user__data-listings-table-cell">
                            <a href="/<?= $flat->type ?>/<?= $flat->id ?>-<?= $flat->slug ?>" class="user__data-listings-table-cell-address">
                                <?= $flat->address ?>
                            </a>
                        </td>
                        <td class="user__data-listings-table-cell">
                            <div class="user__data-listings-table-cell-floor-wrapper">
                                <span class="user__data-listings-table-cell-floor">
                                   <b><?= $flat->floor ?></b> / <?= $flat->top_floor ?>
                                     <span class="user__data-listings-table-cell-floor-material">
                                        <?= $material_array[$flat->material] ?>
                                     </span>
                                </span>
                            </div>
                        </td>
                        <td class="user__data-listings-table-cell user__data-listings-table-cell-floor-area">
                            <?= $flat->square ?>
                        </td>
                        <td class="user__data-listings-table-cell">
                            <div class="user__data-listings-table-cell-type-wrapper">
                                            <span class="user__data-listings-table-cell-type">
                                                <?= $plan_array[$flat->plan] ?>
                                            </span>

                                            <span class="user__data-listings-table-cell-type-year">
                                              <!--  4кв.2014-->
                                            </span>
                            </div>
                        </td>
                        <td class="user__data-listings-table-cell">
                            <div class="user__data-listings-table-cell-cost-wrapper">
                                            <span class="user__data-listings-table-cell-cost">
                                                <?= number_format($flat->cost, 0, ",", " ") ?>
                                                 <span class="user__data-listings-table-cell-cost-meter">
                                                 <? $calculate_square_price = (int)$flat->cost / (double)$flat->square;
													 $calculate_square_price = $calculate_square_price / 1000; ?>
                                                     ~<?= number_format($calculate_square_price, 0, ",", " ") ?> т.р.
                                                 </span>
                                            </span>
                            </div>
                        </td>
                        <td class="user__data-listings-table-cell-edit">
                            <div class="user__data-listings-table-cell-edit-text-wrapper">
                                <a href="/cabinet/edit/<?= $flat->id ?>" class="icon icon-user-edit user__data-listings-table-cell-edit-text-icon">

                                </a>
                                <a onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')" href="/cabinet/delete/<?= $flat->id ?>" class="icon icon-user-edit user__data-listings-table-cell-edit-text-icon-delete">

                                </a>
                            </div>


                        </td>
                    </tr>
                    <? endforeach ?>
                    </table>
                    </div>

                    <a href="/cabinet/add"><button class="staff__modal-submit user__content-posts-btn">Добавить объявление</button></a>
                    
                    
					<script src="/vendors/jquery-1.9.1.min.js"></script>
					<script>
						$(document).ready(function(){
							$('.search__table-cell-favorite-icon').click(function(){
								var element = $(this);
								var check_position = element.hasClass('added');
								var id_attr = element.data('id');
								
								var request = $.ajax({
					                url: "/site/favorite/",
					                type: "GET",
					                dataType: "json",
					                data: {
					                    id: id_attr,
					                    value: !check_position,
					                    format: 'json'
					                }
					            });
					            request.done(function(data) {
					               // console.log(data);
					
					                if(data.id === id_attr && data.value === !check_position) {
					                    element.data('value', data.value);
					                    if (element.hasClass('added')) {
					                        element.removeClass('added');
					
					                    } else {
					                        element.addClass('added');
					                    }
					                }
					            });

					            
					            
							});
						});
					</script>
                </div>
                
			<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'personal-account-section_bottom_1170-90','class'=>'footer-fix')); ?> 
            </div>
        </div>
    </div>
</div>