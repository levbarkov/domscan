<?
	$months = array('','января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря');
	
	$months_title = array('','Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь');


				 	$this->setPageTitle('Наши сотрудники');
				 	
				 	$order_dir == 'asc' ? $order_reverse = 'desc' : $order_reverse = 'asc';
                 
?>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
                <div class="type-page__title-wrapper">
                    <h1>Наши сотрудники</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            
            <div class="col-xs-9">
            
            
					<div class="staff__filter-wrapper">
					    <!--<label class="staff__filter-label">Компетенции:</label>
					    <select class="staff__filter-competence-dropdown">
					        <option value="1">Все</option>
					        <option value="2">Юрист</option>
					        <option value="3">Не только юрист</option>
					    </select>-->
					    <label class="staff__filter-label-sort">Сортировать:</label>
					
					    <div class="staff__filter-sort">
					                        <a href="/sotrudniki/?type=rating&sort=<?= $order_reverse ?>" class="staff__filter-sort-btn">
					                            По рейтингу
					                            <span class="icon icon-filter-sort-arrow staff__filter-sort-icon <?= ($order_dir == 'desc') ? 'active' : '' ?>"></span>
					                            <span class="icon icon-filter-sort-arrow-down staff__filter-sort-icon <?= ($order_dir == 'asc') ? 'active' : '' ?>"></span>
					                        </a>
					
					    </div>
					
					</div>

					<!-- Начало блока сотрудники -->
					<? foreach($employ_list as $employee): ?>
					
					<div class="staff__wrapper vcard">
					
					    <div class="staff__content-wrapper">
					        <div class="staff__photo-wrapper">
					        	<? if($employee->photo): ?>
					            	<img class="staff__photo photo" style="background-image: url('<?= $employee->photo ?>')"/>
					            <? endif ?>
					        </div>
					
					        <div class="staff__info-wrapper">
					            <div class="staff__info-name">
					                <div>
					                    <span class="n"><span class="given-name"><?= $employee->name ?></span></span>,
					                    <span class="staff__info-name-post title"><?= $employee->title ?></span>
					
					                    <div class="staff__info-rating">
					                    	<? if($employee->negative): ?>
					                        <span class="staff__info-rating-negative">-<?= $employee->negative ?></span>
					                        <? endif ?>
					                        <span class="staff__info-rating-positive">+<?= $employee->positive ?></span>
					                    </div>
					                </div>
					
					
					            </div>
					
					            <!-- Начало блока контакты и списка умений -->
					
					            <div class="row">
					                <div class="col-xs-5 staff__info-contacts-wrapper">
					
					                    <ul class="staff__info-contacts-list-phone">
					                        <li class="staff__info-contacts-list-phone-item">
					                            <a class="staff__info-contacts-list-phone-item-link tel" value="8-902-990-73-72" href="#">
					                                <?= $employee->phone ?>
					                            </a>
					                        </li>
					                    </ul>
					
					                    <ul class="staff__info-contacts-list-mail">
					                        <li class="staff__info-contacts-list-mail-item">
					                            <a class="staff__info-contacts-list-mail-item-link email" href="mailto:<?= $employee->email ?>">
					                                <?= $employee->email ?>
					                            </a>
					                        </li>
					                    </ul>
					
										<? if ($employee->skype): ?>
					                    <ul class="staff__info-contacts-list-skype">
					                        <li class="staff__info-contacts-list-skype-item">
					                            <a class="staff__info-contacts-list-skype-item-link" href="skype:<?= $employee->skype ?>">
					                                <?= $employee->skype ?>
					                            </a>
					                        </li>
					                    </ul>
					                    <? endif ?>
					
					
					                </div>
					
					                <div class="col-xs-7 staff__info-contacts-wrapper">
										<?= $employee->text ?>
					                    <!--<ul class="staff__info-contacts-list-skills ">
					                        <li class="staff__info-contacts-list-skills-item">Юридическая консультация</li>
					                        <li class="staff__info-contacts-list-skills-item">Составление договора</li>
					                        <li class="staff__info-contacts-list-skills-item">Помощь в сборе документов</li>
					                        <li class="staff__info-contacts-list-skills-item">Регистрация сделки</li>
					                    </ul>-->
					
					                </div>
					            </div>
					
					            <!-- Начало блока ссылок для отзывов -->
					
					            <div class="staff__info-link-group">
					            <? if(Yii::app()->user->isGuest || !$this->checkUserIndeed()): ?>
					                <a href="#reg" class="show-modal staff__info-link-write">Оставить отзыв</a>
					            <? else: ?>
					                <a href="#openModalFor<?= $employee->id ?>" class="staff__info-link-write">Оставить отзыв</a>
					            <? endif ?>
					            <? if(count($employee->otzivi)): ?>
					                <a href="#" data-id="<?= $employee->id ?>" class="staff-show staff__info-link active">
					                    Показать отзывы
					                    <span class="icon icon-filter-sort-arrow staff__info-link-icon-show"></span>
					                </a>
					                <a href="#" data-id="<?= $employee->id ?>" class="staff-hide staff__info-link ">
					                    Скрыть отзывы
					                    <span class="icon icon-filter-sort-arrow-down staff__info-link-icon-hide"></span>
					                </a>
					            <? endif ?>
					            </div>
					
					        </div>
					    </div>
	    
	    
	    
						<div class="row hreview">
					        <div class="col-xs-12 staff__review staff__review__<?= $employee->id ?>">
					        	<? foreach($employee->otzivi as $otziv): ?>
					            <div class="staff__review-wrapper active">
					                <div class="staff__review-person">
					                    <span class="staff__review-person-name reviewer vcard">
					                       <span class="fn"> 
					                       <? if($otziv->user_id): ?>
					                       		<?= $otziv->user->name ?>
					                       <? else: ?>
					                       		<?= $otziv->user_name ?> 
					                       <? endif ?>
					                       </span>
					                    </span>
					                    <a href="<?= $otziv->user_soclink ?>">
					                        <span class="staff__review-person-social-icon <?= $otziv->user_socnetwork ?>"></span>
					                    </a>
					
					                    <span class="staff__review-date dtreviewed"><?= $otziv->date ?></span>
					                </div>
					
					                <div class="staff__review-text">
					                	<? if($otziv->vote): ?>
					                    <span class="icon-review-positive staff__review-icon"> </span>
					                    <? else: ?>
					                    <span class="icon-review-negative staff__review-icon"> </span>
										<? endif ?>
					
					                    <p>
					                        <span class="description">
					                        	<?= $otziv->text ?>
					                        	<? if($this->checkEditablePermissions()): ?> <a href="/sotrudniki/deleteotziv/<?= $otziv->id ?>">(удалить)</a><? endif ?>
					                        </span>
					                    </p>
					
					                </div>
					            </div>
					            <? endforeach ?>
					            <!--<div class="staff__review-show-more active">
					                <a class="staff__review-show-more-link " href="#">
					                    показать ещё 5
					                </a>
					            </div>-->
					        </div>
					    </div>
					</div>
					
					
					<? endforeach ?>
					
					
				
				
					<!-- Модальное окно -->
					
					<? foreach($employ_list as $employee): ?>
					<div id="openModalFor<?= $employee->id ?>" class="staff__modal">
					    <div class="staff__modal-wrapper">
					        <a href="#close" title="Закрыть" class="staff__modal-close">
					            <img src="/img/icon-city-close.png" alt="#"/>
					        </a>
					
					        <h3 class="staff__modal-title">
					            Оставить отзыв
					        </h3>
					        
					
					        <!--<div class="staff__modal-social-wrapper">
					            <label class="staff__modal-label">Войти через соцсети:</label>
					            <a href="#">
					                <span class="staff__review-person-social-icon vk"></span>
					            </a>
					            <a href="#">
					                <span class="staff__review-person-social-icon twitter"></span>
					            </a>
					            <a href="#">
					                <span class="staff__review-person-social-icon facebook"></span>
					            </a>
					            <a href="#">
					                <span class="staff__review-person-social-icon ok"></span>
					            </a>
					        </div>-->
					
					        <form action="/sotrudniki/post/">
					        	<input type="hidden" name="employ_id" value="<?= $employee->id ?>"/>
					            <div class="staff__modal-btn-group">
					                <label class="staff__modal-btn-label">
					                    Ваш отзыв:
					                </label>
					                <input class="staff__modal-btn-check-positive" type="radio" value="1" id="positive<?= $employee->id ?>" name="vote" checked/>
					                <label for="positive<?= $employee->id ?>" class="btn btn-default staff__modal-btn-positive">
					                    положительный
					                </label>
					                <input class="staff__modal-btn-check-negative" type="radio" value="0" id="negative<?= $employee->id ?>" name="vote"/>
					                <label for="negative<?= $employee->id ?>" class="btn btn-default staff__modal-btn-negative" >
					                    отрицательный
					                </label>
					            </div>
					
					            <textarea name="text" id="" cols="30" rows="9" class="staff__modal-textarea" required></textarea>
					
					            <input type="submit" class="staff__modal-submit"/>
					        </form>
					    </div>
					</div>
					<? endforeach ?>


				
				
            </div> <!-- //col-xs-9 -->
            
            
            
            
			<div class="col-xs-3">
			    <div class="row">
			        <div class="special-col col-xs-12">
                        <?= $this->renderPartial('_special'); ?>			        
                    </div>
			    </div>
			</div>

        </div>
        
   
    </div>
</div>
