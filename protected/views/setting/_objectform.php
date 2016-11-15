
<div class="alert">В данной форме настраиваются какие элементы можно редактировать у конкретных типов объектов. К примеру, у Квартир можно выводить этажность, количество комнат, а у Коммерческой недвижимости - нет.</div>
<?php echo $form->errorSummary($model); ?>

	<div class="control-group">
		<?php echo $form->labelEx($model,'rooms',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'rooms',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'rooms',array('class'=>'help-inline')); ?>
		</div>
	</div>


	<div class="control-group">
		<?php echo $form->labelEx($model,'square',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'square',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'square',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'square_living',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'square_living',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'square_living',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'square_kitchen',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'square_kitchen',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'square_kitchen',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'square_land',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'square_land',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'square_land',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'ceiling_height',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'ceiling_height',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'ceiling_height',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'floor',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'floor',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'floor',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'top_floor',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'top_floor',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'top_floor',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'material',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'material',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'material',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'balcony',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'balcony',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'balcony',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'sanuzel',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'sanuzel',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'sanuzel',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'plan',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'plan',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'plan',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'commercial_type',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'commercial_type',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'commercial_type',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'commercial_business',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'commercial_business',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'commercial_business',array('class'=>'help-inline')); ?>
		</div>
	</div>