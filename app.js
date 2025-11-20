// 1. Pega a função createApp do objeto global Vue que importamos no HTML
const { createApp } = Vue;

// 2. Cria a nossa aplicação Vue
createApp({
    // 3. A função data() retorna um objeto com todos os dados reativos da nossa aplicação
    data() {
        return {
            // A lista de carros da nossa loja
            carros: [
                {
                    id: 1,
                    nome: 'Fiat Pulse',
                    ano: 2026,
                    preco: 'R$ 136.990,00',
                    imagem: 'icons/pulse 2026.png',
                    descricao: 'Experimente o máximo de tecnologia com o Pulse Impetus. A versão topo de linha vem com motor Turbo 200 Flex, painel 100% digital, central multimídia de 10.1" e um acabamento que esbanja exclusividade. O SUV que pulsa no seu ritmo, em sua forma definitiva.'
                },
                {
                    id: 2,
                    nome: 'Fiat Toro Ranch',
                    ano: 2026,
                    preco: 'R$ 235.990,00',
                    imagem: 'icons/toro 2026.png',
                    descricao: 'A expressão máxima de sofisticação e robustez. Com motor Turbo Diesel e tração 4x4, a Toro Ranch se destaca pelo acabamento premium com bancos em couro marrom e detalhes exclusivos. A escolha perfeita para quem não abre mão do estilo, no campo ou na cidade.'
                },
                {
                    id: 3,
                    nome: 'Fiat Fastback',
                    ano: 2026,
                    preco: 'R$ 143.490,00',
                    imagem: 'icons/fastback 2026.png',
                    descricao: 'O design SUV Coupé que todos desejam, agora na versão Audace. Equipado com o eficiente motor Turbo 200 Flex, ele entrega a combinação perfeita de performance e consumo, sem abrir mão do estilo arrojado e do porta-malas gigante de 600 litros.'
                },
                {
                    id: 4,
                    nome: 'Fiat Mobi Trekking',
                    ano: 2026,
                    preco: 'R$ 81.990,00',
                    imagem: 'icons/mobi 2026.png',
                    descricao: 'O seu parceiro para a selva de pedra. Compacto por fora e surpreendente por dentro, o Mobi Trekking é ágil, super econômico e vem com design aventureiro e suspensão elevada para encarar qualquer desafio urbano.'
                },
                {
                    id: 5,
                    nome: 'Fiat Cronos ',
                    ano: 2026,
                    preco: 'R$ 132.490,00',
                    imagem: 'icons/cronos 2026.png',
                    descricao: 'A expressão máxima de esportividade e elegância no Fiat Cronos. A versão HGT traz um design arrojado com acabamentos escurecidos, rodas exclusivas e um interior que respira performance.'
                },
                {
                    id: 6,
                    nome: 'Fiat Strada Freedom CS',
                    ano: 2026,
                    preco: 'R$ 128.990,00',
                    imagem: 'icons/freedom.webp',
                    descricao: 'A parceira definitiva para o seu negócio. A Strada Freedom Cabine Simples oferece a maior caçamba da categoria, combinando a robustez lendária da Fiat com direção elétrica, ar-condicionado e tudo o que você precisa para encarar o trabalho pesado com conforto.'
                },
                {
                    id: 7,
                    nome: 'Fiat Fiorino',
                    ano: 2026,
                    preco: 'R$ 107.940,00',
                    imagem: 'icons/fiorino 2026.png',
                    descricao: 'A parceira que o seu negócio precisa. A Fiat Fiorino é sinônimo de agilidade e economia para o transporte de cargas na cidade. Com compartimento de 3.3m³ e capacidade para 650 kg, ela está pronta para qualquer entrega.'
                },
                {
                    id: 8,
                    nome: 'Fiat Argo Drive',
                    ano: 2026,
                    preco: 'R$ 97.990,00',
                    imagem: 'icons/argo 2026.png',
                    descricao: 'O hatch que conquistou o Brasil em sua versão mais equilibrada. O Argo Drive 1.0 é a escolha inteligente, combinando design, o eficiente motor Firefly e central multimídia.'
                },
                {
                    id: 9,
                    nome: 'Fiat Titano',
                    ano: 2026,
                    preco: '289.990,00',
                    imagem: 'icons/titano 2026.png',
                    descricao: 'Para quem precisa de força de verdade, a Fiat Titano é a resposta. Equipada com um potente motor Turbo Diesel e tração 4x4, ela oferece performance e robustez inigualáveis, além da maior capacidade de caçamba da categoria para encarar qualquer desafio.'
                },
                {
                    id: 10,
                    nome: 'Fiat Ducato',
                    ano: 2026,
                    preco: 'R$ 256.950,00',
                    imagem: 'icons/ducato 2026.png',
                    descricao: 'A ferramenta definitiva para o seu negócio. A Fiat Ducato Maxi Cargo é projetada para maximizar sua produtividade, com um compartimento de carga gigante de 13m³, agilidade e um motor Turbo Diesel potente e econômico.'
                },
                {
                    id: 11,
                    nome: 'Fiat FASTBACK IMPETUS TURBO 200 HYBRID FLEX AT ',
                    ano: 2026,
                    preco: 'R$ 138.900,00',
                    imagem: 'icons/fastback hibrido 2026.webp',
                    descricao: 'A versão topo de gama com o motor T200 Hybrid. O SUV Coupé com melhorias no acabamento, design renovado e a eficiência da tecnologia híbrida para o máximo em performance e economia.'
                },

                 {
                    id: 12,
                    nome: 'Fiat Pulse Audace Hybrid T200 At',
                    ano: 2026,
                    preco: 'R$ 134.490,00',
                    imagem: 'icons/pulse 2026 hibrid.webp',
                    descricao: 'A evolução do SUV que conquistou o Brasil. Com a nova tecnologia Bio-Hybrid aliada ao motor Turbo 200, o Pulse 2026 entrega performance eletrizante com máxima eficiência energética. Mais torque, menos emissões e o design arrojado de sempre.'
                }
            ],
            // 4. Guarda o texto que o usuário digita no campo de busca. Começa vazio.
            termoBusca: '',
            // 5. Guarda o carro que foi clicado para mostrar os detalhes. Começa nulo (nenhum carro selecionado).
            carroSelecionado: null
        }
    },

    // 6. Computed properties: Lógica de busca inteligente
    computed: {
        carrosFiltrados() {
            if (this.termoBusca === '') {
                return this.carros;
            }

            // Remove acentos da busca e transforma em minúsculo
            const termoLimpo = this.termoBusca.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            // Divide a busca em palavras (ex: "toro ranch" -> ["toro", "ranch"])
            const palavrasBusca = termoLimpo.split(' ').filter(palavra => palavra.length > 0);

            return this.carros.filter(carro => {
                // Remove acentos do nome do carro também
                const nomeLimpo = carro.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                
                // Verifica se TODAS as palavras digitadas estão presentes no nome do carro
                return palavrasBusca.every(palavra => nomeLimpo.includes(palavra));
            });
        }
    },

    // 7. Methods: funções de clique
    methods: {
        selecionarCarro(carro) {
            this.carroSelecionado = carro;
        },
        fecharDetalhes() {
            this.carroSelecionado = null;
        }
    },

    // 8. Updated: Garante que os carros apareçam após a filtragem (corrige o bug da animação)
    updated() {
        const cards = document.querySelectorAll('.carro-card');
        cards.forEach(card => {
            card.classList.add('is-visible');
        });
    }

// 9. Monta a aplicação
}).mount('#app');