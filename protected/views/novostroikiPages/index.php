<?
	$this->setPageTitle($model->title);
?>

<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
                <ol class="breadcrumb">
                    <li><a href="/">Главная</a></li>
                    <li class="active"><a href="/novostroiki/">Новостройки</a></li>
                    <li class="active"><a href="<?= $model->parent->pagesViewSelf() ?>"><?= $model->parent->title ?></a></li>
                    <? if($model->parent_page): ?><li class="active"><a href="<?= $model->parent_page->pageViewURL() ?>"><?= $model->parent_page->title ?></a></li><? endif ?>
                    <li class="active"><?= $model->title ?></li>
                </ol>
            </div>
            <div class="col-xs-12">
                <div class="type-page__title-wrapper">
                    <h1><?= $model->title ?><? if($this->checkEditablePermissions()): ?> <a href="<?= $model->pageEditURL() ?>">(редактировать)</a><? endif ?></h1>
                </div>

            </div>
        </div>
    </div>
    <div class="container-fluid">

        <div class="row">
            <div class="col-xs-3">
            
            		<? if($model->child_page): ?>
						<p><b>Список внутренних страниц:</b></p>
						<ul class="inside_pages_wrapper">
						<? foreach($model->child_page as $page): ?>
							<li><a href="<?= $page->pageViewURL() ?>"><?= $page->title ?></a></li>
						<? endforeach; ?>
						</ul>
					<? endif ?>
					
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
                </div>
                
                
                <?= $this->renderPartial('//site/_banner_268'); ?> 
            </div>
            <div class="col-xs-9 type-page">
                <div class="type-page__wrapper">
					
					<? //$model->html = str_replace('%20', ' ', $model->html) ?>
					<?= urldecode($model->html) ?>
					
					
				</div>
            </div>
        </div>
        
    </div>
</div>
