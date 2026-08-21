/**
 * `/instituicoes` — venda consultiva B2B/B2I (§3). Copy: §11.4.
 * §15: sem preço e sem checkout. A conversão é o pedido de apresentação.
 */
import {
  accordion, cabecalho, cards, cta, ctaWhatsApp, etapas, figura, hero,
  icone, lista, secao, secao as _s,
} from '../components.mjs';
import { conversao, depoimentos } from '../../site.config.mjs';

const TIPOS = ['Empresa', 'Igreja', 'Associação', 'ONG ou projeto social',
  'Escola ou centro de convivência', 'Grupo comunitário', 'Órgão público', 'Outra organização'];

const OBJETIVOS = [
  'Criar projeto para pessoas 50+',
  'Apoiar comunidade',
  'Ação de responsabilidade social',
  'Capacitar colaboradores/familiares',
  'Apoiar projeto social',
  'Organizar encontros',
  'Conhecer parceria',
  'Outro',
];

const FAQ = [
  { titulo: 'Como funciona o primeiro contato?', conteudo: '<p>Você envia o formulário contando quem deseja atender e qual é o objetivo. A equipe retorna pelo canal informado para entender o contexto, esclarecer dúvidas e avaliar se o Digital para Todos é adequado à sua realidade.</p><p>Esse contato não representa compromisso de contratação.</p>' },
  { titulo: 'Quais formatos de implementação existem?', conteudo: '<p>O Digital para Todos pode ser avaliado em diferentes formatos — de acessos ao conteúdo online a turmas presenciais apoiadas pelo material, programas para colaboradores e familiares, projetos comunitários e formação de tutores.</p><p>O formato adequado depende do público, do número de participantes, do espaço e dos equipamentos disponíveis. Por isso ele é definido na conversa, e não antes dela.</p>' },
  { titulo: 'Qual é o investimento?', conteudo: '<p>O investimento depende do formato, do número de participantes e do escopo definido com a instituição. A proposta comercial apresenta com clareza o que está incluído, o que depende de contratação adicional e quais responsabilidades cabem a cada parte.</p>' },
  { titulo: 'Quanto tempo leva para implantar?', conteudo: '<p>O prazo é definido junto com a instituição, a partir do diagnóstico. Ele varia conforme o formato escolhido, a disponibilidade da equipe e o calendário do público atendido.</p>' },
  { titulo: 'O projeto atende pessoas com deficiência?', conteudo: '<p>A linguagem, os recursos e o suporte são adaptados ao público atendido. Necessidades específicas de acessibilidade precisam ser avaliadas no diagnóstico, para que a instituição receba uma resposta responsável e não uma promessa genérica.</p>' },
  { titulo: 'Como acompanhamos os resultados?', conteudo: '<p>Cada organização pode definir o que deseja acompanhar: alcance, participação, presença nos encontros, uso de determinados recursos, evolução percebida ou relatos do público atendido. Esses indicadores são combinados no início, para que o acompanhamento tenha sentido para a instituição.</p>' },
];

const campo = ({ id, rotulo, tipo = 'text', obrigatorio = false, ajuda = '', autocomplete = '', inputmode = '', opcoes = null, linhas = 0 }) => {
  const req = obrigatorio ? 'required aria-required="true"' : '';
  const desc = ajuda ? `${id}-ajuda` : '';
  const comum = `id="${id}" name="${id}" ${req} ${desc ? `aria-describedby="${desc}"` : ''}
    ${autocomplete ? `autocomplete="${autocomplete}"` : ''} ${inputmode ? `inputmode="${inputmode}"` : ''}`;
  let controle;
  if (opcoes) {
    controle = `<select ${comum}>
      <option value="">Selecione</option>
      ${lista(opcoes, (o) => `<option value="${o}">${o}</option>`)}
    </select>`;
  } else if (linhas) {
    controle = `<textarea ${comum} rows="${linhas}"></textarea>`;
  } else {
    controle = `<input type="${tipo}" ${comum}>`;
  }
  return `
    <div class="campo ${linhas ? 'campo--largo' : ''}">
      <label for="${id}">${rotulo}${obrigatorio ? '<span class="campo__obrig" aria-hidden="true">*</span>' : '<span class="campo__opcional">(opcional)</span>'}</label>
      ${controle}
      ${ajuda ? `<p class="campo__ajuda" id="${desc}">${ajuda}</p>` : ''}
      <p class="campo__erro" data-erro-de="${id}" hidden></p>
    </div>`;
};

const formulario = `
  <form class="form" id="form-instituicao" data-lead-form novalidate
        ${conversao.institutionLeadEndpoint ? `action="${conversao.institutionLeadEndpoint}" method="post"` : ''}>
    <div class="form__grade">
      ${campo({ id: 'nome', rotulo: 'Seu nome', obrigatorio: true, autocomplete: 'name' })}
      ${campo({ id: 'instituicao', rotulo: 'Instituição', obrigatorio: true, autocomplete: 'organization' })}
      ${campo({ id: 'cargo', rotulo: 'Cargo ou função', obrigatorio: true, autocomplete: 'organization-title' })}
      ${campo({ id: 'email', rotulo: 'E-mail', tipo: 'email', obrigatorio: true, autocomplete: 'email', inputmode: 'email' })}
      ${campo({ id: 'whatsapp', rotulo: 'WhatsApp', tipo: 'tel', autocomplete: 'tel', inputmode: 'tel', ajuda: 'Informe se preferir que o retorno seja por WhatsApp.' })}
      ${campo({ id: 'tipo', rotulo: 'Tipo de instituição', obrigatorio: true, opcoes: TIPOS })}
      ${campo({ id: 'cidade', rotulo: 'Cidade e estado', autocomplete: 'address-level2' })}
      ${campo({ id: 'publico', rotulo: 'Público que deseja atender', obrigatorio: true, ajuda: 'Por exemplo: pessoas 50+ da comunidade, colaboradores, famílias atendidas.' })}
      ${campo({ id: 'participantes', rotulo: 'Número aproximado de participantes', inputmode: 'numeric' })}
      ${campo({ id: 'objetivo', rotulo: 'Objetivo principal', obrigatorio: true, opcoes: OBJETIVOS })}
      ${campo({ id: 'prazo', rotulo: 'Prazo desejado' })}
      ${campo({ id: 'mensagem', rotulo: 'Mensagem adicional', linhas: 4 })}
    </div>
    <div class="form__hp" aria-hidden="true">
      <label for="website">Não preencha este campo</label>
      <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
    </div>
    <p class="form__consentimento">
      Ao enviar seus dados, você concorda que o Digital para Todos os utilize para responder à sua
      solicitação e conduzir o contato relacionado à solução institucional, conforme a Política de Privacidade.
    </p>
    <div class="form__acoes">
      <!-- Sem data-evento: o envio é rastreado no handler de submit, uma única
           vez e só quando de fato ocorre. O clique não é uma conversão (§29). -->
      <button type="submit" class="cta cta--primario" data-submit>
        SOLICITAR APRESENTAÇÃO
      </button>
    </div>
    <p class="form__estado" data-form-status role="status" aria-live="polite"></p>
    ${conversao.institutionLeadEndpoint ? '' : `
    <p class="form__aviso-previa">
      Prévia: o envio ainda não está conectado a um destino. A validação dos campos e a
      mensagem de confirmação funcionam normalmente, mas nenhum dado é transmitido.
    </p>`}
  </form>

  <div class="form-sucesso" data-form-sucesso hidden tabindex="-1">
    <span class="form-sucesso__icone">${icone('check')}</span>
    <h3>Solicitação recebida.</h3>
    <p>Obrigado por apresentar sua necessidade. Nossa equipe recebeu os dados e entrará em contato pelo canal informado para entender melhor o projeto e orientar os próximos passos.</p>
    ${conversao.whatsappNumero
      ? `<p class="form-sucesso__wpp">Se o contato for urgente, fale conosco pelo WhatsApp oficial.</p>${ctaWhatsApp('FALAR PELO WHATSAPP')}`
      : ''}
  </div>`;

export const seo = {
  titulo: 'Inclusão Digital para Instituições | Digital para Todos',
  descricao: 'Leve uma solução estruturada de inclusão digital para sua empresa, igreja, associação, ONG, projeto social ou comunidade.',
  og: 'og-instituicoes.jpg',
  heroImagem: 'institution-hero-community-class-1200w.webp',
};

export const ctaFixo = cta({
  texto: 'SOLICITAR UMA APRESENTAÇÃO', href: '#solicitar-apresentacao',
  evento: 'institution_persistent_cta_click', bloco: true,
});

export const conteudo = `
${hero({
  olho: 'INCLUSÃO DIGITAL PARA ORGANIZAÇÕES E COMUNIDADES',
  titulo: 'Leve o Digital para Todos <span class="realce">para sua instituição.</span>',
  subtitulo: 'Uma solução estruturada para ajudar pessoas a usar a tecnologia com mais segurança, autonomia e confiança — em empresas, igrejas, associações, ONGs, projetos sociais e grupos comunitários.',
  ctas: cta({ texto: 'SOLICITAR UMA APRESENTAÇÃO', href: '#solicitar-apresentacao', evento: 'institution_hero_cta_click' })
    + cta({ texto: 'CONHECER COMO FUNCIONA', href: '#metodologia', variante: 'secundario' }),
  microcopy: 'Conte-nos sobre sua instituição, seu público e o que deseja realizar. A equipe avaliará o melhor formato de conversa.',
  imagem: 'institution-hero-community-class.webp',
  alt: 'Grupo de adultos participando de atividade coletiva de inclusão digital',
})}

${secao({
  fundo: 'claro',
  conteudo: `
    ${cabecalho({
      olho: 'QUANDO A EXCLUSÃO DIGITAL LIMITA A PARTICIPAÇÃO',
      titulo: 'Muitas pessoas precisam de mais do que acesso: precisam de explicação, prática e apoio.',
      texto: [
        'Para participar plenamente da vida atual, não basta ter um celular ou uma conexão. É preciso entender como usar os recursos, reconhecer riscos, praticar e ter alguém ou alguma organização que ofereça apoio quando surgirem dúvidas.',
        'Quando esse suporte não existe, pessoas podem depender de familiares para tarefas simples, evitar serviços digitais, deixar de participar de conversas e ficar mais expostas a golpes.',
        'Sua instituição pode ajudar a reduzir essa distância com uma ação de aprendizagem organizada, acolhedora e conectada à vida real.',
      ],
    })}
    ${cards([
      { icone: 'maos', titulo: 'Público dependente', texto: 'Pessoas que precisam de ajuda para tarefas digitais simples do dia a dia.' },
      { icone: 'grupo', titulo: 'Equipe sobrecarregada', texto: 'Colaboradores que atendem as mesmas dúvidas repetidamente, sem material de apoio.' },
      { icone: 'relogio', titulo: 'Ação sem continuidade', texto: 'Iniciativas pontuais que não se sustentam depois do primeiro encontro.' },
      { icone: 'alerta', titulo: 'Risco e insegurança', texto: 'Público mais exposto a mensagens, links e pedidos suspeitos.' },
    ], { colunas: 4, tipo: 'card card--dor' })}
    <div class="acao-secao" data-reveal>
      ${cta({ texto: 'CONVERSAR SOBRE A NECESSIDADE DA MINHA INSTITUIÇÃO', href: '#solicitar-apresentacao', variante: 'terciario' })}
    </div>`,
})}

${secao({
  conteudo: `
    ${cabecalho({
      olho: 'UMA SOLUÇÃO DE EDUCAÇÃO E INCLUSÃO DIGITAL',
      titulo: 'Um caminho organizado para ensinar tecnologia a partir da vida real.',
      texto: [
        'O Digital para Todos combina conteúdos práticos, explicações simples e uma metodologia progressiva para apoiar pessoas que desejam usar melhor o celular, a internet, os aplicativos e as novas ferramentas digitais.',
        'A instituição pode levar essa proposta ao seu público em um formato a ser definido conforme o número de participantes, o contexto, os recursos disponíveis e o nível de acompanhamento necessário.',
      ],
      destaque: 'Inclusão digital acontece quando as pessoas conseguem participar, praticar e seguir aprendendo.',
    })}
    ${cards([
      { icone: 'autonomia', titulo: 'Autonomia' },
      { icone: 'escudo', titulo: 'Segurança' },
      { icone: 'grupo', titulo: 'Participação' },
      { icone: 'crescer', titulo: 'Aprendizado contínuo' },
      { icone: 'maos', titulo: 'Acolhimento' },
    ], { colunas: 5, tipo: 'card card--pilar card--compacto' })}`,
})}

${secao({
  fundo: 'marinho',
  conteudo: `
    ${cabecalho({ titulo: 'Uma mesma missão, diferentes contextos de aplicação.', centro: true })}
    ${cards([
      { icone: 'predio', titulo: 'Empresas', texto: 'Ações de responsabilidade social, inclusão digital para colaboradores, apoio a familiares de colaboradores ou programas para comunidades do entorno.' },
      { icone: 'maos', titulo: 'Igrejas', texto: 'Projetos de apoio a membros, famílias, pessoas 50+ e comunidades atendidas pela igreja.' },
      { icone: 'grupo', titulo: 'Associações', texto: 'Capacitação de associados, atividades para a comunidade e fortalecimento da participação em serviços digitais.' },
      { icone: 'bussola', titulo: 'ONGs e projetos sociais', texto: 'Uma trilha estruturada para apoiar públicos que enfrentam barreiras de acesso, confiança ou habilidades digitais.' },
      { icone: 'conversa', titulo: 'Grupos comunitários', texto: 'Encontros de aprendizagem coletiva, convivência e troca de experiências.' },
      { icone: 'crescer', titulo: 'Escolas e centros de convivência', texto: 'Atividades para adultos, pessoas mais velhas, familiares e comunidades escolares.' },
      { icone: 'predio', titulo: 'Órgãos públicos', texto: 'Possibilidades de parceria, programas ou ações de inclusão, condicionadas ao modelo de contratação e requisitos da instituição.' },
    ], { colunas: 3, tipo: 'card card--contexto' })}
    <div class="acao-secao" data-reveal>
      ${cta({ texto: 'VER COMO O PROJETO PODE SE APLICAR À MINHA ORGANIZAÇÃO', href: '#solicitar-apresentacao', variante: 'claro' })}
    </div>`,
})}

${secao({
  fundo: 'creme',
  largura: 'container--medio',
  conteudo: `
    ${cabecalho({ titulo: 'Quem sua instituição deseja ajudar a participar mais do mundo digital?', centro: true })}
    <ul class="temas" role="list">
      ${lista([
        'Pessoas 50+', 'Pessoas idosas', 'Adultos com pouca intimidade com tecnologia',
        'Famílias', 'Pessoas dependentes de terceiros para tarefas digitais',
        'Comunidades com pouca capacitação', 'Colaboradores e seus familiares',
        'Pessoas com deficiência, após avaliação', 'Públicos de projetos sociais',
      ], (t, i) => `<li class="tema" data-reveal data-reveal-delay="${i * 40}">${icone('check', 'icone--marca')}<span>${t}</span></li>`)}
    </ul>
    <p class="aviso" data-reveal>O projeto adapta linguagem, recursos e suporte ao público atendido. Necessidades de acessibilidade especializada ou atendimento individual são avaliadas no diagnóstico, antes de qualquer compromisso.</p>`,
})}

${secao({
  id: 'metodologia',
  conteudo: `
    ${cabecalho({
      olho: 'UMA METODOLOGIA SIMPLES, PRÁTICA E PROGRESSIVA',
      titulo: 'A pessoa aprende quando consegue entender, praticar e tentar novamente.',
      texto: ['A metodologia parte do essencial e utiliza situações que fazem sentido no cotidiano. O conteúdo pode ser apresentado, demonstrado e praticado de forma gradual, respeitando o ritmo do público.'],
    })}
    ${etapas([
      { titulo: 'Explicação', texto: 'O tema apresentado em linguagem simples.' },
      { titulo: 'Demonstração', texto: 'O passo a passo mostrado na prática.' },
      { titulo: 'Prática', texto: 'A aplicação em uma situação real.' },
      { titulo: 'Repetição', texto: 'A retomada do conteúdo quantas vezes for necessário.' },
      { titulo: 'Autonomia', texto: 'A pessoa realizando com mais segurança.' },
    ])}
    <ul class="temas temas--compacto" role="list">
      ${lista([
        'Celular', 'Internet e Wi-Fi', 'WhatsApp', 'Redes sociais', 'Segurança e golpes',
        'Inteligência Artificial', 'Uber', 'iFood', 'Play Store e aplicativos',
      ], (t) => `<li class="tema">${icone('check', 'icone--marca')}<span>${t}</span></li>`)}
    </ul>
    <div class="acao-secao" data-reveal>
      ${cta({ texto: 'SOLICITAR UMA CONVERSA SOBRE A METODOLOGIA', href: '#solicitar-apresentacao', variante: 'terciario' })}
    </div>`,
})}

${secao({
  fundo: 'claro',
  conteudo: `
  <div class="duo">
    <div class="duo__texto">
      ${cabecalho({
        titulo: 'O formato pode ser definido de acordo com a realidade da sua instituição.',
        texto: ['O Digital para Todos pode ser avaliado em diferentes formatos de implementação. Após compreender o público, o número de participantes, o espaço, os equipamentos e o objetivo da organização, a equipe poderá apresentar as opções compatíveis.'],
      })}
      <ul class="lista-marcada" role="list">
        ${lista([
          'Licença e acessos ao conteúdo para participantes',
          'Turmas presenciais apoiadas pelo conteúdo online',
          'Programa para colaboradores e familiares',
          'Projeto comunitário',
          'Formação de tutores e monitores',
          'Programa personalizado',
        ], (t) => `<li>${icone('check', 'icone--marca')}<span>${t}</span></li>`)}
      </ul>
      <p class="aviso aviso--inline">Escopo, capacidade, prazo e investimento de cada formato são definidos após o diagnóstico — não publicamos condições que ainda dependem do seu contexto.</p>
    </div>
    <div class="duo__media" data-reveal>
      <div class="moldura moldura--azul">
        ${figura({ arquivo: 'institution-workshop.webp', alt: 'Facilitador conversando com um grupo em roda durante oficina de inclusão digital' })}
      </div>
    </div>
  </div>`,
})}

${secao({
  largura: 'container--estreito',
  conteudo: `
    ${cabecalho({
      titulo: 'O que sua instituição recebe',
      texto: ['A entrega institucional é definida de acordo com o objetivo, o público e o formato escolhido. A proposta comercial deixa claro o que está incluído, o que depende de contratação adicional e quais responsabilidades cabem à instituição.'],
    })}`,
})}

${secao({
  fundo: 'marinho',
  conteudo: `
  <div class="duo duo--inverso">
    <div class="duo__texto">
      ${cabecalho({ titulo: 'Da primeira conversa à implementação, cada etapa deve ser clara.' })}
      ${etapas([
        { titulo: 'Solicitação', texto: 'Você envia o formulário com o contexto da instituição.' },
        { titulo: 'Contato', texto: 'A equipe retorna pelo canal informado.' },
        { titulo: 'Diagnóstico', texto: 'Entendimento do público, do espaço e do objetivo.' },
        { titulo: 'Apresentação', texto: 'Demonstração da metodologia e dos formatos compatíveis.' },
        { titulo: 'Proposta', texto: 'Escopo, responsabilidades e condições por escrito.' },
        { titulo: 'Contratação e implantação', texto: 'Início do programa com a instituição.' },
      ])}
      <p class="microcopy microcopy--claro">Você não está assumindo um compromisso ao solicitar a apresentação. Este primeiro contato serve para entender sua necessidade e verificar se o Digital para Todos é adequado ao seu contexto.</p>
    </div>
    <div class="duo__media" data-reveal>
      <div class="moldura moldura--laranja">
        ${figura({ arquivo: 'institution-team-meeting.webp', alt: 'Equipe reunida à mesa conversando sobre um projeto' })}
      </div>
    </div>
  </div>`,
})}

${secao({
  conteudo: `
    ${cabecalho({ titulo: 'Uma ação de inclusão pode gerar valor para quem participa e para quem implementa.', centro: true })}
    ${cards([
      { icone: 'grupo', titulo: 'Para o público', texto: 'Mais oportunidades de aprender, praticar, comunicar, reconhecer riscos e participar da vida digital.' },
      { icone: 'maos', titulo: 'Para a equipe', texto: 'Uma referência organizada para apoiar dúvidas, em vez de respostas improvisadas.' },
      { icone: 'predio', titulo: 'Para a organização', texto: 'Uma iniciativa que pode fortalecer responsabilidade social, cuidado comunitário e participação.' },
      { icone: 'bussola', titulo: 'Para parceiros', texto: 'Uma proposta com objetivos, público, metodologia e etapas mais claros.' },
    ], { colunas: 4, tipo: 'card' })}`,
})}

${secao({
  fundo: 'claro',
  largura: 'container--medio',
  conteudo: `
    ${cabecalho({
      titulo: 'O impacto começa com objetivos claros e acompanhamento responsável.',
      texto: ['Cada organização pode definir o que deseja acompanhar: participação, conclusão de atividades, presença nos encontros, uso de determinados recursos, evolução percebida, confiança para realizar tarefas ou relatos do público atendido.'],
      centro: true,
    })}
    <ul class="temas" role="list">
      ${lista(['Alcance', 'Participação', 'Aprendizagem percebida', 'Segurança', 'Autonomia', 'Continuidade'],
        (t, i) => `<li class="tema" data-reveal data-reveal-delay="${i * 40}">${icone('crescer', 'icone--marca')}<span>${t}</span></li>`)}
    </ul>
    <p class="aviso" data-reveal>Estes são indicadores possíveis de acompanhamento, combinados com a instituição no início do projeto. Não representam resultados já medidos.</p>`,
})}

${secao({
  largura: 'container--medio',
  conteudo: `
    ${cabecalho({ titulo: 'Uma proposta institucional precisa ser apoiada por evidências reais.', centro: true })}
    ${depoimentos.instituicoes.length
      ? `<ul class="depoimentos" role="list">${lista(depoimentos.instituicoes, (d) => `
          <li class="depoimento" data-reveal>
            <blockquote><p>${d.texto}</p></blockquote>
            <p class="depoimento__autor">${d.nome}<span>${d.contexto}</span></p>
          </li>`)}</ul>`
      : `<div class="prova-preparo" data-reveal>
           <p class="texto">O Digital para Todos reúne uma proposta de inclusão digital baseada em conteúdos práticos e experiências de aprendizagem. A equipe está organizando os registros e os formatos institucionais para apresentar cada possibilidade com transparência.</p>
           <p class="texto texto--menor">Cases, fotos, números e logotipos só serão publicados aqui com autorização das instituições envolvidas.</p>
         </div>`}`,
})}

${secao({
  fundo: 'creme',
  largura: 'container--medio',
  conteudo: `
    ${cabecalho({ titulo: 'Perguntas frequentes', centro: true })}
    ${accordion(FAQ, { nome: 'faq-inst', evento: 'institution_faq_open' })}`,
})}

${secao({
  id: 'solicitar-apresentacao',
  largura: 'container--medio',
  classe: 'secao--form',
  conteudo: `
    ${cabecalho({
      titulo: 'Vamos entender o que sua instituição deseja realizar.',
      texto: ['Preencha os dados abaixo e conte brevemente sobre o público que deseja atender. A equipe entrará em contato para avaliar o melhor caminho.'],
      centro: true,
    })}
    ${formulario}`,
})}

${secao({
  fundo: 'marinho',
  largura: 'container--estreito',
  classe: 'secao--final',
  conteudo: `
    <div class="final" data-reveal>
      <p class="eyebrow">INCLUSÃO DIGITAL COMEÇA COM UMA CONVERSA CLARA</p>
      <h2 class="titulo titulo--grande">Sua instituição pode ajudar mais pessoas a participar do mundo digital.</h2>
      <p class="texto">Conte-nos quem você deseja atender, qual desafio está enfrentando e o que gostaria de construir. A equipe do Digital para Todos poderá apresentar os formatos compatíveis com a realidade da sua organização.</p>
      <div class="final__ctas">
        ${cta({ texto: 'SOLICITAR UMA APRESENTAÇÃO', href: '#solicitar-apresentacao', evento: 'institution_final_cta_click' })}
        ${ctaWhatsApp('FALAR PELO WHATSAPP')}
      </div>
      <p class="microcopy microcopy--claro">O primeiro contato não representa compromisso de contratação.</p>
    </div>`,
})}
`;
