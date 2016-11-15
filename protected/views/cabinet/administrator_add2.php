<?
	if($action == 'edit')
		$this->setPageTitle('Редактировать объявление – Администратор');	
	else
		$this->setPageTitle('Добавить объявление – Администратор');	
?>
<div class="content">
<div class="container-fluid">
    <div class="row">
        <div class="col-xs-12">
            <div class="type-page__title-wrapper">
            <? if($action == 'edit'): ?>
                <h1>Редактировать объявление</h1>
            <? else: ?>
                <h1>Добавить объявление</h1>
            <? endif ?>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid">
<div class="row">
<div class="col-xs-3">
    <div class="row">
        <div class="special-col col-xs-12 type-page__title-wrapper">
        
        
        
        
        
        
        
        
        
        <? if($this->checkEditablePermissions(array('admin','manager'))): ?>
                    <ul class="nav nav-list bs-docs-sidenav">
                    	<? $objects_type = Yii::app()->request->getParam('type'); ?>
                    	<? if(!$objects_type)
                    		try{
	                    		
                    			if($this->objects_loaded_type)
                    				$objects_type = $this->objects_loaded_type;
                    		} catch(Exception $e) {
	                    		
                    		}
                    			
                    	 ?>
                    	<? $city_id = Yii::app()->request->getParam('city_id', 'all'); ?>
                        <li <? if($this->getUniqueId() == 'objects' && $objects_type == 'house') echo 'class="active"'; ?>>
                            <a href="/objects/type/house/<? if($city_id != 'all') echo 'city/'.$city_id; ?>"><i class="icon-chevron-right"></i> Дома</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'objects' && $objects_type == 'new') echo 'class="active"'; ?>>
                            <a href="/objects/type/new/<? if($city_id != 'all') echo 'city/'.$city_id; ?>"><i class="icon-chevron-right"></i> Новостройки</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'objects' && $objects_type == 'flat') echo 'class="active"'; ?>>
                            <a href="/objects/type/flat/<? if($city_id != 'all') echo 'city/'.$city_id; ?>"><i class="icon-chevron-right"></i> Квартиры</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'objects' && $objects_type == 'commercial') echo 'class="active"'; ?>>
                            <a href="/objects/type/commercial/<? if($city_id != 'all') echo 'city/'.$city_id; ?>"><i class="icon-chevron-right"></i> Коммерческая недвижимость</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'objects' && $objects_type == 'land') echo 'class="active"'; ?>>
                            <a href="/objects/type/land/<? if($city_id != 'all') echo 'city/'.$city_id; ?>"><i class="icon-chevron-right"></i> Земляные участки</a>
                        </li>
       
                    </ul>
                    <hr>
                    <ul class="nav nav-list bs-docs-sidenav">
                        <li <? if($this->getUniqueId() == 'cities') echo 'class="active"'; ?>>
                            <a href="/cities/admin/"><i class="icon-chevron-right"></i> Города и районы</a>
                        </li>
                       <!-- <li <? if($this->getUniqueId() == 'news') echo 'class="active"'; ?>>
                            <a href="/news/admin/"><i class="icon-chevron-right"></i> Новости</a>
                        </li>-->
                        <li <? if($this->getUniqueId() == 'pages') echo 'class="active"'; ?>>
                            <a href="/pages/admin/"><i class="icon-chevron-right"></i> Страницы</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'news') echo 'class="active"'; ?>>
                            <a href="/news/admin/"><i class="icon-chevron-right"></i> Новости</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'sotrudniki') echo 'class="active"'; ?>>
                            <a href="/sotrudniki/admin/"><i class="icon-chevron-right"></i> Список сотрудников</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'faq') echo 'class="active"'; ?>>
                            <a href="/faq/admin/"><i class="icon-chevron-right"></i> Вопрос-ответ</a>
                        </li>

                    </ul>
                <? endif ?>   
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
    </div>
</div>
<div class="col-xs-9">
	<?= $this->renderPartial('/cabinet/_form',
		array('model'=>$model, 
		'images'=>$images, 
		'type_config'=>$type_config,
		'action'=>$action, 
		'fields_sub' => $fields_sub, 
		'fields_main' => $fields_main
		)); ?>
</div>
</div>


</div>
</div>



