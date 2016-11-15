<?
class SitemapController extends Controller
{
    public function actionIndex()
    {
        $items = array();        
        foreach (array('Builder','Condominium','CondominiumStaticPage','StaticPage','Estate') as $class)
            $items = array_merge($items, CActiveRecord::model($class)->findAll());
 
        $this->renderPartial('index', array(
            'host'=>Yii::app()->request->hostInfo,
            'items'=>$items,
        ));        
    }
    
    
    public function actionRealty()
    {
        $items = array();        
        foreach (array('Estate') as $class)
            $items = array_merge($items, CActiveRecord::model($class)->findAll());
 
        $this->renderPartial('realty', array(
            'host'=>Yii::app()->request->hostInfo,
            'items'=>$items,
        ));        
    }
}