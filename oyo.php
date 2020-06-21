<?php  
include 'curl.php';


while (true) {
	$name = random(8);

	$headers = [
		'Content-Type: application/x-www-form-urlencoded',
		'Host: api.adappter.kr',
		'User-Agent: okhttp/3.12.0'
	];

	$email = $name.'@getnada.com';

	$send = curl('https://api.adappter.kr/api/vA/v1/sign/auth/mail_send', 'email='.$email.'&lang=en', $headers);

	if (stripos($send, '"result":0')) {
		echo "[+] Success send email to ".$email."\n";
		sleep(10);
		$getmsg = curl('https://getnada.com/api/v1/inboxes/'.$email);
		$id = fetch_value($getmsg, '"uid":"','"');

		if ($id !== "") {
			$readmsg = curl('https://getnada.com/api/v1/messages/'.$id);
			preg_match('/<h1>DIGIT CODE: \[(.*?)\]<\/h1>/s', $readmsg, $kode);

			$verif_code = curl('https://api.adappter.kr/api/vA/v1/sign/auth/mail_check', 'email='.$email.'&a_num='.$kode[1], $headers);

			if (stripos($verif_code, '"result":0')) {
				$header = [
					'Content-Type: application/json; charset=UTF-8',
					'Host: api.adappter.kr',
					'User-Agent: okhttp/3.12.0'
				];
				$register = curl('api.adappter.kr/api/vA/v1/sign/up', '{"email":"'.$email.'","pw":"yudhagans1234","nick":"'.random(6).'","name":"'.random(5).'","code":"DYZ5I"}', $header);

				if (stripos($register, '"result":0')) {
					echo "[+] ".$email." | Success register\n";	
				} else {
					echo "[+] ".$email." | Failed\n";
				}

			} else {
				echo "[!] ".$email." | Something wrong\n";
			}

		} else {
			echo "[!] ".$email." | Something wrong\n";
		}

	} else {
		echo "[!] ".$email." | Something wrong\n";
	}
}











?>
