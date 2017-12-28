<?php

class ActivityModel extends Model
{
    /* 业务逻辑层实现 */
    
    //addUser
    public function addActivity($reqPkt, $respPkt)
    {
        $this->_table = "dance";
        $pdoResult = $this->add($reqPkt);
        $ret = 0; //表示成功
        $errorCode = $this->getError($pdoResult);
        if($errorCode != 0) {
            $ret = -1;
            if($errorCode == 1062) $ret = -2;
        }
        else
        {
            $respPkt->id = $this->_dbHandle->lastInsertId();
        }
        return $ret;
    }
    
    public function addActivityImg($reqPkt, $respPkt)
    {
        $this->_table = "dancePic";
        
        $pdoResult = $this->add($reqPkt);
        $ret = 0; //表示成功
        $errorCode = $this->getError($pdoResult);
        
        //print_r( $reqPkt );
        if($reqPkt->is_cover == '1')
        {
            $this->_table = "dance";
            $reqPkt->updateData->cover_id = $this->_dbHandle->lastInsertId();
            $pdoResult = $this->update('id', $reqPkt->monthly_id, $reqPkt->updateData);
        }
        
        if($errorCode != 0) {
            $ret = -1;
            if($errorCode == 1062) $ret = -2;
        }
        return $ret;
    }
    
    //delUser
    public function delActivity($reqPkt, $respPkt)
    {
        $this->_table = "dance";
        $rowCnt = $this->delete($reqPkt->id);
        
        $this->_table = "dancePic";
        $rowCnt = $this->deleteByColumnName($reqPkt->id, 'monthly_id');
        
        $ret = 0; //表示成功
        if($rowCnt == 0) {
            $ret = -1;
            if($errorCode == 1062) $ret = -2;
        }
        return $ret;
    }
    
    //modUser
    public function modMonthly($reqPkt, $respPkt)
    {
        $this->_table = "monthly";
        $pdoResult = $this->update('id', $reqPkt->id, $reqPkt->updateData);
        $ret = 0; //表示成功
        $errorCode = $this->getError($pdoResult);
        if($errorCode != 0) {
            $ret = -1;
            if($errorCode == 1062) $ret = -2;
        }
        return $ret;
    }
    
    //queryUser
    public function queryActivity($reqPkt, $respPkt)
    {
        $this->_table = "dance";
        $this->_table2 = "dancePic";
        $querySql = sprintf("select M.id, M.name, M.descript, M.cover_id, P.name as cover_name from `%s` as M, `%s` as P where M.cover_id = P.id order by M.id DESC", $this->_table, $this->_table2);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($querySql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                array_push($_Array, $DBFetch);
            }
            $respPkt->MonthlyData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
    
    //queryUser
    public function queryActivityPic($reqPkt, $respPkt)
    {
        $this->_table = "dancePic";
        $querySql = sprintf("select M.id, M.name, M.monthly_id, M.is_cover from `%s` as M where M.monthly_id = %s", $this->_table, $reqPkt->id);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($querySql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                array_push($_Array, $DBFetch);
            }
            $respPkt->MonthlyPicData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
    
    //queryUserByID
    public function queryActivityByID($reqInfo, $respPkt)
    {
        $this->_table = "dance";
        $querySql = sprintf("select * from `%s` as M where M.id = %s", $this->_table, $reqInfo->id);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($querySql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                array_push($_Array, $DBFetch);
            }
            $respPkt->MonthlyData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
    
    //queryUser
    public function queryNewsOnlyText($reqPkt, $respPkt)
    {
        $this->_table = "news";
        $querySql = sprintf("select M.id, M.title, M.abstract, M.timestamp, M.submenu_id, M.menu_id from `%s` as M where M.menu_id != 0 and M.menu_id != 99 and M.imgUrl = '' order by M.id DESC limit 20", $this->_table);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($querySql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                array_push($_Array, $DBFetch);
            }
            $respPkt->NewsData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
    
    //queryUser
    public function queryNewsOnlyImg($reqPkt, $respPkt)
    {
        $this->_table = "news";
        $querySql = sprintf("select M.id, M.title, M.abstract, M.timestamp, M.submenu_id, M.menu_id, M.imgUrl from `%s` as M where M.menu_id = %s and M.menu_id != 99 and M.imgUrl != '' order by M.id DESC limit 1", $this->_table, $reqPkt->id);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($querySql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                array_push($_Array, $DBFetch);
            }
            $respPkt->NewsData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
    
    //queryUser
    public function queryNewsByMenuIDOnlyText($reqPkt, $respPkt)
    {
        $this->_table = "news";
        $querySql = sprintf("select M.id, M.title, M.abstract, M.timestamp, M.submenu_id, M.menu_id from `%s` as M where M.menu_id = %s and M.imgUrl = '' order by M.id DESC limit 20", $this->_table, $reqPkt->id);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($querySql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                array_push($_Array, $DBFetch);
            }
            $respPkt->NewsData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
    
    //queryUser
    public function queryNewsByMenuIDOnlyImg($reqPkt, $respPkt)
    {
        $this->_table = "news";
        $querySql = sprintf("select M.id, M.title, M.abstract, M.timestamp, M.submenu_id, M.menu_id, M.imgUrl from `%s` as M where M.menu_id = %s and M.imgUrl != '' order by M.id DESC limit 5", $this->_table, $reqPkt->id);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($querySql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                array_push($_Array, $DBFetch);
            }
            $respPkt->NewsData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
    
    //queryUser
    public function queryNewsBySubMenuIDOnlyImg($reqPkt, $respPkt)
    {
        $this->_table = "news";
        $querySql = sprintf("select M.id, M.title, M.abstract, M.timestamp, M.submenu_id, M.menu_id, M.imgUrl from `%s` as M where M.submenu_id = %s and M.imgUrl != '' order by M.id DESC limit 4", $this->_table, $reqPkt->id);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($querySql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                array_push($_Array, $DBFetch);
            }
            $respPkt->NewsData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
    
    //queryUser
    public function queryNewsBySubMenuID($reqPkt, $respPkt)
    {
        $this->_table = "news";
        $querySql = sprintf("select M.id, M.title, M.abstract, M.timestamp, M.submenu_id, M.menu_id, M.imgUrl from `%s` as M where M.submenu_id = %s order by M.id DESC", $this->_table, $reqPkt->id);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($querySql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                array_push($_Array, $DBFetch);
            }
            $respPkt->NewsData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
    
    //queryUser
    public function queryOtherNewsOnlyText($reqPkt, $respPkt)
    {
        $this->_table = "news";
        $querySql = sprintf("select M.id, M.title, M.abstract, M.timestamp, M.submenu_id, M.menu_id from `%s` as M where M.menu_id = 99 and M.imgUrl = '' order by M.id DESC limit 20", $this->_table);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($querySql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                array_push($_Array, $DBFetch);
            }
            $respPkt->NewsData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
    
    //queryUser
    public function queryOtherNewsOnlyImg($reqPkt, $respPkt)
    {
        $this->_table = "news";
        $querySql = sprintf("select M.id, M.title, M.abstract, M.timestamp, M.submenu_id, M.menu_id, M.imgUrl from `%s` as M where M.menu_id = 99 and M.imgUrl != '' order by M.id DESC", $this->_table);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($querySql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                array_push($_Array, $DBFetch);
            }
            $respPkt->NewsData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
    
    //queryUserByID
    public function queryNewsByID($reqInfo, $respPkt)
    {
        $this->_table = "news";
        $querySql = sprintf("select N.id, N.title, N.abstract, N.content, N.submenu_id, N.imgUrl, N.menu_id, N.timestamp from `%s` as N where N.id = %s", $this->_table, $reqInfo->id);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($querySql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                $DBFetch['content'] = htmlspecialchars_decode($DBFetch['content']);
                array_push($_Array, $DBFetch);
            }
            $respPkt->NewsData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
}