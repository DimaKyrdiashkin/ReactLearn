<?php

header('content-type: application/json');
$data = json_decode(file_get_contents('php://input'));

mail("info@venstop.pro", "Forms Venstop Pro", 'Phone: ' . $data->phone . "\nEmail: " . $data->email . "\nMessenger: " . $data->messenger);
echo json_encode($data->phone);


?>
