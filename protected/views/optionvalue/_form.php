

<?php echo $form->errorSummary($model); ?>

	<?php echo $form->hiddenField($model,'en_parent_name',array('class'=>'input-xlarge')); ?>
	<?php echo $form->hiddenField($model,'parent',array('class'=>'input-xlarge')); ?>

	<div class="control-group">
		<?php echo $form->labelEx($model,'en_option_name',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'en_option_name',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'en_option_name'); ?>
	</div>


	<div class="control-group">
		<?php echo $form->labelEx($model,'value',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'value',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'value'); ?>
	</div>


