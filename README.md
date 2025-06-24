# Gerador de QR Codes com Histórico e Apelidos

Este projeto é uma aplicação web simples que permite gerar QR Codes a partir de links ou textos, associando um apelido para melhor organização. Além disso, mantém um histórico dos QR Codes gerados, possibilitando a visualização e ampliação deles em uma interface moderna e intuitiva.

# Funcionalidades

* Geração de QR Code a partir de uma URL ou texto.
* Associação de um apelido a cada QR Code gerado para identificação fácil.
* Armazenamento do histórico completo dos QR Codes gerados no navegador (localStorage).
* Visualização do histórico em uma tela separada, com cards bonitos e responsivos.
* Modal para ampliar o QR Code ao clicar no apelido.
* Opção de voltar para a tela principal a qualquer momento.
* Layout moderno com background estilizado e design responsivo.

# Aprendizados aplicados

* Manipulação do DOM para geração dinâmica de elementos.
* Uso de biblioteca externa (QRCode.js) para geração dos códigos QR.
* Armazenamento e recuperação de dados com `localStorage`.
* Eventos para interação com o usuário (cliques, teclas).
* Desenvolvimento de modais para visualização ampliada.
* Aplicação de CSS moderno com flexbox, grid, filtros e transições.
* Separação da interface em múltiplas telas HTML com navegação simples.

# Tecnologias utilizadas

* Linguagem: *JavaScript* (vanilla)
* Biblioteca QR Code: *QRCode.js* ([link](https://github.com/davidshimjs/qrcodejs))
* Marcações: *HTML5* e *CSS3*
* Armazenamento local: *localStorage* do navegador

# Como rodar o projeto

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` no seu navegador favorito.
3. Na tela principal, insira um link/texto e um apelido, clique em “Gerar”.
4. Use o botão de histórico para visualizar e ampliar os QR Codes gerados.
5. Os dados ficam salvos localmente no navegador, sem necessidade de backend.

# Estrutura geral

```plaintext
qrcodejsbasic/
│
├── index.html           # Tela principal com geração do QR Code
├── historico.html       # Tela do histórico com visualização e modal
├── css/
│   └── estilo.css       # Estilos compartilhados para as telas
├── js/
│   └── script.js        # Script para geração, armazenamento e interação
└── README.md            # Documentação do projeto
```
