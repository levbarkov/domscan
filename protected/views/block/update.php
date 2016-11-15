<?php
$this->breadcrumbs=array(
	'Blocks'=>array('index'),
	$model->id=>array('view','id'=>$model->id),
	Yii::t('app', 'Update'),
);

$this->menu=array(
	array('label'=>'List Block', 'url'=>array('index')),
	array('label'=>'Create Block', 'url'=>array('create')),
	array('label'=>'View Block', 'url'=>array('view', 'id'=>$model->id)),
	array('label'=>'Manage Block', 'url'=>array('admin')),
);
?>

<h1> Обновить блок #<?php echo $model->en_name; ?> </h1>

<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left"></div>
    </div>
    <div class="block-content collapse in">
        <div class="span12">
<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'block-form',
										'htmlOptions'=>array('enctype'=>'multipart/form-data', 'class'=>'form-horizontal'),
	'enableAjaxValidation'=>true,
)); ?>

      <fieldset>
        <legend>Обновить</legend>
		<?php echo $this->renderPartial('_form', array(
			'model'=>$model,
			'form' =>$form
			)); ?>

		<div class="form-actions">
			<?php echo CHtml::submitButton(Yii::t('app', 'Update')); ?>
		</div>
                                    
									</fieldset>
<?php $this->endWidget(); ?>

         </div>
    </div>
</div>