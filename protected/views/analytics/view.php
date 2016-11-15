<?
	$months = array('','января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря');
$this->setPageTitle($model->title);
?>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
                <ol class="breadcrumb">
                    <li><a href="/">Главная</a></li>
                    <li><a href="/analytics/">Аналитика</a></li>
                    <li class="active"><?= $model->title ?></li>
                </ol>
            </div>
            <div class="col-xs-12">
                <div class="type-page__title-wrapper">
                    <h1>Аналитика</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-3">
                <div class="row">
                    <div class="special-col col-xs-12">
                        <?= $this->renderPartial('_special'); ?>
                    </div>
                </div>
            </div>
            <div class="col-xs-9 news-page">
                <div class="news-page__wrapper">
                    <h2 class="news-page__title">
                        <a><?= $model->title ?></a>
                        <span class="news-page__title-date"><?= (int)date("d", strtotime($model->datepublish)) ?> <?= $months[(int)date("m", strtotime($model->datepublish))] ?> <?= date("Y", strtotime($model->datepublish)) ?></span>
                    </h2>

                    <?= $model->html ?>
                    <span class="news-page__line"></span>
                </div>
            </div>
        </div>
    </div>
</div>
