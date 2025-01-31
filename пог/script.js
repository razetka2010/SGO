function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('adminPanel').style.display = 'block';
        } else {
            alert('Неверный логин или пароль');
        }
    });
}

function viewReports() {
    // Логика для просмотра отчётов
}

function manageUsers() {
    // Логика для управления пользователями
}