<?php

$url = "https://api.github.com/repos/j4kim/camping-vaillant/contents/public/content.md";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_USERAGENT, 'jivkim@gmail.com');
$result = curl_exec($ch);
curl_close($ch);

$result = json_decode($result);
$content = base64_decode($result->content);

file_put_contents("content.md", $content);
