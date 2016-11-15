<?php echo $form->errorSummary($model,"Пожалуйста, исправьте следующие ошибки","",array('class'=>'alert alert-error')); ?>

	<div class="control-group <?php if ($model->hasErrors('title')) echo "error"; ?>">
		<?php echo $form->labelEx($model,'title',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'title',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'title',array('class'=>'help-inline')); ?>
		</div>
	</div>
	<div class="control-group <?php if ($model->hasErrors('url')) echo "error"; ?>">
		<?php echo $form->labelEx($model,'url',array('class'=>'control-label')); ?>
		<div class="controls">
			<?php echo $form->textField($model,'url',array('class'=>'input-xlarge')); ?>
			<?php echo $form->error($model,'url',array('class'=>'help-inline')); ?>
		</div>
	</div>
	
	<div class="control-group">
		<label class="control-label">Главная фотография</label>
		<div class="controls" style="position:relative;">	
			<canvas id="my_canvas_id" style="width:200px; height:150px; border:1px solid black; display:none;"></canvas>
			<img id="uploadPreview" alt="" src="" style="width: 200px; height: 150px; border:1px solid black; display:block;" />
			<img id="largePreview" alt="" src="<?= $model->image ?>" style="position:absolute; bottom:100px; left:100px; border:3px solid lightgray; width:300px;height:auto;"/>
			<?php echo $form->fileField($model, 'image',array('class'=>'input-file uniform_on', 'id'=>'uploadImage', 'onchange'=>'PreviewImage();')); ?>
		</div>
	</div>
	<style>
		#largePreview {
			display:none;
		}
		
		#uploadPreview:hover + #largePreview, #largePreview:hover {
			display:block;
		}
	</style>
	
	<script type="text/javascript">
								
        var myCanvas = document.getElementById('my_canvas_id');
		var ctx = myCanvas.getContext('2d');
		var img = new Image;
		img.onload = function(){
			myCanvas.width = 400;
			myCanvas.height = 300;
			
			var props = img.height/img.width;
			
			if(img.width >= img.height) {
				ctx.drawImage(img,200-(300/props/2),0, 300/props, 300); // Or at whatever offset you like
			} else if(img.width < img.height) {
				ctx.drawImage(img,0,200-(400*props/2), 400, 400*props); // Or at whatever offset you like			
			}
			
			document.getElementById("uploadPreview").src = myCanvas.toDataURL();				
		};
		
		$('#largePreview').load(function(){
			var img2 = document.getElementById("largePreview");			
			myCanvas.width = 400;
			myCanvas.height = 300;
			
			var props = img2.height/img2.width;
			
			if(img2.width >= img2.height) {
				ctx.drawImage(img2,200-(300/props/2),0, 300/props, 300); // Or at whatever offset you like
			} else if(img2.width < img2.height) {
				ctx.drawImage(img2,0,200-(400*props/2), 400, 400*props); // Or at whatever offset you like				
			}
			
			document.getElementById("uploadPreview").src = myCanvas.toDataURL();
		});
		//ctx.drawImage(img, 10, 10);
				
	    function PreviewImage() {
	        var oFReader = new FileReader();
	        oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);
	
	        oFReader.onload = function (oFREvent) {
	            document.getElementById("largePreview").src = oFREvent.target.result;
	            
	            
				
				img.src = oFREvent.target.result;
				
	        };
	        
	    };
	
</script>