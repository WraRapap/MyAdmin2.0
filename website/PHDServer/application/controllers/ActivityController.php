<?php
class ActivityController extends Controller
{
    //新增主選單
    public function addActivity($reqInfo)
    {
        $reqPkt = new ActivityAddReqPkt();
        $reqPkt->setData($reqInfo->data);
        
        $respPkt = new ActivityAddRespPkt();
        $ret = (new ActivityModel)->addActivity($reqPkt, $respPkt);
        
        $this->sendClient($ret, $respPkt);
    }
    
    public function addActivityImg($reqInfo)
    {
        $reqPkt = new ActivityImgAddReqPkt();
        $reqPkt->setData($reqInfo->data);
        $ret = 0;
        
        $imgUrl = uniqid();
        
        //$upload_folder = UPLOAD_FOLDER. $reqPkt->memberID. '/';
        $upload_folder = UPLOAD_FOLDER;
        $target_file = $upload_folder . $imgUrl;
        $result = move_uploaded_file($_FILES["file"]["tmp_name"], $target_file);
        if($result == true)
        {
            $reqPkt->name = $imgUrl;
            $ret = (new ActivityModel)->addActivityImg($reqPkt, $respPkt);
        }
        else
        {
            $ret = -1;
        }
        
        $this->sendClient($ret, $respPkt);
    }
    
    //刪除主選單
    public function delActivity($reqInfo)
    {
        $reqPkt = new ActivityDelReqPkt();
        $reqPkt->setData($reqInfo->data);
        
        $respPkt = new ActivityDelRespPkt();
        $ret = (new ActivityModel)->delActivity($reqPkt, $respPkt);
        
        $this->sendClient($ret, $respPkt);
    }
    
    //修改主選單
    public function modActivity($reqInfo)
    {
        $reqPkt = new NewsModReqPkt();
        $reqPkt->setData($reqInfo->data);
        
        $reqPkt->updateData['content'] = htmlspecialchars($reqPkt->updateData['content']);
        
        $respPkt = new NewsModRespPkt();
        $ret = (new NewsModel)->modNews($reqPkt, $respPkt);
        
        $this->sendClient($ret, $respPkt);
    }
    
    //查詢主選單
    public function queryActivity($reqInfo)
    {
        $reqPkt = new ActivityQueryReqPkt();
        $reqPkt->setData($reqInfo->data);
        
        $respPkt = new ActivityQueryRespPkt();
        $ret = (new ActivityModel)->queryActivity($reqPkt, $respPkt);
        
        $this->sendClient($ret, $respPkt);
    }
    
    //
    public function queryActivityPic($reqInfo)
    {
        $reqPkt = new ActivityQueryReqPkt();
        $reqPkt->setData($reqInfo->data);
        
        $respPkt = new ActivityQueryRespPkt();
        $ret = (new ActivityModel)->queryActivityPic($reqPkt, $respPkt);
        
        $this->sendClient($ret, $respPkt);
    }
    
    //查詢主選單 by id
    public function queryActivityByID($reqInfo)
    {
        $reqPkt = new ActivityQueryByIDReqPkt();
        $reqPkt->setData($reqInfo->data);
        
        $respPkt = new ActivityQueryByIDRespPkt();
        $ret = (new ActivityModel)->queryActivityByID($reqPkt, $respPkt);
        
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
