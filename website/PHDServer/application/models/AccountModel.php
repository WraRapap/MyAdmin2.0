<?php

class AccountModel extends Model
{
    /* 业务逻辑层实现 */
    
    //Login
    public function login($acc, $pwd, $respPkt)
    {
        $this->_table = "user";
        $loginSql = sprintf("select * from `%s` where `acc` = '%s' and `pwd` = '%s'", $this->_table, $acc, $pwd);
        $ret = 0; //表示成功
        $accData = null;
        
        //登入
        $pdoResult = $this->query($loginSql);
        $errorCode = $this->getError($pdoResult);
        if($pdoResult->rowCount() == 0) {
            $ret = -1;
        }
        else
        {
            $DBFetchArray = $pdoResult->fetchAll();
            $_Array = array();
            foreach($DBFetchArray as $DBFetch)
            {
                $DBFetch['pwd'] = '';
                array_push($_Array, $DBFetch);
            }
            $respPkt->UserData = $_Array; //給入帳號資料 
        }
        return $ret;
    }
}