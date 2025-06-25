# Gerador de QR Codes com Histórico, Apelidos e Sistema de Login

Esta aplicação web permite que múltiplos usuários façam cadastro/login para gerar QR Codes personalizados a partir de links ou textos, associando apelidos para organização. Cada usuário possui seu histórico próprio de QR Codes, armazenado localmente no navegador (localStorage). A interface é moderna, responsiva e conta com funcionalidades de visualização ampliada e gerenciamento de histórico.

---

## Funcionalidades

* Sistema de cadastro e login local, com armazenamento simples no localStorage.
* Geração de QR Code a partir de URL ou texto, com associação de apelido.
* Histórico de QR Codes separados por usuário, armazenados localmente.
* Tela dedicada para visualizar o histórico com cards responsivos.
* Modal para ampliar QR Code ao clicar no apelido.
* Botão para limpar histórico do usuário logado.
* Botão para logout.
* Tela inicial (home) convidativa com acesso à plataforma.
* Layout moderno com fundo estilizado e design responsivo usando Tailwind CSS e CSS customizado.

---

## Aprendizados aplicados

* Manipulação avançada do DOM e gerenciamento de estado com JavaScript vanilla.
* Implementação simples de autenticação local (login/cadastro) usando localStorage.
* Gerenciamento de múltiplos usuários e separação do histórico por chave única no localStorage.
* Uso da biblioteca QRCode.js para geração dos códigos QR.
* Criação de modais interativos para ampliar imagens.
* Desenvolvimento de layouts responsivos e agradáveis usando CSS puro e Tailwind CSS.
* Controle de navegação entre múltiplas páginas HTML.

---

## Tecnologias utilizadas

* Linguagem: *JavaScript* (vanilla)
* Biblioteca para QR Code: *QRCode.js* ([github.com/davidshimjs/qrcodejs](https://github.com/davidshimjs/qrcodejs))
* Marcação: *HTML5*
* Estilo: *CSS3* + *Tailwind CSS* (CDN)
* Armazenamento local: *localStorage* do navegador

---

## Como rodar o projeto

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` (homepage), onde você poderá acessar a página de login ou cadastro.
3. Faça seu cadastro ou login na página `login.html`.
4. Após login, você será redirecionado para `app.html` para gerar QR Codes.
5. No gerador, informe o link e o apelido, gere o QR Code e ele será salvo no seu histórico.
6. Use o botão de histórico para visualizar seus QR Codes salvos, ampliá-los e gerenciar seu histórico.
7. Utilize o botão de sair para encerrar a sessão.
8. Os dados são salvos localmente e separados por usuário, sem necessidade de backend.

---

## Estrutura geral

```plaintext
qrcodejsbasic/
│
├── login.html           # Tela de login e cadastro com controle de usuários
├── index.html           # Home page convidativa para acessar a plataforma
├── app.html             # Tela principal para gerar QR Codes (usuário logado)
├── historico.html       # Tela para visualizar e gerenciar histórico do usuário
├── css/
│   └── estilo.css       # Estilos compartilhados para todas as telas
├── js/
│   └── script.js        # Script para geração, armazenamento, login e interação
└── README.md            # Documentação atualizada do projeto
```

---

## Organização do localStorage

* Usuários: armazenados com chave `user:<nomeUsuario>` e valor a senha (texto simples).
* Login ativo: flag `logado` com valor `"sim"`.
* Histórico por usuário: armazenado com chave `historicoQR_<nomeUsuario>`, garantindo histórico separado.

---

## Colaboradores

* **[Ester](https://github.com/esterxy)**
* **[Iago](https://github.com/IagoR7)**
* **[Pedro](https://github.com/Pedrinhodev1)**