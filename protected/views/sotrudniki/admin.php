<?php
$this->breadcrumbs=array(
	'Employees'=>array(Yii::t('app', 'index')),
	Yii::t('app', 'Manage'),
);

$this->menu=array(
		array('label'=>Yii::t('app',
				'List Employee'), 'url'=>array('index')),
		array('label'=>Yii::t('app', 'Create Employee'),
				'url'=>array('create')),
			);

		
		?>

<h1> Управление сотрудниками</h1>

<a href="/sotrudniki/create" class="btn btn-warning"><i class="icon-plus icon-white"></i> Добавить сотрудника</a>



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
                	<a class="btn btn-info" href="/sotrudniki/update/<?= $item->id ?>"><i class="icon-pencil icon-white"></i> Редактировать</a>
                	<a class="btn btn-danger" href="/sotrudniki/delete/<?= $item->id ?>" onclick="return confirm('Вы точно хотите удалить? Эту операцию отменить нельзя!')" style="float:right"><i class="icon-remove icon-white"></i> Удалить</a>
					<h4><?= $item->name ?></h4>
					<img src="<?= $item->photo ?>" style="max-height:200px;">
					<p><?= $item->title ?></p>
					
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
