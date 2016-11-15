<div class="guide">
    <a href="<?= $model->getViewURL(); ?>"><img src="<?= $model->photo ?>"></a>
    <p class="articles-title"><a href="<?= $model->getViewURL(); ?>"><?= $model->title ?></a></p>
    <div class="meta">
        <p class="tag"><a href="<?= $model->category_url; ?>"><?= $model->category; ?></a></p>
        <p class="date"><?= $model->getDateString(); ?></p>
    </div>
    <p class="guide-desc" style="width:100%;"><?= htmlspecialchars($model->additional) ?></p>
</div>