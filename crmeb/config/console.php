<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// +----------------------------------------------------------------------
// | 控制台配置
// +----------------------------------------------------------------------
return [
    // 执行用户（Windows下无效）
    'user'     => null,
    // 指令定义
    'commands' => [
        'workerman' => \crmeb\command\Workerman::class,
        'timer' => \crmeb\command\Timer::class,
        'make:business' => \crmeb\command\Business::class,
        'make:dao' => \crmeb\command\Dao::class,
        'make:service'=>\crmeb\command\Service::class,
    ],
];