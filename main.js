const form = document.getElementById('form-contato');
        const contatos = [];

        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Previene o comportamento padrão do evento submit, que seria recarregar a página.
            if (validarTelefone()) {
                adicionarContato();
                atualizarTabela();
            }
        });

        function validarTelefone() {
            const inputTelefoneContato = document.getElementById('telefone-contato');
            const telefoneError = document.getElementById('telefone-error');
            const telefone = inputTelefoneContato.value;

            if (telefone.length < 9) {
                telefoneError.textContent = 'O telefone deve ter no mínimo 9 dígitos.';
                return false;
            } else {
                telefoneError.textContent = '';
                return true;
            }
        }

        function adicionarContato() {
            const inputNomeContato = document.getElementById('nome-contato');
            const inputTelefoneContato = document.getElementById('telefone-contato');

            const contato = {
                nome: inputNomeContato.value,
                telefone: inputTelefoneContato.value
            };

            contatos.push(contato);

            inputNomeContato.value = '';
            inputTelefoneContato.value = '';
        }

        function atualizarTabela() {
            const corpoTabela = document.querySelector('tbody');
            corpoTabela.innerHTML = '';

            for (const contato of contatos) {
                let linha = '<tr>';
                linha += `<td>${contato.nome}</td>`;
                linha += `<td>${contato.telefone}</td>`;
                linha += '</tr>';
                corpoTabela.innerHTML += linha;
            }
        }