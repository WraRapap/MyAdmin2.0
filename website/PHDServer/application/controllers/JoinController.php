<?php
class JoinController extends Controller
{
    //報名
    public function joinComplete($reqInfo)
    {
        $reqPkt = new JoinCompleteReqPkt();
        $reqPkt->setData($reqInfo->data);
        $respPkt = new JoinCompleteRespPkt();
        $ret = (new JoinModel)->joinComplete($reqPkt, $respPkt);
        
        if($ret == 0)
        {
            //建立個人專屬上傳資料夾
            $upload_folder = UPLOAD_FOLDER . $respPkt->memberID;
            if(!is_dir($upload_folder) && !is_link($upload_folder)){ 
                if(!is_file($upload_folder)) {
                    $oldmask = umask(0);
                    $result = mkdir($upload_folder, 0777); 
                    umask($oldmask);                        
                } else { 
                    //因為有同名檔案...資料夾建立失敗
                    $ret = -3;
                } 
            }
        }
        $this->sendClient($ret, $respPkt);
    }
    
    //取徵選報名資料
    public function joinCompleteGet($reqInfo)
    {
        $reqPkt = new JoinCompleteGetReqPkt();
        
        $respPkt = new JoinCompleteGetRespPkt();
        
        $ret = (new JoinModel)->joinCompleteGet($reqPkt, $respPkt);
        
        $this->sendClient($ret, $respPkt);
    }
    
    //
    public function joinCompletePersonalPic($reqInfo)
    {
        $reqPkt = new JoinCompletePersonalPicReqPkt();
        $reqPkt->setData($reqInfo->data);
        
        $upload_folder = UPLOAD_FOLDER. $reqPkt->memberID. '/';
        $target_file = $upload_folder . "Personal.jpg";
        move_uploaded_file($_FILES["file"]["tmp_name"], $target_file);
    }
    
    //
    public function joinCompleteLifePic($reqInfo)
    {
        $reqPkt = new JoinCompleteLifePicReqPkt();
        $reqPkt->setData($reqInfo->data);
        
        $upload_folder = UPLOAD_FOLDER. $reqPkt->memberID. '/';
        $target_file = $upload_folder . "Life". $reqPkt->index .".jpg";
        move_uploaded_file($_FILES["file"]["tmp_name"], $target_file);    
    }
    
    public function joinNormal($reqInfo)
    {
        $reqPkt = new JoinNormalReqPkt();
        $reqPkt->setData($reqInfo->data);
        
        $respPkt = new JoinNormalRespPkt();
        $ret = (new JoinModel)->joinNormal($reqPkt, $respPkt);
        
        $this->sendClient($ret, $respPkt);
    }
    
    public function joinNormalGet($reqInfo)
    {
        $reqPkt = new JoinNormalGetReqPkt();
        
        $respPkt = new JoinNormalGetRespPkt();
        
        $ret = (new JoinModel)->joinNormalGet($reqPkt, $respPkt);
        
        $this->sendClient($ret, $respPkt);
    }
    
    public function joinNormalGetByID($reqInfo)
    {
        $reqPkt = new JoinNormalGetByIDReqPkt();
        
        $reqPkt->setData($reqInfo->data);
        
        $respPkt = new JoinNormalGetByIDRespPkt();
        
        $ret = (new JoinModel)->joinNormalGetByID($reqPkt, $respPkt);
        
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
