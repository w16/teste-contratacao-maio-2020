<?php
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

if($uri === '/' || $uri === '' ||  $uri === '/index.php') {
    $uri = '/page.php';
}

require_once('../src' . "/{$uri}");