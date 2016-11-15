<?php
 
class PaginationHelper
{
        
    public static function GetPaginationArray($page_count, $current_page)
    {
		$pagination = array();
		for ($i = 1; $i < $page_count + 1; $i++) {						
			if($current_page + 2 >= $i && $current_page - 2 <= $i || $i <= 1 || $i > $page_count - 1 || ($current_page < 3 && $i <= 5)) {
	            $pagination[] = array(
	            
	                'value' => $i, 
	                'text' => $i,
	                'active' => ($i == $current_page ? true : false)
	            );	         						
				$not_placed = true; 
	        } else {
	        	if($not_placed) {
			        $pagination[] = array(            
		                'value' => false,
		                'text' => '...', 
		                'active' => false
		            );
					$not_placed = false;
				}
	        }

        }		        
        if($pagination[0]['active'] == false) {
        	$newelement = array(			            
	                'value' => $current_page-1, 
	                'text' => '← Назад',
	                'active' => false
	            );	
	        array_unshift($pagination, $newelement);
        }
        $length = count($pagination);
        if($pagination[$length-1]['active'] == false) {
        	$newelement = array(			            
	                'value' => $current_page+1, 
	                'text' => 'Далее →',
	                'active' => false
	            );	
	        array_push($pagination, $newelement);
        }
		return $pagination;
    }
    

}