<?php
	
class EstateImage extends CActiveRecord
{
			
	public static function saveImages($images, $id, $taxonomy)
	{
		function png2jpg($originalFile, $outputFile, $quality) {
		    $image = imagecreatefrompng($originalFile);
		    $bg = imagecreatetruecolor(imagesx($image), imagesy($image));
			imagefill($bg, 0, 0, imagecolorallocate($bg, 255, 255, 255));
			imagealphablending($bg, TRUE);
			imagecopy($bg, $image, 0, 0, 0, 0, imagesx($image), imagesy($image));
			//imagedestroy($image);
		    imagejpeg($image, $outputFile, $quality);
		    imagedestroy($image);
		}


		if (isset($images) AND (!empty($images[0]))) {
			$uploaddir = dirname(Yii::app()->request->scriptFile).'/uploads/objects/item_'. $id . '/';
			if (!is_dir($uploaddir)) {
				mkdir($uploaddir);
			}
			$command = Yii::app()->db->createCommand();
			foreach ($images as $image) {
			
				$count_already_uploaded = count(self::model()->findAllByAttributes(array('parent'=>$id)));
				
				if($count_already_uploaded < 6) {
					$data = explode(',', $image);
	
					$getMime = explode('/', $data[0]);
					$getMime = explode(';', $getMime[1]);
					$mime = $getMime[0];
					
					$encodedData = str_replace(' ','+',$data[1]);
					$decodedData = base64_decode($encodedData);
					$randomName = substr_replace(sha1(microtime(true)), '', 12);
					$randomName_mime = $randomName.'.'.$mime;
					
					if(file_put_contents($uploaddir.$randomName_mime, $decodedData)) {
						
						
						
						if($mime == 'png') {
							png2jpg($uploaddir.$randomName_mime,$uploaddir.$randomName.'.jpg', 100);
							$mime = 'jpg';
							@unlink($uploaddir.$randomName_mime);
							$randomName_mime = $randomName.'.jpg';
						}
						$magicianObj = new imageLib($uploaddir.$randomName_mime);
						$magicianObj -> resizeImage(1780, 1000, 'auto',true);
						$magicianObj -> saveImage($uploaddir.$randomName_mime);
						
						if($mime == 'jpg') {
							$img = imagecreatefromjpeg($uploaddir.$randomName_mime);   // load the image-to-be-saved
							imagejpeg($img,$uploaddir.$randomName_mime,70);
						}					
						
						$item = EstateImage::model()->findByAttributes(array('parent'=>$id,'main'=>1));
						if($item)
							$is_main = false;
						else {
							$is_main = true;
							$magicianObj = new imageLib($uploaddir.$randomName_mime);
							$magicianObj -> resizeImage(460, 290, 'crop',true);
							$magicianObj -> saveImage($uploaddir.'main_image.jpeg');
							$estate = Estate::model()->findByPk($id);
							$estate->image = '/uploads/objects/item_'. $id . '/main_image.jpeg';
							$estate->save();
						}
						
						$command->insert('real_estate_image', array(
							'parent' => $id,
						//	'url' => $randomName,
							'name' => $randomName_mime,
							'uploaddir' => '/uploads/objects/item_'. $id . '/',
							'main' => $is_main
							//'create_time' => date("Y-m-d H:i:s"),
						));
						
						
						
						
						
					}
					else {
						return false;
					}
				} 
			}
			return true;
		}
		return true;
	}
	
	public static function deleteAllImages($itemId)
	{
		$item = Estate::model()->findByPk($itemId);
		$images = $item->attached_images; 
		if (!empty($images[0])) {
			foreach ($images as $image) {
				if (!self::deleteImage($image->id, $itemId, $taxonomy))
					return false;
				$uploaddir = dirname(Yii::app()->request->scriptFile).$image->uploaddir;
			}
		}
		//print_r($uploaddir);
		//$uploaddir = Yii::app()->params[$taxonomy]['uploadDir'].$itemId;
		if (is_dir($uploaddir)) {
			rmdir ($uploaddir);
		}
		return true;
	}
	
	public static function deleteImage($imageId, $itemId)
	{
		if (self::deleteImageFile($imageId, $itemId)) {
			$image = self::model()->findByPk($imageId);
			$estate = Estate::model()->findByPk($itemId);
			if($image && $image->main && $estate) {
				$filename = dirname(Yii::app()->request->scriptFile).$estate->image;
				@unlink($filename);
				$estate->image = '';
				$estate->save();				
			}	
			
			if (self::model()->deleteByPk($imageId))
				return true;
			else
				return false;
		} else {
			return false;
		}
	}

	public static function chooseImageFileAsMain($imageId, $itemId)
	{	
		$image = self::model()->findByPk($imageId);
		if ($image) {
			$command = Yii::app()->db->createCommand();
			$command->update('real_estate_image', array(
			    'main'=>'false',
			), 'parent=:id', array(':id'=>$itemId));
			$image->main = true;
			$image->save();
		
			$filename = dirname(Yii::app()->request->scriptFile).$image->uploaddir.'/'.$image->name;
			if (file_exists($filename)) {
				
				//$fileextension = CFileHelper::getExtension($filename);
				
				$magicianObj = new imageLib($filename);
				$magicianObj -> resizeImage(460, 290, 'crop',true);
				
				$upload_url = $image->uploaddir.'main_image.jpeg';
				$magicianObj -> saveImage(dirname(Yii::app()->request->scriptFile).$upload_url);
				
				
				$img = imagecreatefromjpeg(dirname(Yii::app()->request->scriptFile).$upload_url);   // load the image-to-be-saved
				imagejpeg($img,dirname(Yii::app()->request->scriptFile).$upload_url,65);
				
				$item = Estate::model()->findByPk($itemId);
				if($item) {
					$item->image = $upload_url;
					$item->save();
				}
						
				return true;
				
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	

	public static function deleteImageFile($imageId, $itemId)
	{	
		$image = self::model()->findByPk($imageId);
		if ($image) {	
			$filename = dirname(Yii::app()->request->scriptFile).$image->uploaddir.'/'.$image->name;
			if (file_exists($filename)) {
				if (unlink($filename))
					return true;
				else 
					return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
	
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function tableName()
	{
		return 'real_estate_image';
	}

	public function rules()
	{
		return array(
			array('parent', 'required'),
			array('id, parent, url', 'safe', 'on'=>'search'),
		);
	}

	public function relations()
	{
		return array(
		);
	}

	public function behaviors()
	{
		return array('CAdvancedArBehavior',
				array('class' => 'ext.CAdvancedArBehavior')
				);
	}

	public function attributeLabels()
	{
		return array(
			'id' => Yii::t('app', 'ID'),
			'en_option_name' => Yii::t('app', 'Название'),
			'info' => Yii::t('app', 'Описание'),
			'value' => Yii::t('app', 'Значение'),
		);
	}

	public function search()
	{
		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);

		$criteria->compare('name',$this->name,true);

		$criteria->compare('info',$this->info,true);

		$criteria->compare('value',$this->value,true);

		return new CActiveDataProvider(get_class($this), array(
			'criteria'=>$criteria,
		));
	}
}
