<?php
$this->breadcrumbs=array(
	'Settings'=>array(Yii::t('app', 'index')),
	Yii::t('app', 'Manage'),
);


		?>

<h1> Управление пользователями</h1>

<?
	//$record = AdminUser::model()->findByAttributes(array('username'=>Yii::app()->user->id));
	//echo $record->role;
?>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Пользователи</div>
    </div>
    <div class="block-content collapse in">
    
        	<? 
    	$dataProvider=new CActiveDataProvider('SiteUser');
    	$dataProvider->pagination->pageSize = 30;
		$dataProvider->sort->defaultOrder = 'id DESC';

		$this->widget('zii.widgets.grid.CGridView', array(
		    'dataProvider'=>$dataProvider,
		    'columns'=>array(
		    	'email',		        
		        'name',
		        'telephone',
		        array(            // display 'create_time' using an expression
		            'name'=>'buttons',
		            'type'=>'raw',
		            'value'=>'SiteUserHelper::GetTableButtons($data->id, $data->username)',
		        ),
		    ),
		    'itemsCssClass' => 'table table-striped',
		)); 
		?>
    </div>
</div>