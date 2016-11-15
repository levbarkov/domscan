<?
	$this->setPageTitle('Редактировать данные – Личный Кабинет');
?>
<div class="content">
	<?= $this->renderPartial('_cabinet_header') ?>

<div class="container-fluid">
<div class="row">
<div class="col-xs-12">
<div class="user__wrapper">
	<?= $this->renderPartial('_user_title') ?>

<div class="user__data-change">

    
	<?php $form=$this->beginWidget('CActiveForm', array(
		'htmlOptions'=>array('enctype'=>'multipart/form-data', 'class'=>'form-horizontal'),
		'enableAjaxValidation'=>true,
	)); ?>
	

		<?php echo $form->errorSummary($user,"Пожалуйста, исправьте следующие ошибки","",array('class'=>'alert alert-error')); ?>
        <table class="user__data-change-table">
            <tr class="user__data-change-table-row">
                <td class="user__data-change-table-col">Ваше имя:</td>
                <td class="user__data-change-table-col">
                    <?php echo $form->textField($user,'name',array('class'=>'faq__ask-input','id'=>'address')); ?>
                </td>
            </tr>
            <tr class="user__data-change-table-row">
                <td class="user__data-change-table-col">Телефон:</td>
                <td class="user__data-change-table-col">
                    <?php echo $form->textField($user,'telephone',array('class'=>'faq__ask-input phone-mask','id'=>'address')); ?>
                </td>
            </tr>
            <tr class="user__data-change-table-row">
                <td class="user__data-change-table-col">E-mail:</td>
                <td class="user__data-change-table-col">
                    <?php echo $form->textField($user,'email',array('class'=>'faq__ask-input','id'=>'address')); ?>
                </td>
            </tr>
            <tr class="user__content-change-table-row">
                <td class="user__data-change-table-col"></td>
                <td class="user__data-change-table-col">
                    <?php echo $form->checkBox($user,'visible',array('class'=>'user__data-change-check','id'=>'show','hidden'=>'hidden')); ?>
                    <label for="show" class="user__data-change-label">Виден всем</label>
                </td>
            </tr>
            <tr class="user__data-change-table-row">
                <td class="user__data-change-table-col"></td>
                <td class="user__data-change-table-col">
                    <input type="submit" class="staff__modal-submit" value="Сохранить"/>
                </td>
            </tr>
        </table>
		<?php $this->endWidget(); ?>
		
</div>

</div>
</div>
</div>
</div>
</div>

