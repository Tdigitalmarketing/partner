/**
 * `/curso` — venda direta ao Aluno (§3). Copy: §11.2. Arquitetura: §10.
 * Nenhum preço, número de aulas, garantia, suporte ou certificado aparece
 * enquanto não estiver validado em site.config.mjs (§26).
 */
import {
  accordion, cabecalho, cards, cta, ctaAulasGratuitas, ctaCheckoutAluno,
  etapas, figura, hero, icone, lista, secao, selo, transformacao,
} from '../components.mjs';
import { depoimentos, midia, oferta, validado } from '../../site.config.mjs';

const TRILHAS = [
  { titulo: 'Primeiros passos no celular', estado: 'JÁ DISPONÍVEL', conteudo: 'Ligar, desbloquear, ajustar o volume e o tamanho das letras, organizar a tela inicial e entender os ícones que aparecem no aparelho.' },
  { titulo: 'Internet e Wi-Fi', estado: 'JÁ DISPONÍVEL', conteudo: 'O que é a internet, como conectar em uma rede Wi-Fi, o que muda entre Wi-Fi e dados móveis e como economizar a franquia do celular.' },
  { titulo: 'Navegação com segurança', estado: 'JÁ DISPONÍVEL', conteudo: 'Como pesquisar, reconhecer um site confiável, entender o que é um link e o que observar antes de tocar em algo que você não conhece.' },
  { titulo: 'WhatsApp sem medo', estado: 'JÁ DISPONÍVEL', conteudo: 'Enviar mensagens, áudios e fotos, participar de grupos, fazer chamadas de vídeo e ajustar a privacidade das suas conversas.' },
  { titulo: 'Facebook e Instagram', estado: 'JÁ DISPONÍVEL', conteudo: 'Acompanhar a família, publicar, comentar e entender o que fica público e o que fica restrito a quem você escolhe.' },
  { titulo: 'Golpes e segurança digital', estado: 'JÁ DISPONÍVEL', conteudo: 'Sinais de alerta em mensagens, links e pedidos de dinheiro, cuidados com senhas e o que fazer diante de uma situação suspeita.' },
  { titulo: 'Inteligência Artificial', estado: 'JÁ DISPONÍVEL', conteudo: 'O que é a IA, como conversar com ela, como pedir ajuda em situações do dia a dia e quais cuidados manter.' },
  { titulo: 'Aplicativos úteis', estado: 'JÁ DISPONÍVEL', conteudo: 'Uber, iFood, Play Store e outros aplicativos que podem facilitar a rotina, explicados passo a passo.' },
  { titulo: 'Novos conteúdos', estado: 'EM EXPANSÃO', conteudo: 'A tecnologia continua mudando, e o projeto continua acompanhando. Novos temas são preparados a partir do que os alunos mais precisam entender.' },
];

// §11.2 não traz copy de FAQ; estas respostas derivam das objeções documentadas
// na §4.1 e não afirmam prazo, suporte, garantia ou quantidade não validados.
const FAQ = [
  { titulo: 'Eu não sei quase nada de tecnologia. Consigo acompanhar?', conteudo: '<p>Sim. O curso começa do início, pelos primeiros passos no celular, e supõe que você nunca recebeu uma explicação com calma. Nada é dado como óbvio.</p>' },
  { titulo: 'E se eu não entender uma explicação?', conteudo: '<p>Você pode assistir novamente quantas vezes quiser. A repetição faz parte do método: rever uma explicação não é atraso, é como o aprendizado se firma.</p>' },
  { titulo: 'Preciso ter horário fixo para estudar?', conteudo: '<p>Não. Você escolhe quando assistir e em que ritmo avançar. As aulas seguem uma ordem sugerida, mas quem define o passo é você.</p>' },
  { titulo: 'Já tentei aprender antes e não consegui. Vai ser diferente?', conteudo: '<p>Na maioria das vezes o problema não foi a pessoa, e sim a explicação: rápida demais, cheia de termos técnicos ou feita por alguém sem paciência. Aqui a linguagem é simples e os exemplos são situações que você já vive.</p><p>Você pode conferir isso antes de decidir, pelas primeiras 15 aulas gratuitas.</p>' },
  { titulo: 'Posso assistir pelo celular?', conteudo: '<p>Sim. O conteúdo foi pensado para quem usa principalmente o celular, que costuma ser o aparelho do dia a dia.</p>' },
  { titulo: 'O curso ensina a me proteger de golpes?', conteudo: '<p>O curso ensina cuidados e sinais de alerta para reconhecer mensagens, links e pedidos suspeitos. É importante dizer com honestidade: nenhum curso pode prometer eliminar todos os riscos digitais.</p>' },
  { titulo: 'Como faço para conhecer antes de comprar?', conteudo: '<p>Pelas primeiras 15 aulas gratuitas. Elas mostram a linguagem, o ritmo e o jeito de explicar do Digital para Todos, para você decidir com informação.</p>' },
];

const itensIncluidos = [
  { icone: 'celular', titulo: 'Curso online completo', texto: 'Acesso ao conteúdo do Digital para Todos, organizado do básico ao uso mais independente.' },
  { icone: 'bussola', titulo: 'Conteúdos do cotidiano', texto: 'Celular, internet, WhatsApp, redes sociais, aplicativos, segurança e Inteligência Artificial.' },
  { icone: 'crescer', titulo: 'Videoaulas explicadas com calma', texto: 'Explicação, demonstração e prática, para você acompanhar no seu ritmo e rever quando precisar.' },
  { icone: 'check', titulo: 'Materiais complementares', texto: 'Apoios para consultar depois da aula, na hora de praticar sozinho.' },
  { icone: 'maos', titulo: '15 aulas gratuitas', texto: 'Você conhece o método antes de decidir se quer continuar.' },
  ...(validado.suporteUmAno ? [{ icone: 'conversa', titulo: 'Suporte', texto: 'Canal de apoio para dúvidas.' }] : []),
  ...(validado.comunidade ? [{ icone: 'grupo', titulo: 'Comunidade', texto: 'Espaço de troca entre alunos.' }] : []),
  ...(validado.certificado ? [{ icone: 'check', titulo: 'Certificado', texto: 'Emitido ao final do curso.' }] : []),
];

const blocoPreco = oferta.exibir
  ? `<p class="preco"><span class="preco__valor">${oferta.parcelado}</span>
       ${oferta.total ? `<span class="preco__total">Total de ${oferta.total}</span>` : ''}
       ${oferta.aVista ? `<span class="preco__avista">ou ${oferta.aVista} à vista</span>` : ''}</p>`
  : `<p class="preco preco--pendente">As condições atuais de pagamento são apresentadas diretamente no checkout oficial.</p>`;

export const seo = {
  titulo: 'Curso Digital para Todos | Aprenda Tecnologia com Segurança',
  descricao: 'Curso online de inclusão digital para aprender celular, internet, WhatsApp, aplicativos, segurança e Inteligência Artificial no seu ritmo.',
  og: 'og-curso.jpg',
  heroImagem: 'course-hero-adult-confident-1200w.webp',
};

export const ctaFixo = ctaCheckoutAluno('QUERO APRENDER', 'course_persistent_cta_click');

export const conteudo = `
${hero({
  olho: 'INCLUSÃO DIGITAL PARA ADULTOS E PESSOAS 50+',
  titulo: 'Aprenda a usar a tecnologia com mais <span class="realce">segurança, confiança e autonomia.</span>',
  subtitulo: 'Um curso online, simples e prático, para entender melhor o celular, usar WhatsApp, internet, redes sociais, aplicativos e Inteligência Artificial sem medo e no seu próprio ritmo.',
  ctas: ctaCheckoutAluno() + ctaAulasGratuitas(),
  microcopy: 'Você pode conhecer o jeito Digital para Todos de ensinar antes de decidir.',
  selo: 'CONHECIMENTO PROTEGE',
  imagem: 'course-hero-adult-confident.webp',
  alt: 'Pessoa adulta aprendendo a usar um smartphone com confiança',
})}

${secao({
  fundo: 'creme',
  conteudo: `
    ${cabecalho({ titulo: 'Você não precisa saber tecnologia para começar.', texto: [
      'Você não precisa chegar sabendo onde clicar, como configurar tudo ou como entender cada aplicativo.',
      'O Digital para Todos foi criado para explicar desde o começo, com calma, exemplos do cotidiano e passos que você pode acompanhar no seu ritmo.',
    ] })}
    ${cards([
      { icone: 'conversa', titulo: 'Sem vergonha de perguntar' },
      { icone: 'relogio', titulo: 'Sem pressa' },
      { icone: 'bussola', titulo: 'Sem complicação' },
      { icone: 'crescer', titulo: 'Com possibilidade de revisão' },
    ], { colunas: 4, tipo: 'card card--compacto' })}`,
})}

${secao({
  conteudo: `
    ${cabecalho({
      olho: 'TALVEZ VOCÊ JÁ TENHA PASSADO POR ISSO',
      titulo: 'A tecnologia mudou rápido. Você não precisa aprender tudo sozinho.',
      texto: [
        'O celular ganhou novas funções. Os bancos foram para os aplicativos. As conversas passaram para o WhatsApp. Serviços, compras e informações estão cada vez mais online.',
        'Quando ninguém explica com calma, é natural sentir medo, vergonha ou dependência. O problema não é a sua idade. Muitas pessoas simplesmente não tiveram uma oportunidade de aprender no próprio ritmo.',
      ],
    })}
    ${cards([
      { icone: 'duvida', titulo: 'Medo de clicar errado' },
      { icone: 'maos', titulo: 'Dependência para tarefas do dia a dia' },
      { icone: 'alerta', titulo: 'Receio de golpes' },
      { icone: 'celular', titulo: 'Dificuldade com aplicativos' },
      { icone: 'crescer', titulo: 'Medo das mudanças' },
      { icone: 'conversa', titulo: 'Vergonha de perguntar' },
    ], { colunas: 3, tipo: 'card card--dor card--compacto' })}
    <div class="acao-secao" data-reveal>${ctaCheckoutAluno('QUERO APRENDER SEM MEDO', 'course_cta_click')}</div>`,
})}

${secao({
  fundo: 'marinho',
  classe: 'secao--manifesto',
  largura: 'container--estreito',
  conteudo: `
    <div data-reveal>
      <h2 class="titulo titulo--grande">Tecnologia deveria unir pessoas, nunca afastá-las.</h2>
      <p class="texto">O Digital para Todos nasceu para ajudar pessoas a participarem de um mundo que se tornou digital.</p>
      <p class="texto">A tecnologia pode aproximar famílias, facilitar tarefas, ampliar escolhas e trazer mais independência. Mas isso só acontece quando as pessoas têm acesso a uma explicação que respeite seu tempo e sua realidade.</p>
      <p class="texto">Por isso, nosso trabalho é ensinar com simplicidade, paciência e prática.</p>
      <ul class="manifesto__lemas" role="list">
        <li>Conhecimento protege.</li>
        <li>Autonomia transforma.</li>
        <li>Não existe idade para aprender.</li>
      </ul>
    </div>`,
})}

${secao({
  fundo: 'claro',
  conteudo: `
    ${cabecalho({ titulo: 'O objetivo não é virar especialista. É conseguir fazer mais coisas com confiança.', centro: true })}
    ${transformacao([
      ['Tenho medo de mexer.', 'Consigo explorar com mais segurança.'],
      ['Preciso pedir ajuda para tudo.', 'Consigo realizar algumas tarefas sozinho.'],
      ['Não sei se essa mensagem é golpe.', 'Sei observar sinais de alerta.'],
      ['Não entendo os aplicativos.', 'Consigo aprender o passo a passo.'],
      ['Fiquei para trás.', 'Posso continuar aprendendo.'],
      ['Não consigo acompanhar minha família.', 'Consigo conversar e compartilhar mais.'],
    ], { de: 'Antes', para: 'Depois' })}
    <p class="aviso" data-reveal>Os resultados variam conforme o ritmo, a prática e a experiência de cada aluno. A página comunica possibilidades de aprendizagem, não resultados garantidos.</p>`,
})}

${secao({
  conteudo: `
    ${cabecalho({
      olho: 'COMO VOCÊ VAI APRENDER',
      titulo: 'Aprender. Praticar. Repetir. Ganhar confiança.',
      texto: ['Cada conteúdo começa pelo essencial. Você entende a ideia, acompanha uma demonstração, pratica em uma situação real e pode voltar à explicação quando precisar.'],
    })}
    ${etapas([
      { titulo: 'Explicação', texto: 'O assunto apresentado sem termos complicados.' },
      { titulo: 'Demonstração', texto: 'O passo a passo mostrado na tela.' },
      { titulo: 'Prática', texto: 'A aplicação em uma situação real do seu dia.' },
      { titulo: 'Repetição', texto: 'A explicação disponível sempre que precisar rever.' },
      { titulo: 'Autonomia', texto: 'Mais segurança para fazer sozinho.' },
    ])}
    <p class="destaque destaque--centro" data-reveal>Tecnologia explicada para quem nunca teve alguém disposto a explicar com calma.</p>`,
})}

${secao({
  fundo: 'claro',
  conteudo: `
    ${cabecalho({ titulo: 'Você começa pelo básico e evolui passo a passo.', centro: true })}
    ${accordion(TRILHAS, { nome: 'trilha', evento: 'course_curriculum_view' })}`,
  largura: 'container--medio',
})}

${secao({
  conteudo: `
  <div class="duo duo--inverso">
    <div class="duo__texto">
      ${cabecalho({
        titulo: 'Veja como é uma explicação do Digital para Todos.',
        texto: ['Você não precisa imaginar se a linguagem será simples. Veja um exemplo real e conheça o ritmo das explicações.'],
      })}
      ${midia.previewVideoUrl
        ? cta({ texto: 'ASSISTIR À PRÉVIA DO CURSO', href: midia.previewVideoUrl, evento: 'course_video_play' })
        : ctaAulasGratuitas('COMEÇAR PELAS 15 AULAS GRATUITAS')}
    </div>
    <div class="duo__media" data-reveal>
      <div class="moldura moldura--azul">
        ${figura({ arquivo: 'course-preview-class.webp', alt: 'Homem assistindo a uma videoaula em um tablet na mesa da cozinha' })}
      </div>
    </div>
  </div>`,
})}

${secao({
  fundo: 'creme',
  largura: 'container--estreito',
  conteudo: `
    <div class="destaque-bloco" data-reveal>
      ${selo('COMECE ANTES DE DECIDIR', 'laranja')}
      <h2 class="titulo">Assista às primeiras 15 aulas gratuitamente.</h2>
      <p class="texto">Conheça o jeito Digital para Todos de ensinar, acompanhe as primeiras explicações e descubra como é possível aprender tecnologia com mais calma e clareza.</p>
      <p class="texto">Você pode começar pelo conteúdo gratuito e, depois, decidir se deseja continuar sua jornada com o curso completo.</p>
      ${ctaAulasGratuitas('QUERO VER AS 15 AULAS GRATUITAS')}
    </div>`,
})}

${secao({
  conteudo: `
  <div class="duo">
    <div class="duo__texto">
      ${selo('GOLPE AQUI NÃO!', 'laranja')}
      ${cabecalho({
        titulo: 'Conhecimento também é uma forma de proteção.',
        texto: [
          'Mensagens, links, pedidos de dinheiro e telas desconhecidas podem gerar dúvida. Aprender a observar sinais de alerta é uma habilidade importante para quem usa a tecnologia todos os dias.',
          'No Digital para Todos, a segurança digital faz parte do aprendizado de forma simples, prática e responsável.',
        ],
      })}
      <p class="aviso aviso--inline">O curso ensina cuidados e sinais de alerta. Nenhum curso pode prometer eliminar todos os riscos digitais.</p>
      ${ctaCheckoutAluno('QUERO APRENDER A USAR A TECNOLOGIA COM MAIS SEGURANÇA', 'course_cta_click')}
    </div>
    <div class="duo__media" data-reveal>
      <div class="moldura moldura--verde">
        ${figura({ arquivo: 'course-security-learning.webp', alt: 'Ilustração de smartphone e sinais de atenção representando segurança digital' })}
      </div>
    </div>
  </div>`,
})}

${secao({
  fundo: 'claro',
  conteudo: `
  <div class="duo duo--inverso">
    <div class="duo__texto">
      ${cabecalho({
        olho: 'TECNOLOGIA DE HOJE E DO FUTURO',
        titulo: 'A Inteligência Artificial também pode ser explicada de forma simples.',
        texto: ['Você vai conhecer a Inteligência Artificial como uma ferramenta que pode ajudar em situações do cotidiano — sempre entendendo o que ela faz, como conversar com ela e quais cuidados ter.'],
      })}
      <ul class="lista-marcada" role="list">
        ${lista([
          'Conhecendo a Inteligência Artificial',
          'Conversando com a IA',
          'Criando imagens',
          'Usando a IA para resolver problemas do dia a dia',
          'Segurança e golpes envolvendo IA',
        ], (t) => `<li>${icone('check', 'icone--marca')}<span>${t}</span></li>`)}
      </ul>
    </div>
    <div class="duo__media" data-reveal>
      <div class="moldura moldura--roxo">
        ${figura({ arquivo: 'course-ai-learning.webp', alt: 'Ilustração de mão segurando celular com balões de conversa representando inteligência artificial' })}
      </div>
    </div>
  </div>`,
})}

${secao({
  conteudo: `
  <div class="publico">
    <div class="publico__bloco publico__bloco--sim" data-reveal>
      <h2 class="titulo titulo--medio">Este curso foi pensado para quem quer aprender sem ser tratado como incapaz.</h2>
      <ul class="lista-marcada" role="list">
        ${lista([
          'Quer entender melhor o celular',
          'Tem pouca intimidade com tecnologia',
          'Precisa pedir ajuda para tarefas digitais',
          'Quer usar WhatsApp, redes sociais e aplicativos',
          'Tem receio de golpes',
          'Quer acompanhar melhor filhos e netos',
          'Prefere explicações simples',
          'Quer aprender no próprio ritmo',
        ], (t) => `<li>${icone('check', 'icone--marca')}<span>${t}</span></li>`)}
      </ul>
    </div>
    <div class="publico__bloco publico__bloco--nao" data-reveal data-reveal-delay="80">
      <h2 class="titulo titulo--medio">Talvez este não seja o curso que você está procurando se...</h2>
      <ul class="lista-marcada lista-marcada--neutra" role="list">
        ${lista([
          'Busca programação avançada',
          'Quer desenvolvimento de aplicativos ou suporte profissional',
          'Procura certificação técnica ou acadêmica',
          'Espera resultado financeiro',
          'Não quer praticar ou acompanhar as explicações',
        ], (t) => `<li><span class="marca-nao" aria-hidden="true"></span><span>${t}</span></li>`)}
      </ul>
      <p class="texto texto--menor">O Digital para Todos é uma formação de inclusão digital para a vida cotidiana. Seu foco é ajudar pessoas a usar a tecnologia com mais compreensão, segurança e autonomia progressiva.</p>
    </div>
  </div>`,
})}

${secao({
  fundo: 'creme',
  largura: 'container--medio',
  conteudo: `
    ${cabecalho({ titulo: 'Pessoas reais estão aprendendo a participar mais do mundo digital.', centro: true })}
    ${depoimentos.curso.length
      ? `<ul class="depoimentos" role="list">${lista(depoimentos.curso, (d) => `
          <li class="depoimento" data-reveal>
            <blockquote><p>${d.texto}</p></blockquote>
            <p class="depoimento__autor">${d.nome}<span>${d.contexto}</span></p>
          </li>`)}</ul>`
      : `<div class="prova-preparo" data-reveal>
           <p class="texto">O Digital para Todos acompanha alunos em atividades online e presenciais. Os relatos dessas experiências estão sendo reunidos com identificação e autorização de cada pessoa, para que possam ser publicados aqui com transparência.</p>
           <p class="texto texto--menor">Preferimos não exibir depoimento algum a exibir um depoimento que você não possa conferir.</p>
         </div>`}`,
})}

${secao({
  largura: 'container--estreito',
  conteudo: `
    ${cabecalho({
      titulo: 'Um projeto criado para ensinar com paciência, respeito e propósito.',
      texto: [
        'O Digital para Todos nasceu da convivência com pessoas que queriam aprender e não encontravam quem explicasse com calma. A experiência com turmas e atendimentos deu origem a um método próprio, organizado em cinco etapas e construído a partir de situações reais do cotidiano.',
        'A missão é simples de enunciar e exigente de cumprir: ensinar tecnologia sem pressa, sem termos técnicos desnecessários e sem tratar ninguém como incapaz.',
      ],
    })}`,
})}

${secao({
  fundo: 'claro',
  conteudo: `
    ${cabecalho({ titulo: 'Ao entrar, você terá acesso a uma jornada de aprendizagem em expansão.', centro: true })}
    ${cards(itensIncluidos, { colunas: 3, tipo: 'card card--incluso' })}`,
})}

${secao({
  fundo: 'marinho',
  largura: 'container--estreito',
  classe: 'secao--oferta',
  conteudo: `
    <div class="oferta" data-reveal>
      <p class="eyebrow">COMECE SUA JORNADA DE AUTONOMIA DIGITAL</p>
      <h2 class="titulo titulo--grande">Um passo simples para aprender tecnologia com mais segurança.</h2>
      ${blocoPreco}
      ${ctaCheckoutAluno('QUERO APRENDER', 'course_offer_cta_click')}
      <p class="microcopy microcopy--claro">Condições finais, formas de pagamento, acesso e reembolso devem corresponder exatamente à oferta ativa no checkout Hotmart.</p>
    </div>`,
})}

${secao({
  largura: 'container--estreito',
  conteudo: `
    ${cabecalho({
      titulo: 'Conheça o curso com clareza antes de tomar sua decisão.',
      texto: [
        'As primeiras 15 aulas gratuitas permitem que você conheça a linguagem e o jeito Digital para Todos de ensinar.',
        oferta.garantia
          ? `A garantia de compra é de ${oferta.garantia}, conforme as regras ativas na oferta.`
          : 'A garantia de compra é apresentada conforme o prazo e as regras ativos na oferta oficial, no momento da contratação.',
      ],
    })}
    ${ctaAulasGratuitas()}`,
})}

${secao({
  fundo: 'claro',
  largura: 'container--medio',
  conteudo: `
    ${cabecalho({ titulo: 'Perguntas frequentes', centro: true })}
    ${accordion(FAQ, { nome: 'faq-curso', evento: 'course_faq_open' })}`,
})}

${secao({
  fundo: 'creme',
  largura: 'container--estreito',
  classe: 'secao--final',
  conteudo: `
    <div class="final" data-reveal>
      <p class="eyebrow">A TECNOLOGIA NÃO TEM IDADE</p>
      <h2 class="titulo titulo--grande">Você pode continuar aprendendo.</h2>
      <p class="texto">Com uma explicação simples, prática e paciente, a tecnologia pode ficar mais compreensível e fazer mais sentido no seu dia a dia.</p>
      <p class="texto">Comece pelo básico. Aprenda no seu ritmo. Desenvolva mais confiança para seguir em frente.</p>
      <div class="final__ctas">${ctaCheckoutAluno('QUERO APRENDER', 'course_final_cta_click')}${ctaAulasGratuitas()}</div>
      <p class="microcopy">Você será direcionado ao checkout oficial para consultar as condições atuais.</p>
    </div>`,
})}
`;
