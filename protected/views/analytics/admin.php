
<h1> Управление аналитикой</h1>

<a href="/analytics/create" class="btn btn-warning"><i class="icon-plus icon-white"></i> Добавить аналитику</a>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Аналитика</div>
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
              	<nobr><a class="btn btn-info" href="/analytics/update/<?= $otziv->id ?>"><i class="icon-pencil icon-white"></i></a>
              	<a class="btn btn-danger" href="/analytics/delete/<?= $otziv->id ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')"><i class="icon-remove icon-white"></i></a></nobr>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
        <div class="row" style="margin-left:0 !important;">
        	<div class="span6">
        		<div class="dataTables_info" id="example_info">Показ от <?= 15*$current_page-14 ?> до <?= (15*$current_page > $entries_count) ? $entries_count : 15*$current_page ?> из <?= $entries_count ?> элементов</div>
        	</div>
        	<div class="span6">
        		<div class="dataTables_paginate paging_bootstrap pagination" style="float:right;">
        			<ul>
        				<li class="prev disabled"><a href="#">← Назад</a></li>
        				<? for($i = 1; $i <= $page_count; $i++): ?>
        					<? 
	        					$assemble_link = '/analytics/admin/page/'.$i;        					
	        					$assemble_link = $assemble_link.'?'.$url;
        					?>
        					<li <? if($i == $current_page) echo 'class="active"' ?>><a href="<?= $assemble_link ?>"><?= $i ?></a></li>
        				<? endfor ?>
        				<li class="next disabled"><a href="#">Далее → </a></li>
        			</ul>
        		</div>
        	</div>
        </div>

    </div>
</div>


