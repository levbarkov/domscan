

<?php echo $form->errorSummary($model); ?>

	<div class="control-group">
		<?php echo $form->labelEx($model,'title',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'title',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'title'); ?>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'datepublish',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dateField($model,'datepublish',array('class'=>'input-xlarge datepicker','data-date-format'=>"yyyy-mm-dd")); ?>
		</div>
		<?php echo $form->error($model,'datepublish'); ?>
	</div>
	
	<div class="control-group">
		<div class="controls">
		<?php if ($model->photo != '') { ?>
		<img src="<?php echo $model->photo; ?>" style="max-width:200px;max-height:100px;">
		<?php } ?>
		</div>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'photo',array('class'=>'control-label')); ?>
		<div class="controls">
		<?php echo $form->fileField($model, 'photo',array('class'=>'input-file uniform_on')); ?>
		</div>
		<?php echo $form->error($model,'photo'); ?>
	</div>


	<div class="control-group">
		<?php echo $form->labelEx($model,'additional',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textArea($model,'additional',array('style'=>'width:810px;height:100px;','class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'additional'); ?>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'html',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textArea($model,'html',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'html'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'seo_title',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'seo_title',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'seo_title'); ?>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'seo_description',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'seo_description',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'seo_description'); ?>
	</div>
