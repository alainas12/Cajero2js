const users = [
    { username: 'user1', password: 'pass1', balance: 1000 },
    { username: 'user2', password: 'pass2', balance: 1500 },
    { username: 'user3', password: 'pass3', balance: 2000 }
  ];

  let currentUser = null;

  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      currentUser = user;
      document.getElementById('operations').style.display = 'block';
      document.getElementById('output').innerHTML = `¡Hola, ${user.username}! Saldo actual: $${user.balance}`;
    } else {
      document.getElementById('output').innerHTML = 'Usuario o contraseña incorrectos.';
    }
  }

  function withdraw() {
    const amount = parseFloat(prompt('Ingrese la cantidad a retirar:'));
    if (isNaN(amount) || amount <= 0) {
      alert('Ingrese una cantidad válida.');
      return;
    }

    if (amount > currentUser.balance) {
      alert('Saldo insuficiente.');
      return;
    }

    currentUser.balance -= amount;
    document.getElementById('output').innerHTML = `Retiro exitoso. Nuevo saldo: $${currentUser.balance}`;
  }

  function deposit() {
    const amount = parseFloat(prompt('Ingrese la cantidad a depositar:'));
    if (isNaN(amount) || amount <= 0) {
      alert('Ingrese una cantidad válida.');
      return;
    }

    currentUser.balance += amount;
    document.getElementById('output').innerHTML = `Depósito exitoso. Nuevo saldo: $${currentUser.balance}`;
  }

  function changePassword() {
    const newPassword = prompt('Ingrese la nueva contraseña:');
    currentUser.password = newPassword;
    document.getElementById('output').innerHTML = 'Contraseña cambiada exitosamente.';
  }

  function logout() {
    currentUser = null;
    document.getElementById('operations').style.display = 'none';
    document.getElementById('output').innerHTML = '';
  }