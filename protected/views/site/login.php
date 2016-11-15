<?php
$this->pageTitle=Yii::app()->name . ' - Login';
$this->breadcrumbs=array(
	'Login',
);


$this->layout = 'admin_template';
?>

<h1>Логин</h1>

<p>Please fill out the following form with your login credentials:</p>

<div class="form">
<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'login-form',
	'enableClientValidation'=>true,
	'clientOptions'=>array(
		'validateOnSubmit'=>true,
	),
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<div class="control-group">		
		
		<?php echo $form->labelEx($model,'username'); ?>
		<div class="controls">			
			<div class="input-prepend">
				<span class="add-on">@</span>
				<?php echo $form->textField($model,'username'); ?>
			</div>
			<?php echo $form->error($model,'username'); ?>
		</div>	
	</div>
					

	<div class="control-group">		
		<?php echo $form->labelEx($model,'password'); ?>
		<div class="controls">			
			<div class="input-prepend">
				<span class="add-on">#</span>
				<?php echo $form->passwordField($model,'password'); ?>
			</div>
			<?php echo $form->error($model,'password'); ?>
		</div>	
	</div>

	<div class="control-group rememberMe">
		<?php echo $form->checkBox($model,'rememberMe',array('checked' => 'checked')); ?>
		<?php echo $form->label($model,'rememberMe'); ?>
		<?php echo $form->error($model,'rememberMe'); ?>
	</div>

	<div class="form-actions buttons">
		<?php echo CHtml::submitButton('Войти', array('class' => 'btn btn-primary')); ?>
	</div>

<?php $this->endWidget(); ?>
</div><!-- form -->
