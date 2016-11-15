<div class="news-page-article">
	<? if($model->photo): ?>
        <a href="<?= $model->getViewURL() ?>">
            <div class="news__img" style="background-image: url('<?= $model->photo ?>')"></div>
        </a>
    <? endif ?>
    <div class="news-page-article-desc-wrapper">
        <div class="meta">
            <p class="tag"><a href="<?= $model->category_url ?>"><?= $model->category ?></a></p>
            <p class=""><?= $model->getDateString() ?></p>
        </div>
        <a href="<?= $model->getViewURL() ?>" class="news-page-article-title">
            <p ><?= $model->title ?></p>
        </a>
        <p class="news-page-desc"><?= strip_tags($model->additional) ?></p>
    </div>
</div>