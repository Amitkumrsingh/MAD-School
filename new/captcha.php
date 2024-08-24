<?php
session_start();
$code=rand(10000,99999);
$_SESSION["code"]=$code;
$im = imagecreatetruecolor(60, 43);
$bg = imagecolorallocate($im, 219, 140, 35); //background color blue
$fg = imagecolorallocate($im, 255, 255, 255);//text color white
imagefill($im, 0, 0, $bg);
imagestring($im, 22, 7, 13, $code, $fg);
header("Cache-Control: no-cache, must-revalidate");
header('Content-type: image/png');
imagepng($im);
imagedestroy($im);
?>