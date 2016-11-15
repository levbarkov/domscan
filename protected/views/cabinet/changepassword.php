<? $this->setPageTitle('Сменить пароль – Личный Кабинет'); ?>
<div class="content">
	<?= $this->renderPartial('_cabinet_header') ?><div class="container-fluid">
<div class="row">
<div class="col-xs-12">
<div class="user__wrapper">
	<?= $this->renderPartial('_user_title') ?>
	
<div class="user__data-password">
	<?php $form=$this->beginWidget('CActiveForm', array(
		'htmlOptions'=>array('enctype'=>'multipart/form-data', 'class'=>'form-horizontal'),
		'enableAjaxValidation'=>true,
	)); ?>

		<?php echo $form->errorSummary($record,"Пожалуйста, исправьте следующие ошибки","",array('class'=>'alert alert-error')); ?>
        <table class="user__data-password-table">
            <tr class="user__data-password-table-row">
                <td class="user__data-password-table-col">Старый пароль:</td>
                <td class="user__data-password-table-col">
                    <input type="password" class="faq__ask-input"/>
                </td>
            </tr>
            <tr class="user__data-password-table-row">
                <td class="user__data-password-table-col">Новый пароль:</td>
                <td class="user__data-password-table-col">
                    <?php echo $form->passwordField($record,'password',array('class'=>'faq__ask-input', 'autocomplete'=>"off")); ?>
                </td>
            </tr>
            <tr class="user__data-password-table-row">
                <td class="user__data-password-table-col">Ещё раз:</td>
                <td class="user__data-password-table-col">
                    <?php echo $form->passwordField($record,'repeat_password',array('class'=>'faq__ask-input', 'autocomplete'=>"off")); ?>
                </td>
            </tr>
            <tr class="user__data-password-table-row">
                <td class="user__data-password-table-col"></td>
                <td class="user__data-password-table-col">
                    <input id="show" type="checkbox" class="user__data-change-check" hidden/>
                    <label for="show" class="user__data-change-label">Показать пароль</label>
                </td>
            </tr>
            <tr class="user__data-password-table-row">
                <td class="user__data-password-table-col"></td>
                <td class="user__data-password-table-col">
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
