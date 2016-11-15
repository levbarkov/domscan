

<?php echo $form->errorSummary($model); ?>

	<div class="control-group">
		<?php echo $form->labelEx($model,'name',array('class'=>'control-label')); ?>
<div class="controls"><?php echo $form->textField($model,'name',array('class'=>'input-xlarge')); ?>
</div><?php echo $form->error($model,'name'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'title',array('class'=>'control-label')); ?>
<div class="controls"><?php echo $form->textField($model,'title',array('style'=>'','class'=>'input-xlarge')); ?>
</div><?php echo $form->error($model,'title'); ?>
	</div>
	
	
	<!--<div class="control-group">
		<?php echo $form->labelEx($model,'text',array('class'=>'control-label')); ?>
<div class="controls"><?php echo $form->textArea($model,'text',array('style'=>'width:810px;height:200px;','class'=>'input-xlarge textarea')); ?>
</div><?php echo $form->error($model,'text'); ?>
	</div>-->
	
	<div class="control-group">
		<?php if ($model->photo != '') { ?>
		<img src="<?php echo $model->photo; ?>" style="max-width:200px;max-height:100px;margin:0 0 0 180px;">
		<?php } ?>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'photo',array('class'=>'control-label')); ?>
		<div class="controls">
		<?php echo $form->fileField($model, 'photo',array('class'=>'input-file uniform_on')); ?>
		</div>
		<?php echo $form->error($model,'photo'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'phone',array('class'=>'control-label')); ?>
		<div class="controls"><?php echo $form->textField($model,'phone',array('class'=>'input-xlarge')); ?>
		</div><?php echo $form->error($model,'phone'); ?>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'email',array('class'=>'control-label')); ?>
		<div class="controls"><?php echo $form->textField($model,'email',array('class'=>'input-xlarge')); ?>
		</div><?php echo $form->error($model,'email'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'skype',array('class'=>'control-label')); ?>
		<div class="controls"><?php echo $form->textField($model,'skype',array('class'=>'input-xlarge')); ?>
		</div><?php echo $form->error($model,'skype'); ?>
	</div>


