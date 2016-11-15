

<?php echo $form->errorSummary($model); ?>

	<div class="control-group">
		<?php echo $form->labelEx($model,'en_name',array('class'=>'control-label')); ?>
		<div class="controls">
		<?php echo $form->textField($model,'en_name',array('size'=>60,'maxlength'=>255,'class'=>'input-xlarge','disabled'=>'disabled')); ?>
		</div>
		<?php echo $form->error($model,'en_name'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'text',array('class'=>'control-label')); ?>
		<div class="controls">
		<?php echo $form->textArea($model,'text',array('class'=>'input-xlarge','style'=>'width:90%;height:500px;')); ?>
		</div>
		<?php echo $form->error($model,'text'); ?>
	</div>


