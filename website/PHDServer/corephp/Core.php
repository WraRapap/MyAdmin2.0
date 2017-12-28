<?php
/**
 * fastphp框架核心
 */
class Core
{
    // 运行程序
    public function run()
    {
        spl_autoload_register(array($this, 'loadClass'));
        $this->setReporting();
        $this->removeMagicQuotes();
        $this->unregisterGlobals();
    }
    
    //upload
    public function upload()
    {
        global $ServiceType;
        global $ActionType;
        
        $reqInfo = new ReqInfoPkt();
        $reqInfo->setData($_POST);
        
         if($reqInfo->ST == -1 || $reqInfo->AT == -1){
            // do something
            exit("syntax error!(ST)");
        }
        
        if($reqInfo->data == null) {
            exit("syntax error!(data)");
        }
        
        //用方式deserial出來
        $st = $reqInfo->ST;
        $at = $reqInfo->AT;
        $data = $reqInfo->data;
        
        if(!isset($ServiceType[$st]))
        {
            exit("syntax error!");
        }
        if(!isset($ActionType[$at]))
        {
            exit("syntax error!");
        }
        
        $controllerName = $ServiceType[$st];
        $controller = $controllerName."Controller";
        $actionName = $ActionType[$at];

        // 实例化控制器
        $dispatch = new $controller($controllerName, $actionName);
        
        // 如果控制器存和动作存在，这调用并传入URL参数
        if ((int)method_exists($controller, $actionName)) {
            call_user_func(array($dispatch, $actionName), $reqInfo);
        } else {
            exit($controller . "控制器不存在");
        }
    }

    // 路由处理
    public function route()
    {
        global $ServiceType;
        global $ActionType;
        
        $reqInfo = new ReqInfoPkt();
        $reqInfo->setData(json_decode(file_get_contents('php://input'), true));
        
        if($reqInfo->ST == -1 || $reqInfo->AT == -1){
            // do something
            exit("syntax error!(ST)");
        }
        
        if($reqInfo->data == null) {
            exit("syntax error!(data)");
        }
        
        //用方式deserial出來
        $st = $reqInfo->ST;
        $at = $reqInfo->AT;
        $data = $reqInfo->data;
        
        if(!isset($ServiceType[$st]))
        {
            exit("syntax error!");
        }
        if(!isset($ActionType[$at]))
        {
            exit("syntax error!");
        }
        
        $controllerName = $ServiceType[$st];
        $controller = $controllerName."Controller";
        $actionName = $ActionType[$at];

        // 实例化控制器
        $dispatch = new $controller($controllerName, $actionName);
        
        // 如果控制器存和动作存在，这调用并传入URL参数
        if ((int)method_exists($controller, $actionName)) {
            call_user_func(array($dispatch, $actionName), $reqInfo);
        } else {
            exit($controller . "控制器不存在");
        }
    }

    // 检测开发环境
    public function setReporting()
    {
        if (APP_DEBUG === true) {
            error_reporting(E_ALL);
            ini_set('display_errors','On');
        } else {
            error_reporting(E_ALL);
            ini_set('display_errors','Off');
            ini_set('log_errors', 'On');
            ini_set('error_log', RUNTIME_PATH. 'logs/error.log');
        }
    }

    // 删除敏感字符
    public function stripSlashesDeep($value)
    {
        $value = is_array($value) ? array_map(array($this, 'stripSlashesDeep'), $value) : stripslashes($value);
        return $value;
    }

    // 检测敏感字符并删除
    public function removeMagicQuotes()
    {
        if (get_magic_quotes_gpc()) {
            $_GET = isset($_GET) ? $this->stripSlashesDeep($_GET ) : '';
            $_POST = isset($_POST) ? $this->stripSlashesDeep($_POST ) : '';
            $_COOKIE = isset($_COOKIE) ? $this->stripSlashesDeep($_COOKIE) : '';
            $_SESSION = isset($_SESSION) ? $this->stripSlashesDeep($_SESSION) : '';
        }
    }

    // 检测自定义全局变量（register globals）并移除
    public function unregisterGlobals()
    {
        if (ini_get('register_globals')) {
            $array = array('_SESSION', '_POST', '_GET', '_COOKIE', '_REQUEST', '_SERVER', '_ENV', '_FILES');
           foreach ($array as $value) {
                foreach ($GLOBALS[$value] as $key => $var) {
                    if ($var === $GLOBALS[$key]) {
                        unset($GLOBALS[$key]);
                    }
                }
            }
        }
    }

    // 自动加载控制器和模型类 
    public static function loadClass($class)
    {
        $frameworks = FRAME_PATH . $class . '.php'; //其實就是Controll.php, View.php, Model.php
        $controllers = APP_PATH . 'application/controllers/' . $class . '.php';
        $models = APP_PATH . 'application/models/' . $class . '.php';
        $datas = APP_PATH . 'application/datas/' . $class . '.php';
        $data = APP_PATH . 'application/datas/data/' . $class . '.php';
        $req = APP_PATH . 'application/datas/req/' . $class . '.php';
        $res = APP_PATH . 'application/datas/res/' . $class . '.php';
        //echo $frameworks." ".$controllers." ".$models. " ". $datas." ".$data. "\n\n";
        if (file_exists($frameworks)) {
            // 加载框架核心类
            include $frameworks;
        } elseif (file_exists($controllers)) {
            // 加载应用控制器类
            include $controllers;
        } elseif (file_exists($models)) {
            //加载应用模型类
            include $models;
        } elseif (file_exists($datas)) {
            //加载应用模型类
            include $datas;
        } elseif (file_exists($data)) {
            //加载应用模型类
            include $data;
        } elseif (file_exists($res)) {
            //加载应用模型类
            include $res;
        } elseif (file_exists($req)) {
            //加载应用模型类
            include $req;
        } else {
            // 错误代码
        }
    }
}