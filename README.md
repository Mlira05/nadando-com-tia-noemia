# Nadando com a Tia Noêmia — PWA MVP

> Plataforma educativa que orienta pais, mães e responsáveis a participarem ativamente do aprendizado de natação infantil de forma acolhedora, divertida e com segurança inegociável.

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC.svg)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

---

## 🌊 Visão Geral do Produto

O **Nadando com a Tia Noêmia** é um aplicativo educativo desenvolvido com foco prioritário na família. A Tia Noêmia atua como uma professora virtual que capacita pais, mães e responsáveis a conduzirem seus filhos na água, respeitando o ritmo psicomotor de cada criança.

Além do aplicativo digital, a plataforma oferece planos com aulas presenciais de natação ministradas diretamente pela Tia Noêmia.

---

## 📱 Funcionalidades Implementadas

1. **Página Inicial (`/`)**:
   - Logotipo oficial e identidade aquática;
   - Ilustração de apresentação da Tia Noêmia e criança na piscina;
   - Mensagem de acolhimento e segurança;
   - Botão principal "Começar" direcionando para a escolha de acesso.

2. **Página de Acesso (`/acesso`)**:
   - Ilustração da família nadadora;
   - **Entrar com código do aluno**: validação de códigos demonstrativos locais com persistência no LocalStorage;
   - **Explorar o app**: navegação aberta como visitante sem necessidade de cadastro;
   - **Adquirir um plano**: link direto para a página comercial.

3. **Biblioteca de Historinhas (`/explorar`)**:
   - Barra de progresso da jornada infantil do aluno;
   - 6 cards ilustrados com ilustrações exclusivas:
     1. *Aprendendo a nadar*
     2. *Flutuação*
     3. *Respiração*
     4. *Pernada*
     5. *Braçada*
     6. *Segurança na água*
   - Abertura gratuita das páginas de apresentação para todos os visitantes.

4. **Páginas Individuais das Historinhas (`/historias/:slug`)**:
   - Título, ilustração temática, duração e nível;
   - Sinopse pedagógica detalhada;
   - Objetivos de aprendizagem e competências;
   - Habilidades abordadas;
   - Orientações passo a passo para os pais;
   - Alerta visual obrigatório de segurança infantil;
   - **Controle de Acesso**: Botão "Começar historinha" cinza e bloqueado com cadeado para visitantes, com aviso e link para planos. Para alunos autenticados com o código demo, o botão libera a experiência de prática guiada interativa com temporizador e medalha "Amigo da Água".

5. **Planos e Preços (`/planos`)**:
   - Seletor interativo de periodicidade: **Mensal** (sem desconto), **Semestral** (5% de desconto) e **Anual** (10% de desconto);
   - Cálculo automático dos valores totais, mensais equivalentes e economia;
   - Três planos comerciais com mascotes exclusivos:
     - **Nadando em Família** (Mascote Tartaruga) — R$ 39,90/mês
     - **Pequeno Nadador** (Mascote Peixinho, 1 aula presencial/sem) — R$ 400,00/mês
     - **Super Nadador** (Mascote Golfinho, 2 aulas presenciais/sem, maior frequência) — R$ 600,00/mês
   - Modal de confirmação de interesse sem cobrança real, com link direto para conversa no WhatsApp e aviso sobre disponibilidade de horários.

6. **PWA (Progressive Web App)**:
   - Totalmente responsivo (mobile-first, tablets e desktop);
   - Manifesto Web configurado com ícones 192x192 e 512x512;
   - Service Worker para funcionamento offline e cache inteligente;
   - Banner de instalação para tela inicial e instruções específicas para iOS Safari;
   - Respeito às safe areas de dispositivos modernos.

7. **Compromisso Inegociável com a Segurança Infantil**:
   - Modal global de Regras de Ouro acessível pela barra de navegação;
   - Proibição de jogos de apneia, cronômetros de fôlego ou metas submersas perigosas;
   - Ênfase na regra do braço esticado (alcance de toque contínuo);
   - Orientação para ler o app antes de entrar na água, evitando distrações com celular na borda.

---

## 🔑 Códigos Demonstrativos Locais

Para simular o acesso como aluno matriculado:

| Código | Perfil | Plano Vinculado |
| :--- | :--- | :--- |
| **`NOEMIA2025`** | Família do Gabriel | Super Nadador (2x por semana) |
| **`NADAR123`** | Família da Clara | Pequeno Nadador (1x por semana) |

Qualquer outro código digitado também concederá acesso de teste completo no modo convidado.

---

## 🛠️ Stack Tecnológica

- **Frontend**: React 18 + TypeScript + Vite
- **Estilização**: Tailwind CSS (paleta personalizada Ocean, Aqua e Sun)
- **Roteamento**: React Router v6
- **Ícones**: Lucide Icons
- **Efeitos**: Canvas-Confetti
- **PWA**: Service Worker (`sw.js`) + `manifest.webmanifest`
- **Deploy**: Cloudflare Pages (`wrangler.toml` + `_redirects`) e GitHub Pages (`404.html` SPA routing)

---

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Pré-visualizar o build
npm run preview
```

---

## ☁️ Publicação no Cloudflare Pages

1. Conecte este repositório no [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages).
2. Configure as seguintes opções de compilação:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. As rotas SPA são tratadas automaticamente pelo arquivo `public/_redirects`.

---

## 📄 Licença e Créditos

Desenvolvido para **Nadando com a Tia Noêmia**. Ilustrações inspiradas no estilo visual de animação infantil 3D.
