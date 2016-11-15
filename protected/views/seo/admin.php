
<h1> Управление SEO-блоками</h1>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">SEO-блоки</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Описание</th>
              <th>Title</th>
              <th>Опции</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($model as $otziv): ?>
            <tr>
              <td><?= $otziv->en_name ?></td>
              <td><?= htmlspecialchars(mb_substr($otziv->text,0,200,'UTF-8')); ?></td>
              <td><?= $otziv->title ?></td>
              <td>
              	<nobr><a class="btn btn-info" href="/seo/update/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a></nobr>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
    </div>
</div>