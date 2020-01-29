<?php

$folder = "../pv";

$files = scandir($folder);

$pages = [];

foreach ($files as $file) {
    $pages[] = [
        "name" => $file,
        "content" => file_get_contents("$folder/$file")
    ];
}

echo json_encode($pages);