<? 
$login_model = new UserLoginForm;
if(isset($_POST['UserLoginForm']))
{
	$login_model->attributes=$_POST['UserLoginForm'];
	$login_model->validate();	
	
	//if($login_model->hasErrors('password'))
	//	$login_model->addError('password','Неверный пароль');
}
?>
<? 
$register_model = new SiteUser;
if(isset($_POST['SiteUser']))
{
	$register_model->attributes=$_POST['SiteUser'];
	$register_model->repeat_password = $register_model->password = 'u wot m8';
	$register_model->validate();	
	
	if(!$register_model->accept_terms) {
		$register_model->addError('accept_terms','Вы не приняли условия пользовательского соглашения!');
	}
}
?>
<div class="mymodal <?= isset($_POST['UserLoginForm']) || isset($_POST['SiteUser']) ? 'active-load' : '' ?>" id="reg">
    <div class="mymodal__window">
        <div class="form__login-wrapper">
            <a href="#login-block" class="form__btn <?= !isset($_POST['SiteUser']) ? 'active' : '' ?>">
                Вход
            </a>
            <a href="#registration-block" class="form__btn <?= isset($_POST['SiteUser']) ? 'active' : '' ?>">
                Регистрация
            </a>
            <div id="login-block" class="form__block form__login <?= !isset($_POST['SiteUser']) ? 'active' : '' ?>">
	            	<?php  $form=$this->beginWidget('CActiveForm', array(
	            		'action'=>'/site/user/',
						'id'=>'login-form',
					)); ?>			
					<?php echo $form->errorSummary($login_model,"Пожалуйста, исправьте следующие ошибки","",array('class'=>'alert alert-error')); ?>
	                <table class="user__data-change-table">
	                    <tr class="user__data-change-table-row">
	                        <td class="user__data-change-table-col form__login-label-col">E-mail:</td>
	                        <td class="user__data-change-table-col form__login-input-col">
								<?php echo $form->textField($login_model,'username',array('class'=>'faq__ask-input')); ?>
	                        </td>
	                    </tr>
	                    <tr class="user__data-change-table-row">
	                        <td class="user__data-change-table-col form__login-label-col">Пароль:</td>
	                        <td class="user__data-change-table-col form__login-input-col">
								<?php echo $form->passwordField($login_model,'password',array('class'=>'faq__ask-input')); ?>
	                        </td>
	                    </tr>
	
	
	                </table>
	                <div class="">
	                    <div class="pull-right">							
	                    	<?php echo $form->checkBox($login_model,'rememberMe',array('checked' => 'checked', 'class' => 'user__data-change-check', 'hidden' => 'hidden' )); ?>
	                        <label for="UserLoginForm_rememberMe" class="user__data-change-label form__login-acept">
	                            Оставаться в системе
	                        </label>
	                    </div>
	
	                    <div class="pull-left">
                        	<a class="form__btn form__login-acept-link" href="#recovery-block">Забыли пароль?</a>
	                    </div>
	                    <br/>
	                    <input type="submit" class="staff__modal-submit form__login-submit" value="Вход в систему"/>
	                </div>
				<?php $this->endWidget(); ?>
            </div>
            <div id="recovery-block" class="form__block form__login">
            	<?php  $form=$this->beginWidget('CActiveForm', array(
	            		'action'=>'/site/recovery/',
						'id'=>'login-form',
					)); ?>
                <table class="user__data-change-table">
                    <tr class="user__data-change-table-row">
                        <td class="user__data-change-table-col form__login-label-col">E-mail:</td>
                        <td class="user__data-change-table-col form__login-input-col">
                            <input type="text" name="email_recovery" id="email_recovery" class="faq__ask-input"/>
                        </td>
                    </tr>
                </table>
                <div class="">
                    <input type="submit" class="staff__modal-submit form__login-submit" value="Востановить пароль"/>
                </div>
				<?php $this->endWidget(); ?>
            </div>
            <div id="registration-block" class="form__block form__registration <?= isset($_POST['SiteUser']) ? 'active' : '' ?>">
            	<?php  $form=$this->beginWidget('CActiveForm', array(
	            		'action'=>'/site/register/',
						'id'=>'login-form',
					)); ?>
					
					<?php echo $form->errorSummary($register_model,"Пожалуйста, исправьте следующие ошибки","",array('class'=>'alert alert-error')); ?>
	                <table class="user__data-change-table">
	                    <tr class="user__data-change-table-row">
	                        <td class="user__data-change-table-col form__login-label-col">Ваше имя:</td>
	                        <td class="user__data-change-table-col form__login-input-col">
								<?php echo $form->textField($register_model,'name',array('class'=>'faq__ask-input')); ?>	                        
							</td>
	                    </tr>
	                    <tr class="user__data-change-table-row">
	                        <td class="user__data-change-table-col form__login-label-col">Телефон:</td>
	                        <td class="user__data-change-table-col form__login-input-col">
	                            <?php echo $form->textField($register_model,'telephone',array('class'=>'faq__ask-input phone-mask')); ?>
	                        </td>
	                    </tr>
	                    <tr class="user__data-change-table-row">
	                        <td class="user__data-change-table-col form__login-label-col">E-mail:</td>
	                        <td class="user__data-change-table-col form__login-input-col">
	                            <?php echo $form->textField($register_model,'email',array('class'=>'faq__ask-input')); ?>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td class="user__data-change-table-col form__login-label-col">Captcha:</td>
		                    <td class="user__data-change-table-col form__login-input-col">
							<?php $this->widget('application.extensions.recaptcha.EReCaptcha', 
							   array('model'=>$user, 'attribute'=>'validacion',
							         'theme'=>'red', 'language'=>'ru_RU', 
							         'publicKey'=>'6LfdBxwTAAAAAC75blU2PRzeVgqxZmOS2I-dNlUb')) ?>
							<?php echo CHtml::error($register_model, 'validacion'); ?>
							</td>
							
	                    </tr>
	
	                </table>
	                <div class="">
	                    <input id="show_1" type="checkbox" name="SiteUser[accept_terms]" class="user__data-change-check" value="true" <? if($register_model->accept_terms): ?>checked="checked"<? endif; ?> hidden/>
	                    <label for="show_1" class="user__data-change-label form__login-acept">Я принимаю условия
	                        <a class="form__login-acept-link" href="/terms_of_service">пользовательского соглашения</a>
	                    </label>
	                    <br/>
	                    <input type="submit" class="staff__modal-submit form__login-submit" value="Зарегистрироваться"/>
	                </div>
				<?php $this->endWidget(); ?>
            </div>
        </div>
    </div>
</div>
