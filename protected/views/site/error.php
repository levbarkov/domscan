<?php
/* @var $this SiteController */
/* @var $error array */

$this->pageTitle=Yii::app()->name . ' - Error';
$this->breadcrumbs=array(
	'Error',
);
?>

<div class="content">
<div class="container-fluid">

<div class="row">
    <div class="col-xs-6 col-xs-offset-3 page-404">
    
		<? if($code == 404): ?>
        <div class="page-404__wrapper">

            <img src="/img/404.png" alt="#"/>

            <h2>Страница не найдена</h2>

            <p>
                Возможно страница была удалена, или ее и вовсе не существовало.
                Попробуйте поискать на <a href="/">главной</a> или оцените наши <a href="/special/">спецпредложения.</a>
            </p>
        </div>
		<? else: ?>
        <div class="page-404__wrapper">

            <img src="/img/404.png" alt="#"/>

            
			<h2>Ошибка <?php echo $code; ?></h2>

            <p>
				<?php echo CHtml::encode($message); ?>
            </p>
        </div>
        <? endif ?>
    </div>
</div>


</div>
</div>