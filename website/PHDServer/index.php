<?php 

// 应用目录为当前目录
define('APP_PATH', __DIR__.'/');

// 开启调试模式
define('APP_DEBUG', false);

// 网站根URL
define('APP_URL', 'http://localhost/PHDServer');

// 設定跨網域
header('Access-Control-Allow-Origin: http://puhuei-dance.com');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

// 加载框架
require './corephp/corephp.php';
