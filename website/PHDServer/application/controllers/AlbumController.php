<?php
class AlbumController extends Controller
{
    //取得相簿清單
    public function getAlbumList($reqInfo)
    {
        $respPkt = new AlbumListQueryRespPkt();
        $ret = (new AlbumModel)->getAlbumList($respPkt);
        $this->sendClient($ret, $respPkt);
    }
    
    //取得相簿資料
    public function getAlbumDetail($reqInfo)
    {
        $reqPkt = new AlbumDetailQueryReqPkt();
        $reqPkt->setData($reqInfo->data);
        
        $respPkt = new AlbumDetailQueryRespPkt();
        $ret = (new AlbumModel)->getAlbumDetail($reqPkt->albumID, $respPkt);
        
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
