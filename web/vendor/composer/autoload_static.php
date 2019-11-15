<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit47d7a561104e025ec24e18ec727ee9b4
{
    public static $files = array (
        '4b9c5a0bb2f00cddc58cefab5cd10af8' => __DIR__ . '/..' . '/smnjan/init.php',
    );

    public static $prefixLengthsPsr4 = array (
        's' => 
        array (
            'smnjan\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'smnjan\\' => 
        array (
            0 => __DIR__ . '/..' . '/smnjan',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit47d7a561104e025ec24e18ec727ee9b4::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit47d7a561104e025ec24e18ec727ee9b4::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}