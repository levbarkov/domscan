<div class="user__title">



    <? if(Yii::app()->user->isGuest || $this->checkUserIndeed()): ?>
    <a href="/cabinet/index" class="user__title-btn <?= ($this->action->Id == 'index') ? 'active' : '' ?>">
        Мои объявления
    </a>
	<? endif ?>

    <a href="/cabinet/favorites" class="user__title-btn <?= ($this->action->Id == 'favorites') ? 'active' : '' ?>">
        Избранное
    </a>
    
    <? if(Yii::app()->user->isGuest || $this->checkUserIndeed()): ?>
    <a href="/cabinet/personal" class="user__title-btn <?= ($this->action->Id == 'changepassword' || $this->action->Id == 'personal') ? 'active' : '' ?>">
        Персональные данные
    </a>
	<? endif ?>
</div>