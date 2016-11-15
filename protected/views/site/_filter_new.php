<?

$base_m=10000;

$max_new_price = Estate::model()->findByAttributes(array('type'=>'new','city'=>$city_id),array('order'=>'cost DESC'));


if($max_new_price)
	$max_new_price = $base_m*(ceil((int)$max_new_price->cost/$base_m));
else
	$max_new_price = 9000000;
	

	
	
$min_new_price = Estate::model()->cache(3600)->findByAttributes(array('type'=>'new','city'=>$city_id),array('order'=>'cost ASC'));
if($min_new_price)
	$min_new_price = $base_m*(floor((int)$min_new_price->cost/$base_m));
else
	$min_new_price = 10000;
	
if($min_new_price == $max_new_price) {
	$min_new_price = $min_new_price - 10000;
	$max_new_price = $max_new_price + 10000;
}

$base_m=10;


$max_new_square = Estate::model()->cache(3600)->findByAttributes(array('type'=>'new','city'=>$city_id),array('order'=>'square DESC'));
if($max_new_square)
	$max_new_square = $base_m*(ceil((int)$max_new_square->square/$base_m));
else
	$max_new_square = 300;
	
	
$min_new_square = Estate::model()->cache(3600)->findByAttributes(array('type'=>'new','city'=>$city_id),array('order'=>'square ASC'));
if($min_new_square)
	$min_new_square = $base_m*(floor((int)$min_new_square->square/$base_m));
else
	$min_new_square = 0;
	
if($min_new_square == $max_new_square) {
	$min_new_square = $max_new_square - 10;
	$max_new_square = $min_new_square + 10;
}


?><h3 ng-click="vm.selectBuildingType('new')" data-building-type='new'>
                <span class="icon icon-filter-menu-apartments search__filter-header-icon"></span>
                Новостройки
                <span class="search__filter-header-arrow icon icon-filter-arrow-up"></span>
            </h3>

            <div>
             	<div class="search__filter-element">
                    <label class="search__filter-element-title">Район:</label>

                    <select selector multiple="multiple" name="" filter-field="district" type-of-building="new">
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
                         filter-field="rooms" type-of-building="new">
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
                    <input slider value="<?= $min_new_price ?>;<?= $max_new_price ?>" range="<?= $min_new_price ?>;<?= $max_new_price ?>" postfix="р" filter-field="price"
                           type-of-building="new"/>
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
                    <input slider value="<?= $min_new_square ?>;<?= $max_new_square ?>" range="<?= $min_new_square ?>;<?= $max_new_square ?>" postfix="кв.м." filter-field="square"
                           type-of-building="new"/>
                </div>
                
                <div class="search__btn-filter-more">
                     <span class="search__btn-filter-more-link">
	                    Расширенный поиск
	                </span>
			    </div>
			    <div  class="search__more">
			    
			    
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Статус:</label>
			
			            <div toggle class="search__toggle-element" values="В наличии:in_stock;Проданные:sold"
			                 filter-field="status" type-of-building="new">
			            </div>
			        </div>
			        
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Фото:</label>
			
			            <div toggle class="search__toggle-element" values="С фото:with;Без фото:without"
			                 filter-field="photo" type-of-building="new">
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
			            <input slider value="0;300" range="0;295" postfix="кв.м." filter-field="square-live"
			                   type-of-building="new"/>
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
			                 filter-field="balcony" type-of-building="new">
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
			                 filter-field="sanuzel" type-of-building="new">
			            </div>
			        </div>
			
			        <div class="search__filter-element">
			            <label class="search__filter-element-title">Застройщики:</label>
			
			            <select selector multiple="multiple" name="" filter-field="builder" type-of-building="new">
			                <option selected value="any">Любой</option>
							<? $plan = Builder::model()->findAll();
				                       if($plan && count($plan) > 0) {
				                       		foreach($plan as $district) {
				                       			?><option value="<?= $district->en_title ?>"><?= $district->title ?></option><?
				                       		}
									   } ?>
			            </select>
			        </div>
			        <? /* ?>
				        <div class="search__filter-element">
			            <label class="search__filter-element-title">Планировка:</label>
			
			            <select selector multiple="multiple" name="" filter-field="plan" type-of-building="new">
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
			
			            <select selector multiple="multiple"  name="" filter-field="material" type-of-building="new">
			                <option selected value="any">Любой</option>
							<? $materials = OptionList::model()->findAllByAttributes(array('en_parent_name'=>'material'));
				                       if($materials && count($materials) > 0) {
				                       		foreach($materials as $district) {
				                       			?><option value="<?= $district->en_option_name ?>"><?= $district->value ?></option><?
				                       		}
									   } ?>
			            </select>
			        </div><? */ ?>
			
			    </div>

            </div>