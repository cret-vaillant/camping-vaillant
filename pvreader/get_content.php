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
        $lines = explode("\n", $content);
        $first_line = $lines[0];
        $title = array_pop(explode("# ", $first_line));
        $last_line = array_pop($lines);
        $tags = array_pop(explode("tags: ", $last_line));
        $html = $converter->convertToHtml($content);
        $pages[] = compact("name", "title", "content", "html", "tags");
    }
}

echo json_encode($pages);