<?php

header("Content-Type: text/xml");
header("Expires: Thu, 19 Feb 1998 13:24:18 GMT");
header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Cache-Control: post-check=0,pre-check=0");
header("Cache-Control: max-age=0");
header("Pragma: no-cache");
?>
<?
	$city = City::model()->findAll();
	$citylist = Array();
	foreach($city as $item) {
		$citylist[$item->id] = $item->name;
	}	
	
?>
<?php echo '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL ?>
<realty-feed xmlns="http://webmaster.yandex.ru/schemas/feed/realty/2010-06">
  <generation-date><?= date('c'); ?></generation-date>
    <?php foreach ($items as $item): ?>
    <? if($item->type == 'commercial' || $item->seller_phone == '') continue; ?>
    <offer internal-id="<?= $item->id ?>">
	    <?
			switch($item->type) {
				case 'flat': $living = 'жилая'; $type_string = 'квартира'; break;
				case 'land': $living = 'жилая'; $type_string =  'участок'; break;
			//	case 'commercial': $living = 'жилая'; $type_string =  'коммерческой недвижимости'; break;
				case 'new': $living = 'жилая'; $type_string =  'квартира'; break;
				case 'house': $living = 'жилая'; $type_string =  'дом'; break;
			}
			
			switch($item->subtype) {
				case 'sale': $subtype_string = 'продажа'; break;
				case 'rent': $subtype_string =  'аренда'; break;
			}
		
		?>

        <type><?= $subtype_string ?></type>
        <property-type><?= $living ?></property-type>
        <category><?= $type_string ?></category>

        <url><?= $host ?><?php echo $item->getViewUrl(); ?></url>
        <creation-date><?php echo date(DATE_W3C, strtotime($item->create_time)); ?></creation-date>   
        <? $item->update_time = date('c'); ?>
        <last-update-date><?php echo date(DATE_W3C, strtotime($item->update_time)); ?></last-update-date>       
        <location>
                <country>Россия</country>
                <region>Красноярский край</region>
                <district><?= $item->district_title->name ?></district>
	            <locality-name><?= $citylist[$item->city] ?></locality-name>
	            <address><?= $item->address_street ?></address>
        </location>
        
        <sales-agent>
            <phone><?= $item->seller_phone ?></phone>
            <? if($item->seller_email) { ?><email><?= $item->seller_email ?></email><? } ?>
            <name><?= $item->seller_name ?></name>
        </sales-agent>
    </offer>
    <?php endforeach; ?>
</realty-feed>