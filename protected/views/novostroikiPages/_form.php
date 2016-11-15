
	<div class="control-group">
		Прикреплено к новостройке <a href="<?= $model->parent->pagesAdminURL(); ?>">#<?= $model->parent->id ?>: <?= $model->parent->title ?></a>
	</div>

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
	<!--<div class="control-group">
		<?php echo $form->labelEx($model,'en_title',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textField($model,'en_title',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'en_title'); ?>
	</div>-->
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'parent_page_id',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'parent_page_id', CHtml::listData($model->parent->attached_pages, 'id', 'title'), array(
		        'prompt' => '-- в корне --'
		    )); ?>
		</div>
		<?php echo $form->error($model,'parent_page_id'); ?>
	</div>


	<div class="control-group">
		<?php echo $form->labelEx($model,'type',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'type',array('main'=>'Основное','about'=>'О доме')); ?>
		</div>
		<?php echo $form->error($model,'type'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'html',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textArea($model,'html',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
		</div>
		<?php echo $form->error($model,'html'); ?>
	</div>
