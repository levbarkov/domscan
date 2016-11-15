

<?php echo $form->errorSummary($model,"Пожалуйста, исправьте следующие ошибки","",array('class'=>'alert alert-error')); ?>
	  
	<?php echo $form->hiddenField($model,'type',array('class'=>'input-xlarge', 'id' => 'us2-address')); ?>


	<div class="control-group">
		<?php echo $form->labelEx($model,'sold',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'sold',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'sold',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'subtype',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'subtype',array('sale'=>'Продажа','rent'=>'Аренда')); ?>
			<?php echo $form->error($model,'subtype',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'title',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'title',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'title',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'city',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'city',CHtml::listData(City::model()->findAll(), 'id', 'name')/*array('1'=>'Красноярск')*/, array('prompt'=>'','id'=>'city', 'class'=>'')); ?>
			<?php echo $form->error($model,'city',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'district',array('class'=>'control-label')); ?>
		<div class="controls">		
		<? $criteria = new CDbCriteria();		
		$criteria->condition = "city_id = ".$model->city." ORDER BY name ASC";	
		$items_prepare = District::model()->findAll($criteria); ?>
			<?php echo $form->dropDownList($model,'district',CHtml::listData($items_prepare, 'id', 'name')/*array('1'=>'Красноярск')*/, array('prompt'=>'','id'=>'district')); ?>
			<?php echo $form->error($model,'district',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<script>
		$('#city').change(function(){
		
			
			var city_id = $('#city').val();
			
			$.ajax({
			  type: "POST",
			  url: "/site/districts/",
			  data: { city: city_id }
			})
			  .done(function( data ) {
			   // alert( "Data Saved: " + msg );
			   $('#district').empty();
			   $('#district').append($('<option>').text('').attr('value', ''));
			   	$.each(data.districts, function (index, value) {
			   		
			         $('#district').append($('<option>').text(value.name).attr('value', value.id));
			         });
			  });
		});
	</script>
	
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'address',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textField($model,'address',array('class'=>'input-xlarge input-address','id'=>'address')); ?>
            <a class="btn btn-default btn-search">Поиск по адресу</a>
			<?php echo $form->error($model,'address',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	
	<!-- <script>
	
		var Timer; 
		
		$('#address, #city').bind('change keyup', function(e){
			var text = $(this).val();
			var city = $('#city option:selected' ).text();
			
			clearTimeout(Timer);
		    Timer = setTimeout(function(){
				$('.gllpSearchField').val('Россия, '+city+', '+text);
				$('.gllpSearchButton').click();
			}, 1300);
			
		});
	</script> -->
 
	<div class="control-group">
		<div class="controls">	
            
            <div class="map-search" id="map" style="width: 98%; height: 400px;">
            </div>

			<?php echo $form->hiddenField($model,'location',array('class'=>'input-query','id'=>'location')); ?>
			<?php echo $form->hiddenField($model,'latitude',array('class'=>'input-lat','id'=>'address')); ?>
			<?php echo $form->hiddenField($model,'longitude',array('class'=>'input-long','id'=>'address')); ?> 
		</div>
	</div>
		
	<div class="control-group">
		<?php echo $form->labelEx($model,'text',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textArea($model,'text',array('style'=>'width:810px;height:500px;','class'=>'input-xlarge','id'=>'ckeditor_standard')); ?>
			<?php echo $form->error($model,'text',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<? if($type_config->rooms): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'rooms',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textField($model,'rooms',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'rooms',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	<? if($type_config->floor): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'floor',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textField($model,'floor',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'floor',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	<? if($type_config->top_floor): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'top_floor',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textField($model,'top_floor',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'top_floor',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	<? if($type_config->square): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'square',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'square',array('class'=>'input-xlarge')); ?> м<sup>2</sup>
			<?php echo $form->error($model,'square',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	<? if($type_config->square_living): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'square_living',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'square_living',array('class'=>'input-xlarge')); ?> м<sup>2</sup>
			<?php echo $form->error($model,'square_living',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	<? if($type_config->square_kitchen): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'square_kitchen',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'square_kitchen',array('class'=>'input-xlarge')); ?> м<sup>2</sup>
			<?php echo $form->error($model,'square_kitchen',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	
	
	<? if($type_config->square_land): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'square_land',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'square_land',array('class'=>'input-xlarge')); ?> соток
			<?php echo $form->error($model,'square_land',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	<? if($type_config->ceiling_height): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'ceiling_height',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textField($model,'ceiling_height',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'ceiling_height',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	<? if($type_config->material): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'material',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'material',CHtml::listData(OptionList::model()->findAllByAttributes(array('en_parent_name'=>'material'),array('order'=>'value DESC')), 'en_option_name', 'value'), array('prompt'=>'','id'=>'material')); ?>
			<?php echo $form->error($model,'material',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	<? if($type_config->balcony): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'balcony',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'balcony',CHtml::listData(OptionList::model()->findAllByAttributes(array('en_parent_name'=>'balcony')), 'en_option_name', 'value'), array('prompt'=>'','id'=>'balcony')); ?>
			<?php echo $form->error($model,'balcony',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	<? if($type_config->sanuzel): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'sanuzel',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'sanuzel',CHtml::listData(OptionList::model()->findAllByAttributes(array('en_parent_name'=>'sanuzel')), 'en_option_name', 'value'), array('prompt'=>'','id'=>'sanuzel')); ?>
			<?php echo $form->error($model,'sanuzel',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	<? if($type_config->plan): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'plan',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'plan',CHtml::listData(OptionList::model()->findAllByAttributes(array('en_parent_name'=>'plan'),array('order'=>'value DESC')), 'en_option_name', 'value'), array('prompt'=>'','id'=>'plan')); ?>
			<?php echo $form->error($model,'plan',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	
	<? if($type_config->commercial_type): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'commercial_type',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'commercial_type',CHtml::listData(OptionList::model()->findAllByAttributes(array('en_parent_name'=>'commercial_type')), 'en_option_name', 'value'), array('prompt'=>'','id'=>'commercial_type')); ?>
			<?php echo $form->error($model,'commercial_type',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	<? if($type_config->commercial_business): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'commercial_business',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'commercial_business',CHtml::listData(OptionList::model()->findAllByAttributes(array('en_parent_name'=>'commercial_business')), 'en_option_name', 'value'), array('prompt'=>'','id'=>'commercial_business')); ?>
			<?php echo $form->error($model,'commercial_business',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	<? if($type_config->zastroishik): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'zastroishik',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'zastroishik',CHtml::listData(OptionList::model()->findAllByAttributes(array('en_parent_name'=>'builder')), 'en_option_name', 'value'), array('prompt'=>'','id'=>'zastroishik')); ?>
			<?php echo $form->error($model,'zastroishik',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'cost',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'cost',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'cost',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	
	<? if($model->type == 'new'): ?>
	<div class="control-group">
		<?php echo $form->labelEx($model,'year',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'year',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'year',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<? endif ?>

	
	<div class="control-group">
		<?php echo $form->labelEx($model,'special',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'special',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'special',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'mortgage',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'mortgage',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'mortgage',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'rassrochka',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'rassrochka',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'rassrochka',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'matcapital',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'matcapital',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'matcapital',array('class'=>'help-inline')); ?>
		</div>
	</div>


	<h3>Контактные данные продавца</h3>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'seller_name',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'seller_name',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'seller_name',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'seller_email',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'seller_email',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'seller_email',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'seller_phone',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'seller_phone',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'seller_phone',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'seller_additional',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'seller_additional',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'seller_additional',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<script type="text/javascript">
	function deleteImage(imageId, articleId) {
		$.ajax({
			url:'<?php echo Yii::app()->createUrl('objects/ajaxDeleteImage'); ?>',
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
			url:'<?php echo Yii::app()->createUrl('objects/ajaxChooseImage'); ?>',
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
			url:'<?php echo Yii::app()->createUrl('objects/ajaxDeleteAllImages'); ?>',
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

	<? 
		//$main_image = EstateImage::model()->findByAttributes(array('parent'=>$model->id,'main'=>1));
		if($main_image && $model->image && false): ?>
		<h3>Главное изображение</h3>	
		<img id="main_img" src="<?= $model->image ?>"?>
	<? endif ?>
	
	<h3>Фотографии для галереи</h3>
	

<!-- Область для перетаскивания -->
	<fieldset>
	<div id="drop-files" ondragover="return false">
		<p>Перетащите изображение сюда</p>
        <form id="frm">
        	<input type="file" id="uploadbtn" multiple />
        </form>
	</div>
	</fieldset>
    <!-- Область предпросмотра -->
	<fieldset>
	<div id="uploaded-holder"> 
		<div id="dropped-files">
        	<!-- Кнопки загрузить и удалить, а также количество файлов -->
        	<div id="upload-button">
            	<center>
                	<span>0 Файлов</span>
					<!-- <a href="#" class="upload">Загрузить</a> -->
					<a href="#" class="delete">Удалить все фотографии</a>
                </center>
			</div>  
        </div>		
	</div>
	</fieldset>
	
	<h3>Загруженные изображения галереи</h3>
	<!-- Список загруженных файлов -->
	<?php if (!empty($images[0])): ?>
	<fieldset id="gallery">
		<div id="file-name-holder">
			<div id="uploaded-files">
				<a class="delete" style="cursor:pointer" onclick="deleteAllImages(<?php echo ($model->id); ?>)">Удалить все фотографии</a>
				<br>
				<?php foreach ($images as $image): ?>
					<div class="image-list" id="image-<?php echo $image->id; ?>"><a class="delete-image-button choose-main-image"  style="cursor:pointer;top:0;bottom:auto;<? if($image->main) echo 'display:none;'; ?>" onclick="chooseImage(<?php echo ($image->id.','.$model->id); ?>)">Сделать изображение главным</a><a class="delete-image-button is-main-image"  style="cursor:pointer;top:0;bottom:auto;<? if(!$image->main) echo 'display:none;'; ?>">Главное фото</a><img src="<?php echo ($image->uploaddir.'/'.$image->name); ?>"><a class="delete-image-button"  style="cursor:pointer;" onclick="deleteImage(<?php echo ($image->id.','.$model->id); ?>)">Удалить изображение</a></div>
				<?php endforeach; ?>
			</div>
		</div>
	</fieldset>
	<?php endif; ?>
	
	
	<h3>3d-панорама</h3>
	
	<div class="control-group">
		<label class="control-label">Загрузить панораму</label>
		<div class="controls">
			<?php echo CHtml::activeFileField($model, 'upload_pano'); ?>
		</div>
	</div>
	
	<div class="control-group">
		<label class="control-label">Удалить панораму</label>
		<div class="controls">
			<input type="checkbox" name="delete_pano">
		</div>
	</div>
	
	