<?
	$months = array('','января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря');
	$months_title = array('','Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь');

	$this->setPageTitle('Новости компании '.$model->title);
?>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
                <div class="type-page__title-wrapper">
                    <h1>Новости компании <a href="<?= $model->getViewURL() ?>"><?= $model->title ?></a></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-3">
                <div class="row">
                    <div class="special-col col-xs-12">
                        <?= $this->renderPartial('_special',array('specials'=>$specials)); ?>
                    </div>
                </div>
            </div>
            <div class="col-xs-9 news">
            
            	<? foreach($loadNews as $news): ?>
                <div class="news__wrapper">

                    <div class="news__img-wrapper">
                    	<? if($news->photo): ?>
	                        <a href="/news/<?= $news->id ?>-<?= $news->en_title ?>">
	                            <div class="news__img" style="background-image: url('<?= $news->photo ?>')"></div>
	                        </a>
                        <? endif ?>
                        <span class="news__date"><?= $news->getDateString() ?></span>
                    </div>


                    <div class="news__content-wrapper">
                        <h2 class="news__content-title">
                            <a href="/news/<?= $news->id ?>-<?= $news->en_title ?>"><?= $news->title ?></a>
                        </h2>
                        <p><?= strip_tags($news->additional) ?></p>
                        <span class="news__content-more"><a href="/news/<?= $news->id ?>-<?= $news->en_title ?>">Читать</a></span>
                    </div>

                </div>
                <? endforeach ?>
            </div>
        </div>
    </div>
</div>
