<? $this->setPageTitle('Вопрос - Ответ'); ?>
<div class="content">

<div class="container-fluid">
<div class="row">
<div class="col-xs-12">
                <ol class="breadcrumb">
                    <li><a href="/">Главная</a></li>
                    <li class="active">Вопросы и ответы</li>
                </ol>
            </div>
<div class="col-xs-12 faq">
<div class="faq__wrapper">
<div class="row">

<h3>Вопросы и ответы</h3>

<div class="col-xs-12">
<div class="row">
<div class="col-xs-9">

<? $categories = FaqCategory::model()->findAll(array('order'=>'sort ASC')); ?>

<? foreach($categories as $item): ?>

	<h4><?= $item->title ?></h4>
	
	<? foreach($item->items as $sub_item): ?>
	
	<div class="faq__spoiler">

        <span class="faq__spoiler-title">
            <?= $sub_item->title ?>
        </span>
	    <div class="faq__spoiler-item">
	        <p>
	            <?= $sub_item->text ?>
	        </p>
	        <span class="faq__spoiler-item-hide">Свернуть</span>
	    </div>
	</div>
	<? endforeach ?>

<? endforeach ?>
</div>
</div>
<div class="col-xs-3"></div>
</div>
</div>

</div>
</div>
</div>


</div>
</div>

