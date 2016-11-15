<script src="/bower_components/jquery-ui/jquery-ui.min.js"></script>
	
	
<h1> Управление слайдером на главной</h1>

<a href="/slider/create" class="btn btn-warning"><i class="icon-plus icon-white"></i> Добавить картинку в слайдер</a>
<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Слайды</div>
    </div>
    <div class="block-content collapse in">
    	<table class="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Имя</th>
              <th>Описание</th>
              <th>Активность</th>
              <th>Опции</th>
            </tr>
          </thead>
          <tbody id="slides-grid">
          	<? foreach($model as $otziv): ?>
            <tr identity="ui-sortable-<?= $otziv->id ?>">
              <td><a class="btn btn-info btn-handle"><i class="icon-move icon-white"></i></a></td>
              <td><?= $otziv->title ?></td>
              <td><?= $otziv->datepublish ?></td>
              <td><?= $otziv->active ?></td>
              <td>
              	<nobr><a class="btn btn-info" href="<?= $otziv->getUpdateURL() ?>"><i class="icon-pencil icon-white"></i></a>
              	<a class="btn btn-danger" href="/slider/delete/<?= $otziv->id ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')"><i class="icon-remove icon-white"></i></a></nobr>
              </td>
            </tr>
            <? endforeach ?>
          </tbody>
        </table>
    </div>
</div>


<script>

$(document).ready(function(){
        var fixHelper = function(e, ui) {
            ui.children().each(function() {
                $(this).width($(this).width());
            });
            return ui;
        };
        
		$('#slides-grid').sortable({
            forcePlaceholderSize: true,
            forceHelperSize: true,
            handle: '.btn-handle',
            items: 'tr',
            update : function () {
                serial = $('#slides-grid').sortable('serialize', {key: 'items[]', attribute: 'identity'});
                $.ajax({
                    'url': '<?= $this->createUrl('//slider/sort') ?>',
                    'type': 'post',
                    'data': serial,
                    'success': function(data){
                    },
                    'error': function(request, status, error){
                        alert('We are unable to set the sort order at this time.  Please try again in a few minutes.');
                    }
                });
            },
            helper: fixHelper
        }).disableSelection();
 });       
  </script>