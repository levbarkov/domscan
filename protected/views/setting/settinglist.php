<h1> Управление свойствами объектов</h1>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Меню</div>
    </div>
    <div class="block-content collapse in">
    	<div class="alert">В данной форме настраиваются какие элементы можно редактировать у конкретных типов объектов. К примеру, у Квартир можно выводить этажность, количество комнат, а у Коммерческой недвижимости - нет.</div>
    	
        <h3>Обязательные поля</h3>
    	<table class="table table-striped">
          <thead>
            <tr>
              <th width="30%">Имя</th>
              <th width="10%">Код</th>
              <th width="10%">Родительское</th>
              <th width="20%">Сортировка</th>
              <th width="20%">Тип</th>
              <th>Опции</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($fields_main as $otziv): ?>
            <tr>
              <td><?= $otziv->name ?></td>
              <td><?= $otziv->slug ?></td>
              <td><?= $otziv->parent ?></td>
              <td><?= $otziv->sorting ?></td>
              <td><?= $otziv->method ?></td>
              <td>
              	<nobr><a class="btn btn-info" href="/setting/updateobjectsnew/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a></nobr>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
        
        <h3>Необязательные поля</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th width="30%">Имя</th>
              <th width="10%">Код</th>
              <th width="10%">Родительское</th>
              <th width="20%">Сортировка</th>
              <th width="20%">Тип</th>
              <th>Опции</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($fields_sub as $otziv): ?>
            <tr>
              <td><?= $otziv->name ?></td>
              <td><?= $otziv->slug ?></td>
              <td><?= $otziv->parent ?></td>
              <td><?= $otziv->sorting ?></td>
              <td><?= $otziv->method ?></td>
              <td>
              	<nobr><a class="btn btn-info" href="/setting/updateobjectsnew/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a></nobr>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>

    </div>
</div>