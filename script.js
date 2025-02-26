document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault();
    const username = document.getElementById('login').value;
    const password = document.getElementById('senha').value;

    // Login simples e estático (use um sistema de autenticação no servidor para produção)
    const validUsername = 'paulo';
    const validPassword = '123';

    if (username === validUsername && password === validPassword) {
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('conteudo-protegido').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
