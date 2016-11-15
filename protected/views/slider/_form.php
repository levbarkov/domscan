

<?php echo $form->errorSummary($model); ?>

	<div class="control-group">
		<?php echo $form->labelEx($model,'active',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'active',array('class'=>'input-xlarge bootstrap-switch')); ?>
			<?php echo $form->error($model,'active',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'title',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'title',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'title'); ?>
	</div>
	
	<div class="control-group">
		<div class="controls">
		<?php if ($model->photo != '') { ?>
		<img src="<?php echo $model->photo; ?>?date=<?= $model->datepublish ?>" style="max-width:300px;max-height:100px;">
		<?php } ?>
		</div>
	</div>
    
	<div class="control-group">
		<label class="control-label"><span style="border-bottom:1px dotted" class="popup" hiddentitle="Кликните по полю для выбора изображения с сервера.<br>ВАЖНО: Картинка будет обрезана под размер самого слайдера!">Фото</span></label>
		<div class="controls">
			<input type="text" id="photo" name="SliderItem[photo]" readonly="readonly" onclick="openKCFinder(this)"
    value="<?= $model->photo ?>" style="width:300px;cursor:pointer" />
    		<input type="button" class="btn" onclick="openKCFinder(document.getElementById('photo'))" value="Выбрать фото">
		</div>
		<?php echo $form->error($model,'photo'); ?>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'url',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'url',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'url'); ?>
	</div>
	

	<div class="control-group">
		<?php echo $form->labelEx($model,'html',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textArea($model,'html',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'html'); ?>
	</div>
