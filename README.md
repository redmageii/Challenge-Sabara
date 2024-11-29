# MediCode: Software Pediátrico de Passagem Médica

## Descrição
O MediCode é uma solução inovadora destinada a hospitais pediátricos, com foco na humanização, segurança e eficiência do atendimento. O sistema utiliza QR codes para facilitar o acesso e a gestão das informações médicas dos pacientes, integrando pais, médicos e administradores por meio de uma interface intuitiva e segura.

## Integrantes do Grupo
- **Matheus Ricardo** - RM560099
- **Filip Arnhold** - RM559294
- **Davi Correa** - RM560438
- **Marcos Azuma** - RM559883
- **Marcos Vinícius** - RM560062

---

## Estrutura do Projeto

### 1. **HTML (`index.html`)**
O arquivo HTML organiza e estrutura os elementos visuais e informativos da página web. Principais seções e funcionalidades:

- **Cabeçalho (`<head>`):** Define as metatags, título do site e links para os arquivos CSS e favicon.
- **Navegação:** Um menu no topo da página facilita o acesso rápido às seções principais como "Nossa Solução", "Sistemas" e "Solicitar Demonstração".
- **Seção de Introdução:** Apresenta o propósito do MediCode, destacando suas principais funcionalidades.
- **Seção de Sistemas:** Lista os benefícios e diferenciais do MediCode, como leitura de QR codes e aplicativo integrado.
- **Missão, Visão e Valores:** Um design interativo que permite alternar entre os pilares da empresa.
- **Formulário de Contato:** Permite que usuários enviem informações e solicitações.

### 2. **CSS (`style.css`)**
O arquivo CSS estiliza a página, criando uma experiência visual consistente e atrativa. Destaques:

- **Estilo Geral:** Utilização de fontes personalizadas do Google Fonts e cores suaves para uma apresentação profissional.
- **Responsividade:** Atributos como `flexbox` asseguram que a página se adapte a diferentes tamanhos de tela.
- **Animações:** A classe `.fade-in` adiciona efeitos suaves ao carregar elementos na página.
- **Botões:** Customizados com cores e transições interativas que realçam a navegabilidade.
- **Paleta de Cores:** Predominância de tons de azul claro e branco, simbolizando confiança e segurança.

### 3. **JavaScript (`script.js`)**
O script adiciona interatividade e funcionalidades dinâmicas ao site. Principais implementações:

- **Animação com Intersection Observer:** A classe `.fade-in` é ativada quando elementos entram na área visível da tela.
- **Troca de Conteúdo Dinâmico:** Funções `ativarMissao`, `ativarVisao` e `ativarValores` controlam o conteúdo exibido na seção "Missão, Visão e Valores".
- **Feedback Visual em Botões:** Eventos `mouseover` e `mouseout` alteram o estilo dos botões para melhorar a usabilidade.
- **Validação de Formulário:** O botão "Enviar" verifica se todos os campos obrigatórios do formulário foram preenchidos, alertando o usuário em caso de erro.

---

## Como Executar o Projeto
1. Clone este repositório:
   ```bash
   git clone <URL-do-repositório>
   ```
2. Abra o arquivo `index.html` em um navegador para visualizar o site.

---

## Melhorias Futuras
- Implementação de backend para gerenciamento de dados do sistema.
- Adição de suporte multilíngue para expandir a usabilidade.
- Integração com APIs de comunicação hospitalar.
