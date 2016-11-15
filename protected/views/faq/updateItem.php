

<h1> Обновить запись в категории #<?php echo $model->category->title; ?> </h1>

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
        <legend>Обновить запись в категории <?= $model->category->title ?></legend>
		<?php echo $this->renderPartial('_formItem', array(
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