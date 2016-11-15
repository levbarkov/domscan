<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('id')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->id), array('view', 'id'=>$data->id)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('en_name')); ?>:</b>
	<?php echo CHtml::encode($data->en_name); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('text_1')); ?>:</b>
	<?php echo CHtml::encode($data->text_1); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('text_2')); ?>:</b>
	<?php echo CHtml::encode($data->text_2); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('text_3')); ?>:</b>
	<?php echo CHtml::encode($data->text_3); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('email_info')); ?>:</b>
	<?php echo CHtml::encode($data->email_info); ?>
	<br />


</div>
