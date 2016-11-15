
<h1> Управление списком городов</h1>


<a href="/cities/create" class="btn btn-warning"><i class="icon-plus icon-white"></i> Добавить город</a>



<? $i=0; ?>                      
<? foreach($model as $item): ?>
	<? if($i % 2 == 0) echo '<div class="row-fluid">' ?>
	<div class="span6">
        <!-- block -->
        <div class="block">
            <div class="navbar navbar-inner block-header">
                <div class="muted pull-left"><?= $item->name ?></div>
            </div>
            <div class="block-content collapse in">
                <div class="span12">                                    	
                	<a class="btn btn-info" href="/cities/update/<?= $item->id ?>"><i class="icon-pencil icon-white"></i> Редактировать</a>
                	<a class="btn btn-danger" href="/cities/delete/<?= $item->id ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')" style="float:right"><i class="icon-remove icon-white"></i> Удалить</a>
					<h4><?= $item->name ?></h4>
					<br>
                	<a class="btn btn-warning" href="/cities/createItem/?parent=<?= $item->id ?>"><i class="icon-book icon-white"></i> Добавить район</a>

					<? if($item->districts && count($item->districts) > 0): ?>
					<table class="table table-striped">
		              <thead>
		                <tr>
		                  <th>Имя</th>
		                  <th>Опции</th>
		                </tr>
		              </thead>
		              <tbody>
		              	<? foreach($item->districts as $otziv): ?>
		                <tr>
		                  <td><?= $otziv->name ?></td>		                 
		                  <td>
		                  	<nobr><a class="btn btn-info" href="/cities/updateItem/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a>
			                <a class="btn btn-danger" href="/cities/deleteItem/<?= $otziv->id ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')"><i class="icon-remove icon-white"></i></a></nobr>
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
