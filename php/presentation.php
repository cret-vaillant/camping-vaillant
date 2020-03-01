<?php

$logfile = "logs/" . date("Y-m-d") . ".txt";
$logcontent = date("H:i:s ") . @json_encode($_GET) . "\n";
file_put_contents($logfile, $logcontent, FILE_APPEND);

header("Location: https://drive.google.com/file/d/1IeeeiOe6nQz_ozX8NLmf6pIDDag7VQl-/view?usp=sharing");
