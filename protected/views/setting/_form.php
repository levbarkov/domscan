

<?php echo $form->errorSummary($model); ?>

	<div class="control-group">
		<?php echo $form->labelEx($model,'name',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'name',array('class'=>'input-xlarge','disabled'=>'disabled')); ?>
		</div>
		<?php echo $form->error($model,'name'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'info',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textField($model,'info',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'info'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'value',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'value',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'value'); ?>
	</div>


