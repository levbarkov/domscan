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
<h1> Управление комплексами квартир (новостройками)</h1>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Фильтр</div>
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
		    					    	
	    		</div>
	    		<div class="span5">
		    		<div class="control-group">
						<label class="control-label">Фильтр по адресу</label>
						<div class="controls">
						<? echo CHtml::textField('address_search',$address_search, array('id'=>'address_selector')); ?>				</div>
			    	</div>
			    	
		    		

			    	
			    	<div class="control-group">
						<label class="control-label">Застройщик</label>
						<div class="controls">
						<? echo CHtml::dropDownList('builder_search',$builder_search,CHtml::listData(Builder::model()->findAll(), 'en_title', 'title')/*array('1'=>'Красноярск')*/, array('prompt'=>'Любой','name'=>'builder_search','id'=>'')); ?>
						</div>
			    	</div>

			    	
	    		</div>
    		</section>
	    	<button class="btn btn-default btn-search">Поиск</button>

    	</form> 	
	</div>
</div>

<a href="/novostroiki/admin/create?type=<?= $type ?>" class="btn btn-warning"><i class="icon-plus icon-white"></i> Добавить объект</a>

<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Новостройки</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Дата добавления</th>
              <th>Имя</th>
              <th>Адрес</th>
              <th>Дом сдан</th>
              <th>Форсированные данные</th>
              <th>Пользователь</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($model as $user): ?>
            <tr>
              <td><?= $user->id ?></td>
              <td><?= $user->date ?></td>
              <td><a href="<?= $user->pagesViewSelf() ?>"><?= $user->title ?></a><? if(!$user->latitude) echo ' <span class="badge badge-important">нет кординат!</span>'; ?></td>
              <td><?= $user->address ?><?= ($user->address_flat) ? ', кв.'.$user->address_flat : '' ?></td>
              <td><? if($user->finished) echo 'Да'; else echo ''; ?></td>
              <td><? if($user->use_data) echo 'Да'; else echo ''; ?></td>

              <td><?= $user->user_id ? $user->user->email : 'админ' ?></td>

              <td>
              	<nobr><a class="btn btn-info" href="/novostroiki/update/<?= $user->id ?>"><i class="icon-pencil icon-white"></i> Редактировать</a></nobr>
              	<nobr><a class="btn btn-danger" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')" href="/novostroiki/delete/<?= $user->id ?>"><i class="icon-remove icon-white"></i></a></nobr>
              </td>
            </tr>
            <tr>
            	<td colspan="7" style="text-align:right;">
            		<? foreach($user->attached_pages as $page): ?>
						<a href="<?= $page->pageViewURL() ?>" target="_blank"><?= $page->title; ?></a>, 
	            	
	            	<? endforeach; ?>
            	</td>
            	<td>
	            	<nobr><a class="btn btn-success" title="Список страниц" href="<?= $user->pagesAdminURL() ?>"><i class="icon-minus icon-white"></i> Список страниц</a></nobr>
	            	<nobr><a class="btn btn-warning" title="Добавить страницу" href="<?= $user->pagesCreateURL() ?>"><i class="icon-plus icon-white"></i></a></nobr>

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
	        					$assemble_link = '/novostroiki/admin/page/'.$i;        					
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