<?php
 
class ModeratorLogHelper
{
    public static function AddToLog($unique_id, $text, $link = null, $user = null)
    {
        if (null === $link) {
	        $link = '';
	    }
        if (null === $user) {
	        $user = '';
	    }
	    
	    $elements = ModeratorLog::model()->findAllByAttributes(array('unique_id'=>$unique_id));
	    foreach($elements as $element) {
		    $element->delete();
	    }
	    
	    $log_entry = new ModeratorLog;
	    $log_entry->unique_id = $unique_id;
	    $log_entry->text = $text;
	    $log_entry->url = $link;
	    $log_entry->user = $user;
	    $log_entry->time = time();
	    $log_entry->save();
    	//Добавлять в лог, с тремя переменными 
    	//unique_id – уникальный ID, при совпадении ID заменять с новым текстом и сбрасывать время на текущее.
    	//text -  текст
    	//link - ссылка на объект при наличии
        return true;
    }
    
    
    public static function DeleteFromLog($unique_id)
    {
    	$elements = ModeratorLog::model()->findAllByAttributes(array('unique_id'=>$unique_id));
	    foreach($elements as $element) {
		    $element->delete();
	    }
        return true;
    }
    
    public static function GetTableUrl($text, $url)
    {
    	$html = '';
	    if($url)
	    	$html = '<a href="'.$url.'">'.$text.'</a>';
	    else
	    	$html = $text;
	    	
		return $html;
    }
    
    public static function GetFilterButtons($id)
    {
    
    	$html = '<nobr>
    				<a class="btn btn-mini btn-info" title="Показать пользователя" href="/siteuser/update/'. $id .'"><i class="icon-user icon-white"></i></a>
    			</nobr>';
    	$html .= '<nobr>
    				<a class="btn btn-mini btn-success" title="Фильтрация по пользователю" href="/site/admin/?filter_user='. $id .'"><i class="icon-filter icon-white"></i></a>
    			</nobr>';

	    	
		return $html;
    }
    
    public static function PurgeOldFromLog()
    {
        return true;
    }
}