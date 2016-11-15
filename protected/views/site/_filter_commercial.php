<?

$base_m=10000;

//echo $city_id;
$max_flat_price = Estate::model()->cache(3600)->findByAttributes(array('type'=>'commercial','city'=>$city_id),array('order'=>'cost DESC'));
if($max_flat_price)
	$max_flat_price = $base_m*(ceil((int)$max_flat_price->cost/$base_m));
else
	$max_flat_price = 9000000;
	
	
$min_flat_price = Estate::model()->cache(3600)->findByAttributes(array('type'=>'commercial','city'=>$city_id),array('order'=>'cost ASC'));
if($min_flat_price)
	$min_flat_price = $base_m*(floor((int)$min_flat_price->cost/$base_m));
else
	$min_flat_price = 10000;
	
if($min_flat_price == $max_flat_price) {
	$min_flat_price = $min_flat_price - 10000;
	$max_flat_price = $max_flat_price + 10000;
}


if($min_flat_price < 0)
	$min_flat_price = 0;

?>
<h3 ng-click="vm.selectBuildingType('commercial')" data-building-type='commercial'>
                <span class="icon icon-filter-menu-commercial search__filter-header-icon"></span>
                Комерческая недвижимость
                <span class="search__filter-header-arrow icon icon-filter-arrow-up"></span>
            </h3>

            <div>
       
                <div class="search__filter-element">
                    <label class="search__filter-element-title">Район:</label>

                    <select selector multiple="multiple" name="" filter-field="district" type-of-building="commercial">
                        <option selected value="any">Все районы</option>
						<? $cities = City::model()->findAllByAttributes(); ?>
	              		<? foreach($cities as $city): ?>
				  			<optgroup>	
				  			<? $values = array(); ?>
				  					  			
				  			<? //foreach($city->districts as $district): ?>
				  				<? //$values[] = $district->id ?>
				  			<? //endforeach; ?>
				  				<? //$values2 = implode(',', $values) ?>
				  			<option class="boldgroup" value="city-<?= $city->id ?>"><b><?= $city->name ?></b></option>
				  			<? foreach($city->districts as $district): ?>				  				
				  				<option value="<?= $district->id ?>"><?= $district->name ?></option>
				  			<? endforeach; ?>
				  			</optgroup>
	              		<? endforeach; ?>
                    </select>
                    <i style="color:gray; font-size:10px;">Можно выбрать несколько</i>
                </div>

				
                <div class="search__filter-element">
                    <label class="search__filter-element-title">Стоимость за месяц:</label>

                    <div class="search__filter-element-slider-input-wrapper">
                        <div class="search__filter-element-slider-input-text">
                            от:
                        </div>
                        <input class="search__filter-element-slider-input before" type="text"/>

                        <div class="search__filter-element-slider-input-text">
                            до:
                        </div>
                        <input class="search__filter-element-slider-input after" after-value type="text"/>
                    </div>
                    <input slider value="<?= $min_flat_price ?>;<?= $max_flat_price ?>" range="<?= $min_flat_price ?>;<?= $max_flat_price ?>" postfix="р" filter-field="price"
                           type-of-building="commercial"/>
                </div>

                <div class="search__filter-element">
                    <label class="search__filter-element-title">Площадь:</label>

                    <div class="search__filter-element-slider-input-wrapper">
                        <div class="search__filter-element-slider-input-text">
                            от:
                        </div>
                        <input class="search__filter-element-slider-input before" type="text"/>

                        <div class="search__filter-element-slider-input-text">
                            до:
                        </div>
                        <input class="search__filter-element-slider-input after" after-value type="text"/>
                    </div>
                    <input slider value="10;300" range="10;295" postfix="кв.м." filter-field="square"
                           type-of-building="commercial"/>
                </div>
                
                 <div class="search__filter-element">
                    <label class="search__filter-element-title">Тип объекта:</label>

                    <select selector multiple="multiple" name="" filter-field="commercial_type" type-of-building="commercial">
                        <option selected value="any">Не важно</option>
                        <? $materials = OptionList::model()->cache(300)->findAllByAttributes(array('en_parent_name'=>'commercial_type'));
                       if($materials && count($materials) > 0) {
                       		foreach($materials as $district) {
                       			?><option value="<?= $district->en_option_name ?>"><?= $district->value ?></option><?
                       		}
					   } ?>
                    </select>
                </div>

                <div class="search__filter-element">
                    <label class="search__filter-element-title">Тип бизнеса:</label>

                    <select selector multiple="multiple" name="" filter-field="commercial_business" type-of-building="commercial">
                        <option selected value="any">Не важно</option>
                        <? $materials = OptionList::model()->cache(300)->findAllByAttributes(array('en_parent_name'=>'commercial_business'));
                       if($materials && count($materials) > 0) {
                       		foreach($materials as $district) {
                       			?><option value="<?= $district->en_option_name ?>"><?= $district->value ?></option><?
                       		}
					   } ?>
                    </select>
                </div>
			    
			    	<div class="search__filter-element">
			            <label class="search__filter-element-title">Статус:</label>
			
			            <div toggle class="search__toggle-element" values="В наличии:in_stock;Проданные:sold;"
			                 filter-field="status" type-of-building="commercial">
			            </div>
			        </div>
			        
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Фото:</label>
			
			            <div toggle class="search__toggle-element" values="С фото:with;Без фото:without"
			                 filter-field="photo" type-of-building="commercial">
			            </div>
			        </div>
            </div>