/**
 * Home `/` — não vende: roteia (§3). A conversão é a escolha de uma jornada.
 * Copy: BUILD-SPEC §11.1. Arquitetura: §10.
 */
import {
  cabecalho, cards, cta, etapas, figura, hero, icone, lista, secao, selo,
} from '../components.mjs';

const JORNADAS = [
  {
    id: 'PARA MIM',
    titulo: 'Quero aprender.',
    descricao: 'Tenha mais autonomia, segurança e confiança para usar a tecnologia no seu dia a dia.',
    complemento: 'Aprenda de maneira simples, prática e no seu próprio ritmo.',
    pontos: [
      'Para adultos e pessoas 50+',
      'Para quem está começando ou tem pouca intimidade com tecnologia',
      'Para quem quer usar celular, internet, aplicativos, redes sociais e IA com mais segurança',
    ],
    cta: 'QUERO APRENDER',
    href: '/curso/',
    evento: 'student_path_click',
    tom: 'aluno',
    icone: 'celular',
  },
  {
    id: 'PARA ALGUÉM',
    titulo: 'Quero ajudar alguém.',
    descricao: 'Acompanhe alguém importante para você nessa jornada digital.',
    complemento: 'Tenha acesso ao conteúdo e ajude seu pai, sua mãe, seu filho, um familiar ou alguém que precise de apoio a conquistar mais autonomia.',
    pontos: [
      'Para filhos, netos, familiares, cuidadores e responsáveis',
      'Para quem quer aprender junto, não fazer tudo pela outra pessoa',
      'Para quem deseja reforçar segurança e confiança no dia a dia',
    ],
    cta: 'QUERO SER UM TUTOR',
    href: '/tutor/',
    evento: 'tutor_path_click',
    tom: 'tutor',
    icone: 'maos',
  },
  {
    id: 'PARA MUITAS PESSOAS',
    titulo: 'Quero levar o projeto para uma instituição.',
    descricao: 'Transforme inclusão digital em uma ação de impacto para sua comunidade, equipe ou público atendido.',
    complemento: 'Conheça a solução do Digital para Todos para empresas, igrejas, associações, ONGs, projetos sociais e grupos comunitários.',
    pontos: [
      'Para organizações que desejam promover inclusão digital',
      'Para projetos com pessoas 50+, idosos ou pessoas com dificuldades digitais',
      'Para instituições que precisam de uma solução estruturada e orientada',
    ],
    cta: 'CONHECER A SOLUÇÃO',
    href: '/instituicoes/',
    evento: 'institution_path_click',
    tom: 'instituicao',
    icone: 'predio',
  },
];

const cardJornada = (j, i) => `
  <li class="jornada jornada--${j.tom}" data-reveal data-reveal-delay="${i * 90}">
    <div class="jornada__topo">
      <span class="jornada__icone">${icone(j.icone)}</span>
      <p class="jornada__id">${j.id}</p>
    </div>
    <h3 class="jornada__titulo">${j.titulo}</h3>
    <p class="jornada__descricao">${j.descricao}</p>
    <p class="jornada__complemento">${j.complemento}</p>
    <ul class="jornada__pontos" role="list">
      ${lista(j.pontos, (p) => `<li>${icone('check', 'icone--marca')}<span>${p}</span></li>`)}
    </ul>
    ${cta({ texto: j.cta, href: j.href, evento: j.evento, bloco: true })}
  </li>`;

export const seo = {
  titulo: 'Digital para Todos | Inclusão Digital para Pessoas, Famílias e Instituições',
  descricao: 'Aprenda, acompanhe alguém ou leve uma solução de inclusão digital para sua instituição com o Digital para Todos.',
  ogTitulo: 'Digital para Todos — Inclusão digital para pessoas, famílias e instituições',
  ogDescricao: 'Escolha como participar: aprender, ajudar alguém ou levar o projeto para uma instituição.',
  og: 'og-home.jpg',
  heroImagem: 'home-hero-family-learning-1200w.webp',
};

export const ctaFixo = cta({
  texto: 'ESCOLHER MEU CAMINHO', href: '#escolha-seu-caminho',
  evento: 'home_cta_click', bloco: true,
});

export const conteudo = `
${hero({
  olho: 'INCLUSÃO DIGITAL PARA PESSOAS, FAMÍLIAS E INSTITUIÇÕES',
  titulo: 'Tecnologia deveria unir pessoas,<br><span class="realce">nunca afastá-las.</span>',
  subtitulo: 'O Digital para Todos ajuda pessoas a aprender, famílias a acompanhar e instituições a promover inclusão digital com mais segurança, autonomia e confiança.',
  ctas: cta({ texto: 'ESCOLHER COMO QUERO PARTICIPAR', href: '#escolha-seu-caminho', evento: 'home_cta_click' }),
  microcopy: 'Conheça o projeto e encontre o caminho mais adequado para você.',
  imagem: 'home-hero-family-learning.webp',
  alt: 'Pessoas de diferentes gerações aprendendo a usar tecnologia juntas',
})}

${secao({
  fundo: 'claro',
  conteudo: `
    ${cabecalho({
      olho: 'QUANDO A TECNOLOGIA MUDA RÁPIDO DEMAIS',
      titulo: 'Nem todo mundo teve a oportunidade de aprender no mesmo ritmo.',
      texto: [
        'O celular mudou. Os serviços foram para a internet. As conversas passaram para o WhatsApp. Bancos, aplicativos, redes sociais e agora a Inteligência Artificial fazem parte da rotina.',
        'Mas muitas pessoas precisaram aprender sozinhas — ou passaram a depender de alguém para realizar tarefas que gostariam de fazer com mais independência.',
        'O Digital para Todos existe para diminuir essa distância com explicação simples, prática e paciente.',
      ],
    })}
    ${cards([
      { icone: 'duvida', titulo: 'Medo de clicar errado', texto: 'Você fica inseguro quando aparece uma tela ou mensagem que não conhece?' },
      { icone: 'maos', titulo: 'Dependência para tarefas simples', texto: 'Você precisa chamar alguém para resolver coisas no celular?' },
      { icone: 'alerta', titulo: 'Receio de golpes', texto: 'Você não sabe se um link, mensagem ou pedido é seguro?' },
      { icone: 'conversa', titulo: 'Distância da família', texto: 'Você gostaria de conversar, compartilhar e acompanhar melhor quem ama?' },
    ], { colunas: 4, tipo: 'card card--dor' })}
    <div class="acao-secao" data-reveal>
      ${cta({ texto: 'QUERO ENTENDER COMO FUNCIONA', href: '#como-funciona', variante: 'terciario' })}
    </div>`,
})}

${secao({
  conteudo: `
    ${cabecalho({
      olho: 'CONHEÇA O PROJETO',
      titulo: 'Inclusão digital é também autonomia, segurança e conexão.',
      texto: [
        'O Digital para Todos é um projeto de educação e inclusão digital criado para aproximar pessoas da tecnologia de um jeito humano.',
        'A proposta é ensinar o que realmente faz parte da vida: usar o celular, conversar pelo WhatsApp, navegar na internet, reconhecer riscos, utilizar aplicativos e compreender as novas ferramentas digitais.',
        'Tudo com uma metodologia que respeita o ritmo de cada pessoa.',
      ],
      destaque: 'Você não precisa chegar sabendo. Precisa encontrar uma explicação que faça sentido para você.',
    })}`,
  largura: 'container--estreito',
})}

${secao({
  fundo: 'marinho',
  conteudo: `
    ${cabecalho({
      titulo: 'Um projeto para aprender, proteger e continuar participando.',
      centro: true,
    })}
    ${cards([
      { icone: 'autonomia', titulo: 'Autonomia', texto: 'Realizar mais tarefas do dia a dia sem depender de outras pessoas para tudo.' },
      { icone: 'escudo', titulo: 'Segurança', texto: 'Aprender cuidados para reconhecer sinais de golpes e situações suspeitas.' },
      { icone: 'conversa', titulo: 'Comunicação', texto: 'Usar a tecnologia para conversar, compartilhar e estar mais perto da família.' },
      { icone: 'celular', titulo: 'Vida prática', texto: 'Entender aplicativos e recursos que podem facilitar a rotina.' },
      { icone: 'ia', titulo: 'Inteligência Artificial', texto: 'Conhecer a IA de maneira simples, prática e responsável.' },
      { icone: 'crescer', titulo: 'Aprendizado contínuo', texto: 'Acompanhar as mudanças da tecnologia sem precisar recomeçar sozinho.' },
    ], { colunas: 3, tipo: 'card card--pilar' })}`,
})}

${secao({
  id: 'como-funciona',
  conteudo: `
    ${cabecalho({
      olho: 'UMA FORMA MAIS HUMANA DE APRENDER',
      titulo: 'Explicar. Demonstrar. Praticar. Repetir. Ganhar confiança.',
      texto: ['Cada assunto é apresentado com linguagem simples e exemplos conhecidos. A pessoa vê como funciona, pratica o que aprendeu e pode rever a explicação quando precisar.'],
    })}
    ${etapas([
      { titulo: 'Explicação', texto: 'Entender o assunto sem termos complicados.' },
      { titulo: 'Demonstração', texto: 'Ver o passo a passo na prática.' },
      { titulo: 'Prática', texto: 'Aplicar em uma situação real.' },
      { titulo: 'Repetição', texto: 'Rever e tentar novamente quando necessário.' },
      { titulo: 'Autonomia', texto: 'Ganhar mais segurança para fazer sozinho.' },
    ])}
    <div class="acao-secao" data-reveal>
      ${cta({ texto: 'CONHECER OS CAMINHOS DO DIGITAL PARA TODOS', href: '#escolha-seu-caminho', variante: 'terciario' })}
    </div>`,
})}

${secao({
  fundo: 'creme',
  conteudo: `
    ${cabecalho({ titulo: 'Tecnologia explicada a partir da vida real.', centro: true })}
    <ul class="temas" role="list">
      ${lista([
        'Primeiros passos no celular', 'Internet e Wi-Fi', 'Navegação segura', 'WhatsApp',
        'Facebook e Instagram', 'Golpes e segurança digital', 'Inteligência Artificial',
        'Uber', 'iFood', 'Play Store e aplicativos úteis',
      ], (t, i) => `<li class="tema" data-reveal data-reveal-delay="${i * 40}">${icone('check', 'icone--marca')}<span>${t}</span></li>`)}
    </ul>
    <p class="nota-central" data-reveal>${selo('CONTEÚDOS JÁ DISPONÍVEIS E NOVOS TEMAS EM EXPANSÃO', 'neutro')}</p>`,
})}

${secao({
  conteudo: `
  <div class="duo">
    <div class="duo__texto">
      ${selo('GOLPE AQUI NÃO!', 'laranja')}
      ${cabecalho({
        titulo: 'Conhecimento também é uma forma de proteção.',
        texto: [
          'Quanto mais uma pessoa entende o que aparece na tela, mais preparada ela pode estar para observar mensagens, links, pedidos de dinheiro e situações suspeitas.',
          'O Digital para Todos ensina cuidados digitais de forma simples e prática, para que cada pessoa desenvolva mais atenção e confiança ao usar a tecnologia.',
        ],
        destaque: 'Aprender para se proteger. Conectar para transformar.',
      })}
      ${cta({ texto: 'QUERO APRENDER COM MAIS SEGURANÇA', href: '/curso/', evento: 'student_path_click' })}
    </div>
    <div class="duo__media" data-reveal>
      <div class="moldura moldura--verde">
        ${figura({ arquivo: 'home-community-learning.webp', alt: 'Duas mulheres aprendendo juntas a usar o celular em uma praça' })}
      </div>
    </div>
  </div>`,
})}

${secao({
  id: 'escolha-seu-caminho',
  fundo: 'claro',
  classe: 'secao--seletor',
  conteudo: `
    ${cabecalho({
      olho: 'ESCOLHA O CAMINHO QUE FAZ SENTIDO PARA VOCÊ',
      titulo: 'Como você quer fazer parte do Digital para Todos?',
      texto: ['Você pode aprender para si, acompanhar alguém importante ou levar o projeto para uma instituição.'],
      centro: true,
    })}
    <ul class="jornadas" role="list">${lista(JORNADAS, cardJornada)}</ul>`,
})}

${secao({
  fundo: 'marinho',
  classe: 'secao--manifesto',
  conteudo: `
  <div class="manifesto">
    <div class="manifesto__texto">
      <h2 class="titulo titulo--grande">A tecnologia não tem idade.</h2>
      <p class="texto">Talvez você queira aprender para si.</p>
      <p class="texto">Talvez queira acompanhar alguém que ama.</p>
      <p class="texto">Talvez queira transformar inclusão digital em uma ação para muitas pessoas.</p>
      <p class="texto">Em qualquer desses caminhos, o primeiro passo é reconhecer que aprender tecnologia pode ser mais simples, humano e possível.</p>
      <ul class="manifesto__lemas" role="list">
        <li>Conhecimento protege.</li>
        <li>Autonomia transforma.</li>
        <li>Digital para Todos.</li>
      </ul>
      ${cta({ texto: 'ESCOLHER MEU CAMINHO', href: '#escolha-seu-caminho', evento: 'home_cta_click' })}
    </div>
    <div class="manifesto__media" data-reveal>
      <div class="moldura moldura--redonda">
        ${figura({
          arquivo: 'home-globe-people.webp',
          alt: 'Mãos de três gerações próximas sobre a mesa, uma delas segurando um celular',
          larguras: [800, 480], sizes: '(max-width: 900px) 80vw, 380px',
        })}
      </div>
    </div>
  </div>`,
})}
`;
