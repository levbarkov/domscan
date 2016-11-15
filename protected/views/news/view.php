<?
$this->setPageTitle($model->title);

if(isset($model->seo_title))
	if($model->seo_title)
		$this->setPageTitle($model->seo_title);
?>

<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12"> 
            	<ol class="breadcrumb">
			        <li><a href="/">Главная</a></li>
			        <li><a href="<?= $pagination_url ?>"><?= $title ?></a></li>
			        <li class="active"><?= $model->title ?></li>
			    </ol>
                <div class="type-page__title-wrapper">
                    <h1><?= $model->title ?></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-9 type-page">
                <div class="type-page__wrapper">
                    <h2 class="news-page__title">
                        <span class="news-page__title-date"><?= $model->getDateString() ?></span>
                    </h2>

                    <?= $model->html ?>
                    <span class="news-page__line"></span>
                </div>
            </div>
            <div class="col-xs-3 builder-sidebar">
                <div class="row">
                    <div class="col-xs-12">
               
			            <? if($show_menu): ?>        
			            	<?= $this->renderPartial('//news/_menu'); ?>
			            <? endif; ?>
			            <?= $this->renderPartial('//news/_special'); ?>
						<? $this->renderPartial('//site/_banner_268',array('id'=>'all-news-pages_sidebar-top_270-380','class'=>'footer-fix')); ?>
						<? $this->renderPartial('//site/_banner_268',array('id'=>'all-news-pages_sidebar-middle_270-380','class'=>'footer-fix')); ?>
						<? $this->renderPartial('//site/_banner_268',array('id'=>'all-news-pages_sidebar-bottom_270-180','class'=>'footer-fix')); ?>
                    </div>
                </div>
            </div>

			<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'all-news-pages_bottom_1170-90','class'=>'footer-fix')); ?> 
        </div>
    </div>
</div>
