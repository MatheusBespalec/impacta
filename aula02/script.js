const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    data = {
        'name': document.getElementById('name').value,
        'phone': document.getElementById('phone').value,
        'email': document.getElementById('email').value,
        'message': document.getElementById('message').value,
    }

    for (let input in data) {
        if (data[input] == '') {
            alert('Preencha todos os campos!');
            return;
        }
    }

    alert(`Obrigado Sr(a). ${data.name} os seus dados foram encaminhados com sucesso! Estes foram os dados enviados: Nome: ${data.name} | Telefone: ${data.phone} | E-mail: ${data.email} | Mensagem: ${data.message}`);
});