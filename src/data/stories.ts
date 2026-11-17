import { Story } from '../types';
import { getAssetUrl } from '../utils/assets';

export const STORIES_DATA: Story[] = [
  {
    slug: 'aprendendo-a-nadar',
    number: 1,
    title: 'Aprendendo a nadar',
    subtitle: 'Primeiro contato com a piscina: quebrando o medo e criando confiança mútua.',
    shortDescription: 'Conhecendo a piscina, sentindo a água com os pezinhos e estabelecendo um vínculo seguro com o responsável.',
    image: getAssetUrl('images/historia-aprendendo-nadar.jpg'),
    iconName: 'Waves',
    duration: '10 a 15 min',
    level: 'Adaptação Inicial • Nível 1',
    sinopse: 'Nesta primeira aventura, a Tia Noêmia ensina a família a transformar a borda da piscina em um lugar acolhedor e cheio de magia. O objetivo não é mergulhar de vez, mas permitir que a criança molhe os dedinhos, sinta a temperatura e compreenda que a água é divertida e amiga quando estamos juntos.',
    learningObjectives: [
      'Reduzir a ansiedade e o receio inicial diante do ambiente aquático',
      'Estimular a curiosidade sensorial através de toques e pequenos respingos',
      'Fortalecer a sensação de segurança no colo ou sob o toque do responsável',
      'Estabelecer uma rotina prazerosa de entrada e saída segura da piscina'
    ],
    skills: [
      'Adaptação ao meio líquido',
      'Confiança afetiva',
      'Percepção sensorial',
      'Orientação espacial'
    ],
    parentGuidance: [
      {
        step: 1,
        title: 'Comece com uma conversa tranquila na borda',
        instruction: 'Sente-se lado a lado com seu filho na borda da piscina. Explique de maneira doce que vocês vão brincar com a água juntos e que você não vai soltá-lo em momento algum.',
        importantTip: 'Mantenha o tom de voz calmo e sorridente; as crianças leem a nossa segurança corporal.'
      },
      {
        step: 2,
        title: 'Molhando os pezinhos e criando chuvinha',
        instruction: 'Convide a criança a colocar apenas as pontinhas dos pés na água. Pegue um pouco de água nas suas mãos e faça uma "chuvinha mágica" suave nas perninhas e braços dela.',
        importantTip: 'Nunca jogue água de surpresa nos olhos ou no rosto nesta fase inicial.'
      },
      {
        step: 3,
        title: 'Entrada gradual no colo com apoio total',
        instruction: 'Entre primeiro na piscina mantendo os pés firmes no chão raso. Traga a criança para o seu colo, abraçando-a peito a peito, garantindo que a cabeça dela fique confortavelmente acima da água.',
        importantTip: 'Respeite imediatamente caso a criança peça para voltar à borda. O ritmo é sempre dela!'
      }
    ],
    safetyWarning: 'Atenção responsável: Nunca force a criança a entrar na água contra a vontade dela. A água deve bater no máximo na altura do peito do adulto na área rasa. Mantenha os dois pés sempre bem plantados no chão e nunca tire as mãos de apoio da criança.',
    practiceSteps: [
      {
        stepNumber: 1,
        title: 'Momento da Conversa e Contato Visual',
        instruction: 'Sentados na borda rasa, segure as mãozinhas da criança e diga: "A água está fresquinha e nós vamos brincar juntos!". Deixe-a observar o reflexo da água.',
        parentTip: 'Respire fundo e sorria. A sua calma é o melhor colete salva-vidas emocional.',
        durationSeconds: 15
      },
      {
        stepNumber: 2,
        title: 'A Chuvinha Mágica',
        instruction: 'Com as mãos em concha, recolha água e deixe pingar de leve nos pezinhos e ombros da criança, cantando ou fazendo barulhinhos de gotas.',
        parentTip: 'Se a criança rir ou pedir mais, incentive: "Que delícia de água fresca!".',
        durationSeconds: 20
      },
      {
        stepNumber: 3,
        title: 'Abraço Seguro no Raso',
        instruction: 'Com a criança em seu colo, dê pequenos passos lentos na parte rasa da piscina, sentindo o balanço da água com ela.',
        parentTip: 'Mantenha a criança bem coladinha ao seu peito.',
        durationSeconds: 30
      }
    ]
  },
  {
    slug: 'flutuacao',
    number: 2,
    title: 'Flutuação',
    subtitle: 'Sentindo a leveza do corpo e aprendendo a boiar como uma linda estrelinha.',
    shortDescription: 'Descobrindo como o corpo boia na água, relaxando a musculatura com apoio firme nas costas e no pescoço.',
    image: getAssetUrl('images/historia-flutuacao.jpg'),
    iconName: 'Compass',
    duration: '10 a 12 min',
    level: 'Flutuação Dorsal • Nível 1',
    sinopse: 'Flutuar de barriga para cima é uma das habilidades mais nobres e salvadoras da natação. A Tia Noêmia guia os pais a transformarem a criança em uma graciosa estrelinha do mar, ensinando o relaxamento dos ombrinhos enquanto as mãozinhas dos pais dão suporte firme e ininterrupto na nuca e lombar.',
    learningObjectives: [
      'Compreender e confiar na sustentação natural da água',
      'Praticar o relaxamento do pescoço e dos ombros sem rigidez',
      'Manter as orelhinhas submersas enquanto o nariz e a boca respiram livres',
      'Desenvolver a calma motora e o equilíbrio horizontal'
    ],
    skills: [
      'Equilíbrio horizontal dorsal',
      'Relaxamento neuromuscular',
      'Confiança proprioceptiva',
      'Controle da postura corporal'
    ],
    parentGuidance: [
      {
        step: 1,
        title: 'Preparação: a pose da estrelinha',
        instruction: 'Antes de deitar na água, brinque fora de abrir os braços e pernas como se fossem as 5 pontas de uma estrela do mar.',
        importantTip: 'Mostre que quando abrimos os braços e pernas, ficamos mais leves e estáveis.'
      },
      {
        step: 2,
        title: 'Posicionamento das suas mãos de apoio',
        instruction: 'Coloque uma de suas mãos na nuca da criança (como um travesseiro macio) e a outra mão suavemente embaixo das costas/lombar.',
        importantTip: 'Nunca solte o apoio repentinamente. A transição deve ser milimétrica e sempre avisada com antecedência.'
      },
      {
        step: 3,
        title: 'Ouvindo o segredo do mar',
        instruction: 'Peça para a criança encostar a cabeça para trás, deixando as orelhas tocarem a água para ouvir o som gostoso da piscina, enquanto olha para o céu ou teto.',
        importantTip: 'Lembre-a de que o nariz e a boquinha continuam totalmente fora da água para respirar.'
      }
    ],
    safetyWarning: 'Atenção responsável: Nunca solte totalmente a criança durante os exercícios de flutuação nesta fase. Mantenha suporte contínuo com as duas mãos. Se a criança se assustar ou tentar tossir, levante-a imediatamente com suavidade na vertical.',
    practiceSteps: [
      {
        stepNumber: 1,
        title: 'Posição do Travesseirinho',
        instruction: 'Apoie a nuca do seu pequeno na curva do seu ombro ou na sua mão em concha. Faça movimentos lentos e circulares na água.',
        parentTip: 'Diga em voz baixa: "Olha lá para o céu, veja as nuvens como são fofinhas!".',
        durationSeconds: 20
      },
      {
        stepNumber: 2,
        title: 'Estrelinha do Mar Flutuante',
        instruction: 'Ajude a criança a afastar braços e perninhas com calma. Deixe a barriguinha subir como se fosse um balãozinho inflado de ar.',
        parentTip: 'Apenas sustente com a ponta dos dedos conforme ela for relaxando.',
        durationSeconds: 25
      }
    ]
  },
  {
    slug: 'respiracao',
    number: 3,
    title: 'Respiração',
    subtitle: 'O fascinante segredo das bolhinhas: soltando o ar na água com tranquilidade.',
    shortDescription: 'Aprendendo a soprar na água sem engolir, diferenciando inspirar pela boca fora d’água e expirar fazendo bolhas.',
    image: getAssetUrl('images/historia-respiracao.jpg'),
    iconName: 'Sparkles',
    duration: '8 a 12 min',
    level: 'Controle Respiratório • Nível 1',
    sinopse: 'Fazer bolhas na água é pura diversão e a chave mestra para evitar engolir água ou aspirar pelo nariz. A Tia Noêmia ensina jogos lúdicos onde o pequeno vira um submarino mágico ou um peixinho que conversa através de bolhas borbulhantes na superfície.',
    learningObjectives: [
      'Diferenciar claramente o ato de puxar o ar e o de soltar o ar',
      'Aprender a soltar o ar pela boca e pelo nariz na superfície',
      'Evitar a aspiração involuntária de água pelo nariz',
      'Ganhar confiança e perder o receio de encostar a boca e bochechas na água'
    ],
    skills: [
      'Controle respiratório voluntário',
      'Bloqueio reflexo das vias aéreas',
      'Coordenação orofacial',
      'Percepção de bolhas e pressão'
    ],
    parentGuidance: [
      {
        step: 1,
        title: 'O sopro da velinha na água',
        instruction: 'Comece com o queixo e a boca bem próximos da lâmina d’água. Demonstre primeiro você mesmo assoprando a água para fazer ondas.',
        importantTip: 'Crianças aprendem por imitação! Veja o quanto é divertido quando você assopra primeiro.'
      },
      {
        step: 2,
        title: 'Mergulhando apenas a boquinha',
        instruction: 'Peça para a criança encostar apenas os lábios na água e soltar o ar fazendo "brrrr" ou soprando um barquinho de borracha flutuante.',
        importantTip: 'O narizinho continua totalmente do lado de fora nesta etapa!'
      },
      {
        step: 3,
        title: 'O concerto dos peixinhos borbulhantes',
        instruction: 'Celebre cada bolhinha que subir à superfície! Crie um ritmo de soprar, levantar a cabeça, sorrir e respirar.',
        importantTip: 'Nunca faça cronômetros de segurar a respiração nem incentive competição de apneia.'
      }
    ],
    safetyWarning: 'Atenção essencial de segurança: Este aplicativo proíbe qualquer exercício de prender a respiração por tempo cronometrado ou testes de apneia. O foco exclusivo é a expiração ativa (soprar o ar para fora), que protege as vias aéreas.',
    practiceSteps: [
      {
        stepNumber: 1,
        title: 'Soprando a Sopa Quente',
        instruction: 'Com o rostinho perto da água, simulem que a piscina é uma sopa gostosa e que precisamos esfriar assoprando bem forte!',
        parentTip: 'Faça o barulho junto com a criança: "Fuuuuuuu!".',
        durationSeconds: 15
      },
      {
        stepNumber: 2,
        title: 'Fábrica de Bolhinhas',
        instruction: 'Encoste a boca na água e solte o ar devagarinho criando dezenas de bolhinhas brilhantes ao redor.',
        parentTip: 'Conte até 3 e comemore quando as bolhas estourarem na superfície!',
        durationSeconds: 20
      }
    ]
  },
  {
    slug: 'pernada',
    number: 4,
    title: 'Pernada',
    subtitle: 'Motores ligados! O movimento contínuo e alegre dos pezinhos na água.',
    shortDescription: 'Desenvolvendo a propulsão com perninhas retas e flexíveis, usando a pranchinha e o apoio protetor dos responsáveis.',
    image: getAssetUrl('images/historia-pernada.jpg'),
    iconName: 'Flame',
    duration: '10 a 15 min',
    level: 'Propulsão de Pernas • Nível 2',
    sinopse: 'Vrummm! Neste capítulo, as perninhas da criança viram os motores de uma lancha veloz. A Tia Noêmia ensina os responsáveis a corrigirem o movimento das pernas para que venham do quadril, com pezinhos esticados e soltos, criando muita espuma branca e divertida sem dobrar excessivamente os joelhos.',
    learningObjectives: [
      'Compreender o movimento propulsor alternado de pernas',
      'Manter os tornozelos soltos e pés esticados ("pés de bailarina")',
      'Produzir espuminha contínua na flor d’água sem cansaço precoce',
      'Sentir a propulsão impulsionando o corpo suavemente para frente'
    ],
    skills: [
      'Propulsão de membros inferiores',
      'Coordenação motora ampla',
      'Força e resistência muscular suave',
      'Alinhamento do tronco'
    ],
    parentGuidance: [
      {
        step: 1,
        title: 'Perninhas de motor na borda',
        instruction: 'Com a criança sentada confortavelmente na borda da piscina, peça para ela bater os pés na água fazendo espuminha com barulho de motor.',
        importantTip: 'Ensine o "pé de bailarina" ou pé de peixinho com a ponta esticada.'
      },
      {
        step: 2,
        title: 'Apoio na barriguinha dentro d’água',
        instruction: 'Dentro da piscina, segure a criança pela cintura ou peito na horizontal e caminhe para trás enquanto ela bate as perninhas.',
        importantTip: 'Incentive a bater as pernas com ritmo constante, sem pressa nem força brusca.'
      },
      {
        step: 3,
        title: 'Usando a pranchinha com as duas mãos',
        instruction: 'Quando a criança estiver confiante, ela pode segurar uma pranchinha com os dois braços esticados enquanto você caminha colado a ela.',
        importantTip: 'Esteja sempre com suas mãos a menos de 10 centímetros do corpo da criança.'
      }
    ],
    safetyWarning: 'Atenção responsável: Nunca solte a prancha ou a criança para que ela se desloque sozinha em direção à parte funda. Caminhe sempre de costas acompanhando a trajetória e mantendo contato corporal frequente.',
    practiceSteps: [
      {
        stepNumber: 1,
        title: 'Ligue o Motorzinho!',
        instruction: 'Segurando a criança firmemente sob as axilas, incentive: "Um, dois, três... liga a lancha!". Ela bate os pezinhos suavemente na água.',
        parentTip: 'Observe se os pezinhos estão fazendo espuma na superfície sem bater com violência.',
        durationSeconds: 20
      },
      {
        stepNumber: 2,
        title: 'Corrida das Tartaruguinhas',
        instruction: 'Percorra um trajeto curto de 2 metros na área rasa com a criança batendo as pernas até tocar a borda.',
        parentTip: 'Dê os parabéns ao tocar na borda com uma mão: "Chegamos ao porto!".',
        durationSeconds: 25
      }
    ]
  },
  {
    slug: 'bracada',
    number: 5,
    title: 'Braçada',
    subtitle: 'Puxando a água com carinho: os primeiros movimentos de braços e deslocamento.',
    shortDescription: 'Descobrindo como as mãozinhas em concha ajudam a puxar a água e movimentar o corpinho com suavidade.',
    image: getAssetUrl('images/historia-bracada.jpg'),
    iconName: 'Compass',
    duration: '10 a 15 min',
    level: 'Deslocamento e Braços • Nível 2',
    sinopse: 'Como os peixinhos usam suas nadadeiras, nossos pequenos nadadores aprendem a usar os braços para alcançar brinquedos flutuantes e deslizar com elegância. A Tia Noêmia orienta a coordenação entre braços e respiração com brincadeiras de colher água mágica.',
    learningObjectives: [
      'Entender a tração dos braços e mãos na água',
      'Praticar o movimento alternado ("um braço de cada vez")',
      'Coordenação suave entre batimento de pernas e puxada de braço',
      'Deslocamento autônomo assistido em distâncias curtas e seguras'
    ],
    skills: [
      'Coordenação bimanual alternada',
      'Sensibilidade hidrodinâmica',
      'Percepção de alcance e pegada',
      'Sincronia motora global'
    ],
    parentGuidance: [
      {
        step: 1,
        title: 'Colhendo brinquedinhos na água',
        instruction: 'Coloque um brinquedo flutuante (como um patinho de borracha) a cerca de meio metro da criança e peça para ela "alcançar o patinho" com a mãozinha.',
        importantTip: 'O objetivo lúdico faz com que o braço se estenda naturalmente sem rigidez.'
      },
      {
        step: 2,
        title: 'Mãozinhas em concha mágica',
        instruction: 'Mostre como fechar os dedinhos como uma colher para que a água não passe pelo meio dos dedos, aumentando a força da puxada.',
        importantTip: 'Brinque de "colher sorvete de água" para ilustrar de forma fofa.'
      },
      {
        step: 3,
        title: 'Puxando a água até a coxa',
        instruction: 'Guie o bracinho da criança para baixo e para trás com suas mãos, finalizando o movimento perto da perninha.',
        importantTip: 'Mantenha sempre o queixo da criança sustentado para que ela não se afogue caso canse o bracinho.'
      }
    ],
    safetyWarning: 'Atenção responsável: Nunca exija técnica rígida ou estresse muscular de uma criança pequena. O foco é a diversão e a independência assistida em pequenas distâncias (máximo de 1 a 2 metros), sempre com você na frente para recebê-la com um abraço.',
    practiceSteps: [
      {
        stepNumber: 1,
        title: 'A Concha do Sorvete',
        instruction: 'Pratiquem o movimento das mãozinhas colhendo água e jogando para trás, alternando o braço direito e o esquerdo.',
        parentTip: 'Diga: "Um bracinho... depois o outro bracinho!".',
        durationSeconds: 20
      },
      {
        stepNumber: 2,
        title: 'Alcançando o Abraço',
        instruction: 'Fique a um passo de distância da criança. Ela dá duas braçadas suaves em sua direção e cai com segurança nos seus braços acolhedores.',
        parentTip: 'Abrace e comemore efusivamente a chegada!',
        durationSeconds: 25
      }
    ]
  },
  {
    slug: 'seguranca-na-agua',
    number: 6,
    title: 'Segurança na água',
    subtitle: 'As regras de ouro da piscina: cuidado, respeito e amor em cada mergulho.',
    shortDescription: 'Regras indispensáveis para nunca brincar sozinho, respeitar as bordas, usar boias adequadas e agir com proteção total.',
    image: getAssetUrl('images/historia-seguranca.jpg'),
    iconName: 'ShieldCheck',
    duration: '10 a 12 min',
    level: 'Educação Preventiva • Essencial',
    sinopse: 'A água é maravilhosa, mas exige respeito absoluto de toda a família. Nesta historinha vital, a Tia Noêmia reúne pais e filhos para firmarem o "Pacto do Nadador Protegido": nunca entrar na piscina sem o adulto por perto, andar sem correr na borda molhada e saber pedir ajuda sempre.',
    learningObjectives: [
      'Fixar na mente da criança que a água é espaço exclusivo para estar junto com o adulto',
      'Compreender o perigo do piso escorregadio ao redor da piscina',
      'Saber como se segurar firme na calha/borda da piscina',
      'Desenvolver a consciência de segurança preventiva familiar'
    ],
    skills: [
      'Autopreservação preventiva',
      'Fixação e pegada na borda',
      'Reconhecimento de limites de risco',
      'Comunicação de pedidos de ajuda'
    ],
    parentGuidance: [
      {
        step: 1,
        title: 'O Pacto do Toque: distância de um braço',
        instruction: 'Explique ao seu filho que você e ele têm um superpoder secreto: a "regra do braço esticado". Vocês nunca devem ficar mais longe um do outro do que o comprimento de um braço.',
        importantTip: 'Nunca use o celular enquanto estiver supervisionando a criança na piscina. Acidentes acontecem em silêncio e em questão de segundos.'
      },
      {
        step: 2,
        title: 'Mãozinhas de caranguejo na borda',
        instruction: 'Ensine a criança a segurar firme com as duas mãos na borda da piscina e se deslocar de lado como um caranguejo em direção aos degraus ou escada.',
        importantTip: 'Esta habilidade de deslocamento pela borda salva vidas em situações de desequilíbrio acidental.'
      },
      {
        step: 3,
        title: 'Sem correria no piso molhado',
        instruction: 'Mostre que fora da água andamos como pinguinzinhos elegantes: passos firmes, sem correr, para evitar escorregões dolorosos na pedra.',
        importantTip: 'Cole adesivos ou crie rituais divertidos de passos de pinguim na área de lazer.'
      }
    ],
    safetyWarning: 'Aviso crucial de vida: Nenhuma aula, aplicativo ou boia substitui a supervisão atenta, contínua e visual de um adulto responsável. Mantenha portas e portões de acesso a piscinas sempre travados quando a piscina não estiver em uso.',
    practiceSteps: [
      {
        stepNumber: 1,
        title: 'O Passo do Pinguim na Borda',
        instruction: 'Pratiquem caminhar lado a lado na borda seca com passos lentos e firmes, dizendo: "Aqui a gente anda como pinguim!".',
        parentTip: 'Reforce o hábito positivo sempre que chegarem à área da piscina.',
        durationSeconds: 15
      },
      {
        stepNumber: 2,
        title: 'Caranguejinho na Parede da Piscina',
        instruction: 'Dentro d’água, a criança segura a borda com as duas mãos e caminha 3 passos para o lado, mantendo o corpo colado à parede.',
        parentTip: 'Este exercício desenvolve o reflexo vital de buscar a parede em caso de susto.',
        durationSeconds: 25
      }
    ]
  }
];
