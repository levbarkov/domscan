
    <div id="rating">
        <table width="1170px" align="center" cols="6">
            <caption>
                <h1 style="margin-top:25px;">Каталог застройщиков г.Красноярск, г.Сосновоборск</h1>
                <span id="rating-link-left-border"><a href="/about_rating/">О рейтинге</a></span>
            </caption>
            <caption id="rating-links">
            </caption>
            <tr>
                <th>Место</th>
                <th>Название</th>
                <th>Год основания</th>
                <th>Сдано объектов</th>
                <th>Объекты на этапе строительства</th>
                <th>Сдано кв.м</th>
                <th>кв.м на этапе строительства</th>
                <th>Сдано помещений</th>
                <th>Помещений на этапе строительства</th>
                <th>Рейтинг</th>
            </tr>
            <tr class="table-spacer"></tr>
            
            <? $i = 0; ?>
            <? foreach($model as $builder): ?>
            <tr>
                <td><? $i++; echo $i; ?></td>
                <td class="company-name"><a href="<?= $builder->getViewURL() ?>"><?= $builder->title ?></a></td>
                <td> <?= $builder->year ?></td>
                <td> <?= $builder->getFinishedObjectsCount() ?></td>
                <td> <?= $builder->getNonFinishedObjectsCount() ?></td>
                <td> <?= $builder->square_sdano ?></td>
                <td> <?= $builder->square_building ?></td>
                <td> <?= $builder->sdano_pomesch ?></td>
                <td> <?= $builder->building_pomesch ?></td>
                <td class="rating-num-<?= $builder->rating_change == "up" ? 'green' : '' ?><?= $builder->rating_change == 'down' ? 'red' : '' ?>"><?= $builder->correctedRating ?></td>
            </tr>
            <? endforeach ?>
         </table>
		<? $this->renderPartial('//site/_banner_1170-horizontal',array('id'=>'developers-section_bottom_1170-90','class'=>'footer-fix')); ?> 
    </div>