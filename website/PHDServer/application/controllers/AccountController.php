<?php
class AccountController extends Controller
{
    //登入
    public function login($reqInfo)
    {
        $reqPkt = new LoginReqPkt();
        
        $reqPkt->setData($reqInfo->data);
        
        $respPkt = new LoginRespPkt();
        
        $ret = (new AccountModel)->login($reqPkt->acc, $reqPkt->pwd, $respPkt);
        
        $this->sendClient($ret, $respPkt);
    }
    
   public function sendClient($ret, $respPkt)
   {
        //print_r($respPkt);
        
        $respInfo = new RespInfoPkt();
        $respInfo->ret = $ret;
        $respInfo->data = $respPkt;
        
        echo json_encode($respInfo);
   }
}
