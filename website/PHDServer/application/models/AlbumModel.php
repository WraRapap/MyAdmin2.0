<?php

class AlbumModel extends Model
{
    /* 业务逻辑层实现 */
    
    //getAlbumList
    public function getAlbumList($respPkt)
    {
        $this->_table = "dance";
        $albumSql = sprintf("select D.id, D.name, D.type, P.path as cover from `%s` as D, `%s` as P where D.id = P.dance_id and D.cover_id = P.id", $this->_table, 'dancePic');
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($albumSql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else {
            
            $albumDBFetchArray = $pdoResult->fetchAll();
            $albumArray = array();
            foreach($albumDBFetchArray as $albumDBFetch)
            {
                array_push($albumArray, $albumDBFetch);
            }
        }

        $respPkt->albumList = $albumArray; //給入帳號資料 
        return $ret;
    }
    
    //getAlbumDetail
    public function getAlbumDetail($dance_id, $respPkt)
    {
        $this->_table = "dancePic";
        $albumSql = sprintf("select * from `%s` as P where P.dance_id  = %s", $this->_table, $dance_id);
        $ret = 0; //表示成功
         
        //登入
        $pdoResult = $this->query($albumSql);
        $errorCode = $this->getError($pdoResult);
        
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else {
            
            $PicDBFetchArray = $pdoResult->fetchAll();
            $albumArray = array();
            foreach($PicDBFetchArray as $PicDBFetch)
            {
                array_push($albumArray, $PicDBFetch);
            }
        }

        $respPkt->albumPicList = $albumArray; //給入帳號資料 
        return $ret;
    }
}