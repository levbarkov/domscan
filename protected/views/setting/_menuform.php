

<?php echo $form->errorSummary($model); ?>

	<div class="control-group">
		<?php echo $form->labelEx($model,'name',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'name',array('class'=>'input-xlarge','disabled'=>'disabled')); ?>
		</div>
		<?php echo $form->error($model,'name'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'title',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textField($model,'title',array('class'=>'input-xlarge')); ?>
		</div>
		<?php echo $form->error($model,'title'); ?>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'value',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php $unserializedPrice = unserialize($model['value']); ?>
			<?php //a:2:{s:6:"Moscow";s:4:"8997";s:15:"Moscow_original";s:5:"99877";}
			$i = 0;
			if (($model['value']!='N;'))
			if (($model['value']!=null))
			foreach ($unserializedPrice as $key => $value) {
				foreach($value as $key2 => $item) {
					//if ($key2 == 'title')
					//	echo '<input type="text" name="urls['.$key2.'][]" value="'.$item.'"/>';
					if ($key2 == 'url')
						echo CHtml::dropDownList('urls[]',$item,CHtml::listData(StaticPage::model()->findAll(), 'en_title', 'title'), array('prompt'=>''));;						
				}		
					echo '<br>';
					$i++;
				
			}
			if($i < 9) {
				//$i = 10 - $i;
				while($i<10) {
					echo CHtml::dropDownList('urls[]','',CHtml::listData(StaticPage::model()->findAll(), 'en_title', 'title'), array('prompt'=>'')); echo '<br>';
					$i++;
				}
			}
				
			?>

		</div>
		<?php echo $form->error($model,'value'); ?>
	</div>


