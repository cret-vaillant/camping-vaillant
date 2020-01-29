<?php

file_put_contents("log.txt", date("Y-m-d H:i:s -> ") . @$_POST["payload"] . "\n\n" , FILE_APPEND);