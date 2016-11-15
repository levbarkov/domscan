<?
	
	$months_title = array('','Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь');

	$selected_year = (int)Yii::app()->request->getParam('y');
	$selected_month = (int)Yii::app()->request->getParam('m');
	
	if($selected_month && $selected_year):
		$this->setPageTitle($title.' '.$months_title[$selected_month].' '.$selected_year);
        $additional_params = '&y='.$selected_year.'&m='.$selected_month;
		
     endif
?>
		<div class="content">
			<div class="container-fluid">
			  	<ol class="breadcrumb">
		            <li><a href="/">Главная</a></li>
		            <li><a href="<?= $pagination_url ?>"><?= $title ?></a></li>
		        </ol>
			</div>
		</div>
    
    
        <div class="three-building-content-wrapper">
        <div id="content" class="three-building-content content-footer">
            <p id="content-title" class="three-building-content-title">                
            	<? if($selected_month && $selected_year): ?>
                    <h1><?= $title ?> <?= $months_title[$selected_month] ?> <?= $selected_year ?></h1>
                <? else: ?>
                    <h1><?= $title ?></h1>
                <? endif ?>
            </p>
            
            <? foreach($news_list as $news): ?>
            	<?= $this->renderPartial('//news/_preview',array('model'=>$news)); ?>
            <? endforeach ?>
                   
                   
            <div id="list-control-wrapper" class="news-page-list-control">
		        <div id="list-control">
		            <ul>
			            <? $pagination = PaginationHelper::GetPaginationArray($page_count, $current_page); ?>
						
						<? foreach($pagination as $item): ?>
							<? 
								$assemble_link = $pagination_url.'?page='.$item['value'].$additional_params;  
							?>
							<? if($item['value'] != false) { ?>
								<li><a <? if($item['active']) echo 'class="active-link"' ?> href="<?= $assemble_link ?>"><?= $item['text'] ?></a></li>
							<? } else { ?>
								<li><span><?= $item['text'] ?></span></li>					
							<? } ?>
						<? endforeach ?>
		            </ul>
		        </div>
		    </div> 
             
        </div>


        <div class="builder-sidebar">
            <ul class="sidebar-group">
                <li><a href="/news/">Новости рынка</a></li>
                <li><a href="/analytics/">Аналитика</a></li>
                <li><a href="/reviews/">Обзоры</a></li>
                <li><a href="/guides/">Гайды</a></li>
            </ul>
               
            <? if($show_menu): ?>        
            	<?= $this->renderPartial('//news/_menu'); ?>
            <? endif; ?>
            <?= $this->renderPartial('//news/_special'); ?>
            
            
			<? $this->renderPartial('//site/_banner_268',array('id'=>'all-news-section_sidebar-top_270-380','class'=>'footer-fix')); ?>
			<? $this->renderPartial('//site/_banner_268',array('id'=>'all-news-section_sidebar-middle_270-380','class'=>'footer-fix')); ?>
			<? $this->renderPartial('//site/_banner_268',array('id'=>'all-news-section_sidebar-bottom_270-180','class'=>'footer-fix')); ?>
                
                        
        </div>
    </div>
	<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'all-news-section_bottom_1170-90','class'=>'footer-fix')); ?> 
    
    
