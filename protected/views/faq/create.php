<?php
$this->breadcrumbs=array(
	'Blocks'=>array(Yii::t('app', 'index')),
	Yii::t('app', 'Create'),
);

$this->menu=array(
	array('label'=>'List Block', 'url'=>array('index')),
	array('label'=>'Manage Block', 'url'=>array('admin')),
);
?>


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
        <legend>Создать</legend>
		<?php echo $this->renderPartial('_form', array(
			'model'=>$model,
			'form' =>$form
			)); ?>

		<div class="form-actions">
			<?php echo CHtml::submitButton(Yii::t('app', 'Create')); ?>
		</div>
                                    
									</fieldset>
<?php $this->endWidget(); ?>

         </div>
    </div>
</div>