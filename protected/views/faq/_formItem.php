

<?php echo $form->errorSummary($model); ?>

	<?php echo $form->hiddenField($model,'faq_id',array('size'=>60,'maxlength'=>255,'class'=>'input-xlarge')); ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'title',array('class'=>'control-label')); ?>
		<div class="controls">
		<?php echo $form->textField($model,'title',array('size'=>60,'maxlength'=>255,'class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'title'); ?>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'sort',array('class'=>'control-label')); ?>
		<div class="controls">
		<?php echo $form->textField($model,'sort',array('size'=>60,'maxlength'=>255,'class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'sort'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'text',array('class'=>'control-label')); ?>
		<div class="controls">
		<?php echo $form->textArea($model,'text',array('class'=>'input-xlarge textarea','style'=>'width:700px;height:250px')); ?>
		</div>
		<?php echo $form->error($model,'text'); ?>
	</div>


