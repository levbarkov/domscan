<? $specials = Estate::model()->findAllByAttributes(array('special'=>true,'sold'=>false,'city'=>$this->city_id) , array('order'=>'rand()', 'limit'=>'1')); ?>
<? foreach($specials as $special): ?>
    <div class="special-col">
        <div class="search__map-list-item search__map-list-item-pluse control-over-map">
            <div class="search__map-list-item-special">
                <div class="search__map-list-item-special-text"></div>
            </div>
            <img class="img img-responsive search__map-list-item-img" src="<?= $special->image ?>" alt="<?= $special->title ?>"/>
            <div class="search__map-list-item-text-wrapper">
                <div class="search__map-list-item-text">
                    <p class="search__map-list-item-cost"><?= number_format($special->cost, 0, ",", " ") ?>
                        <span class="search__map-list-item-cost-value"><? if($special->subtype == 'sale'): ?>руб.<? else: ?>р/мес.<? endif ?></span>
                    </p>
                    <a href="/<?= $special->type ?>/<?= $special->id ?>-<?= $special->slug ?>" class="search__map-list-item-address">
                        <?= $special->title ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
<? endforeach; ?>