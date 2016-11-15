

<?php echo $form->errorSummary($model); ?>

	
	<div class="control-group">
		<?php echo $form->labelEx($model,'en_name',array('class'=>'control-label')); ?>
		<div class="controls">
		<? if($create) { 
				echo $form->textField($model,'en_name',array('class'=>'input-xlarge'));
			} else {
				echo $form->textField($model,'en_name',array('class'=>'input-xlarge','disabled'=>'disabled'));
			} ?>
		</div>
		<?php echo $form->error($model,'en_name'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'text',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textArea($model,'text',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'text'); ?>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'text_2',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textArea($model,'text_2',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'text_2'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'text_3',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textArea($model,'text_3',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'text_3'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'text_4',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textArea($model,'text_4',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'text_4'); ?>
	</div>
	
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'title',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textField($model,'title',array('class'=>'input-xlarge', 'style'=>'width:80%')); ?>
		</div>
		<?php echo $form->error($model,'title'); ?>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'description',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textField($model,'description',array('class'=>'input-xlarge', 'style'=>'width:80%')); ?>
		</div>
		<?php echo $form->error($model,'description'); ?>
	</div>


