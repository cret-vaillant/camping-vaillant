<?php

$logfile = "log.txt";
$logcontent = date("Y-m-d H:i:s;") . @$_GET["from"] . "\n";
file_put_contents($logfile, $logcontent, FILE_APPEND);

header("Location: https://drive.google.com/file/d/1IeeeiOe6nQz_ozX8NLmf6pIDDag7VQl-/view?usp=sharing");
