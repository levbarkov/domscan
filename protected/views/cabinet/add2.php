<?
	if($action == 'edit')
		$this->setPageTitle('Редактировать объявление – Личный Кабинет');	
	else
		$this->setPageTitle('Добавить объявление – Личный Кабинет');	
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
        <div class="special-col col-xs-12">
            <?= $this->renderPartial('/news/_special'); ?>
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



