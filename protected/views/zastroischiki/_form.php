

<?php echo $form->errorSummary($model); ?>

	<div class="control-group">
		<?php echo $form->labelEx($model,'title',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'title',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'title'); ?>
	</div>
	
	<? if($model->en_title) { ?>
		<div class="control-group">
			<?php echo $form->labelEx($model,'en_title',array('class'=>'control-label')); ?>
			<div class="controls">
				<?php echo $form->textField($model,'en_title',array('class'=>'input-xlarge')); ?>
			</div>
			<?php echo $form->error($model,'en_title'); ?>
		</div>
	<? } ?>
	
	<div class="control-group">
		<?php if ($model->photo != '') { ?>
		<img src="<?php echo $model->photo; ?>" style="max-width:200px;max-height:100px;">
		<?php } ?>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'photo',array('class'=>'control-label')); ?>
		<div class="controls">
		<?php echo $form->fileField($model, 'photo',array('class'=>'input-file uniform_on')); ?>
		</div>
		<?php echo $form->error($model,'photo'); ?>
	</div>
	
	<style>
	.checkBoxList label {
		display:inline-block;
		margin:0px 24px 0 0;
		position:relative;
		top:2px;
	}
	
	</style>
	<div class="control-group">
		<?php echo $form->labelEx($model, 'cities',array('class'=>'control-label')); ?>
		<div class="controls checkBoxList">
		<?php /* echo $form->checkBoxList($model, 'cityIds',
            CHtml::listData(City::model()->findAll(), 'id', 'name'),
            array('attributeitem' => 'id','separator'=>'', 'style' => "display: inline-block")); */ ?>
			
			<?php echo $form->dropDownList($model, 'cityIds', CHtml::listData(
				City::model()->findAll(), 'id', 'name'
			), array('multiple'=>'multiple', 'size'=>'7', 'encode'=>false, 'id'=>'chosen', 'class'=>'chosen-select')); ?>
		</div>
		<?php echo $form->error($model,'cities'); ?>
		
	</div>
	<script>
		$(document).ready(function(){
			$(".chosen-select").chosen();
		
		});
	</script>
	<div class="control-group">
		<?php echo $form->labelEx($model,'url',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'url',array('class'=>'input-xlarge')); ?>		
		</div>
		<?php echo $form->labelEx($model,'url_text',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'url_text',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'url'); ?>
		<?php echo $form->error($model,'url_text'); ?>
	</div>
	
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'year',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'year',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'year'); ?>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'address',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'address',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'address'); ?>
	</div>
	
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'contacts',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textArea($model,'contacts',array('style'=>'width:810px;height:100px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'contacts'); ?>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'worktime',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textArea($model,'worktime',array('style'=>'width:810px;height:100px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'worktime'); ?>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'html',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textArea($model,'html',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'html'); ?>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'specprojects',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textArea($model,'specprojects',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'specprojects'); ?>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'gosreg',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textArea($model,'gosreg',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'gosreg'); ?>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'uchred',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textArea($model,'uchred',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'uchred'); ?>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'licenses',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textArea($model,'licenses',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'licenses'); ?>
	</div>
