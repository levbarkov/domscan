<?



//house

$base_m = 10;

$max_house_square_land = Estate::model()->cache(3600)->findByAttributes(array('type'=>'house','city'=>$city_id),array('order'=>'square_land DESC'));
if($max_house_square_land)
	$max_house_square_land = $base_m*(ceil((int)$max_house_square_land->square_land/$base_m));
else
	$max_house_square_land = 400;
	
	
$min_house_square_land = Estate::model()->cache(3600)->findByAttributes(array('type'=>'house','city'=>$city_id),array('order'=>'square_land ASC'));
if($min_house_square_land)
	$min_house_square_land = $base_m*(floor((int)$min_house_square_land->square_land/$base_m));
else
	$min_house_square_land = 0;
	
if($min_house_square_land == $max_house_square_land) {
	$min_house_square_land = $min_house_square_land - 10;
	$max_house_square_land = $max_house_square_land + 10;
}


$max_house_square_living = Estate::model()->cache(3600)->findByAttributes(array('type'=>'house','city'=>$city_id),array('order'=>'square_living DESC'));
if($max_house_square_living)
	$max_house_square_living = $base_m*(ceil((int)$max_house_square_living->square_living/$base_m));
else
	$max_house_square_living = 400;
	
	
$min_house_square_living = Estate::model()->cache(3600)->findByAttributes(array('type'=>'house','city'=>$city_id),array('order'=>'square_living ASC'));
if($min_house_square_living)
	$min_house_square_living = $base_m*(floor((int)$min_house_square_living->square_living/$base_m));
else
	$min_house_square_living = 0;
	
if($min_house_square_living == $max_house_square_living) {
	$min_house_square_living = $min_house_square_living - 10;
	$max_house_square_living = $max_house_square_living + 10;
}



$max_house_square_kitchen = Estate::model()->cache(3600)->findByAttributes(array('type'=>'house','city'=>$city_id),array('order'=>'square_kitchen DESC'));
if($max_house_square_kitchen)
	$max_house_square_kitchen = $base_m*(ceil((int)$max_house_square_kitchen->square_kitchen/$base_m));
else
	$max_house_square_kitchen = 400;
	
	
$min_house_square_kitchen = Estate::model()->cache(3600)->findByAttributes(array('type'=>'house','city'=>$city_id),array('order'=>'square_kitchen ASC'));
if($min_house_square_kitchen)
	$min_house_square_kitchen = $base_m*(floor((int)$min_house_square_kitchen->square_kitchen/$base_m));
else
	$min_house_square_kitchen = 0;
	
if($min_house_square_kitchen == $max_house_square_kitchen) {
	$min_house_square_kitchen = $min_house_square_kitchen - 10;
	$max_house_square_kitchen = $max_house_square_kitchen + 10;
}



$max_house_square = Estate::model()->findByAttributes(array('type'=>'house','city'=>$city_id),array('order'=>'square DESC'));
if($max_house_square)
	$max_house_square = $base_m*(ceil((int)$max_house_square->square/$base_m));
else
	$max_house_square = 400;
	
	
$min_house_square = Estate::model()->findByAttributes(array('type'=>'house','city'=>$city_id),array('order'=>'square_land ASC'));
if($min_house_square)
	$min_house_square = $base_m*(floor((int)$min_house_square->square_land/$base_m));
else
	$min_house_square = 0;
	
if($min_house_square == $max_house_square) {
	$min_house_square = $min_house_square - 10;
	$max_house_square = $max_house_square + 10;
}


?>
			<h3 ng-click="vm.selectBuildingType('house')" data-building-type='house'>
                <span class="icon icon-filter-menu-house search__filter-header-icon"></span>
                Дома и коттеджи
                <span class="search__filter-header-arrow icon icon-filter-arrow-up"></span>
            </h3>

            <div>
            	<div class="search__filter-element">
                    <label class="search__filter-element-title">Район:</label>

                    <select selector multiple="multiple" name="" filter-field="district" type-of-building="house">
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
                         filter-field="rooms" type-of-building="house">
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
                    <input slider value="10000;10000000" range="10;9970000" postfix="р" filter-field="price"
                           type-of-building="house"/>
                </div>

                <div class="search__filter-element">
                    <label class="search__filter-element-title">Площадь дома:</label>

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
                    <input slider value="<?= $min_house_square ?>;<?= $max_house_square ?>" range="<?= $min_house_square ?>;<?= $max_house_square ?>" postfix="кв.м." filter-field="square"
                           type-of-building="house"/>
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
			                 filter-field="status" type-of-building="house">
			            </div>
			        </div>
			        
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Фото:</label>
			
			            <div toggle class="search__toggle-element" values="С фото:with;Без фото:without"
			                 filter-field="photo" type-of-building="house">
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
			            <input slider value="<?= $min_house_square_living ?>;<?= $max_house_square_living ?>" range="<?= $min_house_square_living ?>;<?= $max_house_square_living ?>" postfix="кв.м." filter-field="square-live"
			                   type-of-building="house"/>
			        </div>
			      
			
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Обьём кухонной площади:</label>
			
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
			            <input slider value="<?= $min_house_square_kitchen ?>;<?= $max_house_square_kitchen ?>" range="<?= $min_house_square_kitchen ?>;<?= $max_house_square_kitchen ?>" postfix="кв.м." filter-field="square-kitchen"
			                   type-of-building="house"/>
			        </div>
			      
			
			
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Общая площадь участка:</label>
			
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
			            <input slider value="<?= $min_house_square_land ?>;<?= $max_house_square_land ?>" range="<?= $min_house_square_land ?>;<?= $max_house_square_land ?>" postfix="кв.м." filter-field="square-house-land"
			                   type-of-building="house"/>
			        </div>
			      
		
			
		
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Материал стен:</label>
			
			            <select selector multiple="multiple"  name="" filter-field="material" type-of-building="house">
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