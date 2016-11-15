<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Migration table</div>
    </div>
    <div class="block-content collapse in">
    <?
    $districtsWithoutTitle = District::model()->findAllByAttributes(array('en_title'=>''));
    if($districtsWithoutTitle) {
	    foreach($districtsWithoutTitle as $district) {
	    	$district->save();
	    	echo $district->en_title.'<br>';	
	    }
	    	
    }
    
    ?>
	<?
	$buildersExist = Builder::model()->findAll();	
	if(!$buildersExist) {
		
		$getAllOptionBuilders = OptionList::model()->findAllByAttributes(array('en_parent_name'=>'builder'));
		
		foreach($getAllOptionBuilders as $builder) {
			$createBuilder = new Builder;
			$createBuilder->title = $builder->value; 
			$createBuilder->en_title = $builder->en_option_name;
			
			$reserveString = $createBuilder->en_title;
					
			$createBuilder->setSlug();
			$createBuilder->save();
			
			Estate::model()->updateAll(array('zastroishik'=>$createBuilder->en_title),'zastroishik="'.$reserveString.'"');
			
			
			echo $builder->value.$builder->en_option_name.'<br>';
		}
	} 
	
	
	?>
    </div>
</div>

<div class="block">
    <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Лог модератора</div>
    </div>
    <div class="block-content collapse in">
    	<? 
    	$dataProvider=new CActiveDataProvider('ModeratorLog');
    	$dataProvider->pagination->pageSize = 30;
    	
    	if($_GET['filter_user']) {
    		$id = $_GET['filter_user'];
    		$dataProvider->criteria->condition = 'user = '.$id;
    	}
		$dataProvider->sort->defaultOrder = 'time DESC';

		$this->widget('zii.widgets.grid.CGridView', array(
		    'dataProvider'=>$dataProvider,
		    'columns'=>array(
		    	 array(            // display 'create_time' using an expression
		            'name'=>'time',
		            'value'=>'date("d.m.Y H:i:s", $data->time)',
		        ),
		        array(            // display 'create_time' using an expression
		            'name'=>'text',
		            'type'=>'raw',
		            'value'=>'ModeratorLogHelper::GetTableUrl($data->text, $data->url)',
		        ),
		        'user_ok.email',  // display the 'name' attribute of the 'category' relation		        
		        array(            // display 'create_time' using an expression
		            'name'=>'',
		            'type'=>'raw',
		            'value'=>'ModeratorLogHelper::GetFilterButtons($data->user)',
		        ),
		    ),
		    'itemsCssClass' => 'table table-striped',
		)); 
		?>
    </div>
</div>