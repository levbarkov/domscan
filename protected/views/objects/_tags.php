<?
	
	switch($model->type) {
		case 'flat': $type_string = 'вторичку'; $type_url = 'vtorichky'; break;
		case 'land': $type_string =  'земельных участков'; break;
		case 'commercial': $type_string =  'коммерческой недвижимости'; break;
		case 'new': $type_string =  'квартиру'; $type_url = 'kvartiry'; break;
		case 'house': $type_string =  'домов'; break;
	}
	
	switch($model->subtype) {
		case 'sale': $subtype_string = 'Купить'; $subtype_url = 'kupit'; break;
		case 'rent': $subtype_string =  'Снять'; $subtype_url = 'snyat'; break;
	}
	
	
	switch($model->rooms) {
		case 1: $rooms_string = 'однокомнатную'; $rooms_url = 'odnokomnatnyiy'; break;
		case 2: $rooms_string =  'двухкомнатную'; $rooms_url = 'dvukhkomnatnyiy';  break;
		case 3: $rooms_string = 'трехкомнатную'; $rooms_url = 'trexkomnatnyiy';  break;
		case 4: $rooms_string =  'четырёхкомнатную'; $rooms_url = 'chetyrexkomnatnyiy';  break;
		case 5: $rooms_string =  'пятикомнатную'; $rooms_url = 'pyatikomnatnyiy';  break;
	}
	
	
	if($model->cost > 0 && $model->cost <= 1500000) {
		$price_string = 'миллион';
		$url_string = 'million';
	}
	if($model->cost > 1500000 && $model->cost <= 2500000) {
		$price_string = '2 миллиона';
		$url_string = 'dva-milliona';
	}
	if($model->cost > 2500000 && $model->cost <= 3500000) {
		$price_string = '3 миллиона';
		$url_string = 'tri-milliona';
	}
	if($model->cost > 3500000 && $model->cost <= 6500000) {
		$price_string = '4 миллиона';
		$url_string = 'cnetyre-milliona';
	}
	
	
	$converter = ConverterHelper::GetTransliteration();
	$url_street = mb_strtolower($model->address_street, 'UTF-8');; 
	$url_street = trim($url_street);
	$url_street = strtr($url_street, $converter); 
	
	$district = District::model()->findByPk($model->district);
	
	
?>
<div id="footer-bg" class="hide_following">
    <div class="footer">
	    <h4>Смотрите другие популярные предложения недвижимости</h4>
        <div class="footer-state-wrapper">
        	 
            <div class="footer-state">
                <!--<p style="text-align: center;"><a href="/metki/<?= $subtype_url ?>-<?= $type_url ?>-<?= $rooms_url ?>-na-<?= $url_street ?>"><?= $subtype_string ?> <?= $type_string ?> <?= $rooms_string ?> на <?= $model->address_street ?></a></p>-->
                <p style="text-align: center;"><a href="/metki/<?= $subtype_url ?>-<?= $type_url ?>-<?= $rooms_url ?>-za-<?= $url_string ?>"><?= $subtype_string ?> <?= $type_string ?> <?= $rooms_string ?> за <?= $price_string ?></a></p>

            </div>
        </div>
        <div class="footer-state-wrapper">
        	 
            <div class="footer-state">
                <p style="text-align: center;"><a href="/metki/<?= $subtype_url ?>-<?= $type_url ?>-<?= $rooms_url ?>-v-<?= $district->en_title ?>"><?= $subtype_string ?> <?= $type_string ?> <?= $rooms_string ?> в <?= $district->name ?></a></p>
                
            </div>
                     
        </div>
    </div>
</div>