

<?php echo $form->errorSummary($model,"Пожалуйста, исправьте следующие ошибки","",array('class'=>'alert alert-error')); ?>
	  
	<div class="control-group">
		<b><?php echo $form->labelEx($model,'finished',array('class'=>'control-label')); ?></b>
		<div class="controls">
			<?php echo $form->checkbox($model,'finished',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'finished',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<b><?php echo $form->labelEx($model,'advertisement',array('class'=>'control-label')); ?></b>
		<div class="controls">
			<?php echo $form->checkbox($model,'advertisement',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'advertisement',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<b><?php echo $form->labelEx($model,'show_all_pages',array('class'=>'control-label')); ?></b>
		<div class="controls">
			<?php echo $form->checkbox($model,'show_all_pages',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'show_all_pages',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'title',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'title',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'title',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<? if($model->slug) { ?>
		<div class="control-group">
			<?php echo $form->labelEx($model,'slug',array('class'=>'control-label')); ?>
			<div class="controls">
				<?php echo $form->textField($model,'slug',array('class'=>'input-xlarge')); ?>
			</div>
			<?php echo $form->error($model,'slug'); ?>
		</div>
	<? } ?>
	
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
		<?php echo $form->labelEx($model,'address_street',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textField($model,'address_street',array('class'=>'input-xlarge input-address','id'=>'address_street')); ?>
         
			<?php echo $form->error($model,'address_street',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'address_house',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->textField($model,'address_house',array('class'=>'input-xlarge input-address','id'=>'address_house')); ?>
         
			<?php echo $form->error($model,'address_house',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<div class="control-group">
		<?php //echo $form->labelEx($model,'address_building',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php //echo $form->textField($model,'address_building',array('class'=>'input-xlarge input-address','id'=>'address_building')); ?>
			<a class="btn btn-default" id="get-coords">Поиск на карте по адресу</a>
			<?php //echo $form->error($model,'address_building',array('class'=>'help-inline')); ?>
		</div>
	</div>		
	<div class="control-group">
		<div class="controls">		
			<span id="dgisfound"></span>
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

	<div class="control-group">
		<?php echo $form->labelEx($model,'zastroishik',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'zastroishik',CHtml::listData(Builder::model()->findAll(array('order'=>'title')), 'en_title', 'title'), array('prompt'=>'','id'=>'zastroishik')); ?>
			<?php echo $form->error($model,'zastroishik',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model, 'podryadchiki',array('class'=>'control-label')); ?>
		<div class="controls checkBoxList">
		<?php /* echo $form->checkBoxList($model, 'cityIds',
            CHtml::listData(City::model()->findAll(), 'id', 'name'),
            array('attributeitem' => 'id','separator'=>'', 'style' => "display: inline-block")); */ ?>
			
			<?php echo $form->dropDownList($model, 'podryadIds', CHtml::listData(
				Builder::model()->findAll(array('order'=>'title')), 'id', 'title'
			), array('multiple'=>'multiple', 'size'=>'7', 'encode'=>false, 'id'=>'chosen', 'class'=>'chosen-select')); ?>
		</div>
		<?php echo $form->error($model,'podryadchiki'); ?>
		
	</div>
	<script>
		$(document).ready(function(){
			$(".chosen-select").chosen();
		
		});
	</script>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'condo_type',array('class'=>'control-label')); ?>
		<div class="controls">		
			<?php echo $form->dropDownList($model,'condo_type',array("Эконом"=>"Эконом", "Комфорт (средний)"=>"Комфорт (средний)", "Бизнес"=>"Бизнес", "Элитный"=>"Элитный"), array('prompt'=>'','id'=>'condo_type')); ?>
			<?php echo $form->error($model,'condo_type',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'year',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'year',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'year',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'begin_and_end',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'begin_and_end',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'begin_and_end',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<div class="control-group">
		<?php echo $form->labelEx($model,'top_floor',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'top_floor',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'top_floor',array('class'=>'help-inline')); ?>
		</div>
	</div>

	<div class="control-group">
		<?php echo $form->labelEx($model,'porches',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'porches',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'porches',array('class'=>'help-inline')); ?>
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
	<div class="control-group">
		<?php echo $form->labelEx($model,'fz214',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'fz214',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'fz214',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'all_squares',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'all_squares',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'all_squares',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'all_rooms',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'all_rooms',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'all_rooms',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	
	<div class="control-group">
		<?php echo $form->labelEx($model,'use_data',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->checkbox($model,'use_data',array('class'=>'input-xlarge bootstrap-switch')); ?>
			<?php echo $form->error($model,'use_data',array('class'=>'help-inline')); ?>
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
			url:'<?php echo Yii::app()->createUrl('novostroiki/ajaxDeleteImage'); ?>',
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
			url:'<?php echo Yii::app()->createUrl('novostroiki/ajaxChooseImage'); ?>',
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
			url:'<?php echo Yii::app()->createUrl('novostroiki/ajaxDeleteAllImages'); ?>',
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
	<div class="control-group">
		<label class="control-label"><span style="border-bottom:1px dotted" class="popup" hiddentitle="Кликните по полю для выбора изображения с сервера.<br> Фото будет добавлено к фото в галерее.">Фото из менеджера файлов</span></label>
		<div class="controls active">
			<input type="text" id="photo" name="Condominium[photo][1]" readonly="readonly" onclick="openKCFinder(this)"
    value="<?= $model->photo[1] ?>" style="width:300px;cursor:pointer" />
    		<input type="button" class="btn" onclick="openKCFinder(document.getElementById('photo'))" value="Выбрать фото">
		</div>
		<div class="controls hidden" style="display:none;">
			<input type="text" id="photo2" name="Condominium[photo][2]" readonly="readonly" onclick="openKCFinder(this)"
    value="<?= $model->photo[2] ?>" style="width:300px;cursor:pointer" />
    		<input type="button" class="btn" onclick="openKCFinder(document.getElementById('photo2'))" value="Выбрать фото">
		</div>
		<div class="controls hidden" style="display:none;">
			<input type="text" id="photo3" name="Condominium[photo][3]" readonly="readonly" onclick="openKCFinder(this)"
    value="<?= $model->photo[3] ?>" style="width:300px;cursor:pointer" />
    		<input type="button" class="btn" onclick="openKCFinder(document.getElementById('photo3'))" value="Выбрать фото">
		</div>
		<div class="controls hidden" style="display:none;">
			<input type="text" id="photo4" name="Condominium[photo][4]" readonly="readonly" onclick="openKCFinder(this)"
    value="<?= $model->photo[4] ?>" style="width:300px;cursor:pointer" />
    		<input type="button" class="btn" onclick="openKCFinder(document.getElementById('photo4'))" value="Выбрать фото">
		</div>
		<div class="controls hidden" style="display:none;">
			<input type="text" id="photo5" name="Condominium[photo][5]" readonly="readonly" onclick="openKCFinder(this)"
    value="<?= $model->photo[5] ?>" style="width:300px;cursor:pointer" />
    		<input type="button" class="btn" onclick="openKCFinder(document.getElementById('photo5'))" value="Выбрать фото">
		</div>
		<div class="controls hidden" style="display:none;">
			<input type="text" id="photo6" name="Condominium[photo][6]" readonly="readonly" onclick="openKCFinder(this)"
    value="<?= $model->photo[6] ?>" style="width:300px;cursor:pointer" />
    		<input type="button" class="btn" onclick="openKCFinder(document.getElementById('photo6'))" value="Выбрать фото">
		</div>
		<div class="controls">
			<span class="btn btn-primary" id="add_new_photo">+</span>
		</div>
		<?php echo $form->error($model,'photo'); ?>
	</div>
	<script>
		$(document).ready(function(){
			$('#add_new_photo').click(function(e){
				$('.controls.active + .controls.hidden').removeClass('hidden').addClass('active').show();
			});
			
			$('.controls.hidden input[type=text]').each(function(){
				val = $(this).val();
				console.log(val);
				if(val && val != '') {
					$(this).parent('.controls.hidden').removeClass('hidden').addClass('active').show();
				}
			})
		});
	</script>

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
	
	
	
	