<?php
 
class SiteUserHelper
{
        
    public static function GetTableButtons($id, $username)
    {
    	$html = '<nobr>
    				<a class="btn btn-info" href="/siteuser/update/'. $id .'"><i class="icon-pencil icon-white"></i></a>
    			</nobr>';
    			
        if($username != 'admin'): 
        	$html .= '<nobr><a class="btn btn-warning" href="/siteuser/delete/'.$id.'" onclick="return confirm(\'Вы точно хотите удалить? Эту операцию отменить нельзя!\')"><i class="icon-remove icon-white"></i></a></nobr>';
	    endif;
	    	
		return $html;
    }
    

}