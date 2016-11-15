

<?php echo $form->errorSummary($model); ?>

	<div class="control-group">
		<?php echo $form->labelEx($model,'name',array('class'=>'control-label')); ?>
		<div class="controls">
		<? if($create) { 
				echo $form->textField($model,'name',array('class'=>'input-xlarge'));
			} else {
				echo $form->textField($model,'name',array('class'=>'input-xlarge','disabled'=>'disabled'));
			} ?>
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
			<table>
			<tbody>
				<tr><td>Заголовок</td><td>Ссылка</td><td>Подпись</td></tr>
			<?php $unserializedPrice = unserialize($model['value']); ?>
			<?php //a:2:{s:6:"Moscow";s:4:"8997";s:15:"Moscow_original";s:5:"99877";}
			$i = 0;
			if (($model['value']!='N;'))
			if (($model['value']!=null))
			foreach ($unserializedPrice as $key => $value) {
			
					echo '<tr>';
				foreach($value as $key2 => $item) {
					if ($key2 == 'title')
						echo '<td><input type="text" name="titles['.$i.']" value="'.$item.'"/></td>';
					if ($key2 == 'url')						
						echo '<td><input type="text" name="urls['.$i.']" value="'.$item.'"/></td>';
					if ($key2 == 'text')						
						echo '<td><input type="text" name="text['.$i.']" value="'.$item.'"/></td>';
					//	echo CHtml::dropDownList('urls['.$i.'][]',$item,CHtml::listData(StaticPage::model()->findAll(), 'en_title', 'title'), array('prompt'=>''));;					
				}		
					echo '</tr>';
					$i++;
				
			}
			if($i < 9) {
				//$i = 10 - $i;
				while($i<10) {
					echo '<tr>';
					echo '<td><input type="text" name="titles['.$i.']" value="'.$item.'"/></td>';
					echo '<td><input type="text" name="urls['.$i.']" value="'.$item.'"/></td>';
					echo '<td><input type="text" name="text['.$i.']" value="'.$item.'"/></td>';
					echo '</tr>';
				//	echo CHtml::dropDownList('urls[]','',CHtml::listData(StaticPage::model()->findAll(), 'en_title', 'title'), array('prompt'=>'')); echo '<br>';
					$i++;
				}
			}
				
			?>
			</tbody>
			</table>
		</div>
		<?php echo $form->error($model,'value'); ?>
	</div>


