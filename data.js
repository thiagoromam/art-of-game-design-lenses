(function () {
    var app = angular.module("app");

    app.service("data", function () {
        var sets = this.sets = [];
        var lenses = this.lenses = [];

        function addSet(title) {
            var lastId = sets.length ? sets.max("$.id") : 0;
            var set = { id: lastId + 1, title, lenses: [] };

            sets.push(set);

            return set;
        }
        function addLense(lense) {
            var set = lense.set;

            lense.id = lense.number;
            delete lense.set;

            lenses.push(lense);
            set.lenses.push(lense.id);

            return set;
        }

        var designer = addSet("Designer");
        var player = addSet("Jogador");
        var experience = addSet("Experiência");
        var process = addSet("Processo");
        var game = addSet("Jogo");

        addLense({
            number: 2,
            title: "A Lente da Experiência Essencial",
            smallTitle: "Experiência Essencial",
            page: 21,
            set: experience,
            illustrator: "Zachary D. Coe",
            description: '\
                <p>Para utilizar essa lente, você deve parar de pensar no seu jogo e começar a pensar sobre a experiência do jogador. Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Qual experiência desejo que o jogador tenha?</li>\
                    <li>O que é essencial para essa experiência?</li>\
                    <li>Como meu jogo pode captar essa essência?</li>\
                </ul>\
                Se houver uma grande diferença entre a experiência que você deseja criar e aquela que na verdade está criando, o jogo precisa mudar: você precisa definir com\
                clareza a experiência essencial que deseja, e descobrir o maior número possível de maneiras de introduzir essa essência no seu jogo.\
            '
        });

        addLense({
            number: 4,
            title: "A Lente da Surpresa",
            smallTitle: "Surpresa",
            page: { br: 27 },
            set: experience,
            illustrator: "Diana Patton",
            description: '\
                <p>\
                    Surpresa é tão básico que podemos facilmente nos esquecer dela. Utilize essa lente para que você não se esqueça de agregar a seu jogo surpresas interessantes.\
                    Faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>O que irá surpreender os jogadores quando jogarem meu jogo?</li>\
                    <li>A história no meu jogo tem surpresas? As regras do jogo as têm? E o trabalho artístico? E a tecnologia?</li>\
                    <li>Suas regras dão aos jogadores maneiras de surpreender um ao outro?</li>\
                    <li>Suas regras dão aos jogadores maneiras de surpreender a si próprios?</li>\
                </ul>\
                Surpresa é parte crucial de qualquer entretenimento - é a raiz do humor, da estratégia e da solução de problemas. Nosso cérebro é constituído para desfrutar surpresas.\
                Em um experimento em que espirram doses de água com açúcar e de água pura na boca dos participantes, aqueles que receberam doses aleatórias consideraram a\
                experiência muito mais agradável do que os que receberam doses de acordo com um padrão fixo, embora a mesma quantidade de açúcar tenha sido fornecida.\
                Em outros experimentos, tomografias do cérebro revelaram que, mesmo durante surpresas desagradáveis, os centros de prazer do cérebro são acionados.\
            '
        });

        addLense({
            number: 5,
            title: "A Lente da Diversão",
            smallTitle: "Diversão",
            page: { br: 27 },
            set: experience,
            illustrator: "Jon Shulte",
            description: '\
                <p>Diversão é desejável em quase todos os jogos, embora, às vezes, desafie a análise. Para maximizar a diversão de seu jogo, faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Quais são as partes divertidas do meu jogo? Por quê?</li>\
                    <li>Que partes precisam ser mais divertidas?</li>\
                </ul>\
            '
        });

        addLense({
            number: 6,
            title: "A Lente da Curiosidade",
            smallTitle: "Curiosidade",
            page: { br: 30 },
            set: experience,
            illustrator: "Emma Backer",
            description: '\
                <p>\
                    Para utilizar essa lente, pense sobre as reais motivações do jogador - não apenas nos objetivos definidos para seu jogo, mas na razão pela qual o jogador\
                    quer alcançar esses objetivos. Faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Quais questões meu jogo estabelece na mente do jogador?</li>\
                    <li>O que estou fazendo para que eles se importem com essas questões?</li>\
                    <li>O que posso fazer para que criem ainda mais questões?</li>\
                </ul>\
                Por exemplo, em um videogame no qual o jogador tem um tempo-limite para chegar à saída em cada nível, respondendo à pergunta: "Posso sair desse labirinto em\
                30 segundos?" Uma maneira de tornar isso mais interessante seria reproduzir animações divertidas enquanto o problema está sendo resolvido; assim, os jogadores\
                poderiam também pensar: "Qual será a próxima animação?"\
            '
        });
        
        addLense({
            number: 7,
            title: "A Lente do Valor Endógeno",
            smallTitle: "Valor Endógeno",
            page: { br: 32 },
            set: game,
            illustrator: "Melanie Lam",
            description: '\
                <p>Para utilizar essa lente, pense em como seus jogadores se sentem em relação a itens, objetos e pontuação no seu jogo. Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>O que é valioso para os jogadores no meu jogo?</li>\
                    <li>Como posso torná-lo mais valioso para eles?</li>\
                    <li>Qual é a relação entre o valor no jogo e as motivações do jogador?</li>\
                </ul>\
                Lembre-se de que o valor dos itens e a pontuação refletem diretamente o quanto os jogadores se importam em ser bem-sucedidos no seu jogo. Pensando sobre o que\
                é realmente importante para jogadores e por que, muitas vezes você pode obter ideias brilhantes para aprimorá-lo.\
            '
        });

        addLense({
            number: 8,
            title: "A Lente da Solução de Problemas",
            smallTitle: "Solução de Problemas",
            page: { br: 37 },
            set: game,
            illustrator: "Cheryl Ceol",
            description: '\
                <p>\
                    Para utilizar essa lente, pense nos problemas que seus jogadores devem resolver para ter sucesso no seu jogo, pois cada jogo tem problemas a serem resolvidos.\
                    Faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Quais problemas meu jogo solicita que o jogador resolva?</li>\
                    <li>Há problemas ocultos a resolver que surgem como parte do ato de jogar?</li>\
                    <li>Como meu jogo pode gerar novos problemas para que os jogadores voltem sempre a ele?</li>\
                </ul>\
            '
        });

        addLense({
            number: 9,
            title: "A Lente da Tétrade Elementar",
            smallTitle: "Tétrade Elementar",
            page: { br: 43 },
            set: game,
            illustrator: "Reagan Heller",
            description: '\
                <p>\
                    Para utilizar essa lente, avalie do que seu jogo é verdadeiramente feito. Considere cada elemento separadamente e, então, todos juntos como um todo. Faça\
                    a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Meu design de jogos utiliza elementos dos quatro tipos?</li>\
                    <li>Meu design poderia ser aprimorado, melhorando os elementos em uma ou mais categorias?</li>\
                    <li>Os quatro elementos estão em harmonia, reforçando uns aos outros e funcionam em direção a um tema comum?</li>\
                </ul>\
            '
        });

        addLense({
            number: 10,
            title: "A Lente do Design Holográfico",
            smallTitle: "Design Holográfico",
            page: { br: 46 },
            set: process,
            illustrator: "Zachary D. Coe",
            description: '\
                <p>\
                    Para usar essa lente, você deve ver tudo no seu jogo de uma vez: os quatro elementos e a experiência do jogador, e também como se relacionam. É aceitável\
                    alternar entre focalizar a pele e o esqueleto, e vice-versa, mas é muito melhor ver o jogo e experimentá-lo de maneira holográfica.\
                </p>\
                <p>Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Que elementos do jogo tornam a experiência agradável?</li>\
                    <li>Que elementos do jogo tornam a experiência desagradável?</li>\
                    <li>Como posso mudar os elementos do jogo para aprimorar a experiência?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 11,
            title: "A Lente da Unificação",
            smallTitle: "Unificação",
            page: { br: 53 },
            set: process,
            illustrator: "Diana Patton",
            description: '\
                <p>Para usar essa lente, pense na razão por trás disso tudo. Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>O que é o meu tema?</li>\
                    <li>Estou usando todos os meios possíveis para reforçar o tema?</li>\
                </ul>\
                A Lente da Unificação funciona muito bem com a <lense-ref>9</lense-ref>. Utilize a tétrade para separar os elementos do seu jogo, de modo que possa estudá-los\
                mais facilmente pela perspectiva de um tema unificado.\
            '
        });
        
        addLense({
            number: 12,
            title: "A Lente da Ressonância",
            smallTitle: "Ressonância",
            page: { br: 55 },
            set: experience,
            illustrator: "Nick Daniel",
            description: '\
                <p>\
                    Para usar a Lente da Ressonância, você deve procurar uma força oculta.<br/>\
                    Faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>O que meu jogo tem que o torna poderoso e especial?</li>\
                    <li>Quando descrevo meu jogo para as pessoas, quais ideias realmente as instigam?</li>\
                    <li>Se não houvesse limitações de qualquer tipo, como seria esse jogo?</li>\
                    <li>Tenho certos instintos sobre como esse jogo deve ser. O que impulsiona esses instintos?</li>\
                </ul>\
                A Lente da Ressonância é um instrumento silencioso e delicado. É uma ferramenta para ouvir a si mesmo e ouvir os outros. Enterramos coisas importantes\
                dentro de nós, e quando algo as faz ressoar, ficamos profundamente perturbados. O fato de essas coisas estarem ocultas lhes dá força, mas também\
                torna difícil encontrá-las.\
            '
        });
        
        addLense({
            number: 13,
            title: "A Lente da Inspiração Infinita",
            smallTitle: "Inspiração Infinita",
            page: { br: 59 },
            set: process,
            illustrator: "Sam Yip",
            description: '\
                <i>Quando você sabe ouvir, todo mundo é guru</i>\
                <p class="text-right">Ram Dass</p>\
                <p>Para usar essa lente, pare de olhar para seu jogo, e pare de olhar para jogos como o seu. Em vez disso, <i>olhe para todos os lugares</i>.</p>\
                <p>Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Qual é uma experiência que tive na vida que gostaria de compartilhar com outros?</li>\
                    <li>De que forma posso captar a essência dessa experiência e colocá-la no meu jogo?</li>\
                </ul>\
                <p>\
                    Utilizar essa lente exige mente aberta e imaginação fértil. Você precisa procurar seus sentimentos e observar tudo a seu redor.\
                    Você deve estar disposto a tentar o impossível - pois, certamente, é impossível o fato de que jogar dois dados capte a emoção de uma luta de espadas,\
                    ou que um videogame faça um logador sentir medo do escuro - não é? Use essa lente para encontrar experiências não relacionadas a jogos que servirão\
                    de inspiração para seu jogo.<br/>\
                    Suas escolhas nos diferentes quadrantes da tétrade (técnologia, mecânica, história e estética) podem ser unidads por uma única inspiração,\
                    ou cada uma pode refletir diferentes inspirações, mesclando-as para criar algo inteiramente novo.\
                    Quando você tem pontos de vista concretos baseados na vida real que guiam suas tomadas de decisão, sua experiência irá adquirir poder, força e\
                    singularidades inegáveis.\
                </p>\
                Essa lente funciona de mãos dadas com a <lense-ref>2</lense-ref>. Use a Lente da Inspiração Infinita para buscar e encontrar experiências belas,\
                e a <lense-title>2</lense-title> para incorporá-las a seu jogo.\
            '
        });
        
        addLense({
            number: 14,
            title: "A Lente da Formulação do Problema",
            smallTitle: "Formulação do Problema",
            page: { br: 62 },
            set: process,
            illustrator: "Cheryl Ceol",
            description: '\
                <p>Para usar essa lente, pense no jogo como uma solução para um problema.</p>\
                <p>Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Que problema, ou problemas, estou realmente tentando resolver?</li>\
                    <li>Estou fazendo suposições sobre esse jogo que não tem nada a ver com seu propósito real?</li>\
                    <li>Um jogo é realmente a melhor solução? Por quê?</li>\
                    <li>Como conseguirei afirmar se o problema foi resolvido?</li>\
                </ul>\
                Definir as limitações e os objetivos do seu jogo como uma formulação de problema pode ajudar a movê-lo para um design de jogos claro muito mais rapidamente.\
            '
        });
        
        addLense({
            number: 15,
            title: "A Lente dos Oito Filtros",
            smallTitle: "Oito Filtros",
            page: { br: 79 },
            set: process,
            illustrator: "Chris Daniel",
            description: '\
                <p>\
                    Para usar essa lente, você deve considerar as várias restrições que seu design deve satisfazer. Você só pode afirmar que seu design está concluído depois\
                    que ele passar por todos os oito filtros sem a necessidade de uma mudança.\
                </p>\
                <p>Faça a si mesmo as oito perguntas-chave:</p>\
                <ul class="questions">\
                    <li>Esse jogo parece bom?</li>\
                    <li>Qual é o interesso do público-alvo por esse jogo?</li>\
                    <li>É um jogo bem projetado?</li>\
                    <li>É um jogo original o bastante?</li>\
                    <li>É um jogo que vai vender?</li>\
                    <li>É tecnicamente possível construir esse jogo?</li>\
                    <li>Esse jogo satisfaz nossos objetivos sociais e comunitários?</li>\
                    <li>Os testados gostaram o bastante desse jogo?</li>\
                </ul>\
                Em algumas situações, pode haver ainda mais filtros, por exemplo, um jogo educativo também terá de responder a perguntas como "Esse jogo ensina o que ele\
                supostamente deve ensinar?". Se seu design exigir mais filtros, não os despreze.\
            '
        });
        
        addLense({
            number: 16,
            title: "A Lente da Atenuação dos Riscos",
            smallTitle: "Atenuação dos Riscos",
            page: { br: 86 },
            set: process,
            illustrator: "Chris Daniel",
            description: '\
                <p>\
                    Para usar essa lente, pare de pensar positivamente e comece a considerar seriamente as coisas que poderiam dar muito errado no seu jogo.<br/>\
                    Faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>O que impediria esse jogo de ser excelente?</li>\
                    <li>Como podemos evitar que isso aconteça?</li>\
                </ul>\
                O gerenciamento de riscos é difícil. Significa enfrentar os problemas que você mais quer evitar e resolvê-los imediatamente. Mas, se for disciplinado\
                ao fazer isso, você repetirá mais vezes, de maneira mais útil, e o resultado será um jogo melhor. É tentador ignorar os possíveis problemas e trabalhar\
                apenas nnas partes do jogo que você considera mais seguras. Você precisa resistir a essa tentação e concentrar-se nas partes do jogo que estão em perigo.\
            '
        });
        
        addLense({
            number: 17,
            title: "A Lente do Brinquedo",
            smallTitle: "O Brinquedo",
            page: { br: 91 },
            set: game,
            illustrator: "Camila Kydland",
            description: '\
                <p>Para usar essa lente, pare de pensar se é ou não divertido jogar seu jogo e comece a pensar se é divertido brincar com ele.</p>\
                <p>Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Se meu jogo não tiver um objetivo, será divertido? Se não for, como posso mudar isso?</li>\
                    <li>Quando as pessoas veem meu jogo, elas querem começar a interagir com ele, mesmo antes que saivam o que fazer? Se não, como posso mudar isso?</li>\
                </ul>\
                Há duas maneiras de usar a Lente do Brinquedo. Uma delas é utilizá-la em um jogo existente, descobrir como adicionar mais qualidades de brinquedo a ele -\
                isto é, como torná-lo mais acessivel e divertido de manipular.<br/>\
                Mas a segunda maneira, a mais corajosa, é usá-la para invertar e criar novos brinquedos antes mesmo de ter uma ideia de quais jogos serão jogados\
                com eles. Isso é arriscado se você tiver um prazo de entrega - mas, do contrário, poderá ser uma excelente ferramenta para ajudá-lo a encontrar jogos\
                maravilhosos que normalmente você não descobriria.\
            '
        });
        
        addLense({
            number: 19,
            title: "A Lente do Jogador",
            smallTitle: "O Jogador",
            page: { br: 106 },
            set: player,
            illustrator: "Nick Daniel",
            description: '\
                <p>Para usar essa lente, pare de pensar no seu jogo, e comece a pensar no seu jogador.</p>\
                <p>Faça a si mesmo estas perguntas sobre as pessoas que jogarão seu jogo:</p>\
                <ul class="questions">\
                    <li>Em geral, do que elas gostam?</li>\
                    <li>Do que não gostam? Por quê?</li>\
                    <li>O que esperam ver em um jogo?</li>\
                    <li>Se eu estivesse no lugar delas, o que iria querer ver em um jogo?</li>\
                    <li>Do que elas gostam ou não gostam no meu jogo em particular?</li>\
                </ul>\
                Um bom designer de jogos sempre deve pensar no jogador, e deve ser um defensor do jogador. Designers habilidosos seguram a  Lente do Jogador e a\
                <lense-ref>10</lense-ref> na mesma mão, pensando no jogador, na experiência do jogo e na mecânica do jogo simultaneamente. Pensar no jogador é útil, mas ainda\
                é mais útil vê-lo jogar seu jogo. Quanto mais observá-lo jogando, mais facilmente você conseguirá prever o que agradará a ele.\
            '
        });
        
        addLense({
            number: 20,
            title: "A Lente do Prazer",
            smallTitle: "Prazer",
            page: { br: 112 },
            set: player,
            illustrator: "Jim Rugg",
            description: '\
                <p>Para usar essa lente, pense nos tipos de prazer que seu jogo fornece ou não.</p>\
                <p>Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Que prazeres seu jogo dá aos jogadores? Eles podem ser aprimorados?</li>\
                    <li>Que prazeres não estão presentes na sua experiência? Por quê? Eles podem ser adicionados?</li>\
                </ul>\
                Por fim, a função de um jogo é dar prazer. Analisando listas dos prazeres conhecidos e considerando a competência do seu jogo em proporcionar cada um deles,\
                você poderia se inspirar para fazer mudanças no jogo a fim de aumentar a diversão dos jogadores. Observe sempre, porém, prazeres únicos não classificados e\
                não encontrados na maioria dos jogos - pois um desses poderia ser aquilo que dá ao seu jogo a qualidade única de que ele precisa.\
            '
        });
        
        addLense({
            number: 21,
            title: "A Lente do Fluxo",
            smallTitle: "Fluxo",
            page: { br: 122 },
            set: player,
            illustrator: "Diana Patton",
            description: '\
                <p>\
                    Para usar essa lente, considere o que impede o foco de seus jogadores.<br />\
                    Faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Meu jogo tem objetivos claros? Caso contrário, como posso resolver isso?</li>\
                    <li>Os objetivos do jogador são os mesmos que eu tinha em mente?</li>\
                    <li>\
                        Há partes do jogo que distraem os jogadores a ponto de esquecerem seus objetivos? Em caso positivo, essas distrações podem ser reduzidas, ou\
                        associadas aos objetivos do jogo?\
                    </li>\
                    <li>\
                        Meu jogo fornece um fluxo constante de desafios não muito fáceis nem muito difíceis, levando em conta o fato de que as habilidades do jogador\
                        podem ser aprimoradas gradualmente?\
                    </li>\
                    <li>As habilidades do jogador aprimoram na velocidade que eu esperava? Se não for, como posso mudar isso?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 22,
            title: "A Lente das Necessidades",
            smallTitle: "Necessidades",
            page: { br: 127 },
            set: player,
            illustrator: "Chuck Hoover",
            description: '\
                <p>Para usar essa lente, pare de pensar no seu jogo e comece a pensar em quais necessidades humanas básicas ele satisfaz.</p>\
                <p>Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Em quais níveis da hierarquia de Maslow meu jogo opera?</li>\
                    <li>Como posso fazer meu jogo satisfazer mais necessidades básicas do que já satisfaz?</li>\
                    <li>Nos níveis em que meu jogo opera, como ele pode satisfazer essas necessidades de maneira ainda melhor?</li>\
                </ul>\
                Parece estranho falar sobre um jogo como satisfazendo as necessidades humanas básicas, mas tudo o que as pessoas fazem é, de alguma forma, tentar\
                satisfazer essas necessidades. E lembre-se de que alguns jogos satisfazem as necessidades melhor do que outros - seu jogo não pode apenas prometer a\
                necessidade; deve fornecer a satisfação da necessidade. Se um jogador imaginar que jogar seu jogo o fará se sentir melhor sobre si mesmo, ou conhecer\
                melhor seus amigos, e se seu jogo não satisfazer essas necessidades, o jogador passará para um jogo que as satisfaça.\
            '
        });
        
        addLense({
            number: 25,
            title: "A Lente da Avaliação",
            smallTitle: "Avaliação",
            page: { br: 128 },
            set: player,
            illustrator: "Joseph Grubb",
            description: '\
                <p>Para decidir se o jogo é um bom juiz dos jogadores, faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Como seu jogo avalia os jogadores?</li>\
                    <li>Como ele comunica essa avaliação?</li>\
                    <li>Os jogadores acham que a avaliação é justa?</li>\
                    <li>Eles se importam com a avaliação?</li>\
                    <li>A avaliação faz com que queiram melhorar?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 26,
            title: "A Lente do Espaço Funcional",
            smallTitle: "Espaço Funcional",
            page: { br: 135 },
            set: game,
            illustrator: "Cheryl Ceol",
            description: '\
                <p>Para usar essa lente, pense no espaço em que o jogo realmente acontece quando todos os elementos na superfície são removidos.</p>\
                <p>Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>O espaço desse jogo é diferenciado ou padronizado?</li>\
                    <li>Quantas dimensões ele tem?</li>\
                    <li>Quais são os limites do espaço?</li>\
                    <li>Existem subespaços? Como eles estão conectados?</li>\
                    <li>Há mais de uma maneira útil de modelar abstratamente o espaço desse jogo?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 27,
            title: "A Lente do Tempo",
            smallTitle: "Tempo",
            page: { br: 189 },
            set: game,
            illustrator: "Sam Yip",
            description: '\
                <p>\
                    Costuma-se dizer que "tempo é tudo". Nosso objetivo como designers é criar experiências, e experiências são facilmente corrompidas quando são muito\
                    breves ou muito longas. Faça estas perguntas para que a sua tenha a duração correta:\
                </p>\
                <ul class="questions">\
                    <li>O que determina a duração das minhas atividades em termos de jogabilidade?</li>\
                    <li>Meus jogadores se sentem frustrados porque o jogo termina muito cedo? Como posso mudar isso?</li>\
                    <li>Meus jogadores ficam entediados porque o jogo se estende por muito tempo? Como posso mudar isso?</li>\
                    <li>Especificar um limite de tempo pode tornar o jogo mais emocionante. Isso é uma boa ideia para meu jogo?</li>\
                    <li>Uma hierarquia de estruturas de tempo ajudaria meu jogo? Isto é, vários rounds curtos que, juntos, formam um grande round?</li>\
                </ul>\
                Pode ser muito difícil criar o timing certo do jogo, e isso pode significar a diferença entre um bom jogo ou um jogo ruim. Muitas vezes, faz sentido seguir\
                o antigo princípio <i>vaudevilliano</i> do "Deixe-os querendo mais".\
            '
        });
        
        addLense({
            number: 28,
            title: "A Lente do Estado Dinâmico",
            smallTitle: "Estado Dinâmico",
            page: { br: 140 },
            set: game,
            illustrator: "Chuck Hoover",
            description: '\
                <p>Para usar essa lente, pense em quais informações mudam durante o jogo e quem está ciente disso. Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Quais são os objetos no meu jogo?</li>\
                    <li>Quais são os atributos dos objetos?</li>\
                    <li>Quais são os possíveis estados para cada atributo? O que desencadeia mudanças de estado para cada atributo?</li>\
                    <li>O estado é conhecido apenas pelo jogo?</li>\
                    <li>O estado é conhecido por todos os jogadores?</li>\
                    <li>O estado é conhecido por alguns, ou apenas um jogador?</li>\
                    <li>Mudar quem conhece o estado aprimoraria meu jogo de alguma maneira?</li>\
                </ul>\
                Jogar jogos implica tomar decisões. Decisões são tomadas com base em informações. Decidir os diferentes atributos, seus estados e quem os conhece é fundamental\
                para a mecânica do seu jogo. Pequenas mudanças em relação a quem conhece quais informações podem mudar radicalmente um jogo, às vezes para melhor, as vezes\
                para pior. Quem conhece os atributos que podem modificar o decorrer de um jogo? Uma ótima forma de dramatizar seu jogo é transformar informações privadas\
                importantes em fatos partilhados pelo público.\
            '
        });
        
        addLense({
            number: 30,
            title: "A Lente da Emergência",
            smallTitle: "Emergência",
            page: { br: 143 },
            set: game,
            illustrator: "Reagan Heller",
            description: '\
                <p>Para garantir que seu jogo tenha as qualidades interessantes da emergência, pergunte-se</p>\
                <ul class="questions">\
                    <li>Quantos verbos meus jogadores têm?</li>\
                    <li>Sobre quantos objetos cada verbo pode agir?</li>\
                    <li>Quantas maneiras há de os jogadores alcançarem seus objetivos?</li>\
                    <li>Quantos sujeitos os jogadores controlam?</li>\
                    <li>Como os efeitos colaterais mudam as restrições?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 31,
            title: "A Lente da Ação",
            smallTitle: "Ação",
            page: { br: 144 },
            set: game,
            illustrator: "Nick Daniel",
            description: '\
                <p>Para usar essa lente, pense no que seus jogadores podem fazer ou não, e por quê.</p>\
                <p>Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Quais são as ações operacionais no meu jogo?</li>\
                    <li>Quais são as ações resultantes?</li>\
                    <li>Que ações resultantes eu gostaria de ver? Como posso mudar meu jogo para tornar essas ações possíveis?</li>\
                    <li>Estou satisfeito com a proporção de ações resultantes e operacionais?</li>\
                    <li>Que ações os jogadores desejariam fazer no meu jogo que eles não podem? Posso, de alguma forma, ativá-las, como ações operacionais ou resultantes?</li>\
                </ul>\
                Um jogo sem ações é como uma frase sem verbos - nada acontece. Decidir as ações em seu jogo será a decisão mais fundamental que você pode fazer como um designer\
                de jogos. Pequenas alterações nessas ações terão um enorme efeito em cascata, o que pode fazer a diferença entre um jogo emergente sensacional e um jogo\
                previsível e entediante. Escolha cuidadosamente suas ações, e aprenda a ouvir seu jogo e seus jogadores para entender o que suas escolhas tornam possível.\
            '
        });
        
        addLense({
            number: 32,
            title: "A Lente dos Objetivos",
            smallTitle: "Objetivos",
            page: { br: 149 },
            set: game,
            illustrator: "Zachary D. Coe",
            description: '\
                <p>Para assegurar que os objetivos de seu jogo são apropriados e bem balanceados, faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Qual é o objetivo final do meu jogo?</li>\
                    <li>Esse objetivo está claro para os jogadores?</li>\
                    <li>Se houver uma série de objetivos, os jogadores entendem isso?</li>\
                    <li>Diferentes objetivos estão relacionados entre si de maneira significativa?</li>\
                    <li>Meus objetivos são concretos, realizáveis e recompensadores?</li>\
                    <li>Há um bom equilíbrio entre objetivos de curto e longo prazo?</li>\
                    <li>Os jogadores têm uma chance de decidir seus próprios objetivos?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 33,
            title: "A Lente das Regras",
            smallTitle: "Regras",
            page: { br: 150 },
            set: game,
            illustrator: "Joshua Seaver",
            description: '\
                <p>Para usar essa lente, examine profundamente seu jogo até compreender sua estrutura mais básica. Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Quais são as regras fundamentais do meu jogo? Como essas regras diferem das regras operacionais?</li>\
                    <li>Há "leis" ou "regras da casa" que se formam à medida que o jogo se desenvolve? Essas devem ser incorporadas ao meu jogo?</li>\
                    <li>Há diferentes modos no meu jogo? Esses modos tornam as coisas mais simples ou mais complexas? O jogo seria aprimorado com menos modos? Mais modos?</li>\
                    <li>Quem impõe as regras?</li>\
                    <li>\
                        As regras são fáceis de compreender, ou há confusão em relação a elas? Se houver confusão, devo corrigí-las alterando as regras ou explicando-as\
                        de maneira mais clara?\
                    </li>\
                </ul>\
                Há um conceito errôneo de que os designers que criam jogos sentam-se e escrevem um conjunto de regras. Não é assim que isso normalmente acontece. Chegamos às\
                regras de um jogo de maneira gradual e experimental. A mente do designer costuma funcionar no território das "regras operacionais", ocasionalmente alternando\
                para a perspectiva das "regras fundamentais" ao pensar sobre como mudar ou melhorar o jogo. As "normas escritas" costumam vir no final, depois que o jogo\
                torna-se efetivamente jogável. Parte do trabalho do designer é certificar-se de que há regras que abrangem todas as circunstâncias. Certifique-se de observar\
                cuidadosamente à medida que você faz os testes de jogabilidade, porque é durante esses testes que aparecerão brechas em suas regras - se você apenas remendá-las\
                rapidamente sem fazeranotações, a mesma brecha aparecerá mais tarde. Um jogo são suas regras - forneça o tempo e a consideração que merecem.\
            '
        });
        
        addLense({
            number: 34,
            title: "A Lente da Habilidade",
            smallTitle: "Habilidade",
            page: { br: 153 },
            set: game,
            illustrator: "Emma Backer",
            description: '\
                <p>Para usar essa lente, pare de olhar para seu jogo e comece a olhar para as habilidades que seus jogadores precisam ter.</p>\
                <p>Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Quais habilidades meu jogo requer do jogador?</li>\
                    <li>Há uma habilidade específica que esse jogo não tem?</li>\
                    <li>Quais habilidades são dominantes?</li>\
                    <li>Essas habilidades criam a experiência que eu quero?</li>\
                    <li>Alguns jogadores são bem melhores nessas habilidades do que outros? Isso faz o jogo parecer desleal?</li>\
                    <li>Os jogadores podem melhorar suas habilidades com prática?</li>\
                    <li>Esse jogo exige o nível adequado de habilidade?</li>\
                </ul>\
                Exercitar habilidades pode ser uma coisa prazerosa - é uma das razões por que as pessoas adoram jogos. Obviamente, isso só é prazeroso se as habilidades\
                forem interessantes e recompensadoras, e se o nível de desafio atingir aquele equilíbrio ideal entre "muito fácil" e "muito difícil". Mesmo habilidades\
                tolas (como apertar botões) podem ser mais interessantes se forem transformadas em habilidades virtuais e fornecerem o nível adequado de desafios. Use\
                essa lente  como uma janela para a experiência que o jogador tem. Como as habilidades desempenham papel importante para definir a experiência, a Lente da\
                Habilidade funciona muito bem com a <lense-ref>2</lense-ref>.\
            '
        });
        
        addLense({
            number: 35,
            title: "A Lente do Valor Esperado",
            smallTitle: "Valor Esperado",
            page: { br: 267 },
            set: game,
            illustrator: "Nick Daniel",
            description: '\
                <p>Para usar essa lente, pense na probabilidade de diferentes eventos ocorrerem no seu jogo, e o que isso significa para o jogador.</p>\
                <p>Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Qual é a probabilidade real de determinado evento ocorrer?</li>\
                    <li>Qual é a probabilidade percebida?</li>\
                    <li>Qual valor o resultado desse evento tem? O valor pode ser quantificado? Há aspectos intangíveis do valor que não estou considerando?</li>\
                    <li>\
                        Cada ação que um jogador pode tomar tem um valor esperado diferente quando todos os resultados possíveis são somados. Estou satisfeito com esses\
                        valores? Eles dão ao jogador opções interessantes? Eles são muito recompensadores, ou muito punitivos?\
                    </li>\
                </ul>\
                O valor esperado é uma das ferramentas mais valiosas para analisar o balanceamento do jogo. O desafio de usá-lo é encontrar uma maneira de representar\
                numericamente tudo o que pode acontecer a um jogador. Ganhar e perder dinheiro é fácil de representar. Mas qual é o valor numérico de "botas de velocidade"\
                que permitem correr mais rápido, ou de uma "porta de teletransporte" que permite pular dois níveis? Isso é difícil de quantificar perfeitamente - mas\
                não significa que você não ossa fazer uma suposição. Como veremos no Capítulo 11, a medida que você vai passando por várias iterações no teste do jogo,\
                ajustando parâmetros e valores no jogo, também ajustará suas próprias estimativas dos valores dos diferentes resultados. Quantificar esses elementos menos\
                tangíveis pode ser bem esclarecedor por que faz você pensar concretamente sobre o que é valioso para o jogador e por quê - e esse conhecimento concreto\
                o colocará no controle do balanceamento do seu jogo.\
            '
        });
        
        addLense({
            number: 36,
            title: "A Lente da Probabilidade",
            smallTitle: "Probabilidade",
            page: { br: 169 },
            set: game,
            illustrator: "Joshua Seaver",
            description: '\
                <p>Para usar essa lente, focalize as partes do seu jogo que envolvem aleatoriedade e riscos, tendo em mente que essas duas coisas não são idênticas.</p>\
                <p>Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>O que no meu jogo é verdadeiramente aleatório? Quais são as partes que parecem aleatórias?</li>\
                    <li>A aleatoriedade dá aos jogadores sensasões positivas de emoção e desafio, ou lhes dá sensações negativas de desesperança e falta de controle?</li>\
                    <li>Mudar minhas curvas de distribuição das probabilidades aprimora meu jogo?</li>\
                    <li>Os jogaodres tem oportunidade de assumir riscos interessantes no jogo?</li>\
                    <li>\
                        Qual é o relacionamento entre probabilidades e habilidades no meu jogo? Há como fazer elementos aleatórios se parecerem com o exercício de uma\
                        habilidade? Há como fazer o exercício das habilidades parecer mais com a assunção de riscos?\
                    </li>\
                </ul>\
                Riscos e probabilidades são como temperos. Um jogo sem uma pitada deles pode ser completamente insípido, mas adicione muitos e eles irão sobrepujar tudo o\
                mais. Mas use a dose certa e eles irão realçar o sabor de tudo mais no seu jogo. Infelizmente, usá-los no seu jogo não é salpicá-los aqui e ali. Você deve\
                olhar para seu jogo a fim de verificar onde os elementos de risco e aleatoriedade surgem naturalmente e, então, decidir como melhor domá-los para fazer\
                seu lance. Não caia na armadilha de acreditar que os elementos de chance só ocorrem em torno de lançamentos de dados ou números gerados aleatoriamente.\
                Pelo contrário, você pode encontrá-los sempre que um jogador deparar com o desconhecido.\
            '
        });
        
        addLense({
            number: 37,
            title: "A Lente da Equidade",
            smallTitle: "Equidade",
            page: { br: 176 },
            set: game,
            illustrator: "Nick Daniel",
            description: '\
                <p>\
                    Para usar a Lente da Equidade, pense cuidadosamente sobre o jogo pelo ponto de vista de cada jogador. Levando em conta o nível de habilidade de cada jogador,\
                    encontre uma maneira de dar aos jogadores uma chance de ganhar que cada um considere justa.\
                </p>\
                <p>Faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Meu jogo deve ser simétrico? Por quê?</li>\
                    <li>Meu jogo deve ser assimétrico? Por quê?</li>\
                    <li>\
                        O que é mais importante: meu que meu jogo seja um indicador confiável de quem tem mais habilidade, ou que forneça um desafio interessante para todos os\
                        jogadores?\
                    </li>\
                    <li>\
                        Se eu quiser que jogadores com diferentes níveis de habilidades joguem juntos, que meios usarei para tornar o jogo interessante e desafiador para todo\
                        mundo?\
                    </li>\
                </ul>\
                A equidade pode ser um assunto complicado. Há alguns casos em que um dos lados tem uma vantagem sobre o outro, e o jogo ainda parece justo. Algumas vezes, isso\
                acontece de tal forma que os jogadores desiguais podem disputar uma partida equilibradamente, mas pode haver outras razões.\
                No jogo <i>Alien vs. Predator</i>, por exemplo, costuma-se reconhecer que, no modo multiplayer, os Preadores têm uma vantagem significativa sobre os Aliens.\
                Mas os jogadores não consideram isso injusto, porque está em sintonia com o universo do <i>Alien vs. Predator</i> e eles aceitam que, se jogarem como um Alien,\
                estarão em desvantagem e terão de compensar isso com habilidades extras. É um símbulo de orgulho entre os jogadores ganhar o jogo quando jogam como um Alien.\
            '
        });
        
        addLense({
            number: 38,
            title: "A Lente do Desafio",
            smallTitle: "Desafio",
            page: { br: 179 },
            set: game,
            illustrator: "Reagan Heller",
            description: '\
                <p>\
                    O desafio e á parte essencial de praticamente qualquer jogo. Você até poderia dizer que um jogo é definido por seus objetivos e desafios. Ao analisar os\
                    desafios no seu jogo, faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Quais são os desafios em meu jogo?</li>\
                    <li>Eles são muito fáceis, muito difíceis ou apenas corretos?</li>\
                    <li>Meus desafios podem acomodar uma ampla variedade de níveis de habilidade?</li>\
                    <li>Como os níveis de desafio se intensificam à medida que o jogador passa de um nível para outro?</li>\
                    <li>Há variedade suficiente nos desafios?</li>\
                    <li>Qual é o nível máximo de desafio em meu jogo?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 39,
            title: "A Lente das Escolhas Significativas",
            smallTitle: "Escolhas Significativas",
            page: { br: 181 },
            set: game,
            illustrator: "Chuck Hoover",
            description: '\
                <p>Quando fazemos escolhas significativas, isso nos faz sentir que as coisas realmente importam. Para usar essa lente, faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Quais escolhas peço que o jogador faça?</li>\
                    <li>Elas são significativas? Como?</li>\
                    <li>Dou ao jogador o número certo de escolhas? Dar mais opções faria com que se sentissem mais poderosos? Dar menos tornaria o jogo mais transparente?</li>\
                    <li>Há alguma estratégia dominante em meu jogo?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 40,
            title: "A Lente da Triangularidade",
            smallTitle: "Triangularidade",
            page: { br: 182 },
            set: game,
            illustrator: "Nick Daniel",
            description: '\
                <p>\
                    Dar ao jogador a opção de evitar riscos em troca de uma baixa recompensa ou assumir um risco em troca de uma grande recompensa é uma ótima maneira de\
                    tornar seu jogo interessante e emocionante. Para usar a Lente da Triangularidade, faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Há triangularidade agora? Se não houver, como posso obtê-la?</li>\
                    <li>Minha tentativa em relação a triangularidade está equilibrada? Isto é, as recompensas são compatíveis com os riscos?</li>\
                </ul>\
                Depois de começar a procurar a triangularidade nos jogos, você a verá em todos os lugares. Um jogo desinteressante, monótono, pode tornar-se rapidamente\
                emocionante e recompensador quando você adiciona uma pitada de triangularidade.\
            '
        });
        
        addLense({
            number: 41,
            title: "A Lente da Habilidade versus a da Probabilidade",
            smallTitle: "Habilidade vs Probabilidade",
            page: { br: 184 },
            set: game,
            illustrator: "Nathan Mazur",
            description: '\
                <p>Para ajudar a determinar como criar equilíbrio entre habilidade e probabilidade no seu jogo, faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>Meus jogadores estão aqui para ser aavaliados (habilidade), ou para assumir riscos (probabilidade)?</li>\
                    <li>A habilidade tende a ser mais séria do que a probabilidade: Meu jogo é sério ou casual?</li>\
                    <li>Há partes do meu jogo entediantes? Se houver, a adição de elementos de probabilidade irá estimulá-los</li>\
                    <li>\
                        Partes do meu jogo parecem excessivamente aleatórias? Em caso positivo, a substituição dos elementos de probabilidade por elementos de habilidade ou\
                        estratégia passará a sensação de que os jogadores têm mais controle?\
                    </li>\
                </ul>\
            '
        });
        
        addLense({
            number: 42,
            title: "A Lente da Mente e das Mãos",
            smallTitle: "Mente e Mãos",
            page: { br: 185 },
            set: game,
            illustrator: "Lisa Brown",
            description: '\
                <p>\
                    Yogi Berra disse uma vez: "O beisebol é 90% mental. Os outros 10% são físicos." Para certificar-se de que seu jogo tem um equilíbrio mais realista entre\
                    os elementos físicos e mentais, use a Lente da Mente e das Mãos. Faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Meus jogadores procuram pura ação, ou um desafio intelectual?</li>\
                    <li>Adicionar mais lugares que envolvam quebra-cabeças ao meu jogo o tornaria mais inteligente?</li>\
                    <li>Há lugares em que o jogador pode relaxar a mente e apenas jogar sem raciocinar?</li>\
                    <li>\
                        Posso dar ao jogador uma escolha - ser bem-sucedido exercitando um alto nível de destreza, ou descobrindo uma estratégia inteligente que funciona\
                        com o mínimo de habilidade física?\
                    </li>\
                    <li>Se "1" significa apenas físico, e "10", apenas mental, que número meu jogo obteria?</li>\
                </ul>\
                Essa lente funciona especialmente bem se for utilizada em conjunção com a <lense-ref>19</lense-ref>.\
            '
        });
        
        addLense({
            number: 43,
            title: "A Lente da Competição",
            smallTitle: "Competição",
            page: { br: 186 },
            set: game,
            illustrator: "Elizabeth Barndollar",
            description: '\
                <p>\
                    Determinar quem é mais hábil em alguma coisa é uma compulsão humana básica. Jogos de competição podem satisfazer essa compulsão. Use essa lente para\
                    se sertificar de que seu jogo competitivo faz as pessoas quererem vencer.<br />\
                    Faç a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Meu jogo fornece uma medida justa das habilidades do jogador?</li>\
                    <li>As pessoas querem vencer meu jogo? Por quê?</li>\
                    <li>Vencer esse jogo é algo de que as pessoas podem se orgulhar? Por quê?</li>\
                    <li>Principiantes podem competir de uma maneira significativa em meu jogo?</li>\
                    <li>Jogadores experientes podem competir de maneira significativa em meu jogo?</li>\
                    <li>De maneira geral, jogadores experientes podem ter certeza de que derrotarão os principiantes?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 44,
            title: "A Lente da Cooperação",
            smallTitle: "Cooperação",
            page: { br: 187 },
            set: game,
            illustrator: "Sam Yip",
            description: '\
                <p>\
                    Colaborar e ter sucesso como um time é um prazer especial que pode criar laços sociais duradouros. Use essa lente para estudar aspectos cooperativos\
                    do seu jogo. Faça estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>A cooperação exige comunicação. Meus jogadores têm oportunidade suficiente de se comunicar? Como a comunicação poderia ser aprimorada?</li>\
                    <li>Meus jogadores já são amigos, ou são estranhos? Se forem estranhos, posso ajudá-los a quebrar o gelo?</li>\
                    <li>Há sinergia (2 + 2 = 5) ou antergia (2 + 2 = 3) quando os jogadores trabalham em conjunto? Por quê?</li>\
                    <li>Todos os jogadores desempenham o mesmo papel, ou têm funções especiais?</li>\
                    <li>A cooperação é significativamente aprimorada quando não há como uma pessoa realizar uma tarefa sozinha. Meu jogo tem tarefas como essa?</li>\
                    <li>Tarefas que forçam a comunicação inspiram a cooperação. Quaisquer das minhas tarefas forçam a comunicação?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 45,
            title: "A Lente da Competição versus Cooperação",
            smallTitle: "Competição vs Cooperação",
            page: { br: 187 },
            set: game,
            illustrator: "Diana Patton",
            description: '\
                <p>\
                    O equilíbrio entre competição e cooperação pode ser alcançado de várias maneiras interessantes. Use essa lente para decidir se estão adequadamente\
                    equilibradas no seu jogo. Faça estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Se "1" for competição e "10" cooperação, que número meu jogo deve obter?</li>\
                    <li>Posso dar aos jogadores a opção de jogar cooperatva ou competitivamente?</li>\
                    <li>Meu público prefere competição, cooperação, ou uma combinação das duas?</li>\
                    <li>Competição em equipe é algo que faz sentido para meu jogo? Meu jogo é mais interessante com competição em equipe, ou competição individual?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 46,
            title: "A Lente da Recompensa",
            smallTitle: "Recompensa",
            page: { br: 191 },
            set: game,
            illustrator: "Elizabeth Barndollar",
            description: '\
                <p>\
                    Todo mundo gosta de ouvir que está fazendo um bom trabalho. Faça estas perguntas para determinar se o jogo distribui as recompensas certas nas\
                    quantidades certas e na hora certa:\
                </p>\
                <ul class="questions">\
                    <li>Que recompensas meu jogo distribui atualmente? Ele também pode distribuir outras?</li>\
                    <li>Os jogadores sentem-se entusiasmados quando recebem recompensas em meu jogo, ou ficam entediados com elas? Por quê?</li>\
                    <li>Reeber uma recompensa que você não entende é como não ganhar recompensa alguma. Meus jogadores compreendem as recompensas que recebem?</li>\
                    <li>As recompensas que meu jogo distribui são regulares, previsíveis? Elas podem ser distribuídas de maneira mais variável?</li>\
                    <li>Como minhas recompensas estão relacionadas entre si? Existe uma maneira de estarem mais bem conectadas?</li>\
                    <li>Como minhas recompensas são construídas? Com muita rapidez, lentamente ou na velocidade certa?</li>\
                </ul>\
                Balancear recompensas é diferente para cada jogo. Um designer não precisa apenas se preocupar em distribuir as corretas, mas também distribuí-las na\
                hora certa e na quantidade erta. Isso só pode ser determinado por meio de tentativa e erro - mesmo assim, provavelmente não será correto para todo\
                mundo. Ao tentar balancear recompensas, é difícil ser perfeito - muitas vezes, você tem de se concentrar com "suficientemente bom".\
            '
        });
        
        addLense({
            number: 47,
            title: "A Lente da Punição",
            smallTitle: "Punição",
            page: { br: 194 },
            set: game,
            illustrator: "Crhis Daniel",
            description: '\
                <p>\
                    A punição deve ser usada delicadamente, pois, afinal de contas, os jogadores estão em um jogo por vontade própria. Apropriadamente equilibrada, ela\
                    dará mais significado a tudo no seu jogo, e os jogadores terão a sensação real de orgulho quando forem bem-sucedidos no jogo. Para examinar a punição\
                    no seu jogo, faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Quais são as punições em meu jogo?</li>\
                    <li>Por que estou punindo os jogadores? O que espero conseguir com isso?</li>\
                    <li>Minhas punições parecem justas para os jogadores? Por que sim ou por que não?</li>\
                    <li>Existe uma maneira de transformar essas punições em recompensas e obter o mesmo efeito, ou um melhor?</li>\
                    <li>Há equilíbrio entre minhas punições fortes e recompensas equivalentemente fortes?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 48,
            title: "A Lente da Simplicidade / Complexidade",
            smallTitle: "Simplicidade / Complexidade",
            page: { br: 196 },
            set: game,
            illustrator: "Tom Smith",
            description: '\
                <p>\
                    É difícil encontrar o equilíbrio certo entre simplicidade e complexidade, e isso deve ser feito pelas razões certas. Use essa lente para que seu jogo\
                    tenha uma complexidade significativa que aparece a partir de um sistema simples. Faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Quais são os elementos de complexidade inata existentes em meu jogo?</li>\
                    <li>Há um modo de essa complexidade inata ser transformada em complexidade emergente?</li>\
                    <li>Elementos de complexidade emergente estão presentes em meu jogo? Caso contrário, por quê?</li>\
                    <li>Há elementos do meu joo que são muito simples?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 49,
            title: "A Lente da Elegância",
            smallTitle: "Elegância",
            page: { br: 198 },
            set: game,
            illustrator: "Joshua Seaver",
            description: '\
                <p>\
                    A maioria dos "jogos clássicos" é considerada uma obra-prima da elegância. Use essa lente para tornar seu jogo o mais elegante possível. Faça a si\
                    mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Quais são os elementos do meu jogo?</li>\
                    <li>Quais são os objetivos de cada elemento? Some-os a fim de dar a um elemento uma "nota de elegância".</li>\
                    <li>Para elementos com apenas um ou dois objetivos, alguns desses podem ser combinados ou totalmente removidos?</li>\
                    <li>Para os elementos com vários objetivos, é possível que eles assumam outros?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 50,
            title: "A Lente da Personalidade",
            smallTitle: "Personalidade",
            page: { br: 199 },
            set: game,
            illustrator: "Kyle Gabler",
            description: '\
                <p>\
                    Elegância e personalidade são opostas. Elas são como versões em miniatura da simplicidade e complexidade, e devem ser mantidas em equilíbrio. Para\
                    certificar-se de que seu jogo tem peculiaridades atraentes e definidoras, faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Existe alguma coisa estranha em meu jogo que os jogadores comentam com entusiasmo?</li>\
                    <li>Meu jogo tem qualidades engraçadas que o tornam único?</li>\
                    <li>Meu jogo tem falhas das quais os jogadores gostam?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 51,
            title: "A Lente da Imaginação",
            smallTitle: "Imaginação",
            page: { br: 201 },
            set: player,
            illustrator: "Elizabeth Barndollar",
            description: '\
                <p>\
                    Todos os jogos têm algum elemento de imaginação e algum elmento de conexão com a realidade. Use essa lente para ajudar a encontrar o equilíbrio\
                    entre detalhes e imaginação. Faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>O que o jogador precisa entender para jogar meu jogo?</li>\
                    <li>Algum elemento da imaginação pode ajudá-lo a entender isso melhor?</li>\
                    <li>Que detalhes realistas e de alta qualidade podemos fornecer nesse jogo?</li>\
                    <li>Quais detalhes seriam de baixa qualidade se fossem fornecidos? A imaginação, em vez disso, pode preencher a lacuna?</li>\
                    <li>Posso dar mais detalhes que a imaginação será capaz de reutilizar repeditamente?</li>\
                    <li>Quais detalhes forneço que inspiram a imaginação?</li>\
                    <li>Quais detalhes forneço que sufocam a imaginação?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 52,
            title: "A Lente da Economia",
            smallTitle: "Economia",
            page: { br: 204 },
            set: game,
            illustrator: "Sam Yip",
            description: '\
                <p>\
                    Fornecer a um jogo uma economia pode lhe dar profunidade surpreendente e vida própria. Mas, como todas as coisas vivas, essa pode ser difícil de\
                    controlar. Use essa lente para manter sua economia balanceada:\
                </p>\
                <ul class="questions">\
                    <li>Como meus jogadores podem ganhar dinheiro? Deve haver outras maneiras?</li>\
                    <li>O que meus jogadores podem comprar? Por que?</li>\
                    <li>É muito fácil ganhar dinheiro? Muito difícil? Como posso mudar isso?</li>\
                    <li>As escolhas entre ganhar e gastar são significativas?</li>\
                    <li>Uma moeda universal é uma boa ideia em meu jogo, ou deve haver moedas específicas?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 53,
            title: "A Lente do Balanceamento",
            smallTitle: "Balanceamento",
            page: { br: 205 },
            set: game,
            illustrator: "Samp Yip",
            description: '\
                <p>\
                    Há muitos tipos de balanceamento nos jogos, e todos são importantes. Entretanto, é fácil perder-se nos detalhes e esquecer o quadro geral. Utilize\
                    essa lente simples para resolver situações difíceis, e faça a si mesmo a única pergunta importante:\
                </p>\
                <ul class="questions">\
                    <li>Meu jogo é bom? Por que sim ou por que não?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 54,
            title: "A Lente da Acessibilidade",
            smallTitle: "Acessibilidade",
            page: { br: 213 },
            set: game,
            illustrator: "Karen Phillips",
            description: '\
                <p>\
                    Quando você apresenta um quebra-cabeça aos jogadores (ou um conjunto de qualquer tipo), eles devem ser capazes de visualizar com clareza quais\
                    seriam os primeiros passos. Faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Como os jogadores sabem como começar a resolver meu quebra-cabeça, ou jogar meu jogo? Preciso explicar, ou isso é óbvio?</li>\
                    <li>\
                        Meu quebra-cabeça ou jogo funciona como algo que eles já viram antes? Em caso positivo, como posso chamar a atenção deles para essa semelhança?\
                        Se não, como posso fazê-los compreender como ele funciona?\
                    </li>\
                    <li>\
                        Meu quebra-cabeça ou jogo atrai as pessoas e faz com que elas queiram tocar e manipulá-lo? Em caso negativo, como posso mudá-lo para que isso\
                        aconteça?\
                    </li>\
                </ul>\
            '
        });
        
        addLense({
            number: 55,
            title: "A Lente da Progressão Visível",
            smallTitle: "Progressão Visível",
            page: { br: 214 },
            set: game,
            illustrator: "Nick Daniel",
            description: '\
                <p>\
                    Os jogadores precisam ver que eles estão avançando ao solucionar um problema difícil. Para certificar-se de que eles recebem esse feedback, faça a\
                    si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>O que significa progressão no meu jogo ou quebra-cabeças?</li>\
                    <li>Há progressão suficiente no meu jogo? Existe uma maneira de adicionar mais passos intermediários de sucesso progressivo?</li>\
                    <li>Qual progressão é visível, qual progressão está oculta? Posso encontrar uma maneira de revelar o que está oculto?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 56,
            title: "A Lente do Paralelismo",
            smallTitle: "Paralelismo",
            page: { br: 216 },
            set: game,
            illustrator: "Nick Daniel",
            description: '\
                <p>O paralelismo no seu quebra-cabeça agrega benefícios paralelos à experiência do jogador. Para usar essa lente, faça a si mesmo estas perguntas:</p>\
                <ul class="questions">\
                    <li>\
                        Há gargalos no meu design e isso impede que os jogadores avancem se não puderem resolver um desafio específico? Se houver, posso adicionar desafios\
                        paralelos para que um jogador trabalhe neles se esse desafio levá-los a encalhar?\
                    </li>\
                    <li>\
                        Se desafios paralelos forem muito semelhantes, o paralelismo oferecerá poucos benefícios. Meus desafios paralelos são suficientemente diferentes\
                        entre si para que os jogadores possam beneficiar-se dessa diversidade?\
                    </li>\
                    <li>\
                        Meus desafios paralelos podem, de alguma forma, ser conectados? Há uma maneira de fazer progressos em um para que seja mais fácil resolver os\
                        outros?\
                    </li>\
                </ul>\
            '
        });
        
        addLense({
            number: 57,
            title: "A Lente da Pirâmide",
            smallTitle: "Pirâmide",
            page: { br: 217 },
            set: game,
            illustrator: "Sam Yip",
            description: '\
                <p>\
                    Pirâmides nos fascinam porque elas têm um ponto alto singular. Para dar ao seu quebra-cabeça o fascínio das pirâmides antigas, faça a si mesmo estas\
                    perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Há uma maneira de todas as pelas do meu quebra-cabeça serem inseridas em um desafio singular no final?</li>\
                    <li>\
                        Grandes pirâmides geralmente são feitas de pequenas pirâmides - é possível ter uma hierarquia de elementos do quebra-cabeça cada vez mais\
                        desafiadora, levando gradualmente a um desafio maior?\
                    </li>\
                    <li>O desafio no topo da pirâmide é interessante, atraente e claro? Ele faz as pessoas quererem trabalhar para chegar a ele?</li>\
                </ul>\
            '
        });
        
        addLense({
            number: 58,
            title: "A Lente do Quebra-cabeça",
            smallTitle: "Quebra-cabeça",
            page: { br: 219 },
            set: game,
            illustrator: "Elizabeth Barndollar",
            description: '\
                <p>\
                    Quebra-cabeças fazem o jogador para e pensar. Para assegurar que seus quebra-cabeças fazem tudo o que você quer para moldar a experiência do\
                    jogador, faça a si mesmo estas perguntas:\
                </p>\
                <ul class="questions">\
                    <li>Quais são os quebra-cabeças no meu jogo?</li>\
                    <li>Devo ter mais ou menos quebra-cabeças? Por quê?</li>\
                    <li>Quais dos 10 princípios sobre quebra-cabeças aplicam-se a cada um dos meus quebra-cabeças?</li>\
                    <li>Há algum quebra-cabeça incongruente? Como faço para integrá-lo melhor no jogo? (Utilize a <lense-ref>49</lense-ref>, para ajudar a fazer isso.)</li>\
                </ul>\
            '
        });

        
        // addLense({
        //     number: ,
        //     title: "A Lente da",
        //     smallTitle: "",
        //     page: { br:  },
        //     set: ,
        //     illustrator: "",
        //     description: '\
        //         <p></p>\
        //         <ul class="questions">\
        //             <li></li>\
        //         </ul>\
        //     '
        // });
    });
})();