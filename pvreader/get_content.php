<?php

require "vendor/autoload.php";

$folder = "../pv";

$files = scandir($folder);

$pages = [];

$pd = new Parsedown();

foreach ($files as $name) {
    $content = file_get_contents("$folder/$name");
    $html = $pd->text($content);
    $pages[] = compact("name", "content", "html");
}

echo json_encode($pages);