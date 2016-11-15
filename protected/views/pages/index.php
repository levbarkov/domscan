<?
	$this->setPageTitle($model->title);
	if($model->seo_title)
		$this->setPageTitle($model->seo_title);
?>

<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
                <ol class="breadcrumb">
                    <li><a href="/">Главная</a></li>
                    <li class="active"><?= $model->title ?></li>
                </ol>
            </div>
            <div class="col-xs-12">
                <div class="type-page__title-wrapper">
                    <h1><?= $model->title ?><? if($this->checkEditablePermissions()): ?> <a href="/pages/update/<?= $model->id ?>">(редактировать)</a><? endif ?></h1>
                </div>

            </div>
        </div>
    </div>
    <div class="container-fluid">

        <div class="row">
            <div class="col-xs-3">
                <div class="row">
                <? foreach($specials as $item): ?>
                	<div class="special-col col-xs-12">
                        <div class="search__map-list-item">
                            <div class="search__map-list-item-special"></div>
                            <img class="img img-responsive search__map-list-item-img" src="<?= $item->image ?>" alt="<?= $item->title ?>">
                            <div class="search__map-list-item-text-wrapper">
                                <div class="search__map-list-item-text">
                                    <p class="search__map-list-item-cost"><?= number_format($item->cost, 0, ",", " ") ?>
                                        <span class="search__map-list-item-cost-value"><? if($item->subtype == 'sale'): ?>руб.<? else: ?>р/мес.<? endif ?></span>
                                    </p>
                                    <a href="/<?= $item->type ?>/<?= $item->id ?>-<?= $item->slug ?>" class="search__map-list-item-address">
                                        <?= $item->title ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                <? endforeach ?>           
				<? $this->renderPartial('//site/_banner_268',array('id'=>'simple-pages_sidebar-top_270-380','class'=>'footer-fix col-xs-12')); ?>
				<? $this->renderPartial('//site/_banner_268',array('id'=>'simple-pages_sidebar-middle_270-380','class'=>'footer-fix col-xs-12')); ?>
				<? $this->renderPartial('//site/_banner_268',array('id'=>'simple-pages_sidebar-bottom_270-180','class'=>'footer-fix col-xs-12')); ?>
                </div>
            </div>
            <div class="col-xs-9 type-page">
                <div class="type-page__wrapper">
					
					<?= $model->html ?>

				</div>
            </div>
        </div>
        <? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'simple-pages_bottom_1170-90','class'=>'footer-fix')); ?>       
    </div>
</div>
