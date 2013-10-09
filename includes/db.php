
<?php
//Database information
$user="ewrwur";
$pass="wecota101";
$database="eastweb";
$server="localhost";
$db_conn=mysql_connect($server, $user,$pass) or die ('Error Connecting to MySQL');
$db_found=mysql_select_db($database,$db_conn) or die ('Could not found the database');
?>