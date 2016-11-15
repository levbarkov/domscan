<?php
$this->breadcrumbs=array(
	'Settings'=>array(Yii::t('app', 'index')),
	Yii::t('app', 'Manage'),
);


		?>

<h1> Управление рейтингами застройщиков</h1>


<a href="/zastroischiki/admin/recalculate/" class="btn btn-warning"><i class="icon-plus icon-white"></i> Пересчитать рейтинг</a>

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'setting-form',
	'htmlOptions'=>array('enctype'=>'multipart/form-data', 'class'=>'form-horizontal'),
	'enableAjaxValidation'=>true,
)); ?>

<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Застройщики</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Slug</th>
              <th>Рейтинг</th>
              <th>Корректировка</th>
              <th>Итоговый<br>рейтинг</th>
              <th>Смена рейтинга</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($model as $otziv): ?>
            <tr>
              <td style="max-width:150px; word-wrap: break-word;"><?= $otziv->title ?></td>
              <td style="max-width:160px; word-wrap: break-word;"><a href="<?= $otziv->getViewURL() ?>"><?= $otziv->getViewURL() ?></a></td>
              <td>
				<?php echo $form->textField($otziv,'['.$otziv->id.']rating',array('class'=>'input-small','disabled'=>'disabled')); ?>	
              </td>
              <td>
				<?php echo $form->textField($otziv,'['.$otziv->id.']correction',array('class'=>'input-small')); ?>	
              </td>
              
              <td>
				<?php echo ($otziv->correctedRating); ?>	
              </td>
              <td>
				<?php echo $form->dropDownList($otziv,'['.$otziv->id.']rating_change',array('none'=>'Без изменений','up'=>'Повысился','down'=>'Упал')); ?>
              </td>
            </tr>
			
            <? endforeach ?>
          </tbody>
        </table>
		<div class="form-actions">
			<?php echo CHtml::submitButton(Yii::t('app', 'Сохранить корректировку'),array('class'=>'btn')); ?>
		</div>
    </div>
</div>
<?php $this->endWidget(); ?>
