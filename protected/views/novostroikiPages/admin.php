<?php
$this->breadcrumbs=array(
	'Settings'=>array(Yii::t('app', 'index')),
	Yii::t('app', 'Manage'),
);


		?>

<h1>Управление страницами, прикрепленными к новостройке <br><a href="<?= $condo->pagesViewSelf(); ?>">#<?= $condo->id ?>: <?= $condo->title ?></a></h1>

<a href="<?= $condo->pagesCreateURL()?>" class="btn btn-warning"><i class="icon-pencil icon-white"></i> Добавить страницу</a>

<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Страницы</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
              <th style="max-width:200px">Имя</th>
              <th style="max-width:200px">Slug</th>
              <th>Опции</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($model as $otziv): ?>
            <tr>
              <td style="max-width:200px"><?= $otziv->title ?></td>
              <td style="max-width:200px;word-break: break-all;"><a href="<?= $otziv->pageViewURL() ?>"><?= $otziv->pageViewURL() ?></a></td>
              <td>
              	<nobr><a class="btn btn-info" href="<?= $otziv->pageEditURL() ?>"><i class="icon-pencil icon-white"></i></a></nobr>
              	<? if($this->checkEditablePermissions(array('admin'))): ?><a class="btn btn-danger" href="<?= $otziv->pageDeleteURL() ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')"><i class="icon-remove icon-white"></i></a><? endif ?>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
    </div>
</div>