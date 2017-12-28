<?php

class Data {
    // 构造函数，初始化属性，并实例化对应模型
    public function __construct()
    {
        
    }
    
    public function setData($data)
    {
        foreach ($data AS $key => $value){
            $this->{$key} = $value;
        }
    }
}