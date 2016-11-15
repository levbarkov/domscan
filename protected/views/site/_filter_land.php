<?

$base_m=10000;

//echo $city_id;
$max_flat_price = Estate::model()->cache(3600)->findByAttributes(array('type'=>'land','city'=>$city_id),array('order'=>'cost DESC'));
if($max_flat_price)
	$max_flat_price = $base_m*(ceil((int)$max_flat_price->cost/$base_m));
else
	$max_flat_price = 9000000;
	
	
$min_flat_price = Estate::model()->cache(3600)->findByAttributes(array('type'=>'land','city'=>$city_id),array('order'=>'cost ASC'));
if($min_flat_price)
	$min_flat_price = $base_m*(floor((int)$min_flat_price->cost/$base_m));
else
	$min_flat_price = 10000;
	
if($min_flat_price == $max_flat_price) {
	$min_flat_price = $min_flat_price - 10000;
	$max_flat_price = $max_flat_price + 10000;
}


$base_m=10;

$max_flat_square = Estate::model()->cache(3600)->findByAttributes(array('type'=>'land','city'=>$city_id),array('order'=>'square DESC'));
if($max_flat_square)
	$max_flat_square = $base_m*(ceil((int)$max_flat_square->square/$base_m));
else
	$max_flat_square = 300;
	
	
$min_flat_square = Estate::model()->cache(3600)->findByAttributes(array('type'=>'land','city'=>$city_id),array('order'=>'square ASC'));
if($min_flat_square)
	$min_flat_square = $base_m*(floor((int)$min_flat_square->square/$base_m));
else
	$min_flat_square = 0;
	
if($min_flat_square == $max_flat_square) {
	$min_flat_square = $min_flat_square - 10;
	$max_flat_square = $max_flat_square + 10;
}

$base_m=10;

$max_flat_square_living = Estate::model()->cache(3600)->findByAttributes(array('type'=>'land','city'=>$city_id),array('order'=>'square_living DESC'));
if($max_flat_square_living)
	$max_flat_square_living = $base_m*(ceil((int)$max_flat_square_living->square_living/$base_m));
else
	$max_flat_square_living = 300;
	
	
$min_flat_square_living = Estate::model()->cache(3600)->findByAttributes(array('type'=>'land','city'=>$city_id),array('order'=>'square_living ASC'));
if($min_flat_square_living)
	$min_flat_square_living = $base_m*(floor((int)$min_flat_square_living->square_living/$base_m));
else
	$min_flat_square_living = 0;
	
if($min_flat_square_living == $max_flat_square_living) {
	$min_flat_square_living = $min_flat_square_living - 10;
	$max_flat_square_living = $max_flat_square_living + 10;
}



?>

			<h3 ng-click="vm.selectBuildingType('land')" data-building-type='land'>
                <span class="icon icon-filter-menu-excavation-sites search__filter-header-icon"></span>
                Земельные участки
                <span class="search__filter-header-arrow icon icon-filter-arrow-up"></span>
            </h3>

            <div>
            
            
                <div class="search__filter-element">
                    <label class="search__filter-element-title">Район:</label>

                    <select selector multiple="multiple" name="" filter-field="district" type-of-building="land">
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
                           type-of-building="land"/>
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
                           type-of-building="land"/>
                </div>

			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Статус:</label>
			
			            <div toggle class="search__toggle-element" values="В наличии:in_stock;Проданные:sold;"
			                 filter-field="status" type-of-building="land">
			            </div>
			        </div>
			        
			        
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Фото:</label>
			
			            <div toggle class="search__toggle-element" values="С фото:with;Без фото:without"
			                 filter-field="photo" type-of-building="land">
			            </div>
			        </div>
            </div>