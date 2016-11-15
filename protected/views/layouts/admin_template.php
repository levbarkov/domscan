<!DOCTYPE html>
<html class="no-js">
    
    <head>
        <title>Admin Home Page</title>
        <!-- Bootstrap -->
        <link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
        <link href="/bootstrap/styles.css" rel="stylesheet" media="screen">
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <script src="/vendors/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        
                <!--/.fluid-container-->
        <link href="/vendors/datepicker.css" rel="stylesheet" media="screen">
        <link href="/vendors/uniform.default.css" rel="stylesheet" media="screen">
        <link href="/vendors/chosen.min.css" rel="stylesheet" media="screen">
        
        <link href="/vendors/wysiwyg/bootstrap-wysihtml5.css" rel="stylesheet" media="screen">
        
        
		<script src="/js/libs.js"></script>
		<script src="http://maps.api.2gis.ru/2.0/loader.js?pkg=full" data-id="dgLoader"></script>
		

       <!-- <script src="/vendors/jquery-1.9.1.min.js"></script>-->
        <script src="/bootstrap/js/bootstrap.min.js"></script>
        <script src="/bootstrap/scripts.js"></script>
        <script src="/vendors/wysiwyg/wysihtml5-0.3.0.js"></script>
        <script src="/vendors/wysiwyg/bootstrap-wysihtml5.js"></script>
        <script src="/vendors/wizard/jquery.bootstrap.wizard.min.js"></script>
        
        <script src="/vendors/chosen.jquery.min.js"></script>
        <script src="/vendors/bootstrap-datepicker.js"></script>
        <script src="/vendors/jquery.uniform.min.js"></script>
        <script src="/vendors/image-upload.js"></script>
        
        
		<link rel="stylesheet" href="/bower_components/ion.rangeSlider/css/ion.rangeSlider.css"/>
		<link rel="stylesheet" href="/bower_components/ion.rangeSlider/css/ion.rangeSlider.skinFlat.css"/>
		<script src="/bower_components/ion.rangeSlider/js/ion.rangeSlider.min.js"></script>
		
		
	
    </head>
    
    <body>
        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container-fluid">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                    </a>
                    <a class="brand" href="#">Admin Panel</a>
                    
					<?// if(Yii::app()->user->can('manage')): ?>
                    <div class="nav-collapse collapse">
                        <ul class="nav pull-right">
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-user"></i> <?= Yii::app()->user->id; ?> <i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">              
                                    <li>
                                        <a tabindex="-1" href="/site/logout/">Выйти</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav">
                            <li class="active">
                                <a href="/site/admin/">Dashboard</a>
                            </li>
                            <? if($this->checkEditablePermissions(array('admin'))): ?>
                            <li class="dropdown">
                                <a href="#" data-toggle="dropdown" class="dropdown-toggle">Settings <b class="caret"></b>

                                </a>
                                <ul class="dropdown-menu" id="menu1">
                                    <li>
                                        <a href="/setting/admin/">Настройки <i class="icon-arrow-right"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="/setting/settinglist/">Свойства объектов <i class="icon-arrow-right"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="/seo/admin/">SEO <i class="icon-arrow-right"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="/menu/admin/">Меню <i class="icon-arrow-right"></i>

                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <? endif ?>
                            <? if($this->checkEditablePermissions(array('admin'))): ?>
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">Пользователи <i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="/user/admin">Список администраторов</a>
                                    </li>            
                                    <li>
                                        <a tabindex="-1" href="/siteuser/admin">Список пользователей</a>
                                    </li>                            
                                </ul>
                            </li>
                            <? endif ?>
                        </ul>
                    </div>
                    <?// endif; ?>
                    <!--/.nav-collapse -->
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row-fluid">
            <?// if(Yii::app()->user->can('manage')): ?>
                <div class="span3" id="sidebar">
                <? if($this->checkEditablePermissions(array('admin','manager'))): ?>
                    <ul class="nav nav-list bs-docs-sidenav nav-collapse collapse">
                    	<? $objects_type = Yii::app()->request->getParam('type'); ?>
                    	<? if(!$objects_type)
                    		try{
	                    		
                    			if($this->objects_loaded_type)
                    				$objects_type = $this->objects_loaded_type;
                    		} catch(Exception $e) {
	                    		
                    		}
                    			
                    	 ?>
                    	<? $city_id = Yii::app()->request->getParam('city_id', 'all'); ?>
                        <li <? if($this->getUniqueId() == 'objects' && $objects_type == 'house') echo 'class="active"'; ?>>
                            <a href="/objects/type/house/<? if($city_id != 'all') echo 'city/'.$city_id; ?>"><i class="icon-chevron-right"></i> Дома</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'objects' && $objects_type == 'new') echo 'class="active"'; ?>>
                            <a href="/objects/type/new/<? if($city_id != 'all') echo 'city/'.$city_id; ?>"><i class="icon-chevron-right"></i> Новостройки (квартиры)</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'objects' && $objects_type == 'flat') echo 'class="active"'; ?>>
                            <a href="/objects/type/flat/<? if($city_id != 'all') echo 'city/'.$city_id; ?>"><i class="icon-chevron-right"></i> Квартиры</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'objects' && $objects_type == 'commercial') echo 'class="active"'; ?>>
                            <a href="/objects/type/commercial/<? if($city_id != 'all') echo 'city/'.$city_id; ?>"><i class="icon-chevron-right"></i> Коммерческая недвижимость</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'objects' && $objects_type == 'land') echo 'class="active"'; ?>>
                            <a href="/objects/type/land/<? if($city_id != 'all') echo 'city/'.$city_id; ?>"><i class="icon-chevron-right"></i> Земляные участки</a>
                        </li>
       
                    </ul>
                    
                    <ul class="nav nav-list bs-docs-sidenav nav-collapse collapse">
                        <li <? if($this->getUniqueId() == 'novostroiki') echo 'class="active"'; ?>>
                            <a href="/novostroiki/admin/"><i class="icon-chevron-right"></i> Новостройки (постройки)</a>
                        </li>

                    </ul>
                    <ul class="nav nav-list bs-docs-sidenav nav-collapse collapse">
                        <li <? if($this->getUniqueId() == 'zastroischiki' && $this->action->Id != 'rating') echo 'class="active"'; ?>>
                            <a href="/zastroischiki/admin/"><i class="icon-chevron-right"></i> Застройщики</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'zastroischiki' && $this->action->Id == 'rating') echo 'class="active"'; ?>>
                            <a href="/zastroischiki/admin/rating/"><i class="icon-chevron-right"></i> Рейтинг застройщиков</a>
                        </li>


                    </ul>
                    <ul class="nav nav-list bs-docs-sidenav nav-collapse collapse">
                        <li <? if($this->getUniqueId() == 'slider') echo 'class="active"'; ?>>
                            <a href="/slider/admin/"><i class="icon-chevron-right"></i> Слайдер</a>
                        </li>

                    </ul>
                    <ul class="nav nav-list bs-docs-sidenav nav-collapse collapse">

                        <li <? if($this->getUniqueId() == 'news') echo 'class="active"'; ?>>
                            <a href="/news/admin/"><i class="icon-chevron-right"></i> Новости</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'guides') echo 'class="active"'; ?>>
                            <a href="/guides/admin/"><i class="icon-chevron-right"></i> Гайды</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'articles') echo 'class="active"'; ?>>
                            <a href="/articles/admin/"><i class="icon-chevron-right"></i> Статьи</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'reviews') echo 'class="active"'; ?>>
                            <a href="/reviews/admin/"><i class="icon-chevron-right"></i> Обзоры</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'analytics') echo 'class="active"'; ?>>
                            <a href="/analytics/admin/"><i class="icon-chevron-right"></i> Аналитика</a>
                        </li>

                    </ul>
                    <ul class="nav nav-list bs-docs-sidenav nav-collapse collapse">
                        <li <? if($this->getUniqueId() == 'cities') echo 'class="active"'; ?>>
                            <a href="/cities/admin/"><i class="icon-chevron-right"></i> Города и районы</a>
                        </li>
                       <!-- <li <? if($this->getUniqueId() == 'news') echo 'class="active"'; ?>>
                            <a href="/news/admin/"><i class="icon-chevron-right"></i> Новости</a>
                        </li>-->
                        <li <? if($this->getUniqueId() == 'pages') echo 'class="active"'; ?>>
                            <a href="/pages/admin/"><i class="icon-chevron-right"></i> Страницы</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'sotrudniki') echo 'class="active"'; ?>>
                            <a href="/sotrudniki/admin/"><i class="icon-chevron-right"></i> Список сотрудников</a>
                        </li>
                        <li <? if($this->getUniqueId() == 'faq') echo 'class="active"'; ?>>
                            <a href="/faq/admin/"><i class="icon-chevron-right"></i> Вопрос-ответ</a>
                        </li>

                    </ul>
                <? endif ?>   
                </div>
           <?// endif; ?>
                <!--/span-->
                <div class="span9" id="content">
                    <div class="row-fluid">
	                        <!--<div class="alert alert-success">
								<button type="button" class="close" data-dismiss="alert">&times;</button>
	                            <h4>Success</h4>
	                        	The operation completed successfully
	                        </div>-->
                        	<div class="navbar">
                            	<div class="navbar-inner">
	                                <ul class="breadcrumb">
	                                    <i class="icon-chevron-left hide-sidebar"><a href='#' title="Hide Sidebar" rel='tooltip'>&nbsp;</a></i>
	                                    <i class="icon-chevron-right show-sidebar" style="display:none;"><a href='#' title="Show Sidebar" rel='tooltip'>&nbsp;</a></i>
	                                    <li>
	                                        <a href="/site/admin/">Dashboard</a> 	
	                                        <? if($this->getUniqueId() == 'user' && $this->checkEditablePermissions(array('admin'))): ?>
	                                        	<span class="divider">/</span> <a href="/user/admin/">Администраторы</a>
	                                        <? endif ?>	
	                                        <? if($this->getUniqueId() == 'setting' && $this->checkEditablePermissions(array('admin'))): ?>
	                                        	<span class="divider">/</span> <a href="/setting/admin/">Параметры</a>
	                                        <? endif ?>
	                                      
	                                      
	                                        <? if($this->getUniqueId() == 'objects')
	                                        	switch($objects_type) {
		                                        	case 'house': echo '<span class="divider">/</span> <a href="/objects/type/house">Дома</a>'; break;
		                                        	case 'new': echo '<span class="divider">/</span> <a href="/objects/type/new">Новостройки</a>'; break;
		                                        	case 'flat': echo '<span class="divider">/</span> <a href="/objects/type/flat">Квартиры</a>'; break;
		                                        	case 'commercial': echo '<span class="divider">/</span> <a href="/objects/type/commercial">Коммерческая недвижимость</a>'; break;
		                                        	case 'land': echo '<span class="divider">/</span> <a href="/objects/type/land">Земляные участки</a>'; break;
		                                        	
	                                        	} ?>
					                      


	                                    </li>
	                                  <!--  <li>
	                                        <a href="#">Settings</a> <span class="divider">/</span>	
	                                    </li>
	                                    <li class="active">Tools</li>-->
	                                </ul>
                            	</div>
                        	</div>
                    	</div>
                    	
                    <? echo $content; ?>
	            </div>
	        </div>
            <hr>
            <footer>
                <p>&copy; НЕДВИЖИМОСТЬ</p>
            </footer>
        </div>

        <style>
        
        
/* Gallery */
.backstretch {
	display: none;
}
#drop-files {
	position:relative;
	width: 500px;
	height: 140px;
	margin: 0 auto;
	background: rgba(0,0,0,0.1);
	border-radius: 10px;
	border: 4px dashed rgba(0,0,0,0.2);
	padding-top:80px;
	text-align: center;
	font-size: 2em;
	font-weight: bold;
}

#uploaded-holder {
	display: none;
	position:relative;
	margin: 0 auto;
}

#dropped-files {
	display:block;
	margin: 0 auto;
	width: 95%;
}

#upload-button {
	z-index: 9999;
	display: none;
	margin: 20px 0;
}

.drop-button {
	display: block;
	position: absolute;
	z-index: 9999;
	padding: 5px;
	width: 100%;
	background: rgba(0,0,0,0.6);
	font-size: 1em;
	bottom: 0;
	text-align: center;
	text-decoration: none;
	font-weight: 700;
	color: #FFF;
}

#dropped-files .image {
	position: relative;
	height: 280px;
	width: 360px;
	border: 4px solid #fff;
	box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
	background: #fff;
	float: left;
	border-radius: 4px;
	margin: 0 7px 7px 0;
	overflow: hidden;
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
	width: 95%;
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
	position: absolute;
	z-index: 9999;
	display:block;
	width: 360px;
	background: rgba(0,0,0,0.6);
	font-size: 1em;
	bottom: 0;
	text-align: center;
	text-decoration: none;
	font-weight: 700;
	color: #FFF;
	padding: 5px;
}


        
        </style>
        
        <script>
        $('#setting-form').bind("keyup keypress", function(e) {
		  var code = e.keyCode || e.which; 
		  if (code  == 13) {               
		    e.preventDefault();
		    return false;
		  }
		});

		</script>
                
               
		<script src="/vendors/ckeditor/ckeditor.js"></script>
		<script src="/vendors/ckeditor/adapters/jquery.js"></script>

		<script type="text/javascript">
		function openKCFinder(field) {
		    window.KCFinder = {
		        callBack: function(url) {
		            field.value = url;
		            window.KCFinder = null;
		        }
		    };
		    window.open('<?php echo Yii::app()->baseUrl; ?>/kcfinder/browse.php?type=files&dir=files/public', 'kcfinder_textbox',
		        'status=0, toolbar=0, location=0, menubar=0, directories=0, ' +
		        'resizable=1, scrollbars=0, width=800, height=600'
		    );
		}
		</script>

        <script>
        $(function() {
			CKEDITOR.config.allowedContent = true;
			CKEDITOR.config.allowedContent = true;
			CKEDITOR.config.removeFormatAttributes = '';
			CKEDITOR.config.extraAllowedContent = 'div[id]; object[id,name,width,height]; param[name,value]; ' +
    'embed[src,type,allowscriptaccess,allowfullscreen,wmode,width,height]';
			CKEDITOR.config.extraPlugins = 'popup';
			CKEDITOR.config.extraPlugins = 'filebrowser';
			CKEDITOR.config.extraPlugins = 'justify';
			CKEDITOR.config.extraPlugins = 'table';
			CKEDITOR.config.extraPlugins = 'pdf';
			CKEDITOR.config.filebrowserBrowseUrl = '<?php echo Yii::app()->baseUrl; ?>/kcfinder/browse.php?type=files';
			CKEDITOR.config.filebrowserImageUploadUrl = '<?php echo Yii::app()->baseUrl; ?>/kcfinder/upload.php?type=files';
						
            // Ckeditor standard
            $( 'textarea#ckeditor_standard' ).ckeditor({width:'98%', height: '250px', toolbar: [
				{ name: 'document', items: [ 'Source', '-', 'RemoveFormat', '-', 'Link', 'Unlink', '-', 'Anchor' ] },	// Defines toolbar group with name (used to create voice label) and items in 3 subgroups.
				{ name: 'justify', items: [  'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] } ,{ name: 'styles', items : [ 'Format','Font','FontSize' ] },
				[ 'Bold', 'Italic', 'Underline', '-', 'NumberedList','-','BulletedList','-','Outdent','Indent','-', 'Table','-', 'Flash', 'Image', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],			// Defines toolbar group without name.
				//{ name: 'basicstyles', items: [ 'Bold', 'Italic' ] }
			]});
        });
        </script> 
        <script>

	jQuery(document).ready(function() {   
	  // FormValidation.init();
	});
	

        $(function() {
            $(".datepicker").datepicker({ dateFormat: "yyyy-mm-dd" });
            $(".uniform_on").uniform();
           // $(".chzn-select").chosen();
            $('.textarea').wysihtml5();

            $('#rootwizard').bootstrapWizard({onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index+1;
                var $percent = ($current/$total) * 100;
                $('#rootwizard').find('.bar').css({width:$percent+'%'});
                // If it's the last tab then hide the last button and show the finish instead
                if($current >= $total) {
                    $('#rootwizard').find('.pager .next').hide();
                    $('#rootwizard').find('.pager .finish').show();
                    $('#rootwizard').find('.pager .finish').removeClass('disabled');
                } else {
                    $('#rootwizard').find('.pager .next').show();
                    $('#rootwizard').find('.pager .finish').hide();
                }
            }});
            $('#rootwizard .finish').click(function() {
                alert('Finished!, Starting over!');
                $('#rootwizard').find("a[href*='tab1']").trigger('click');
            });
        });
        </script>
        
        
		<script>
			$('#city_selector').change(function(){
				var city_id = $(this).val();
				var object_type = $('#object_type_hidden').val();
				
				if(city_id != '')
					window.location.replace("/objects/type/"+object_type+"/city/"+city_id);
				else
					window.location.replace("/objects/type/"+object_type);
				
			});
		</script>
				
        <link type="text/css" href="/vendors/bootstrap-timepicker.css" />
        <script type="text/javascript" src="/vendors/bootstrap-timepicker.js"></script>

        
    <link rel="stylesheet" href="/bower_components/drop/css/drop-theme-basic.css"/>
    <link rel="stylesheet" href="/bower_components/drop/css/drop-theme-arrows-bounce.css"/>
    <link rel="stylesheet" href="/bower_components/drop/css/drop-theme-hubspot-popovers.css"/>
    <link rel="stylesheet" href="/css/bootstrap-switch.min.css"/>
    
	<script src="/js/jquery.autocomplete.js"></script>
	<script src="/js/additions.js"></script>
	<script src="/js/bootstrap-switch.min.js"></script>
    
    
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


</style>
  <script>
	
	$('form input').on('keyup keypress', function(e) {
		return e.which !== 13;
	});
  </script>
  
	<script>	
			$(".popup").each(function () {
                var a = new Drop({
                    target: this,
                    content: $(this).attr('hiddentitle'),
                    position: 'top right',
                    openOn: 'hover',
                    classes: 'drop-theme-arrows-bounce drop-hero'
                });
            });
            
            $(".bootstrap-switch").bootstrapSwitch({
	            size: 'small',
	            inverse: true,
	            handleWidth: 40,
	            onText: 'Вкл',
	            onColor: 'success',
            });
	</script>
        <style>
        	.bootstrap-timepicker-widget.modal {
	        	width:210px;
        	}
        	.bootstrap-timepicker-widget.modal input {
	        	width:30px;
	        	margin-left: 12px;
        	}
		</style>
    </body>

</html>