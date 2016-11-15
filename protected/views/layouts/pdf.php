<!DOCTYPE html>
<font face="arial">
<!--[if IE 8]>
<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" style="background-color: white !important;"> <!--<![endif]-->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php echo isset($this->pageTitle) ? $this->pageTitle : Yii::app()->name; ?></title>
    <meta name="description" content="">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    


    <style>
    <? include(dirname(Yii::app()->request->scriptFile).'/css/style.css') ?>
    
    
    * { font-family: 'dejavu sans' !important;}
    html, body {  background-color: white !important; }
    
    .property__title-sale {
	    background: url("/img/sale_nontransparent.png") center no-repeat;
    }
    .property__available-mortgages:before {
	    
		background: url("/img/prosent_nontransparent.png");
    }
    .property__available-parent:before {
	    background: url("/img/babycapital_nontransparent.png");
    }
    .property__available-installment-plan:before {
		background: url("/img/credit_nontransparent.png");
    }
    </style> 
    <!--<link rel="stylesheet" href="/css/style.min.css"/>-->
</head>
<body>


<?php echo $content; ?>

</body>
</html>
</font>