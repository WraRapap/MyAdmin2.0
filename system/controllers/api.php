<?php
class Api_Controller extends CS_Controller{

	public function main(){

	}
    public function fileupload(){
        foreach($_FILES as $key => $fileObj){

            $files = $this -> tool_file -> upload_to_temp($key);
            foreach($files as $file){

                $tempfile = array(
                    "id" => uniqid(),
                    "path" => $file -> path,
                    "fileName" => $file -> name,
                    "size" => $file -> size,
                    "ext" => $file -> ext,
                    "createTime" => date("Y-m-d H:i:s")
                );

                echo base64_encode(json_encode($tempfile));

                exit;
            }
        }
    }
    public function fileDelete(){
        $object = $this -> tool_io -> post("object");
        $object = json_decode(base64_decode($object));



        $source = (json_decode(base64_decode($this -> tool_io -> post("signed"))));

        if($source == ""){
            return;
        }

        $this -> tool_file -> delete($object -> path);

        $variable = $this -> tool_io -> post("variable");

        if($source -> id != "" && $variable != ""){

            $item = $this -> tool_database -> find(
                $source -> data_source,
                array(),
                array("id=?"),
                array($source -> id)
            );

            if($item -> isExists()){

                $fileJSON = $item -> {$variable};
                $files = json_decode($fileJSON);
                if($files == ""){
                    $files = array();
                }
                $newFiles = array();
                foreach($files as $file){
                    if($file -> id == $object -> id){
                        continue;
                    }
                    $newFiles[] = $file;
                }

                $item -> {$variable} = json_encode($newFiles);
                $item -> update();
            }
        }

        echo json_encode(array("result" => "yes"));
    }

    public  function signup(){
        $course = $this -> tool_database -> emptyRecord("coursesignup");

        $course -> id = uniqid();
        $course -> name = $this -> tool_io -> post("name");
        $course -> telphone = $this -> tool_io -> post("phone");
        $course -> email = $this -> tool_io -> post("email");
        $course -> course = $this -> tool_io -> post("lesson");
        $course -> message = $this -> tool_io -> post("message");
        $course -> insert();

       echo json_encode( array("Ret" => 0));
    }

    public  function showactivity(){
        $activitys = $this -> tool_database -> findAll(
                                                "activity",
                                                array("id","imgs","title"),
                                                array("publish='Y'"));
        $array = array();
        foreach ($activitys as  $item) {
            $array[]=array("id"=>$item->id,"imgs"=>$item->imgs,"title"=>$item->title);
        }
        echo json_encode($array);
    }

    public  function showpics(){
        $activity = $this -> tool_database -> find(
            "activity",
            array("id","title","imgs"),
            array("id=?"),
            array($this -> tool_io -> post("id"))
        );
        $array=array();
        if(count($activity)>0)
          $array = array("id"=>$activity->id,"title"=>$activity->title,"imgs"=>$activity->imgs);

        echo json_encode($array);
    }
}
?>