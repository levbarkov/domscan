<?

$base_m=10000;

//echo $city_id;
$max_flat_price = Estate::model()->cache(3600)->findByAttributes(array('type'=>'flat','city'=>$city_id),array('order'=>'cost DESC'));
if($max_flat_price)
	$max_flat_price = $base_m*(ceil((int)$max_flat_price->cost/$base_m));
else
	$max_flat_price = 9000000;
	
	
$min_flat_price = Estate::model()->cache(3600)->findByAttributes(array('type'=>'flat','city'=>$city_id),array('order'=>'cost ASC'));
if($min_flat_price)
	$min_flat_price = $base_m*(floor((int)$min_flat_price->cost/$base_m));
else
	$min_flat_price = 10000;
	
if($min_flat_price == $max_flat_price) {
	$min_flat_price = $min_flat_price - 10000;
	$max_flat_price = $max_flat_price + 10000;
}


$base_m=10;

$max_flat_square = Estate::model()->cache(3600)->findByAttributes(array('type'=>'flat','city'=>$city_id),array('order'=>'square DESC'));
if($max_flat_square)
	$max_flat_square = $base_m*(ceil((int)$max_flat_square->square/$base_m));
else
	$max_flat_square = 300;
	
	
$min_flat_square = Estate::model()->cache(3600)->findByAttributes(array('type'=>'flat','city'=>$city_id),array('order'=>'square ASC'));
if($min_flat_square)
	$min_flat_square = $base_m*(floor((int)$min_flat_square->square/$base_m));
else
	$min_flat_square = 0;
	
if($min_flat_square == $max_flat_square) {
	$min_flat_square = $min_flat_square - 10;
	$max_flat_square = $max_flat_square + 10;
}

$base_m=10;

$max_flat_square_living = Estate::model()->cache(3600)->findByAttributes(array('type'=>'flat','city'=>$city_id),array('order'=>'square_living DESC'));
if($max_flat_square_living)
	$max_flat_square_living = $base_m*(ceil((int)$max_flat_square_living->square_living/$base_m));
else
	$max_flat_square_living = 300;
	
	
$min_flat_square_living = Estate::model()->cache(3600)->findByAttributes(array('type'=>'flat','city'=>$city_id),array('order'=>'square_living ASC'));
if($min_flat_square_living)
	$min_flat_square_living = $base_m*(floor((int)$min_flat_square_living->square_living/$base_m));
else
	$min_flat_square_living = 0;
	
if($min_flat_square_living == $max_flat_square_living) {
	$min_flat_square_living = $min_flat_square_living - 10;
	$max_flat_square_living = $max_flat_square_living + 10;
}



?>
			<h3 ng-click="vm.selectBuildingType('flat')" data-building-type='flat'>
                <span class="icon icon-filter-menu-flat search__filter-header-icon"></span>
                Квартиры
                <span class="search__filter-header-arrow icon icon-filter-arrow-up"></span>
            </h3>

            <div>
                <div class="search__filter-element">
                    <label class="search__filter-element-title">Район:</label>

                    <select selector multiple="multiple" name="" filter-field="district" type-of-building="flat">
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
                    <label class="search__filter-element-title">Количество комнат:</label>

                    <div toggle class="search__toggle-element" values="1:1;2:2;3:3;4:4;5+:5,6,7"
                         filter-field="rooms" type-of-building="flat">
                    </div>
                </div>
                
				
                <div class="search__filter-element">
                    <label class="search__filter-element-title">Цена:</label>

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
                           type-of-building="flat"/>
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
                    <input slider value="<?= $min_flat_square ?>;<?= $max_flat_square ?>" range="<?= $min_flat_square ?>;<?= $max_flat_square ?>" postfix="кв.м." filter-field="square"
                           type-of-building="flat"/>
                </div>
                
                <div class="search__btn-filter-more">
                     <span class="search__btn-filter-more-link">
                    Расширенный поиск
                </span>
			    </div>
			    <div  class="search__more">
			    	<div class="search__filter-element">
			            <label class="search__filter-element-title">Статус:</label>
			
			            <div toggle class="search__toggle-element" values="В наличии:in_stock;Проданные:sold;"
			                 filter-field="status" type-of-building="flat">
			            </div>
			        </div>
			        
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Фото:</label>
			
			            <div toggle class="search__toggle-element" values="С фото:with;Без фото:without"
			                 filter-field="photo" type-of-building="flat">
			            </div>
			        </div>
			        
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Обьём жилой площади:</label>
			
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
			            <input slider value="<?= $min_flat_square_living ?>;<?= $max_flat_square_living ?>" range="<?= $min_flat_square_living ?>;<?= $max_flat_square_living ?>" postfix="кв.м." filter-field="square-live"
			                   type-of-building="flat"/>
			        </div>
			        
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Наличие балкона:</label><br/>
						<? $plan = OptionList::model()->findAllByAttributes(array('en_parent_name'=>'balcony'));
						$sanuzel_values = array();
				                       if($plan && count($plan) > 0) {
				                       		foreach($plan as $district) {
				                       			$sanuzel_values[] = $district->value.':'.$district->en_option_name;
				                       		}
									   } 
									   $sanuzel_values = implode(';',$sanuzel_values);
									   ?>
			            <div toggle class="search__toggle-element" values="<?= $sanuzel_values ?>"
			                 filter-field="balcony" type-of-building="flat">
			            </div>
			        </div>
			
			
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Наличие санузла:</label><br/>
						<? $plan = OptionList::model()->findAllByAttributes(array('en_parent_name'=>'sanuzel'));
						$sanuzel_values = array();
				                       if($plan && count($plan) > 0) {
				                       		foreach($plan as $district) {
				                       			$sanuzel_values[] = $district->value.':'.$district->en_option_name;
				                       		}
									   } 
									   $sanuzel_values = implode(';',$sanuzel_values);
									   ?>
			            <div toggle class="search__toggle-element" values="<?= $sanuzel_values ?>"
			                 filter-field="sanuzel" type-of-building="flat">
			            </div>
			        </div>
			
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Планировка:</label>
			
			            <select selector multiple="multiple" name="" filter-field="plan" type-of-building="flat">
			                <option selected value="any">Любая</option>
							<? $plan = OptionList::model()->findAllByAttributes(array('en_parent_name'=>'plan'));
				                       if($plan && count($plan) > 0) {
				                       		foreach($plan as $district) {
				                       			?><option value="<?= $district->en_option_name ?>"><?= $district->value ?></option><?
				                       		}
									   } ?>
			            </select>
			        </div>
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Этаж:</label>
			
			            <select selector multiple="multiple" name="" filter-field="floor" type-of-building="new">
			                <option selected value="any">Любой</option>
			                <option value="1-4">От 1 до 4</option>
			                <option value="4-7">От 4 до 7</option>
			                <option value="7-27">От 7 и выше</option>
			            </select>
			        </div>
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Материал стен:</label>
			
			            <select selector multiple="multiple"  name="" filter-field="material" type-of-building="flat">
			                <option selected value="any">Любой</option>
							<? $materials = OptionList::model()->findAllByAttributes(array('en_parent_name'=>'material'));
				                       if($materials && count($materials) > 0) {
				                       		foreach($materials as $district) {
				                       			?><option value="<?= $district->en_option_name ?>"><?= $district->value ?></option><?
				                       		}
									   } ?>
			            </select>
			        </div>
			
			    </div>
                
                
            </div>