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
                    <h1><?= $model->title ?><? if($this->checkEditablePermissions()): ?> <a href="/pages/update/<?= $model->id ?>">(редактировать)</a><? endif ?></h1>
                </div>

            </div>
        </div>
    </div>
    <div class="container-fluid">

        <div class="row">

			<div class="col-xs-12 mortgages">
                <div class="mortgages__wrapper">
                    <div class="row">
                        <div class="col-xs-12">
                            <?= $model->html ?>

                            <div class="mortgages__partners">
                                <h2>Банки - партнеры</h2>
                                <ul class="mortgages__partners-list">
                                <? $banks = Bank::model()->findAll();
                                	foreach($banks as $bank): ?>
                                    <li class="mortgages__partners-list-item">
                                        <a href="<?= $bank->url ?>"><img class="mortgages__partners-list-item-img" src="<?= $bank->image ?>" alt="<?= $bank->title?>" title="<?= $bank->title?>"></a>
                                    </li>
                                <? endforeach; ?>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
