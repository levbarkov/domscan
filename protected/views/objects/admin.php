<?php
$this->breadcrumbs=array(
	'Settings'=>array(Yii::t('app', 'index')),
	Yii::t('app', 'Manage'),
);

$this->menu=array(
		array('label'=>Yii::t('app',
				'List Setting'), 'url'=>array('index')),
		array('label'=>Yii::t('app', 'Create Setting'),
				'url'=>array('create')),
			);

		?>
<input type="hidden" value="<?= $type ?>" id="object_type_hidden">
<h1> Управление <?
	switch($type) {
		case 'flat': echo 'квартирами'; break;
		case 'land': echo 'земляными участками'; break;
		case 'commercial': echo 'коммерческой недвижимостью'; break;
		case 'new': echo 'новостройками'; break;
		case 'house': echo 'домами'; break;
		case 'land': echo 'земляными участками'; break;
	}
?></h1>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Город</div>
    </div>
    <div class="block-content collapse in">
    	<form class="form-horizontal">
    		<section class="row-fluid">
	    		<div class="span5">
			    	<div class="control-group">
						<label class="control-label"><span class="popup" 
							hiddentitle="Имеет приоритет над всеми остальными полями.&lt;br&gt;
										Выведет сразу нужную запись.&lt;br&gt;
										Можно ввести несколько через запятую." style="border-bottom:1px dotted; cursor:pointer;">ID</span></label>
						<div class="controls">
							<? echo CHtml::textField('id_search',$id_search, array('id'=>'id_selector')); ?>				
						
						</div>
			    	</div>
			    	<div class="control-group">
						<label class="control-label">Фильтр по городу</label>
						<div class="controls">
						<? echo CHtml::dropDownList('city_search',$city_id,CHtml::listData(City::model()->findAll(), 'id', 'name')/*array('1'=>'Красноярск')*/, array('prompt'=>'Все города','name'=>'city_search','id'=>'')); ?>
						</div>
			    	</div>
		    		<div class="control-group">
						<label class="control-label">Фильтр по адресу</label>
						<div class="controls">
						<? echo CHtml::textField('address_search',$address_search, array('id'=>'address_selector')); ?>				</div>
			    	</div>
			    	
		    		<div class="control-group">
						<label class="control-label">Основная площадь</label>
						<div class="controls">
						<? echo CHtml::textField('square_range',$square_range, array('id'=>'range_square')); ?>	</div>
						<script>
						
						<?
							
							$base_m=10;
							
							$max_flat_square = Estate::model()->cache(3600)->findByAttributes(array('type'=>$type),array('order'=>'square DESC'));
							if($max_flat_square)
								$max_flat_square = $base_m*(ceil((int)$max_flat_square->square/$base_m));
							else
								$max_flat_square = 300;
								
								
							$min_flat_square = Estate::model()->cache(3600)->findByAttributes(array('type'=>$type),array('order'=>'square ASC'));
							if($min_flat_square)
								$min_flat_square = $base_m*(floor((int)$min_flat_square->square/$base_m));
							else
								$min_flat_square = 0;
								
							if($min_flat_square == $max_flat_square) {
								$min_flat_square = $min_flat_square - 10;
								$max_flat_square = $max_flat_square + 10;
							}

	
							$square_search = explode(';',$square_range);
						?>
							$("#range_square").ionRangeSlider({
							    type: "double",
							    min: <?= $min_flat_square ?>,
							    max: <?= $max_flat_square ?>,
							    from: <?= $square_search[0] ? (int)$square_search[0] : $min_flat_square ?>,
							    to: <?= $square_search[1] ? (int)$square_search[1] : $max_flat_square ?>,
							    step: 1,
							    grid:true,
							});
						</script>
			    	</div>

			    	<div class="control-group">
						<label class="control-label">Продано?</label>
						<div class="controls">
						<? echo CHtml::dropDownList('sold_search',$sold_search,array('0'=>'Не продано','1'=>'Продано'), array('prompt'=>'Неважно','name'=>'sold_search')); ?>
						</div>
			    	</div>
			    	
			    	<div class="control-group">
						<label class="control-label">Застройщик</label>
						<div class="controls">
						<? echo CHtml::dropDownList('builder_search',$builder_search,CHtml::listData(Builder::model()->findAll(), 'en_title', 'title')/*array('1'=>'Красноярск')*/, array('prompt'=>'Любой','name'=>'builder_search','id'=>'')); ?>
						</div>
			    	</div>
			    	
	    		</div>
	    		<div class="span5">
		    		<div class="control-group">
						<label class="control-label"><span class="popup" hiddentitle="Можно ввести несколько этажей&lt;br&gt;через запятую. (Например: 3,4)" style="border-bottom:1px dotted; cursor:pointer;">Этаж</span></label>
						<div class="controls">
						<? echo CHtml::textField('floors_search',$floors_search, array('id'=>'floors_selector')); ?>				</div>
			    	</div>
		    		<div class="control-group">
						<label class="control-label"><span class="popup" hiddentitle="Можно ввести несколько вариантов&lt;br&gt;количеств комнат через запятую." style="border-bottom:1px dotted; cursor:pointer;">Количество комнат</span></label>
						<div class="controls">
						<? echo CHtml::textField('rooms_search',$rooms_search, array('id'=>'rooms_selector')); ?>				</div>
			    	</div>
		    		<div class="control-group">
						<label class="control-label"><span class="popup" hiddentitle="Вводится e-mail пользователя. Поиск по одному пользователю." style="border-bottom:1px dotted; cursor:pointer;">Пользователь</span></label>
						<div class="controls">
						<? echo CHtml::textField('user',$user_search, array('id'=>'user_selector')); ?>				</div>
			    	</div>
		    		<div class="control-group">
						<label class="control-label">Цена</label>
						<div class="controls">
						<? echo CHtml::textField('price_range',$price_range, array('id'=>'range_price')); ?>	</div>
						<script>
						
						<?
						
							$base_m = 10000;
							//echo $city_id;
							$max_flat_price = Estate::model()->cache(3600)->findByAttributes(array('type'=>$type),array('order'=>'cost DESC'));
							if($max_flat_price)
								$max_flat_price = $base_m*(ceil((int)$max_flat_price->cost/$base_m));
							else
								$max_flat_price = 9000000;
								
								
								$min_flat_price = 0;
								
							if($min_flat_price == $max_flat_price) {
								$min_flat_price = $min_flat_price - 10000;
								$max_flat_price = $max_flat_price + 10000;
							}
	
							$price_search = explode(';',$price_range);
						?>
							$("#range_price").ionRangeSlider({
							    type: "double",
							    min: <?= $min_flat_price ?>,
							    max: <?= $max_flat_price ?>,
							    from: <?= $price_search[0] ? (int)$price_search[0] : $min_flat_price ?>,
							    to: <?= $price_search[1] ? (int)$price_search[1] : $max_flat_price ?>,
							    step: 100,
							    grid:true,
							});
						</script>
			    	</div>
			    	
			    	
			    	<div class="control-group">
						<label class="control-label">Продажа/Аренда?</label>
						<div class="controls">
						<? echo CHtml::dropDownList('subtype_search',$subtype_search,array('sale'=>'Продажа','rent'=>'Аренда'), array('prompt'=>'Неважно','name'=>'subtype_search')); ?>
						</div>
			    	</div>


	    		</div>
    		</section>
	    	<button class="btn btn-default btn-search">Поиск</button>
			<a href="/objects/type/<?= $type ?>?reset=true">Очистить поиск</a>

    	</form> 	
	</div>
</div>

<a href="/objects/create?type=<?= $type ?>" class="btn btn-warning"><i class="icon-plus icon-white"></i> Добавить объект</a>

<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Квартиры</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Дата добавления</th>
              <th>Имя</th>
              <th>Адрес</th>
              <th>Комнат</th>
              <th>Этаж</th>
              <th>Площадь</th>
              <th>Цена</th>
              <th>Пользователь</th>
            </tr>
          </thead>
          <tbody>
          <? $new_data = array();
			unset($_GET['type']);
			unset($_GET['page_id']);
			$full_data = array_merge($_GET, $new_data);  // New data will overwrite old entry
			$url = http_build_query($full_data);
			?>
          	<? foreach($model as $user): ?>
            <tr>
              <td><?= $user->id ?></td>
              <td><?= $user->date ?></td>
              <td><?= $user->title ?><? if(!$user->latitude) echo ' <span class="badge badge-important">нет кординат!</span>'; ?></td>
              <td><?= $user->address ?></td>
              <td><?= $user->rooms ?></td>
              <td><?= $user->floor ?></td>
              <td><?= $user->square ?> м<sup>2</sup></td>
              <td><?= $user->cost ?></td>
              <? 
              	$new_data = array('user'=>$user->user->email);
			  	$full_data = array_merge($_GET, $new_data);  // New data will overwrite old entry
				$user_url = http_build_query($full_data);
              ?>
              <td><?= $user->user_id ? '<a href="/objects/type/'.$type.'?'.$user_url.'">'.$user->user->email.'</a>' : 'админ' ?></td>

              <td>
              	<nobr><a class="btn btn-info" href="/objects/update/<?= $user->id ?>"><i class="icon-pencil icon-white"></i></a></nobr>
              	<nobr><a class="btn btn-danger" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')" href="/objects/delete/<?= $user->id ?>"><i class="icon-remove icon-white"></i></a></nobr>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
        <div class="row" style="margin-left:0 !important;">
        	<div class="span6">
        		<div class="dataTables_info" id="example_info">Показ от 1 до 25 из <?= $entries_count ?> элементов</div>
        	</div>
        	<div class="span6">
        		<div class="dataTables_paginate paging_bootstrap pagination" style="float:right;">
        			<ul>
        				<li class="prev disabled"><a href="#">← Назад</a></li>
        				<? for($i = 1; $i <= $page_count; $i++): ?>
        					<? 
	        					$assemble_link = '/objects/type/'.$type.'/page/'.$i;        					
	        					$assemble_link = $assemble_link.'?'.$url;
        					?>
        					<li <? if($i == $current_page) echo 'class="active"' ?>><a href="<?= $assemble_link ?>"><?= $i ?></a></li>
        				<? endfor ?>
        				<li class="next disabled"><a href="#">Далее → </a></li>
        			</ul>
        		</div>
        	</div>
        </div>
        
    </div>
</div>