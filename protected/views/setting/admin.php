
<h1> Управление настройками</h1>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Настройки</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Описание</th>
              <th>Значение</th>
              <th>Опции</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($model as $otziv): ?>
            <tr>
              <td><?= $otziv->name ?></td>
              <td><?= $otziv->info ?></td>
              <td><?= $otziv->value ?></td>
              <td>
              	<nobr><a class="btn btn-info" href="/setting/update/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a></nobr>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
    </div>
</div>

<h1> Управление списком банков</h1>
<a href="/setting/createbank" class="btn btn-warning"><i class="icon-plus icon-white"></i> Добавить банк</a>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Банки</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Ссылка</th>
              <th>Картинка</th>
              <th>Опции</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($banks as $otziv): ?>
            <tr>
              <td><?= $otziv->title ?></td>
              <td><?= $otziv->url ?></td>
              <td><img src="<?= $otziv->image ?>"></td>
              <td>
              	<nobr><a class="btn btn-info" href="/setting/updatebank/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a></nobr>
              	<a class="btn btn-danger" href="/setting/deletebank/<?= $otziv->id ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')"><i class="icon-remove icon-white"></i></a>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
    </div>
</div>



<h1> Управление меню</h1>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Меню</div>
    </div>
    <div class="block-content collapse in">
    	<div class="alert">Здесь настраивается содержание блоков меню.</div>
    	<table class="table table-striped">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Опции</th>
            </tr>
          </thead>
          <tbody>
          	<? foreach($menu as $otziv): ?>
            <tr>
              <td><?= $otziv->title ?></td>
              <td>
              	<nobr><a class="btn btn-info" href="/setting/updatemenu/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a></nobr>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
    </div>
</div>


<h1> Управление опциями</h1>

<a href="/option/create" class="btn btn-warning"><i class="icon-plus icon-white"></i> Добавить опцию</a>



<? $i=0; ?>                      
<? foreach($options_model as $item): ?>
	<? if($i % 2 == 0) echo '<div class="row-fluid">' ?>
	<div class="span6">
        <!-- block -->
        <div class="block">
            <div class="navbar navbar-inner block-header">
                <div class="muted pull-left"><?= $item->en_name ?></div>
            </div>
            <div class="block-content collapse in">
                <div class="span12">                                    	
                	<a class="btn btn-info" href="/option/update/<?= $item->id ?>"><i class="icon-pencil icon-white"></i> Редактировать</a>
                	<? if(count($item->options) < 1): ?><a class="btn btn-danger" href="/option/delete/<?= $item->id ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')" style="float:right"><i class="icon-remove icon-white"></i> Удалить</a><? endif ?>
					<h4><?= $item->en_name ?></h4>
					<p><?= $item->value ?></p>
					<br>
                	<a class="btn btn-warning" href="/optionvalue/create/?parent=<?= $item->en_name ?>"><i class="icon-book icon-white"></i> Добавить значение опции</a>

					<?  if($item->options && count($item->options) > 0): ?>
					<table class="table table-striped">
		              <thead>
		                <tr>
		                  <th>Имя</th>
		                  <th>Значение</th>
		                  <th>Опции</th>
		                </tr>
		              </thead>
		              <tbody>
		              	<? foreach($item->options as $otziv): ?>
		                <tr>
		                  <td><?= $otziv->en_option_name ?></td>	
		                  <td><?= $otziv->value ?></td>		                 
		                  <td>
		                  	<nobr><a class="btn btn-info" href="/optionvalue/update/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a>
			                <a class="btn btn-danger" href="/optionvalue/delete/<?= $otziv->id ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')"><i class="icon-remove icon-white"></i></a></nobr>
		                  </td>
		                </tr>
		                <? endforeach ?>
		              </tbody>
		            </table>
					<? endif ?>


                </div>
            </div>
        </div>
        <!-- /block -->
    </div>
    
	<? if($i % 2 != 0):
		 	echo '</div>';
		 elseif($i == count($options_model)-1):
		 	echo '</div>';
		endif; 
	?>
<? $i++; ?>
<? endforeach ?>
