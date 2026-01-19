# 🍪 Banner de Aceite de Cookies
<img width="1872" height="347" alt="banner-aceite-de-cookies" src="https://github.com/user-attachments/assets/92746658-406b-4063-b015-cf6d6f1b0fbb" />
Uma interface essencial de conformidade e privacidade que solicita o consentimento do usuário para o uso de cookies. O projeto inclui um banner responsivo no rodapé... 

<img width="1867" height="451" alt="banner-aceite-de-cookies-prvacidade" src="https://github.com/user-attachments/assets/82e0554a-1342-4a88-b348-6c5d515b9704" />
...e um modal detalhado para a Política de Privacidade, garantindo transparência e uma boa experiência de usuário (UX).

# 🚀 Funcionalidades
Exibição Inteligente: O banner aparece automaticamente ao carregar a página, a menos que o usuário já tenha aceitado anteriormente.

Persistência de Dados: Utiliza localStorage para lembrar a decisão do usuário, evitando que o banner reapareça em cada visita.

Modal de Privacidade: Link interativo que abre uma janela modal com as diretrizes da LGPD sem recarregar a página.

Fechamento Multimodal: O modal de privacidade pode ser fechado via botão "X", clicando fora da área do card ou pressionando a tecla Esc.

Design Responsivo: Layout adaptável para dispositivos móveis, garantindo que o banner e o botão ocupem o espaço ideal em telas menores.

# 🛠️ Tecnologias Utilizadas
O projeto foi construído utilizando o "trio fundamental" do desenvolvimento Front-end:

HTML5: Estruturação semântica do banner, do modal e do conteúdo da política.

CSS3: Estilização moderna com variáveis (CSS Variables), Flexbox para alinhamento, animações de entrada (keyframes) e efeitos de desfoque de fundo (backdrop-filter).

JavaScript: Lógica para manipulação do DOM, gerenciamento do localStorage e escutadores de eventos para interatividade.

# 📂 Estrutura de Arquivos
<img width="542" height="137" alt="estrutura-projeto-cookies" src="https://github.com/user-attachments/assets/2b337f55-1169-44fa-8a7e-9b51789073d8" />

# 📝 Como funciona o código?
A lógica principal reside na verificação do estado de consentimento e no controle de classes CSS:

Verificação de Estado: Ao carregar, o script checa se cookiesAccepted está no localStorage. Se sim, oculta o banner imediatamente.

Interação de Aceite: Ao clicar em "Aceitar", o JS adiciona a classe .hidden (que dispara uma transição de saída) e salva a preferência no navegador.

Gerenciamento do Modal das Política de Privacidade: O modal utiliza a classe .show para alternar a visibilidade e opacidade, acompanhado de uma animação slideUp.

Acessibilidade: Implementação de aria-label no botão de fechar do modal e suporte a teclado (tecla Esc).

# 🚀 Como Executar o Projeto
Para testar o projeto localmente, siga os passos abaixo:

Clone o repositório:
git clone https://github.com/seu-usuario/missao-banner-cookies.git

Acesse a pasta do projeto.

Abra o arquivo index.html em qualquer navegador moderno.

Clique em Política de Privacidade para abrir o modal que contém as informações, e para fechar o banner de cookies clicque no botão Aceitar.

Para ver o banner novamente após aceitar, limpe o armazenamento local (LocalStorage) através do console do desenvolvedor (F12).

# 📌 Boas Práticas Aplicadas
Separação de responsabilidades: Divisão clara entre estrutura (HTML), estilo (CSS) e comportamento (JS).

Clean Code: Uso de nomes de classes e variáveis autoexplicativas.

UX/UI Design: Feedback visual nos botões (hover/active), transições suaves e desfoque de fundo para foco no modal.

Persistência de Sessão: Experiência menos intrusiva ao salvar a escolha do usuário.

# ✒️ Autor/Desenvolvedor
Marcos Merencio | Desenvolvedor Web (em formação)

# 📄 Licença
Este projeto é livre para uso educacional e aprendizado.
