<?php
class Website_Controller extends WebsiteController{

	public function main($action){
		$this -> loadView($action);
	}

	public function index()
    {
        $this ->display("index");
    }

    public function about()
    {
        $this ->display("about");
    }
    public function lesson()
    {
        $this ->display("lesson");
    }

    public function activity()
    {
        $this ->display("activity");
    }

    public function teacher()
    {
        $this ->display("teacher");
    }
    public function contact()
    {
        $this ->display("contact");
    }
    public function joinlesson()
    {
        $courselist=$this -> tool_database -> findAll(
            "course",
            array("id","title")
        );

        $datas=array("courselist"=>$courselist);
        $this ->display("joinlesson",$datas);
    }


	public function logout(){
		@session_start();
		unset($_SESSION["USER_ID"]);
		unset($_SESSION["USER_NAME"]);
		@session_write_close();

		$this -> tool_go -> page("/index.php/");
	}



	public function script(){

		header("Content-type: application/x-javascript");
		
		$parts = explode(".",basename($_SERVER['HTTP_REFERER']));
		$viewName = $parts[0];
		if($viewName=="www"){
			$viewName = "index";
		}

		$commonPath = $this -> config_env -> basePath . $this -> config_env -> websitePath . "/controllers/common.js";

		if(file_exists($commonPath)){
			$content = file_get_contents($commonPath);
			echo $this -> tool_jspacker -> encode($content);
		}

        $sdkPath = $this -> config_env -> basePath . $this -> config_env -> jsLibPath . "/angularjs/sdk.js";
        if(file_exists($sdkPath)){
            $content = file_get_contents($sdkPath);

            echo $this -> tool_jspacker -> encode($content);
        }
//        $jsEmptyPath = $this -> config_env -> basePath . $this -> config_env -> jsLibPath . "/angularjs/empty.js";
//        $content = file_get_contents($jsEmptyPath);
//        echo $this -> tool_jspacker -> encode($content);

        $jsPath = $this -> config_env -> basePath . $this -> config_env -> websitePath . "/controllers/header.js";
        if(file_exists($jsPath)){
            $content = file_get_contents($jsPath);
            echo $this -> tool_jspacker -> encode($content);
        }


		$jsPath = $this -> config_env -> basePath . $this -> config_env -> websitePath . "/controllers/" . $viewName . ".js";
		if(file_exists($jsPath)){
			$content = file_get_contents($jsPath);
			echo $this -> tool_jspacker -> encode($content);
		}

        $jsPath = $this -> config_env -> basePath . $this -> config_env -> websitePath . "/controllers/footer.js";
        if(file_exists($jsPath)){
            $content = file_get_contents($jsPath);
            echo $this -> tool_jspacker -> encode($content);
        }


	}

	private function checkLogin(){
		@session_start();
		if(!isset($_SESSION["USER_ID"])){
			$this -> tool_go -> page("/index.php/");
		}
		@session_write_close();
	}

}
?>