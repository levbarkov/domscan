<?
	
	switch($model->type) {
		case 'flat': $type_string = 'квартир'; break;
		case 'land': $type_string =  'земельных участков'; break;
		case 'commercial': $type_string =  'коммерческой недвижимости'; break;
		case 'new': $type_string =  'новостроек'; break;
		case 'house': $type_string =  'домов'; break;
	}
	
	switch($model->subtype) {
		case 'sale': $subtype_string = 'Продажа'; break;
		case 'rent': $subtype_string =  'Аренда'; break;
	}
	
?>
<img src="<?= dirname(Yii::app()->request->scriptFile) ?>/img/logo-pdf.png" alt="" width="500px">
<div style="width:100%;height:1px !important;padding:0 !important;margin:0;border-top:1px solid gray;"></div>
        <div class="col-xs-12" style="width:100%; background-color:white !important;">
          
            	<div class="property__title-wrapper">
                    Главная –
                    <?= $subtype_string ?> <?= $type_string ?> –
                    <?= $model->title ?>
                    <br>
                    
					<h1 class="property__title"><?= $subtype_string ?>: <?= $model->title ?></h1>
                    <? if($model->sold): ?><span class="property__title-sale active"></span><? endif ?>                 
					<div>ID объекта: <b><?= $model->id ?></b></div>
                </div>
                
                <div class="row" style="width:100%;">
                	<table style="width:100%;">
                		<tbody>
                			<tr style="width:100%;">
                				<td style="width:70%; vertical-align:top;">
				                    	<? foreach($model->attached_images as $image): ?>
				                    		<? if($image->main) $model->image = $image->uploaddir.$image->name; ?>
				                    	<? endforeach; ?>
			                          	<? if($model->image): ?>			                                
											<? $date = Yii::app()->easyImage->thumbOf(dirname(Yii::app()->request->scriptFile).$model->image, array('watermark' => array('watermark' => '/img/watermark-2.png', 'opacity' => 95)));
											
											 $date = str_replace('src="', 'style="width:900px;" src="'.dirname(Yii::app()->request->scriptFile), $date); 
											 echo $date; ?>    
			                            <? endif ?>  
				                        
				                        <table style="width:900px; background: #f2f8ff; padding: 10px 10px;">
					                        <tr>
						                        <td class="property__info-table-col-left">
		                                            
													<? foreach($firsthalfProperties as $table_item): ?>
		                                                <span style="width:25%; display:inline-block;"><?= $table_item['title'] ?></span> <b><?= $table_item['value'] ?></b><br>	                                            
		                                            <? endforeach ?>
		                                            
		                                   
						                        	
		                                        </td>
		                                        <td class="property__info-table-right" style="padding:0 0 0 10px;">
		                                            
													<? foreach($secondhalfProperties as $table_item): ?>
		                                                <span style="width:25%; display:inline-block;"><?= $table_item['title'] ?></span> <b><?= $table_item['value'] ?></b><br>	                                            
		                                            <? endforeach ?>
		                                        </td>
					                        </tr>
				                        </table>
                                        
				                        <p class="property__about">
				                            <?= $model->text ?>
				                        </p>
				                    
                				</td>
                				<td style="width:30%;">

									<div>
	
							
					                        <div class="property__alert">
					                            <div class="property__alert-rectangle"></div>
					                            <span class="property__alert-price"><?= number_format($model->cost, 0, ",", " ") ?> <? if($model->subtype == 'sale'): ?>руб.<? else: ?>р/мес.<? endif ?></span>
					                            <span class="property__alert-square"><?
					                            	$calculate_square_price = (int)$model->cost / (double)$model->square;
					                            	echo number_format($calculate_square_price, 0, ",", " ");
					                            ?> руб. за м&#178;</span>
					                        </div>
					                        <div class="property__veiws">
					                            Просмотрено <?= $model->views ?> раз
					                        </div>
					
											
											<div class="property__available">
												<? if($model->mortgage || $model->matcapital || $model->rassrochka): ?>
						                            <span class="property__available-title">
						                                Доступно:
						                            </span>
					                            <? endif ?>
					                            
												<? if($model->mortgage && $model->subtype == 'sale'): ?>
						                            <span class="property__available-mortgages">
						                                В ипотеку
						                            </span>
						                        <? endif ?>
												<? if($model->matcapital && $model->subtype == 'sale'): ?>
					                            <span class="property__available-parent">
					                                С материнским капиталом
					                            </span>
						                        <? endif ?>
												<? if($model->rassrochka && $model->subtype == 'sale'): ?>
					                            <span class="property__available-installment-plan">
					                                В рассрочку
					                            </span>
						                        <? endif ?>
					                        </div>
					
					
					
											<? if(mb_strlen($model->seller_phone) > 3 || mb_strlen($model->seller_email) > 3): ?>
					                        <span class="property__contacts-title">Обращайтесь по всем вопросам:</span>
					
								            <div class="property__contacts">
					                            <span class="icon-contacts property__contacts-icon"></span>
								                <span class="property__contacts-name"><?= $model->seller_name ?></span>
								
												<? if ($model->seller_phone): ?>
						                            <ul class="property__contacts-list-phone">
						                                <li class="property__contacts-list-phone-item">
						                                    <a href="tel:<?= $model->seller_phone ?>" class="property__contacts-list-phone-item-link">
						                                        <?= $model->seller_phone ?>
						                                    </a>
						                                </li>
						                            </ul>
					                            <? endif; ?>
					                            
												<? if ($model->seller_email): ?>
						                            <ul class="property__contacts-list-mail">
						                                <li class="property__contacts-list-mail-item">
						                                    <a href="mailto:<?= $model->seller_email ?>" class="property__contacts-list-mail-item-link">
						                                        <?= $model->seller_email ?>
						                                    </a>
						                                </li>
						                            </ul>
					                            <? endif; ?>
					                            
												<? if ($model->seller_additional): ?>
						                            <ul class="property__contacts-list-mail">
						                                <li class="property__contacts-list-mail-item">
						                                	<?= $model->seller_additional ?>	                                    
						                                </li>
						                            </ul>
					                            <? endif; ?>
					
								            </div>
											<? endif ?>
					
											<?
												$menu = Menu::model()->cache(60)->findByAttributes(array('name'=>'estate_menu'));
											 ?>
											<? if($menu): ?>
					                        <div class="property__help">
					                            <span class="property__help-title"><?= $menu->title ?></span>
					                            <ul class="property__help-list">
					                            <? foreach (unserialize($menu->value) as $key => $value) {
													foreach($value as $key2 => $item) {
														if ($key2 == 'url' && $item) {
															$page_name = StaticPage::model()->cache(3600)->findByAttributes(array('en_title'=>$item));
															?>
															<li class="property__help-list-item">
							                                    <a class="property__help-list-item-link" href="/<?= $item ?>"><?= $page_name->title ?></a>
							                                </li>									
															<?									
														}			
													}																		
												} ?>
					                            </ul>
					                        </div>
					                        <? endif ?>
					
					                    </div>
               
                				</td>
                			</tr>
                		</tbody>
                	</table>
                </div>
           

        </div>
