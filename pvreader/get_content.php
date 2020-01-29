<?php

$folder = "../pv";

$files = scandir($folder);

$pages = [];

foreach ($files as $name) {
    $content = file_get_contents("$folder/$name");
    $pages[] = compact("name", "content");
}

echo json_encode($pages);