<? $dates = Yii::app()->db->createCommand()
		    ->select("DISTINCT DATE_FORMAT(datepublish, '%Y-%m') as together")->order('datepublish DESC')
		    ->from('real_news')->group('together')->query();;
		    
		$year_keys = array();
		$month_keys = array();
		    
		foreach($dates as $date1) {
			$date1 = split('-', $date1['together']);
			
			$year_keys[] = $date1[0];
			$month_keys[$date1[0]][] = (int)$date1[1];

		    
	    }
	    
	    $year_keys = array_unique($year_keys);
	    
	$months_title = array('','Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь');
	
		$selected_year = Yii::app()->request->getParam('y');
		$selected_month = Yii::app()->request->getParam('m');
	?>
<div>
    <div id="accordion" class="news__accordion-custom">
    	<? foreach($year_keys as $year): ?>   	
        <h3>
            Новости за <?= $year ?> год
            <span class="news__accordion-custom-icon icon icon-news-accordion-arrow-up"></span>
        </h3>

        <div>
            <div class="row">
                <div class="col-xs-6">
                    <ul class="news-page__accordion-month-list-left">
                    	<? $i = 0 ?>
                    	<? foreach($month_keys[$year] as $month): ?>
	                    	<? if($i == 0) { ?>
	                        <li class="news-page__accordion-month-list-item <?= ((int)$year == (int)$selected_year && (int)$month == (int)$selected_month) ? 'active' : '' ?>"><a
	                                href="/news/?y=<?= $year ?>&m=<?= $month ?>"><?= $months_title[$month] ?></a></li> 
	                        <?	$i = 1; 
	                        } else {
		                        $i = 0;
	                        } ?>
                        <? endforeach ?>                                                                                          
                    </ul>
                </div>
                <div class="col-xs-6">
                    <ul class="news-page__accordion-month-list-right">
                    	<? $i = 0 ?>
                    	<? foreach($month_keys[$year] as $month): ?>
	                    	<? if($i == 1) { ?>
	                        <li class="news-page__accordion-month-list-item <?= ((int)$year == (int)$selected_year && (int)$month == (int)$selected_month) ? 'active' : '' ?>"><a
	                                href="/news/?y=<?= $year ?>&m=<?= $month ?>"><?= $months_title[$month] ?></a></li> 
	                        <?	$i = 0; 
	                        } else {
		                        $i = 1;
	                        } ?>
                        <? endforeach ?>                              
                    </ul>
                </div>
            </div>
        </div>
        <? endforeach ?>
    </div>
</div>