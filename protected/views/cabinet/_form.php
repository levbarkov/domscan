<div class="add-page__wrapper ">
<div class="add-page__sections-wrapper add-page__sections-wrapper-tabs">
    <table class="add-page__sections-table">
        <tr class="add-page__sections-table-row">

            <td class="add-page__sections-table-col-label">Раздел:</td>

            <td class="add-page__sections-table-col-content">

                <div class="add-page__sections-btn-wrapper">
                    <a class="add-page__sections-btn-link <?= ($model->type == 'flat') ? 'active' : '' ?>" href="?type=flat&subtype=<?= $model->subtype ?>">Квартиры</a>
                </div>
				
				<? if(!$this->checkUserIndeed()):?>
                <div class="add-page__sections-btn-wrapper">
                    <a class="add-page__sections-btn-link <?= ($model->type == 'new') ? 'active' : '' ?>" href="?type=new&subtype=<?= $model->subtype ?>">Новостройки</a>
                </div>
                <? endif; ?>

                <div class="add-page__sections-btn-wrapper">
                    <a class="add-page__sections-btn-link <?= ($model->type == 'house') ? 'active' : '' ?>" href="?type=house&subtype=<?= $model->subtype ?>">Дома и коттеджи</a>
                </div>

                <div class="add-page__sections-btn-wrapper">
                    <a class="add-page__sections-btn-link <?= ($model->type == 'commercial') ? 'active' : '' ?>" href="?type=commercial&subtype=<?= $model->subtype ?>">Коммерческая недвижимость</a>
                </div>

                <div class="add-page__sections-btn-wrapper">
                    <a class="add-page__sections-btn-link <?= ($model->type == 'land') ? 'active' : '' ?>" href="?type=land&subtype=<?= $model->subtype ?>">Земельные участки</a>
                </div>

            </td>
        </tr>
        <tr class="add-page__sections-table-row">

            <td class="add-page__sections-table-col-label">Тип:</td>

            <td class="add-page__sections-table-col-content">

                <div class="add-page__sections-btn-wrapper">
                    <a class="add-page__sections-btn-link <?= ($model->subtype == 'sale') ? 'active' : '' ?>" href="?type=<?= $model->type ?>&subtype=sale">Продажа</a>
                </div>

				<? if($model->type != 'new'): ?>
	                <div class="add-page__sections-btn-wrapper">
	                    <a class="add-page__sections-btn-link <?= ($model->subtype == 'rent') ? 'active' : '' ?>" href="?type=<?= $model->type ?>&subtype=rent">Аренда</a>
	                </div>
                <? endif ?>

            </td>
        </tr>

    </table>
</div>
<?php $form=$this->beginWidget('CActiveForm', array(
	'htmlOptions'=>array('enctype'=>'multipart/form-data', 'class'=>'form-horizontal'),
	'enableAjaxValidation'=>true,
)); ?>
	<?php echo $form->errorSummary($model,"Пожалуйста, исправьте следующие ошибки","",array('class'=>'alert alert-error')); ?>

    <?php echo $form->hiddenField($model,'subtype'); ?>
    <?php echo $form->hiddenField($model,'type'); ?>
    <div class="add-page__sections-wrapper">
    	<h3 class="add-page__sections-title">Основные данные об объекте (обязательно к заполнению)</h3>
        <table class="add-page__sections-table add-page__sections-table-data">
        
        <tr class="add-page__sections-table-row add-page__sections-table-row-data">
                <td class="add-page__sections-table-col-label">
                    Город:
                </td>
                <td class="add-page__sections-table-col-content">
		
                	<?php echo $form->dropDownList($model,'city',CHtml::listData(City::model()->findAll(), 'id', 'name'), array('class'=>'chosen-select-city','id'=>'city')); ?>
                	
                	<? $name = City::model()->findByAttributes(array('id'=>$model->city)); 
                		if($name)
                			$name = $name->name; ?>
					<?php echo $form->hiddenField($model,'citykladr', array('id'=>'citykladr','value'=>$name)); ?>
                </td>
            </tr>
            <tr class="add-page__sections-table-row add-page__sections-table-row-data">
                <td class="add-page__sections-table-col-label">
                    Район:
                </td>
                <td class="add-page__sections-table-col-content">
                	<? $criteria = new CDbCriteria();		
					$criteria->condition = "city_id = ".$model->city." ORDER BY name ASC";	
					$items_prepare = District::model()->findAll($criteria); ?>
                    <?php echo $form->dropDownList($model,'district',CHtml::listData($items_prepare, 'id', 'name'), array('class'=>'chosen-select-dist','id'=>'district')); ?>
                </td>
            </tr>
            <script src="/vendors/jquery-1.9.1.min.js"></script>
            
            <tr class="add-page__sections-table-row add-page__sections-table-row-data">
                <td class="add-page__sections-table-col-label">
                    Адрес:<br><span style="font-size:8px; color:gray;">(Строение и квартира не обязательны)</span>

                </td>
                <td class="add-page__sections-table-col-content">
                    <?php echo $form->textField($model,'address_street',array('class'=>'add-page__input input-address_street','style'=>'width:100%; margin-bottom:6px;	','id'=>'address_street','placeholder'=>'Только название улицы')); ?><br>
                    <span class="add-page__input-text add-page__input-text-area">Дом</span>
                    <?php echo $form->textField($model,'address_house',array('class'=>'add-page__input add-page__input-storey input-address_house','id'=>'address_house')); ?>
                    <? /* 
                    <span class="add-page__input-text add-page__input-text-area">Строение</span>
                    <?php echo $form->textField($model,'address_building',array('class'=>'add-page__input add-page__input-storey input-address_building','id'=>'address_building')); ?>
                    */ ?>
                    <span class="add-page__input-text add-page__input-text-area">Кв.</span>
                    <?php echo $form->textField($model,'address_flat',array('class'=>'add-page__input add-page__input-storey input-address_flat','id'=>'address_flat')); ?>
                    &nbsp;                     
                    <div class="tooltip" style="display: none;"></div>
                    <a style="margin-top:0px" id="get-coords" class="btn btn-default btn-search">Поиск по адресу</a>
                    
                </td>
            </tr>
            <tr class="add-page__sections-table-row add-page__sections-table-row-data">
                <td class="add-page__sections-table-col-label">
                    Карта:
                </td>
                <td class="add-page__sections-table-col-content">
                        <div class="map-search" id="map" style="width: 98%; height: 400px;">
			            </div>
			            			
						<?php echo $form->hiddenField($model,'location',array('class'=>'input-query','id'=>'location')); ?>
						<?php echo $form->hiddenField($model,'latitude',array('class'=>'input-lat','id'=>'address')); ?>
						<?php echo $form->hiddenField($model,'longitude',array('class'=>'input-long','id'=>'address')); ?> 
                </td>
            </tr>
        <? foreach($fields_main as $field): ?>
<tr class="add-page__sections-table-row add-page__sections-table-row-data">
	                <td class="add-page__sections-table-col-label">
	                    <?= $field->name; ?>
	                </td>
	                <? $fields_main_childs = EstateConfigNew::model()->findAllByAttributes(array('type_'.$model->type => true,'parent'=>$field->slug, 'block' => 'main'),array('order'=>'sorting ASC')); ?>
	                <td class="add-page__sections-table-col-content <? if($fields_main_childs): ?>row<? endif ?>">
	                	<? if($fields_main_childs): ?>
	                	<div class="col-xs-3">
		                    <span class="add-page__input-text add-page__input-text-area"><?= $field->prepend ?></span>
		                <? endif ?>
	                
	                	<? if($field->method == 'radio'): ?>
							<? if($field->linked) { ?>
								<? foreach(OptionList::model()->findAllByAttributes(array('en_parent_name'=>$field->linked),array('order'=>'value ASC')) as $linked ): ?>
				                    <input class="add-page__radio-btn" type="radio" name="Estate[<?= $field->slug ?>]" value="<?= $linked->en_option_name ?>" id="<?= $field->slug ?>-<?= $linked->en_option_name ?>" <?= $model[$field->slug] == $linked->en_option_name ? 'checked' : ''?>/>
				                    <label class="add-page__radio-btn-label" for="<?= $field->slug ?>-<?= $linked->en_option_name ?>"><?= $linked->value ?></label>
			                    <? endforeach ?>
		                    <? } else { ?>
				                    <input class="add-page__radio-btn" type="radio" name="Estate[<?= $field->slug ?>]" value="0" id="<?= $field->slug ?>-0" <?= $model[$field->slug] == 0 ? 'checked' : ''?>/>
				                    <label class="add-page__radio-btn-label" for="<?= $field->slug ?>-0">Нет</label>				                    
				                    <input class="add-page__radio-btn" type="radio" name="Estate[<?= $field->slug ?>]" value="1" id="<?= $field->slug ?>-1" <?= $model[$field->slug] == 1 ? 'checked' : ''?>/>
				                    <label class="add-page__radio-btn-label" for="<?= $field->slug ?>-1">Да</label>			                 
		                    <? }  ?>
		                <? elseif($field->method == 'dropdown'): ?>
							<?php echo $form->dropDownList($model,$field->slug,CHtml::listData(OptionList::model()->findAllByAttributes(array('en_parent_name'=>$field->linked),array('order'=>'value ASC')), 'en_option_name', 'value'), array('prompt'=>'-- Выберите значение --','id'=>$field->slug,'class'=>'add-page__dropdown')); ?>
						<? elseif($field->method == 'textarea'): ?>
							<?php echo $form->textArea($model,$field->slug,array('cols'=>30,'rows'=>7,'class'=>'add-page__data-textarea')); ?>
						<? else: ?>
	                		<?php echo $form->textField($model,$field->slug,array('class'=>'add-page__input '.$field->class, 'style'=>($field->slug == 'title')?'width:100%':'', 'maxlength'=>($field->slug == 'title')?'80':'255')); ?>
	                	<? endif ?>       	                	
                		<? if($fields_main_childs): ?>
                			<? if($field->append): ?>
                				<span class="add-page__contacts-span" style="margin:2px 0 0 55px"><?= $field->append ?></span>
                			<? endif ?> 
							</div>
						<? else: ?>		                 
                			<?= $field->append ?>
                		<? endif ?>					
						
						<? //все дочерние поля нужно в ту же строку, поэтому так. Дочерние могут быть только textField, так что всё норм. ?>
						<? foreach($fields_main_childs as $main_child): ?>
							<div class="col-xs-3">
			                    <span class="add-page__input-text add-page__input-text-area"><?= $main_child->prepend ?></span>					
								<?php echo $form->textField($model,$main_child->slug,array('class'=>'add-page__input '.$main_child->class)); ?>
                				<span class="add-page__contacts-span" style="margin:2px 0 0 55px"><?= $main_child->append ?></span>
							</div>
						<? endforeach ?>
	                </td>
	            </tr>
        <? endforeach ?>
        </table>
    </div>
    
    <div class="add-page__sections-wrapper">
        <div class="row">
            <div class="col-xs-12">
                <h3 class="add-page__sections-title">Контакты продавца</h3>
            </div>
            <div class="col-xs-4">
                <div class="add-page__contacts-data-wrapper">
                    <label class="add-page__contacts-label">Ваше имя:</label>
                    <?php echo $form->textField($model,'seller_name',array('class'=>'add-page__input add-page__input-contacts','style'=>'width:90%')); ?>
                </div>
            </div>
            <div class="col-xs-4">
                <div class="add-page__contacts-data-wrapper">
                    <label class="add-page__contacts-label">Номер телефона:</label>
                    <?php echo $form->textField($model,'seller_phone',array('class'=>'add-page__input phone-mask add-page__input-contacts-phone','style'=>'width:90%')); ?>
                    <span class="add-page__contacts-span">Например: +7 913 556 06 27</span>
                </div>
            </div>
            <div class="col-xs-4">
                <div class="add-page__contacts-data-wrapper">
                    <label class="add-page__contacts-label">Эл почта (не обязательно):</label>
                    <?php echo $form->textField($model,'seller_email',array('class'=>'add-page__input add-page__input-contacts-phone','style'=>'width:90%')); ?>
                </div>
            </div>



        </div>
    </div>
    
    <div class="add-page__sections-wrapper">
        <table class="add-page__sections-table add-page__sections-table-data">
            
                <h3 class="add-page__sections-title">Дополнительные данные</h3>

			<? foreach($fields_sub as $field): ?>
	            <tr class="add-page__sections-table-row add-page__sections-table-row-data">
	                <td class="add-page__sections-table-col-label">
	                    <?= $field->name; ?>
	                </td>
	                <? $fields_sub_childs = EstateConfigNew::model()->findAllByAttributes(array('type_'.$model->type => true,'parent'=>$field->slug, 'block' => 'sub'),array('order'=>'sorting ASC')); ?>
	                <td class="add-page__sections-table-col-content <? if($fields_sub_childs): ?>row<? endif ?>">
	                	<? if($fields_sub_childs && $field->class != 'add-page__input-storey'): ?>
	                	<div class="col-xs-3">
		                    <span class="add-page__input-text add-page__input-text-area"><?= $field->prepend ?></span>
		                <? endif ?>
	                
	                	<? if($field->method == 'radio'): ?>
							<? if($field->linked) { ?>
								<? foreach(OptionList::model()->findAllByAttributes(array('en_parent_name'=>$field->linked),array('order'=>'value ASC')) as $linked ): ?>
				                    <input class="add-page__radio-btn" type="radio" name="Estate[<?= $field->slug ?>]" value="<?= $linked->en_option_name ?>" id="<?= $field->slug ?>-<?= $linked->en_option_name ?>" <?= $model[$field->slug] == $linked->en_option_name ? 'checked' : ''?>/>
				                    <label class="add-page__radio-btn-label" for="<?= $field->slug ?>-<?= $linked->en_option_name ?>"><?= $linked->value ?></label>
			                    <? endforeach ?>
		                    <? } else { ?>
				                    <input class="add-page__radio-btn" type="radio" name="Estate[<?= $field->slug ?>]" value="0" id="<?= $field->slug ?>-0" <?= $model[$field->slug] == 0 ? 'checked' : ''?>/>
				                    <label class="add-page__radio-btn-label" for="<?= $field->slug ?>-0">Нет</label>				                    
				                    <input class="add-page__radio-btn" type="radio" name="Estate[<?= $field->slug ?>]" value="1" id="<?= $field->slug ?>-1" <?= $model[$field->slug] == 1 ? 'checked' : ''?>/>
				                    <label class="add-page__radio-btn-label" for="<?= $field->slug ?>-1">Да</label>			                 
		                    <? }  ?>
		                <? elseif($field->method == 'dropdown'): ?>
							<? if($field->slug == 'zastroishik') { ?>
								<?php echo $form->dropDownList($model,$field->slug,CHtml::listData(Builder::model()->findAll(array('order'=>'title ASC')), 'en_title', 'title'), array('prompt'=>'-- Выберите значение --','id'=>$field->slug,'class'=>'add-page__dropdown')); ?>
							<? } else if($field->slug == 'podryadchik') { ?>
								<?php echo $form->dropDownList($model,$field->slug,CHtml::listData(Builder::model()->findAll(), 'en_title', 'title'), array('prompt'=>'-- Выберите значение --','id'=>$field->slug,'class'=>'add-page__dropdown')); ?>
							<? } else { ?>
								<?php echo $form->dropDownList($model,$field->slug,CHtml::listData(OptionList::model()->findAllByAttributes(array('en_parent_name'=>$field->linked),array('order'=>'value ASC')), 'en_option_name', 'value'), array('prompt'=>'-- Выберите значение --','id'=>$field->slug,'class'=>'add-page__dropdown')); ?>
							<? }; ?>
						<? elseif($field->method == 'textarea'): ?>
							<?php echo $form->textArea($model,$field->slug,array('cols'=>30,'rows'=>7,'class'=>'add-page__data-textarea')); ?>
						<? else: ?>
	                		<?php echo $form->textField($model,$field->slug,array('class'=>'add-page__input '.$field->class)); ?>
	                	<? endif ?>       	                	
                		<? if($fields_sub_childs && $field->class != 'add-page__input-storey'): ?>
                			<? if($field->append): ?>
                				<span class="add-page__contacts-span" style="margin:2px 0 0 55px"><?= $field->append ?></span>
                			<? endif ?> 
							</div>
						<? else: ?>		                 
                			<?= $field->append ?>
                		<? endif ?>					
						
						<? //все дочерние поля нужно в ту же строку, поэтому так. Дочерние могут быть только textField, так что всё норм. ?>
						<? foreach($fields_sub_childs as $sub_child): ?>
							<? if($sub_child->class != 'add-page__input-storey'): ?>
							<div class="col-xs-3">
			                    <span class="add-page__input-text add-page__input-text-area"><?= $sub_child->prepend ?></span>					
								<?php echo $form->textField($model,$sub_child->slug,array('class'=>'add-page__input '.$sub_child->class)); ?>
                				<span class="add-page__contacts-span" style="margin:2px 0 0 55px"><?= $sub_child->append ?></span>
							</div>
							<? else: ?>
			                    <span class="add-page__input-text add-page__input-text-area"><?= $sub_child->prepend ?></span>	
								<?php echo $form->textField($model,$sub_child->slug,array('class'=>'add-page__input '.$sub_child->class)); ?>
							<? endif ?>
						<? endforeach ?>
	                </td>
	            </tr>
	        <? endforeach ?>
			
        </table>
    </div>
    
	<script type="text/javascript">
	function deleteImage(imageId, articleId) {
		$.ajax({
		<? if($this->getUniqueId() == 'objects'){ ?>
			url:'<?php echo Yii::app()->createUrl('objects/ajaxDeleteImage'); ?>',
		<? } else { ?>
			url:'<?php echo Yii::app()->createUrl('cabinet/ajaxDeleteImage'); ?>',
		<? } ?>
			type:'POST',
			data: 'imageId='+imageId+'&objectId='+articleId,
			success: function(response){
				// alert(response);
				if(response == true) {
					$('#image-'+imageId).remove();
				}
			}
		});
	}
	function chooseImage(imageId, articleId) {
		$.ajax({
		<? if($this->getUniqueId() == 'objects'){ ?>
			url:'<?php echo Yii::app()->createUrl('objects/ajaxChooseImage'); ?>',
		<? } else { ?>
			url:'<?php echo Yii::app()->createUrl('cabinet/ajaxChooseImage'); ?>',
		<? } ?>
			type:'POST',
			data: 'imageId='+imageId+'&objectId='+articleId,
			success: function(response){
				// alert(response);
				if(response == true) {
					$('.choose-main-image').show();
					$('.is-main-image').hide();
					$('#image-'+imageId).find('.choose-main-image').hide();
					$('#image-'+imageId).find('.is-main-image').show();
					//$('#main_img').attr('src','/uploads/item_<?= $model->id ?>/main_image.jpeg?='+(new Date()).getTime());
				}
			}
		});
	}
	
	function deleteAllImages(articleId) {
		$.ajax({
		<? if($this->getUniqueId() == 'objects'){ ?>
			url:'<?php echo Yii::app()->createUrl('objects/ajaxDeleteAllImages'); ?>',
		<? } else { ?>
			url:'<?php echo Yii::app()->createUrl('cabinet/ajaxDeleteAllImages'); ?>',
		<? } ?>
			type:'POST',
			data: 'objectId='+articleId+'&taxonomy=article',
			success: function(response){
				if(response == true) {
					$('.image-list').remove();
					$('#gallery').hide();
				}
			}
		});
	}
	
	</script>

    <!-- Область предпросмотра -->
	<fieldset>		
	</fieldset>

    <script src="/vendors/image-upload.js"></script>
    <style>
        
        
/* Gallery */

.fileUpload {
    position: relative;
    overflow: hidden;
    cursor: pointer;
}
.fileUpload p {
	position: relative;
	top: 32px;
}
.fileUpload input#uploadbtn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
}
#drop-files {
	display: inline-block;
	width: 150px;
	height: 150px;
	border: 1px dotted #00ff00;
	margin-right: 5px;
	vertical-align: top;
	float:left;
}

#uploaded-holder {
	position:relative;
	margin: 0 auto;
}

#dropped-files {
	display: inline;
	margin: 0 auto;
}

#upload-button {
	z-index: 1;
	display: none;
	margin: 20px 0;
}

.drop-button {
	display: block;
	position: absolute;
	z-index: 1;
	padding: 5px;
	width: 150px;
	background: rgba(0,0,0,0.6);
	font-size: 1em;
	bottom: 0;
	text-align: center;
	text-decoration: none;
	font-weight: 700;
	color: #FFF;
}

#dropped-files .image {
	display: inline-block;
	width: 150px;
	height: 150px;
	border: 1px dotted #00ff00;
	margin-right: 5px;
}

#upload-button a {
	text-decoration: none;
	color: #fff;
	font-weight: bold;
	box-shadow: 0 0 1000px 62px rgba(255, 255, 255, 1), inset 0 -35px 40px -10px #0A9FCA;
	font-size: 20px;
	padding: 10px 20px;
	background-color: #4bc1e3;
	border-radius: 10px;
}

#upload-button span {
	position:relative;
	text-align: center;
	background: white;
	border-radius: 10px;
	font-size: 1.1em;
	padding: 6px;
	margin-right: 8px;
}
#upload-button a:hover {
	box-shadow: 0 0 1000px 62px rgba(255, 255, 255, 1), inset 0 -5px 40px 0px #0A9FCA;	
}


#dropped-files #upload-button .delete {
	padding: 5px 8px 5px 8px;
	border-radius: 100px;
	background: rgba(0,0,0,0.6);
	box-shadow: none;
	font-size: 1em;
	margin-left: 8px;
}

#dropped-files #upload-button .delete:hover {
	background: rgba(0,0,0,0.8);
}

#file-name-holder {
	width: 100%;
	float: left;
}

#uploaded-files {
	margin:0 auto;
	display:block;
	width: 100%;
}

#uploaded-files a.delete {
	color: #fff;
	text-decoration: none;
	font-weight: bold;
}

#uploaded-files a.delete:hover {
	background: rgba(0,0,0,0.8);
}


#uploaded-files .delete {
	padding: 5px 8px 5px 8px;
	border-radius: 100px;
	background: rgba(0,0,0,0.6);
	box-shadow: none;
	font-size: 1em;
	margin: -30px 0 0 0;
	float: right;
}

#uploaded-files div.image-list {
	position: relative;
	width: 360px;
	border: 4px solid #fff;
	box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
	background: #fff;
	float: left;
	border-radius: 4px;
	margin: 0 7px 7px 0;
	overflow: hidden;
}

#uploaded-files div.image-list img{
	width: 360px;
	height: 280px;
}

a.delete-image-button {
	position: relative;
	z-index: 1;
	display:block;
	width: 150px;
	background: rgba(0,0,0,0.6);
	font-size: 0.6em;
	bottom: 40px;
	text-align: center;
	text-decoration: none;
	font-weight: 700;
	color: #FFF;
	padding: 5px;
}
.drop-button {
	position: relative;
	z-index: 1;
	display:block;
	width: 150px;
	background: rgba(0,0,0,0.6);
	font-size: 0.6em;
	top: 130px;
	text-align: center;
	text-decoration: none;
	font-weight: 700;
	color: #FFF;
	padding: 5px;
}

.add-page__photo-img, #dropped-files .image {  overflow:hidden;
	
float: left;
margin-bottom: 5px;
}
.add-page__photo-img img, #dropped-files .image img { max-height:100%; }

	.add-page__input-area { width: 50% }
	
	#uploaded-holder { float:left; margin-bottom:  5px;}

        .popup-special {
	        color:gray;
	        background-color: lightgray;
	        border: 1px solid gray;
	        border-radius: 999px;
	        width:15px;height:15px;
	        line-height: 15px;
	        font-size: 15px;
	        cursor: pointer;
	        text-align: center;
	        display: inline-block;
        }
        </style>


    <div class="add-page__sections-wrapper">
        <h3 class="add-page__sections-title">Фото и 3D тур</h3>
        <table class="add-page__sections-table add-page__sections-table-data">
            <tr class="add-page__sections-table-row">
                <td class="add-page__sections-table-col-label">
                    Фото:
                </td>
                <td class="add-page__sections-table-col-content">
                
                	<!-- Список загруженных файлов -->
					<span id="gallery">
					
						<div id="file-name-holder">
							<div id="uploaded-files">
								<?php if (!empty($images[0])): ?>
											<a class="delete" style="cursor:pointer" onclick="deleteAllImages(<?php echo ($model->id); ?>)">Удалить все фотографии</a>
											<br>
											<?php foreach ($images as $image): ?>
												<div class="add-page__photo-img" id="image-<?php echo $image->id; ?>"><a class="delete-image-button choose-main-image"  style="cursor:pointer;top:0;bottom:auto;<? if($image->main) echo 'display:none;'; ?>" onclick="chooseImage(<?php echo ($image->id.','.$model->id); ?>)">Сделать изображение главным</a><a class="delete-image-button is-main-image"  style="cursor:pointer;top:0;bottom:auto;<? if(!$image->main) echo 'display:none;'; ?>">Главное фото</a><img src="<?php echo ($image->uploaddir.'/'.$image->name); ?>"><a class="delete-image-button"  style="cursor:pointer;" onclick="deleteImage(<?php echo ($image->id.','.$model->id); ?>)">Удалить изображение</a></div>
											<?php endforeach; ?>
										
								
								
								<?php endif; ?>

									<span id="uploaded-holder"> 
										<span id="dropped-files">
								        	<!-- Кнопки загрузить и удалить, а также количество файлов -->
							
								        </span>		
									</span>
									<label for="uploadbtn" id="drop-files" class="fileUpload" ondragover="return false" style="text-align: center;">
										<p>Нажмите или перетащите изображение сюда, чтобы добавить</p>
								        <form id="frm">
								        	<input type="file" id="uploadbtn" multiple />
								        </form>
									</label>
						
							</div>
						</div>
					</span>
                </td>
            </tr>
            <!--<tr class="add-page__sections-table-row add-page__sections-table-data">
                <td class="add-page__sections-table-col-label">
                    Файл 3D тура:
                </td>
                <td class="add-page__sections-table-col-content">
                    <a class="add-page__photo-link" href="#">Загрузить</a>
                </td>
            </tr>-->
        </table>
    </div>
    <!--<div class="add-page__submit-wrapper ">
        <div class="row">
            <div class="col-xs-5">
                <input class="add-page__checkbox" type="checkbox" id="spec" name="spec" checked/>
                <label class="add-page__checkbox-label" for="spec">Сделать спецпредложением</label>
                <div class="add-page__submit-promo-wrapper">
                    <label class="add-page__contacts-label">Промо-код:</label>
                    <input class="add-page__input add-page__input-promo" type="text"/>
                    <input class="add-page__submit-promo-btn active" type="submit" value="Отправить объявление"/>
                </div>
            </div>
        </div>
    </div>-->
    <div class="add-page__submit-wrapper">
        <div class="row">
            <div class="col-xs-5">
                 <?php echo $form->checkBox($model,'special',array('class'=>'add-page__checkbox','id'=>'spec')); ?>
                <label class="add-page__checkbox-label" for="spec">Сделать спецпредложением</label>
                <span class="popup-special">?</span>
                <div class="add-page__submit-promo-wrapper">
                    <label class="add-page__contacts-label">Промо-код:</label>
                    <input class="add-page__input add-page__input-promo" type="text"/>
                    <table class="add-page__sections-table">
                        <tr class="add-page__sections-table-row">
                            <td class="add-page__sections-table-col">
                                <input class="add-page__submit-promo-btn" type="submit" value="Сохранить изменения"/>
                            </td>
                            <td class="add-page__sections-table-col">
                                <a href="/cabinet/index" class="add-page__submit-promo-btn-notActive">Не сохранять, вернуться к объявлениям</a>
                            </td>
                        </tr>
                    </table>


                </div>
            </div>
        </div>
    </div>
<?php $this->endWidget(); ?>

</div>

<style>
.autocomplete-suggestions { border: 1px solid #999; background: #FFF; cursor: default; overflow: auto; -webkit-box-shadow: 1px 4px 3px rgba(50, 50, 50, 0.64); -moz-box-shadow: 1px 4px 3px rgba(50, 50, 50, 0.64); box-shadow: 1px 4px 3px rgba(50, 50, 50, 0.64); }
.autocomplete-suggestion { padding: 2px 5px; white-space: nowrap; overflow: hidden; }
.autocomplete-no-suggestion { padding: 2px 5px;}
.autocomplete-selected { background: #F0F0F0; }
.autocomplete-suggestions strong { font-weight: bold; color: #000; }
.autocomplete-group { padding: 2px 5px; }
.autocomplete-group strong { font-weight: bold; font-size: 16px; color: #000; display: block; border-bottom: 1px solid #000; }

.kladr-error{color:#cb3e27}

.autocomplete-suggestions {
	position:absolute;display:block;margin:0;padding:0;border:1px solid #c4c4c4;background-color:#fff;z-index:9999;overflow-x:hidden;overflow-y:auto;min-width:200px;max-height:420px;color:#313131
}
.autocomplete-suggestion {
	display:list-item;list-style-type:none;margin:0;padding:8px 10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis
}
.autocomplete-suggestion + .autocomplete-suggestion{
	border-top:1px solid #ededed
}
.autocomplete-suggestion:hover{
	background-color:#f2f2f2;cursor:pointer
}
.autocomplete-suggestion.active{
	background-color:#e9e9e9
}
.autocomplete-suggestion a{
	text-decoration:none
}
.autocomplete-suggestion strong{
	color:#038ebd
}
.autocomplete-suggestion .spinner{
	position:absolute;display:block;margin:0;padding:0;width:16px;height:16px;background:url("./images/spinner.png") center center no-repeat;z-index:9999
}


</style>


