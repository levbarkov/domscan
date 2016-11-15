
<h1> Управление гайдами</h1>

<a href="/guides/create" class="btn btn-warning"><i class="icon-plus icon-white"></i> Добавить гайд</a>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Гайды</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Описание</th>
              <th>Опции</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($model as $otziv): ?>
            <tr>
              <td><?= $otziv->title ?></td>
              <td><?= $otziv->datepublish ?></td>
              <td>
              	<nobr><a class="btn btn-info" href="/guides/update/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a>
              	<a class="btn btn-danger" href="/guides/delete/<?= $otziv->id ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')"><i class="icon-remove icon-white"></i></a></nobr>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
    </div>
</div>


