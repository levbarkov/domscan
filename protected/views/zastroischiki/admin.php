<?php
$this->breadcrumbs=array(
	'Settings'=>array(Yii::t('app', 'index')),
	Yii::t('app', 'Manage'),
);


		?>

<h1> Управление застройщиками</h1>

<a href="/zastroischiki/admin/create" class="btn btn-warning"><i class="icon-pencil icon-white"></i> Добавить застройщика</a>

<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Застройщики</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
	          <th>ID</th>
              <th>Имя</th>
              <th>Slug</th>
              <th>Опции</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($model as $otziv): ?>
            <tr>
              <td><?= $otziv->id ?></td>
              <td><?= $otziv->title ?></td>
              <td><a href="<?= $otziv->getViewURL() ?>"><?= $otziv->getViewURL() ?></a></td>
              <td>
              	<nobr><a class="btn btn-info" href="<?= $otziv->getUpdateURL() ?>"><i class="icon-pencil icon-white"></i> Редактировать</a></a></nobr>
              	<? if($this->checkEditablePermissions(array('admin'))): ?><a class="btn btn-danger" href="<?= $otziv->getDeleteURL() ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')"><i class="icon-remove icon-white"></i></a><? endif ?>
              </td>
            </tr>
			<tr>
				<td></td>
            	<td colspan="2" style="text-align:right;">
            		<? foreach($otziv->attached_pages as $page): ?>
						<a href="<?= $page->pageViewURL() ?>" target="_blank"><?= $page->title; ?></a>, 
	            	
	            	<? endforeach; ?>
            	</td>
            	<td>
	            	<nobr><a class="btn btn-success" title="Список страниц" href="<?= $otziv->pagesAdminURL() ?>"><i class="icon-minus icon-white"></i> Список страниц</a></a></nobr>
	            	<nobr><a class="btn btn-warning" title="Добавить страницу" href="<?= $otziv->pagesCreateURL() ?>"><i class="icon-plus icon-white"></i></a></nobr>

            	</td>
            
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
    </div>
</div>