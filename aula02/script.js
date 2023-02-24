const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    alert(`Obrigado Sr(a). ${name.value} os seus dados foram encaminhados com sucesso! Estes foram os dados enviados: Nome: ${name.value} | Telefone: ${phone.value} | E-mail: ${email.value} | Mensagem: ${message.value}`);
});