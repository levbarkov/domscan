
<h1> Управление меню</h1>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Меню</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Заголовок</th>
              <th>Опции</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($model as $otziv): ?>
            <tr>
              <td><?= $otziv->name ?></td>
              <td><?= htmlspecialchars(mb_substr($otziv->title,0,200,'UTF-8')); ?></td>
              <td>
              	<nobr><a class="btn btn-info" href="/menu/update/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a></nobr>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
    </div>
</div>