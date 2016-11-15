<div class="building <?= $model->special ? 'best-price' : '' ?>">
	<div class="little-icon-fav">
	</div>
	<div class="little-icons">
		<?if($model->rassrochka) { ?>
			<div class="little-icon-wrapper popup-rasr" popup popup-text="В рассрочку" popup-position="top right">
				<img src="/img/prosent.png">
			</div>
		<? } ?>
		<?if($model->mortgage) { ?>
			<div class="little-icon-wrapper popup-ipo" popup popup-text="В ипотеку" popup-position="top right">
				<img src="/img/credit.png">
			</div>
		<? } ?>
		<?if($model->matcapital) { ?>
			<div class="little-icon-wrapper popup-mother" popup popup-text="Материнский капитал" popup-position="top right">
				<img src="/img/babycapital.png">
			</div>
		<? } ?>
	</div>
	<a href="<?= $model->getViewURL() ?>"><img src="<?= $model->getMainImage() ?>" /></a>
	<? if($model->special): ?>
    <div class="building-best-price">
        <p>Специальная цена</p>
    </div>
	<? endif ?>
	<div class="building-meta">
		<p class="building-title"><a href="<?= $model->getViewURL() ?>"><?= $model->title ?></a></p>
		<p class="building-meta-info">Адрес: <span><?= $model->address ?></span></p>
		<p class="building-meta-info">Этаж: <span><?= $model->floor ?>/<?= $model->top_floor ?></span></p>
		<p class="building-meta-info">Площадь: <span><?= $model->square ?>м<sup>2</sup></span></p>
		<p class="building-price"><?= number_format($model->cost, 0, ",", " ") ?> руб.</p>
		<p class="building-more"><a href="<?= $model->getViewURL() ?>"><span>Смотреть подробнее</span> →</a></p>
	</div>
</div>