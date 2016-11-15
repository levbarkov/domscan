<div class="building <?= $model->advertisement ? 'adding' : '' ?>">
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
	<? if($model->advertisement): ?>
	<div class="building-add">
		<p>Реклама</p>
	</div>
	<? endif ?>
    <a href="<?= $model->pagesViewSelf() ?>"><img src="<?= !$model->image ? '/img/no_photo.jpg' : $model->image ?>" /></a>
    <div class="building-meta">
        <p class="building-title"><a href="<?= $model->pagesViewSelf() ?>"><?= $model->title ?></a></p>
        <p class="building-meta-info">Адрес: <span><?= $model->address ?></span></p>
        <p class="building-meta-info">Квартиры на продажу: <span><?= $model->countFlatsToSale() ?></span></p>
        <p class="building-meta-info">Сдача: <span><?= $model->year ?></span></p>
        <p class="building-price"><? if($model->getSquarePrice()): ?> от <?= number_format($model->getSquarePrice(), 0, ",", " ") ?> руб./м<sup>2</sup><? else: ?>&nbsp;<? endif; ?></p>
        <p class="building-more"><a href="<?= $model->pagesViewSelf() ?>"><span>Смотреть подробнее</span> →</a></p>
    </div>
</div>
