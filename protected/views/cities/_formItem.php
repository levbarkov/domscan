

<?php echo $form->errorSummary($model); ?>

		<?php echo $form->hiddenField($model,'city_id',array('size'=>60,'maxlength'=>255,'class'=>'input-xlarge')); ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'name',array('class'=>'control-label')); ?>
		<div class="controls">
		<?php echo $form->textField($model,'name',array('size'=>60,'maxlength'=>255,'class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'name'); ?>
	</div>



