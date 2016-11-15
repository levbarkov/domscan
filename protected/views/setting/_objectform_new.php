
<div class="alert">В данной форме настраиваются где и когда выводятся соответствующие поля.</div>
<?php echo $form->errorSummary($model); ?>

	<div class="control-group">
		<?php echo $form->labelEx($model,'name',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'name',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'name',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'block',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->dropDownList($model,'block',array('main'=>'Основной блок','sub'=>'Дополнительный блок'), array('class'=>'','id'=>'method_selector')); ?>
			<?php echo $form->error($model,'block',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'parent',array('class'=>'control-label')); ?>
		<div class="controls">
			<? $criteria = new CDbCriteria();		
			$criteria->condition = "block = '".$model->block."' AND parent = '' AND slug != '".$model->slug."' ORDER BY name ASC";	
			$items_prepare = EstateConfigNew::model()->findAll($criteria); ?>
            <?php echo $form->dropDownList($model,'parent',CHtml::listData($items_prepare, 'slug', 'name'), array('prompt'=>'--','class'=>'','id'=>'parent_selector')); ?>
			<?php echo $form->error($model,'parent',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'method',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->dropDownList($model,'method',array('dropdown'=>'Выпадающий список','radio'=>'Переключатель','textarea'=>'Большое текстовое поле', 'text' => 'Текстовая строка'), array('class'=>'','id'=>'method_selector')); ?>
			<?php echo $form->error($model,'method',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'class',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->dropDownList($model,'class',array(''=>'Нет класса, стандартный размер','add-page__input-storey'=>'Маленькое текстовое поле','add-page__input-area'=>'Среднее текстовое поле'), array('class'=>'','id'=>'class_selector')); ?>
			<?php echo $form->error($model,'class',array('class'=>'help-inline')); ?>
		</div>
	</div>


	<div class="control-group">
		<?php echo $form->labelEx($model,'linked',array('class'=>'control-label')); ?>
		<div class="controls">
			<? 
			$items_prepare = Option::model()->findAll(); ?>
            <?php echo $form->dropDownList($model,'linked',CHtml::listData($items_prepare, 'en_name', 'value'), array('prompt'=>'--','class'=>'','id'=>'parent_selector')); ?>
			<?php echo $form->error($model,'linked',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'sorting',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'sorting',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'sorting',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'type_flat',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'type_flat',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'type_flat',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'type_new',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'type_new',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'type_new',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'type_house',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'type_house',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'type_house',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'type_land',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'type_land',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'type_land',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'type_commercial',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'type_commercial',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'type_commercial',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<b><?php echo $form->labelEx($model,'admin',array('class'=>'control-label')); ?></b>
		<div class="controls">
			<?php echo $form->checkbox($model,'admin',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'admin',array('class'=>'help-inline')); ?>
		</div>
	</div>
