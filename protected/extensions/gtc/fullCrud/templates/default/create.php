<?php
echo "<?php\n";
$label=$this->pluralize($this->class2name($this->modelClass));
echo "\$this->breadcrumbs=array(
	'$label'=>array(Yii::t('app', 'index')),
	Yii::t('app', 'Create'),
);\n";
?>

$this->menu=array(
	array('label'=>'List <?php echo $this->modelClass; ?>', 'url'=>array('index')),
	array('label'=>'Manage <?php echo $this->modelClass; ?>', 'url'=>array('admin')),
);
?>


<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left"></div>
    </div>
    <div class="block-content collapse in">
        <div class="span12">
<?php echo "<?php \$form=\$this->beginWidget('CActiveForm', array(
	'id'=>'".$this->class2id($this->modelClass)."-form',
	'htmlOptions'=>array('enctype'=>'multipart/form-data', 'class'=>'form-horizontal'),
	'enableAjaxValidation'=>true,
)); ?>\n"; ?>

      <fieldset>
        <legend>Создать</legend>
		<?
		
		echo "<?php echo \$this->renderPartial('_form', array(
			'model'=>\$model,
			'form' =>\$form
			)); ?>\n"; ?>

		<div class="form-actions">
			<?php echo "<?php echo CHtml::submitButton(Yii::t('app', 'Create')); ?>\n"; ?>
		</div>
                                    
									</fieldset>
<?php echo "<?php \$this->endWidget(); ?>\n"; ?>

         </div>
    </div>
</div>