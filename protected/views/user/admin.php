<?php
$this->breadcrumbs=array(
	'Settings'=>array(Yii::t('app', 'index')),
	Yii::t('app', 'Manage'),
);


		?>

<h1> Управление пользователями</h1>

<?
	//$record = AdminUser::model()->findByAttributes(array('username'=>Yii::app()->user->id));
	//echo $record->role;
?>
<a href="/user/create" class="btn btn-warning"><i class="icon-pencil icon-white"></i> Добавить пользователя</a>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Пользователи</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Роль</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($model as $user): ?>
            <tr>
              <td><?= $user->username ?></td>
              <td><?= $user->role ?></td>
              <td>
              	<nobr><a class="btn btn-info" href="/user/update/<?= $user->id ?>"><i class="icon-pencil icon-white"></i></a></nobr>
              	<? if($user->username != 'admin'): ?><nobr><a class="btn btn-warning" href="/user/delete/<?= $user->id ?>"><i class="icon-remove icon-white"></i></a></nobr><? endif ?>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
    </div>
</div>