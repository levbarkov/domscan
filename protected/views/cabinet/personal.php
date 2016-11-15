<? $this->setPageTitle('Персональные данные – Личный Кабинет'); ?>
<div class="content">
	<?= $this->renderPartial('_cabinet_header') ?>
<div class="container-fluid">
    <div class="row">
        <div class="col-xs-12">
            <div class="user__wrapper">
				<?= $this->renderPartial('_user_title') ?>
                <div class="user__data-personal">
                    <table class="user__data-personal-table">
                        <tr class="user__data-personal-table-row">
                            <td class="user__data-personal-table-col">
                                <label class="user__data-personal-label">Ваше имя:</label>
                            </td>
                            <td class="user__data-personal-table-col">
                                <?= $user->name ?>
                            </td>
                        </tr>
                        <tr class="user__data-personal-table-row">
                            <td class="user__data-personal-table-col">
                                <label class="user__data-personal-label">Телефон:</label>
                            </td>
                            <td class="user__data-personal-table-col">
                                <?= $user->telephone ?>
                            </td>
                        </tr>
                        <tr class="user__data-personal-table-row">
                            <td class="user__data-personal-table-col">
                                <label class="user__data-personal-label">E-mail:</label>
                            </td>
                            <td class="user__data-personal-table-col">
                                <?= $user->email ?>
                            </td>
                        </tr>
                    </table>
                    <div class="user__data-personal-link-group">
                        <a class="user__data-personal-link" href="/cabinet/settings">Редактировать данные</a>
                        <a class="user__data-personal-link" href="/cabinet/changepassword">Сменить пароль</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>