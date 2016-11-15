

<?php echo $form->errorSummary($model,"Пожалуйста, исправьте следующие ошибки","",array('class'=>'alert alert-error')); ?>

	<div class="control-group <?php if ($model->hasErrors('name')) echo "error"; ?>">
		<?php echo $form->labelEx($model,'name',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'name',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'name',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	
	<div class="control-group <?php if ($model->hasErrors('telephone')) echo "error"; ?>">
		<?php echo $form->labelEx($model,'telephone',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'telephone',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'telephone',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group <?php if ($model->hasErrors('password')) echo "error"; ?>">
		<?php echo $form->labelEx($model,'password',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->passwordField($model,'password',array('class'=>'input-xlarge', 'autocomplete'=>"off")); ?>
			<?php echo $form->error($model,'password',array('class'=>'help-inline')); ?>
			
		</div>
	</div>	
	<div class="alert">
		Если пароль не нужно менять – то оставьте поле пустым. Пароль должен быть длиннее 5 символов.
	</div>
	<div class="control-group <?php if ($model->hasErrors('repeat_password')) echo "error"; ?>">
		<?php echo $form->labelEx($model,'repeat_password',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->passwordField($model,'repeat_password',array('class'=>'input-xlarge', 'autocomplete'=>"off")); ?>
			<?php echo $form->error($model,'repeat_password',array('class'=>'help-inline')); ?>
		</div>
	</div>

	
	
	<div class="control-group <?php if ($model->hasErrors('email')) echo "error"; ?>">
		<?php echo $form->labelEx($model,'email',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'email',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'email',array('class'=>'help-inline')); ?>
		</div>
	</div>


