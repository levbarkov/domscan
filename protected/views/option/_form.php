

<?php echo $form->errorSummary($model); ?>

	<div class="control-group">
		<?php echo $form->labelEx($model,'en_name',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'en_name',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'en_name'); ?>
	</div>


	<div class="control-group">
		<?php echo $form->labelEx($model,'value',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'value',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'value'); ?>
	</div>


