var email = "user-name@gmail.com";

if (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email)) {

    console.log('O email é válido');
} else {
    console.log('o e-mail é inválido');
}

