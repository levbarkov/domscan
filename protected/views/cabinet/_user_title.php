<div class="user__title">
    <p>Вы вошли в личный кабинет как не авторизованный пользователь, чтобы воспользоваться всеми функциями авторизируйтесь или зарегистрируйтесь.</p>
    <?php if(!Yii::app()->user->isGuest || $this->checkUserIndeed()){ ?>
        <a href="/cabinet/index" class="user__title-btn <?= ($this->action->Id == 'index') ? 'active' : '' ?>">
            Мои объявления
        </a>
	<?php } else {?>
        <a href="#" style="color: gray; cursor: text; border: none;" onclick="return false;" class="user__title-btn">
            Мои объявления
        </a>
    <?php }?>

    <a href="/cabinet/favorites" class="user__title-btn <?= ($this->action->Id == 'favorites') ? 'active' : '' ?>">
        Избранное
    </a>

    <?php if(!Yii::app()->user->isGuest || $this->checkUserIndeed()){ ?>
        <a href="/cabinet/personal" class="user__title-btn <?= ($this->action->Id == 'changepassword' || $this->action->Id == 'personal') ? 'active' : '' ?>">
            Персональные данные
        </a>
    <?php } else {?>
        <a href="#" style="color: gray; cursor: text; border: none;" onclick="return false;" class="user__title-btn">
            Персональные данные
        </a>
    <?php }?>
</div>