<?php
$this->breadcrumbs=array(
	'Blocks'=>array(Yii::t('app', 'index')),
	Yii::t('app', 'Manage'),
);

$this->menu=array(
		array('label'=>Yii::t('app',
				'List Block'), 'url'=>array('index')),
		array('label'=>Yii::t('app', 'Create Block'),
				'url'=>array('create')),
			);


		?>

<h1> Управление блоками</h1>

<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Текстовые блоки</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Содержимое</th>
              <th>Опции</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($model as $otziv): ?>
            <tr>
              <td><?= $otziv->en_name ?></td>
              <td><?= htmlspecialchars($otziv->text) ?></td>
              <td>
              	<nobr><a class="btn btn-info" href="/block/update/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a>
              	</nobr>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
    </div>
</div>