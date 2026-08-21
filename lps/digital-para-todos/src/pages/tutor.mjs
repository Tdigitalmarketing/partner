/**
 * `/tutor` — jornada de quem acompanha alguém (§3). Copy: §11.3.
 * §3 proíbe publicar o checkout Tutor enquanto acesso, compartilhamento,
 * cadastro, preço, garantia e suporte não estiverem definidos: o CTA fica
 * em estado pendente explícito e a página diz isso ao visitante.
 */
import {
  accordion, cabecalho, cards, cta, ctaAulasGratuitas, ctaCheckoutTutor,
  etapas, figura, hero, icone, lista, secao, selo, transformacao,
} from '../components.mjs';
import { conversao, depoimentos } from '../../site.config.mjs';

const FAQ = [
  { titulo: 'Eu não sei ensinar. Isso é um problema?', conteudo: '<p>Não. O conteúdo já vem organizado e explicado — quem ensina é o curso. Seu papel é acompanhar: assistir junto quando puder, conversar sobre o tema e incentivar a prática.</p>' },
  { titulo: 'Tenho pouco tempo. Consigo mesmo assim?', conteudo: '<p>Acompanhar não exige aula particular nem horário fixo. Uma conversa curta sobre o que a pessoa aprendeu na semana já sustenta o ritmo.</p>' },
  { titulo: 'E se a pessoa não conseguir aprender?', conteudo: '<p>O aprendizado é progressivo e varia de pessoa para pessoa. O método prevê repetição justamente porque rever faz parte. Pequenos avanços contam.</p>' },
  { titulo: 'Como funciona o acesso? Preciso comprar dois cursos?', conteudo: '<p>As regras de acesso da jornada Tutor — quantos acessos, se há compartilhamento e como a pessoa acompanhada é cadastrada — estão sendo definidas.</p><p>Preferimos não publicar uma regra que ainda pode mudar. Assim que estiver confirmada, ela aparecerá aqui de forma clara, antes de qualquer compra.</p>' },
  { titulo: 'Moro longe da pessoa que quero ajudar. Funciona?', conteudo: '<p>Sim. Como o conteúdo é online e pode ser revisto, o acompanhamento pode acontecer por chamada de vídeo ou conversa, combinando um ritmo possível para os dois.</p>' },
  { titulo: 'Posso conhecer antes de decidir?', conteudo: '<p>Pode. As primeiras 15 aulas gratuitas mostram a linguagem e o ritmo das explicações — inclusive para você avaliar se são adequadas à pessoa que deseja acompanhar.</p>' },
];

export const seo = {
  titulo: 'Tutor Digital para Todos | Aprenda Junto e Acompanhe Alguém',
  descricao: 'Conheça a jornada Tutor do Digital para Todos e ajude alguém que você ama a conquistar mais autonomia e segurança digital.',
  og: 'og-tutor.jpg',
  heroImagem: 'tutor-hero-generations-1200w.webp',
};

export const ctaFixo = ctaCheckoutTutor('QUERO SER UM TUTOR', 'tutor_persistent_cta_click');

export const conteudo = `
${hero({
  olho: 'PARA QUEM QUER AJUDAR ALGUÉM IMPORTANTE',
  titulo: 'Você não precisa ensinar tudo.<br><span class="realce">Pode aprender junto e acompanhar.</span>',
  subtitulo: 'O Digital para Todos ajuda você a acompanhar seu pai, sua mãe, seus avós, seu filho ou alguém que ama na jornada de aprender tecnologia com mais segurança, confiança e autonomia.',
  ctas: ctaCheckoutTutor() + cta({ texto: 'CONHECER O JEITO DE ENSINAR', href: '#metodo-tutor', variante: 'secundario', evento: 'tutor_method_view' }),
  microcopy: 'Uma forma mais organizada, paciente e humana de apoiar alguém no mundo digital.',
  imagem: 'tutor-hero-generations.webp',
  alt: 'Familiar acompanhando pessoa mais velha durante aprendizagem no celular',
  prova: 'Aprender junto também é uma forma de cuidar.',
})}

${secao({
  fundo: 'claro',
  conteudo: `
    ${cabecalho({
      olho: 'TALVEZ VOCÊ JÁ TENHA OUVIDO ISSO',
      titulo: '“Você pode fazer isso para mim no celular?”',
      texto: [
        'A ajuda da família é importante. Mas, muitas vezes, fazer tudo pela outra pessoa resolve o problema de hoje e mantém a dependência para amanhã.',
        'O Tutor ajuda a transformar parte dessa ajuda em acompanhamento: aprender junto, praticar com calma e incentivar pequenos avanços.',
      ],
    })}
    ${cards([
      { icone: 'conversa', titulo: 'Meu pai me chama para tudo' },
      { icone: 'duvida', titulo: 'Minha mãe tem medo de clicar' },
      { icone: 'alerta', titulo: 'Meu avô quase caiu em um golpe' },
      { icone: 'maos', titulo: 'Quero ajudar sem fazer por ele' },
      { icone: 'bussola', titulo: 'Moro longe e não consigo estar sempre presente' },
      { icone: 'crescer', titulo: 'Não sei ensinar' },
    ], { colunas: 3, tipo: 'card card--dor card--compacto' })}
    <div class="acao-secao" data-reveal>
      ${cta({ texto: 'QUERO ENTENDER COMO SER UM TUTOR', href: '#papel-tutor', variante: 'terciario' })}
    </div>`,
})}

${secao({
  conteudo: `
    ${cabecalho({
      titulo: 'A melhor ajuda nem sempre é fazer no lugar. Às vezes, é acompanhar até a pessoa conseguir.',
      texto: [
        'O Tutor não precisa transformar cada dúvida em uma aula particular. O conteúdo do Digital para Todos oferece uma base para que o familiar possa acompanhar, conversar, incentivar e reforçar o aprendizado.',
        'A meta não é abandonar a pessoa nem exigir que ela faça tudo sozinha imediatamente. É criar espaço para que ela participe cada vez mais do próprio processo.',
      ],
    })}
    ${transformacao([
      ['Pegar o celular e fazer tudo', 'Perguntar o que a pessoa já entendeu'],
      ['Corrigir com pressa', 'Repetir a explicação com calma'],
      ['Dizer “é só clicar”', 'Acompanhar o passo a passo'],
      ['Evitar que tente', 'Criar situação segura de prática'],
      ['Assustar', 'Reforçar cuidados e alertas'],
    ], { de: 'Em vez de', para: 'Experimente' })}`,
})}

${secao({
  id: 'papel-tutor',
  fundo: 'marinho',
  conteudo: `
    ${cabecalho({
      titulo: 'O Tutor funciona como apoio durante a jornada de inclusão digital.',
      texto: [
        'O Tutor tem acesso ao conteúdo, entende o que está sendo trabalhado e acompanha a evolução da pessoa que deseja ajudar.',
        'Ele pode aprender junto, assistir a uma aula, conversar sobre o tema, acompanhar a prática e reforçar comportamentos de segurança.',
      ],
      destaque: 'Ser Tutor não significa substituir o professor, o suporte técnico ou a autonomia da pessoa acompanhada.',
    })}
    <div class="duas-listas">
      <div class="lista-bloco lista-bloco--sim" data-reveal>
        <h3 class="lista-bloco__titulo">O Tutor pode</h3>
        <ul class="lista-marcada" role="list">
          ${lista([
            'Assistir às aulas junto',
            'Entender o que está sendo aprendido',
            'Organizar um momento de prática',
            'Incentivar perguntas',
            'Reforçar cuidados de segurança',
            'Celebrar cada avanço',
            'Aprender junto',
          ], (t) => `<li>${icone('check', 'icone--marca')}<span>${t}</span></li>`)}
        </ul>
      </div>
      <div class="lista-bloco lista-bloco--nao" data-reveal data-reveal-delay="80">
        <h3 class="lista-bloco__titulo">O Tutor não precisa</h3>
        <ul class="lista-marcada lista-marcada--neutra" role="list">
          ${lista([
            'Ser especialista em tecnologia',
            'Saber responder tudo',
            'Fazer tudo pela pessoa',
            'Prometer que nada dará errado',
            'Substituir suporte profissional',
          ], (t) => `<li><span class="marca-nao" aria-hidden="true"></span><span>${t}</span></li>`)}
        </ul>
      </div>
    </div>`,
})}

${secao({
  fundo: 'claro',
  conteudo: `
    ${cabecalho({ titulo: 'Um caminho simples para acompanhar sem pressionar.', centro: true })}
    ${etapas([
      { titulo: 'Escolha acompanhar', texto: 'Decida com quem você quer fazer essa jornada.' },
      { titulo: 'Conheça o conteúdo', texto: 'Veja o que será trabalhado, para saber o que esperar.' },
      { titulo: 'Combine um ritmo', texto: 'Um tema por semana já é um bom começo.' },
      { titulo: 'Aprendam juntos', texto: 'Assista à explicação junto e conversem sobre ela.' },
      { titulo: 'Reforce a segurança', texto: 'Falem sobre mensagens, links e pedidos suspeitos.' },
      { titulo: 'Incentive a autonomia', texto: 'Deixe a pessoa fazer, mesmo que demore um pouco mais.' },
    ])}`,
})}

${secao({
  conteudo: `
    ${cabecalho({ titulo: 'O ganho não é apenas aprender tecnologia. É melhorar a forma de estar presente.', centro: true })}
    <div class="duas-listas">
      <div class="lista-bloco" data-reveal>
        <h3 class="lista-bloco__titulo">Para a pessoa acompanhada</h3>
        <ul class="lista-marcada" role="list">
          ${lista([
            'Mais confiança para tentar',
            'Menos vergonha de perguntar',
            'Prática com apoio próximo',
            'Mais atenção a riscos',
            'Autonomia progressiva',
            'Mais conversa com a família',
          ], (t) => `<li>${icone('check', 'icone--marca')}<span>${t}</span></li>`)}
        </ul>
      </div>
      <div class="lista-bloco" data-reveal data-reveal-delay="80">
        <h3 class="lista-bloco__titulo">Para você, Tutor</h3>
        <ul class="lista-marcada" role="list">
          ${lista([
            'Um caminho estruturado para seguir',
            'Compreensão do que está sendo ensinado',
            'Menos improviso na hora de explicar',
            'Incentivo sem pressão',
            'Aprendizagem conjunta',
            'Cuidado convertido em autonomia',
          ], (t) => `<li>${icone('check', 'icone--marca')}<span>${t}</span></li>`)}
        </ul>
      </div>
    </div>
    <p class="destaque destaque--centro" data-reveal>Você oferece o apoio. O Digital para Todos oferece o caminho.</p>`,
})}

${secao({
  id: 'metodo-tutor',
  fundo: 'creme',
  conteudo: `
  <div class="duo">
    <div class="duo__texto">
      ${cabecalho({
        titulo: 'O conteúdo já vem organizado para começar pelo básico.',
        texto: ['O Digital para Todos utiliza explicações simples, demonstrações e prática. Isso ajuda o Tutor a entender onde a pessoa está na jornada e qual assunto pode ser trabalhado em seguida.'],
        destaque: 'Explicação → Demonstração → Prática → Repetição → Autonomia',
      })}
      <ul class="temas temas--compacto" role="list">
        ${lista([
          'Celular', 'Internet e Wi-Fi', 'WhatsApp', 'Facebook e Instagram',
          'Segurança e golpes', 'Inteligência Artificial', 'Uber', 'iFood',
          'Play Store', 'Conteúdos em expansão',
        ], (t) => `<li class="tema">${icone('check', 'icone--marca')}<span>${t}</span></li>`)}
      </ul>
      ${cta({ texto: 'QUERO ACOMPANHAR ESSA JORNADA', href: '#oferta-tutor', variante: 'terciario' })}
    </div>
    <div class="duo__media" data-reveal>
      <div class="moldura moldura--laranja">
        ${figura({ arquivo: 'tutor-shared-practice.webp', alt: 'Mãe segurando o próprio celular enquanto a filha explica apontando para a tela' })}
      </div>
    </div>
  </div>`,
})}

${secao({
  largura: 'container--estreito',
  conteudo: `
    <div class="destaque-bloco" data-reveal>
      <p class="eyebrow">ANTES DE COMPRAR, CONHEÇA O MÉTODO</p>
      <h2 class="titulo">Assista às primeiras 15 aulas e veja como o conteúdo é explicado.</h2>
      <p class="texto">Você pode conhecer a linguagem, o ritmo e a abordagem do Digital para Todos antes de apresentar o curso à pessoa que deseja acompanhar.</p>
      ${ctaAulasGratuitas('VER AS 15 AULAS GRATUITAS', 'tutor_free_lessons_click')}
    </div>`,
})}

${secao({
  fundo: 'claro',
  conteudo: `
  <div class="duo duo--inverso">
    <div class="duo__texto">
      ${selo('GOLPE AQUI NÃO!', 'laranja')}
      ${cabecalho({
        titulo: 'Cuidar também é ajudar a reconhecer situações de risco.',
        texto: [
          'Golpes digitais costumam gerar medo, vergonha e silêncio. Uma conversa simples sobre mensagens, links, pedidos de dinheiro e informações pessoais pode ajudar a criar mais atenção no dia a dia.',
          'O Digital para Todos apresenta cuidados de forma acessível para que o aluno e o Tutor possam conversar sobre segurança sem transformar a tecnologia em motivo de pânico.',
        ],
      })}
      ${ctaCheckoutTutor('QUERO APRENDER A ACOMPANHAR COM MAIS SEGURANÇA', 'tutor_cta_click')}
    </div>
    <div class="duo__media" data-reveal>
      <div class="moldura moldura--verde">
        ${figura({ arquivo: 'tutor-family-security.webp', alt: 'Família conversando sobre uma mensagem recebida no celular da avó' })}
      </div>
    </div>
  </div>`,
})}

${secao({
  largura: 'container--medio',
  conteudo: `
    ${cabecalho({ titulo: 'Quem acompanha também vive uma transformação.', centro: true })}
    ${depoimentos.tutor.length
      ? `<ul class="depoimentos" role="list">${lista(depoimentos.tutor, (d) => `
          <li class="depoimento" data-reveal>
            <blockquote><p>${d.texto}</p></blockquote>
            <p class="depoimento__autor">${d.nome}<span>${d.contexto}</span></p>
          </li>`)}</ul>`
      : `<div class="prova-preparo" data-reveal>
           <p class="texto">Filhos, netos e cuidadores que acompanharam alguém nessa jornada têm relatos próprios: sobre paciência, sobre pequenas conquistas e sobre conversas que voltaram a acontecer. Esses relatos estão sendo reunidos com identificação e autorização para serem publicados aqui.</p>
           <p class="texto texto--menor">Nenhum depoimento é exibido antes de ser real e autorizado.</p>
         </div>`}`,
})}

${secao({
  id: 'oferta-tutor',
  fundo: 'marinho',
  largura: 'container--estreito',
  classe: 'secao--oferta',
  conteudo: `
    <div class="oferta" data-reveal>
      <h2 class="titulo titulo--grande">Transforme sua ajuda em uma jornada de aprendizagem.</h2>
      <p class="texto">A jornada Tutor dá acesso ao conteúdo do Digital para Todos para que você acompanhe alguém do começo ao fim: entendendo o que está sendo ensinado, praticando junto e reforçando os cuidados de segurança.</p>
      ${conversao.tutorCheckoutUrl ? '' : `
      <div class="oferta__aviso">
        <h3>O que ainda está sendo definido</h3>
        <p>Preço, garantia, tempo de acesso, número de acessos, possibilidade de compartilhamento e cadastro da pessoa acompanhada.</p>
        <p>Enquanto essas regras não estiverem confirmadas, não colocamos a oferta à venda — você merece saber exatamente o que está contratando antes de pagar.</p>
      </div>`}
      ${ctaCheckoutTutor('QUERO SER UM TUTOR', 'tutor_offer_cta_click')}
      <p class="microcopy microcopy--claro">Você será direcionado ao checkout oficial para consultar as condições da oferta.</p>
    </div>`,
})}

${secao({
  fundo: 'claro',
  largura: 'container--medio',
  conteudo: `
    ${cabecalho({ titulo: 'Perguntas frequentes', centro: true })}
    ${accordion(FAQ, { nome: 'faq-tutor', evento: 'tutor_faq_open' })}`,
})}

${secao({
  fundo: 'creme',
  largura: 'container--estreito',
  classe: 'secao--final',
  conteudo: `
    <div class="final" data-reveal>
      <p class="eyebrow">APRENDER JUNTO TAMBÉM É UMA FORMA DE CUIDAR</p>
      <h2 class="titulo titulo--grande">Ajude alguém que você ama a conquistar mais autonomia digital.</h2>
      <p class="texto">Você não precisa ter todas as respostas. Pode oferecer um caminho, acompanhar os primeiros passos e estar presente enquanto a pessoa aprende.</p>
      <div class="final__ctas">${ctaCheckoutTutor('QUERO SER UM TUTOR', 'tutor_final_cta_click')}${ctaAulasGratuitas('VER AS 15 AULAS GRATUITAS', 'tutor_free_lessons_click')}</div>
      <p class="microcopy">Condições de acesso, oferta e suporte serão apresentadas de acordo com a configuração final do produto.</p>
    </div>`,
})}
`;
