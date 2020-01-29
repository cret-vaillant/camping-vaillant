<?php

require "vendor/autoload.php";

use League\CommonMark\CommonMarkConverter;
use League\CommonMark\Environment;
use League\CommonMark\Ext\TaskList\TaskListExtension;

$environment = Environment::createCommonMarkEnvironment();
$environment->addExtension(new TaskListExtension());
$converter = new CommonMarkConverter([], $environment);

$folder = "../pv";

$files = scandir($folder);

$pages = [];

foreach ($files as $name) {
    $content = file_get_contents("$folder/$name");
    if($content){
        $html = $converter->convertToHtml($content);
        $pages[] = compact("name", "content", "html");
    }
}

echo json_encode($pages);