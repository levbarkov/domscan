


<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left"></div>
    </div>
    <div class="block-content collapse in">
        <div class="span12">
<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'setting-form',
	'htmlOptions'=>array('enctype'=>'multipart/form-data', 'class'=>'form-horizontal'),
	'enableAjaxValidation'=>true,
)); ?>

      <fieldset>
        <legend>Создать</legend>
		<?php echo $this->renderPartial('_form', array(
			'model'=>$model,
			'form' =>$form,
			'type_config'=>$type_config
			)); ?>

		<div class="form-actions">
			<?php echo CHtml::submitButton(Yii::t('app', 'Создать'),array('class'=>'btn')); ?>
		</div>
                                    
									</fieldset>
<?php $this->endWidget(); ?>

         </div>
    </div>
</div>