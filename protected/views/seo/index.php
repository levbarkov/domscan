<?php
$this->breadcrumbs = array(
	'Settings',
	Yii::t('app', 'Index'),
);

$this->menu=array(
	array('label'=>Yii::t('app', 'Create') . ' Setting', 'url'=>array('create')),
	array('label'=>Yii::t('app', 'Manage') . ' Setting', 'url'=>array('admin')),
);
?>

<h1>Settings</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
