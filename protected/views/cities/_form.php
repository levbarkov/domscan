

<?php echo $form->errorSummary($model,"Пожалуйста, исправьте следующие ошибки","",array('class'=>'alert alert-error')); ?>

	<div class="control-group <?php if ($model->hasErrors('name')) echo "error"; ?>">
		<?php echo $form->labelEx($model,'name',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'name',array('size'=>60,'maxlength'=>255,'class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'name',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group <?php if ($model->hasErrors('en_slug')) echo "error"; ?>">
		<?php echo $form->labelEx($model,'en_slug',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'en_slug',array('size'=>60,'maxlength'=>255,'class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'en_slug',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'sort',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'sort',array('size'=>60,'maxlength'=>255,'class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'sort',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'important',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'important',array('size'=>60,'maxlength'=>255,'class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'important',array('class'=>'help-inline')); ?>
		</div>
	</div>

