<? $MenuItems = unserialize($Menu->value); ?>
<div class="bottom-link-group">
	<? if(!$last): ?>
    	<p class="links-col-title links-col-caption"><?= $Menu->title ?></p>       
    <? endif ?>                  
    <? foreach($MenuItems as $item): ?>
    	<? if($item['title'] && $item['url']) { ?>
        <a href="<?= $item['url'] ?>">
            <p class="bottom-link"><?= $item['title'] ?></p>
        </a>                            
        <? } ?>
        <? if($item['title'] && $item['url'] && $item['text']) { ?>
        <p class="bottom-link bottom-link-text"><?= $item['text'] ?></p>  <br>                         
        <? } ?>                           
    <? endforeach ?> 
</div>