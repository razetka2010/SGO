<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = $data['password'];

// Здесь должна быть проверка логина и пароля в базе данных
$validUsername = 'admin';
$validPassword = 'password';

if ($username === $validUsername && $password === $validPassword) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>