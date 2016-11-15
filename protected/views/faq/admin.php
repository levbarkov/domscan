
<h1> Управление вопросами-ответами</h1>


<a href="/faq/create" class="btn btn-warning"><i class="icon-plus icon-white"></i> Добавить раздел</a>



<? $i=0; ?>                      
<? foreach($model as $item): ?>
	<? if($i % 2 == 0) echo '<div class="row-fluid">' ?>
	<div class="span6">
        <!-- block -->
        <div class="block">
            <div class="navbar navbar-inner block-header">
                <div class="muted pull-left"><?= $item->title ?></div>
            </div>
            <div class="block-content collapse in">
                <div class="span12">                                    	
                	<a class="btn btn-info" href="/faq/update/<?= $item->id ?>"><i class="icon-pencil icon-white"></i> Редактировать</a>
                	<? if(!count($item->items)): ?><a class="btn btn-danger" href="/faq/delete/<?= $item->id ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')" style="float:right"><i class="icon-remove icon-white"></i> Удалить</a><? endif ?>
					<h4><?= $item->title ?></h4>
					<br>
                	<a class="btn btn-warning" href="/faq/createItem/?parent=<?= $item->id ?>"><i class="icon-book icon-white"></i> Добавить запись</a>

					<? if($item->items && count($item->items) > 0): ?>
					<table class="table table-striped">
		              <thead>
		                <tr>
		                  <th>Имя</th>
		                  <th>Опции</th>
		                </tr>
		              </thead>
		              <tbody>
		              	<? foreach($item->items as $otziv): ?>
		                <tr>
		                  <td><?= $otziv->title ?></td>		                 
		                  <td>
		                  	<nobr><a class="btn btn-info" href="/faq/updateItem/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a>
			                <a class="btn btn-danger" href="/faq/deleteItem/<?= $otziv->id ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')"><i class="icon-remove icon-white"></i></a></nobr>
		                  </td>
		                </tr>
		                <? endforeach ?>
		              </tbody>
		            </table>
					<? endif  ?>


                </div>
            </div>
        </div>
        <!-- /block -->
    </div>
    
	<? if($i % 2 != 0):
		 	echo '</div>';
		 elseif($i == count($model)-1):
		 	echo '</div>';
		endif; 
	?>
<? $i++; ?>
<? endforeach ?>
