<?php

class JoinModel extends Model
{
    /* 业务逻辑层实现 */
    
    //getAlbumList
    public function joinComplete($reqPkt, $respPkt)
    {
        $this->_table = "danceTeacherJoin";
        $completeSQL = sprintf("select P.id from `%s` as P where P.identify  = '%s'", $this->_table, $reqPkt->identify);
        //檢查帳號
        $pdoResult = $this->query($completeSQL);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0)
        {
            $pdoResult = $this->add($reqPkt);
            $ret = 0; //表示成功
            $errorCode = $this->getError($pdoResult);
            if($errorCode != 0) {
                $ret = -1;
                if($errorCode == 1062) $ret = -2;
            }
            else {
                $completeSQL = sprintf("select P.id from `%s` as P where P.identify  = '%s'", $this->_table, $reqPkt->identify);
                $pdoResult = $this->query($completeSQL);
                if($pdoResult->rowCount() == 0)
                {
                    $ret = -1;
                }
                else {
                    $idArray = $pdoResult->fetch();
                    $respPkt->memberID = $idArray['id'];
                }
            }
        }
        else {
            $ret = -2;
        }
        return $ret;
    }
    
    public function joinCompleteGet($reqPkt, $respPkt)
    {
        $this->_table = "danceTeacherJoin";
        $completeSQL = sprintf("select * from `%s`", $this->_table);
        
        $pdoResult = $this->query($completeSQL);
        $errorCode = $this->getError($pdoResult);
        $ret = 0;
        $dbArray = array();
        
        if($errorCode != 0)
        {
            $ret = -1;
        }
        else {
            if($pdoResult->rowCount() > 0)
            {
                
                $DBFetchArray = $pdoResult->fetchAll();
                
                foreach($DBFetchArray as $DBFetch)
                {
                    array_push($dbArray, $DBFetch);
                }
            }
        }
        $respPkt->completeData = $dbArray; //給入帳號資料
        return $ret;
    }
    
    
    public function joinNormal($reqPkt, $respPkt)
    {
        $this->_table = "danceJoin";
        $pdoResult = $this->add($reqPkt);
        $ret = 0; //表示成功
        $errorCode = $this->getError($pdoResult);
        if($errorCode != 0) {
            $ret = -1;
        }
        return $ret;
    }
    
    public function joinNormalGet($reqPkt, $respPkt)
    {
        $this->_table = "danceJoin";
        $completeSQL = sprintf("select * from `%s`", $this->_table);
        
        $pdoResult = $this->query($completeSQL);
        $errorCode = $this->getError($pdoResult);
        $ret = 0;
        $dbArray = array();
        
        if($errorCode != 0)
        {
            $ret = -1;
        }
        else {
            if($pdoResult->rowCount() > 0)
            {
                
                $DBFetchArray = $pdoResult->fetchAll();
                
                foreach($DBFetchArray as $DBFetch)
                {
                    array_push($dbArray, $DBFetch);
                }
            }
        }
        $respPkt->normalData = $dbArray; //給入帳號資料
        return $ret;
    }
    
    public function joinNormalGetByID($reqPkt, $respPkt)
    {
        $this->_table = "danceJoin";
        $completeSQL = sprintf("select * from `%s` as D where D.id = %s", $this->_table, $reqPkt->id);
        $pdoResult = $this->query($completeSQL);
        $errorCode = $this->getError($pdoResult);
        $ret = 0;
        $dbArray = array();
        
        if($errorCode != 0)
        {
            $ret = -1;
        }
        else {
            if($pdoResult->rowCount() > 0)
            {
                
                $DBFetchArray = $pdoResult->fetchAll();
                
                foreach($DBFetchArray as $DBFetch)
                {
                    array_push($dbArray, $DBFetch);
                }
            }
        }
        $respPkt->normalData = $dbArray; //給入帳號資料
        return $ret;
    }
}