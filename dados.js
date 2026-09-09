window.DASHBOARD_DATA = {
  meta: {
    titulo: '📊 Dashboard Financeiro Premium — Grupo Clínica de Cirurgia Plástica',
    subtitulo: 'Clínica da Barra LTDA · Instituto da Plástica Serviços Médicos LTDA · Conta PF do Sócio',
    rotuloMes: 'Mês (Julho/2026)',
    rotuloTrimestre: 'Trimestre (Mai–Jul/2026)',
    notaVisaoGeral: 'O saldo consolidado considera o caixa das contas exibidas no filtro. Receita, despesas, tributos e resultados contemplam apenas as pessoas jurídicas. Blocos de governança, compliance e conciliação têm natureza gerencial e dependem de suporte documental para validação final.',
    coresContas: {
      barra: '#1f6fb2',
      instituto: '#1e9e6b',
      pf: '#c98a1e'
    }
  },

  contas: [
    { id: 'barra', nome: 'Clínica da Barra', tipo: 'PJ' },
    { id: 'instituto', nome: 'Instituto da Plástica', tipo: 'PJ' },
    { id: 'pf', nome: 'PF do Sócio (Rogerio C.)', tipo: 'PF' }
  ],

  limitesConta: {
    barra: { limite: 5100.00, utilizado: 0.00 },
    instituto: { limite: 3600.00, utilizado: 0.00 },
    pf: { limite: 0.00, utilizado: 0.00 }
  },

  datasSaldo: [
    '30/06','01/07','02/07','03/07','06/07','07/07','08/07','09/07','10/07',
    '13/07','14/07','15/07','16/07','17/07','20/07','21/07','22/07','23/07',
    '24/07','27/07','28/07','29/07','30/07','31/07'
  ],

  saldoDiario: {
    barra: [
      187941.12,229703.92,255126.21,180791.31,-3613.98,12128.04,23228.04,39231.25,
      45715.67,-3345.21,127919.79,143069.79,155234.49,195234.49,165964.67,190964.67,
      199995.60,230000.08,234838.07,226850.15,322733.81,339807.81,251617.18,251617.18
    ],
    instituto: [
      80029.92,81557.04,85540.45,58466.89,51508.00,50311.13,54947.13,62079.13,
      81049.38,53807.39,56642.39,62099.84,65721.56,74663.54,12349.53,16392.53,
      19776.33,28873.93,37068.18,40845.12,43710.73,92387.56,97227.56,100433.75
    ],
    pf: [
      125134.95,94960.24,96060.24,96160.40,74123.56,126661.45,125613.50,135457.50,
      135260.52,102573.51,111792.51,111172.58,73046.84,133338.89,11383.33,11033.33,
      55060.53,null,53601.01,20988.36,40988.36,64988.36,61504.41,67264.68
    ]
  },

  resumoMensalPorConta: {
    barra: {
      receita: 771954.04,
      despesas: 608277.98,
      tributos: 75922.12
    },
    instituto: {
      receita: 180463.00,
      despesas: 160059.17,
      tributos: 31936.78
    },
    pf: {
      receita: 0.00,
      despesas: 0.00,
      tributos: 0.00
    }
  },

  resumoMesAnteriorPorConta: {
    barra: {
      receita: 705000.00,
      despesas: 590000.00,
      tributos: 68000.00,
      status: 'estimado'
    },
    instituto: {
      receita: 165000.00,
      despesas: 148000.00,
      tributos: 27000.00,
      status: 'estimado'
    },
    pf: {
      receita: 0.00,
      despesas: 0.00,
      tributos: 0.00,
      status: 'real'
    }
  },

  saldoMesAnteriorPorConta: {
    barra: 187941.12,
    instituto: 80029.92,
    pf: 125134.95
  },

  historicoMensal: [
    { mes: 'Mai/2026', receita: 810000.00, despesas: 705000.00, tributos: 64000.00, status: 'estimado' },
    { mes: 'Jun/2026', receita: 870000.00, despesas: 738000.00, tributos: 68000.00, status: 'estimado' },
    { mes: 'Jul/2026', receita: 952417.04, despesas: 768337.15, tributos: 107858.90, status: 'real' }
  ],

  receitaBandeirasPorConta: {
    barra: {
      Visa: 18000.00,
      Mastercard: 43000.00,
      Amex: 1500.00,
      Elo: 200.00
    },
    instituto: {
      Visa: 5178.53,
      Mastercard: 13836.37,
      Amex: 259.27,
      Elo: 68.94
    },
    pf: {
      Visa: 0.00,
      Mastercard: 0.00,
      Amex: 0.00,
      Elo: 0.00
    }
  },

  composicaoReceitaPorConta: {
    barra: {
      cartao: 62700.00,
      pix: 709235.04,
      outros: 19.00
    },
    instituto: {
      cartao: 19343.11,
      pix: 161119.89,
      outros: 0.00
    },
    pf: {
      cartao: 0.00,
      pix: 0.00,
      outros: 0.00
    }
  },

  topPagadores: [
    { nome: 'INGRID SILVA FAZOL', contas: ['barra','instituto'], label: 'Barra + Instituto', valor: 132603.00 },
    { nome: 'LIZANDRA MARIA DA PAIXAO GARCIA', contas: ['barra','instituto'], label: 'Barra + Instituto', valor: 97580.00 },
    { nome: 'CLAUDINEIA DUTRA TEIXEIRA', contas: ['barra'], label: 'Barra', valor: 79600.00 },
    { nome: 'FERNANDA COSTA DE SOUZA', contas: ['barra','instituto'], label: 'Barra + Instituto', valor: 72874.00 },
    { nome: 'OESTE DAY HOSPITAL LTDA', contas: ['instituto'], label: 'Instituto', valor: 45000.00 }
  ],

  ticketMedio: 3501.53,

  simplesNacional: {
    limiteAnual: 4800000.00,
    rbt12: 3900000.00,
    status: 'estimado',
    nota: 'Atualizar o RBT12 com o acumulado real dos últimos 12 meses conciliado com faturamento, PGDAS-D e base escriturada.'
  },

  tributosPagos: [
    { data: '30/07/2026', tributo: 'DARF (Simples Nacional)', contaId: 'barra', conta: 'Clínica da Barra', valor: 6210.05, status: 'Pago' },
    { data: '30/07/2026', tributo: 'DARF (Simples Nacional)', contaId: 'barra', conta: 'Clínica da Barra', valor: 1689.83, status: 'Pago' },
    { data: '30/07/2026', tributo: 'DARF (Simples Nacional)', contaId: 'barra', conta: 'Clínica da Barra', valor: 6073.33, status: 'Pago' },
    { data: '27/07/2026', tributo: 'DARF (Simples Nacional)', contaId: 'barra', conta: 'Clínica da Barra', valor: 13334.31, status: 'Pago' },
    { data: '27/07/2026', tributo: 'DARF (Simples Nacional)', contaId: 'barra', conta: 'Clínica da Barra', valor: 10440.53, status: 'Pago' },
    { data: '20/07/2026', tributo: 'DARF (Simples Nacional)', contaId: 'barra', conta: 'Clínica da Barra', valor: 1570.71, status: 'Pago' },
    { data: '20/07/2026', tributo: 'DARF (Simples Nacional)', contaId: 'barra', conta: 'Clínica da Barra', valor: 7249.44, status: 'Pago' },
    { data: '20/07/2026', tributo: 'Simples Nacional (DAS)', contaId: 'instituto', conta: 'Instituto da Plástica', valor: 29851.73, status: 'Pago' },
    { data: '13/07/2026', tributo: 'DARF Receita Federal', contaId: 'barra', conta: 'Clínica da Barra', valor: 2219.66, status: 'Pago' },
    { data: '13/07/2026', tributo: 'DARF Receita Federal', contaId: 'barra', conta: 'Clínica da Barra', valor: 8131.26, status: 'Pago' },
    { data: '13/07/2026', tributo: 'Receita Federal', contaId: 'instituto', conta: 'Instituto da Plástica', valor: 367.82, status: 'Pago' },
    { data: '13/07/2026', tributo: 'Receita Federal', contaId: 'instituto', conta: 'Instituto da Plástica', valor: 210.00, status: 'Pago' },
    { data: '13/07/2026', tributo: 'FGTS (CEF)', contaId: 'instituto', conta: 'Instituto da Plástica', valor: 1507.23, status: 'Pago' },
    { data: '06/07/2026', tributo: 'ISS Municipal (Rio de Janeiro)', contaId: 'barra', conta: 'Clínica da Barra', valor: 2124.40, status: 'Pago' },
    { data: '06/07/2026', tributo: 'ISS Municipal (Rio de Janeiro)', contaId: 'barra', conta: 'Clínica da Barra', valor: 12082.40, status: 'Pago' },
    { data: '06/07/2026', tributo: 'ISS Municipal (Rio de Janeiro)', contaId: 'barra', conta: 'Clínica da Barra', valor: 2216.50, status: 'Pago' },
    { data: '06/07/2026', tributo: 'ISS Municipal (Rio de Janeiro)', contaId: 'barra', conta: 'Clínica da Barra', valor: 2579.70, status: 'Pago' }
  ],

  mapaTributario: [
    {
      nome: 'Tributos no Simples Nacional / DAS / DARF vinculados à apuração',
      valor: 84661.19,
      status: 'ok',
      observacao: 'Pagamentos identificados nas contas operacionais com predominância de recolhimentos associados ao regime do Simples.'
    },
    {
      nome: 'ISS municipal',
      valor: 19002.99,
      status: 'atencao',
      observacao: 'Validar aderência entre recolhimentos, retenções e competência dos serviços prestados.'
    },
    {
      nome: 'FGTS e demais recolhimentos identificados',
      valor: 1507.23,
      status: 'atencao',
      observacao: 'Revisar se todos os recolhimentos trabalhistas do período estão integralmente refletidos na base.'
    },
    {
      nome: 'Carga tributária consolidada do mês',
      valor: 107858.90,
      status: 'gerencial',
      observacao: 'Indicador gerencial calculado para leitura executiva da pressão tributária sobre a receita operacional.'
    }
  ],

  despesasCategoria: [
    { categoria: 'Aluguel / Imóvel (SJDI 122)', valor: 92453.25, contaIds: ['barra'] },
    { categoria: 'Prestadores Médicos PJ/PF', valor: 71423.75, contaIds: ['barra','instituto'] },
    { categoria: 'Benefícios (CAJU)', valor: 16845.40, contaIds: ['barra','instituto'] },
    { categoria: 'Contabilidade', valor: 3190.24, contaIds: ['barra','instituto'] },
    { categoria: 'Marketing / Captação', valor: 22874.13, contaIds: ['barra','instituto'] },
    { categoria: 'Serviços Administrativos', valor: 18422.56, contaIds: ['barra','instituto'] },
    { categoria: 'Tecnologia / Sistemas', valor: 7448.91, contaIds: ['barra','instituto'] },
    { categoria: 'Tarifas Bancárias', valor: 1284.39, contaIds: ['barra','instituto'] }
  ],

  despesasTipo: [
    { categoria: 'Aluguel / Imóvel', tipo: 'Fixa', valor: 92453.25, contaIds: ['barra'] },
    { categoria: 'Contabilidade', tipo: 'Fixa', valor: 3190.24, contaIds: ['barra','instituto'] },
    { categoria: 'Tecnologia / Sistemas', tipo: 'Fixa', valor: 7448.91, contaIds: ['barra','instituto'] },
    { categoria: 'Serviços Administrativos', tipo: 'Fixa', valor: 18422.56, contaIds: ['barra','instituto'] },
    { categoria: 'Prestadores Médicos', tipo: 'Variável', valor: 71423.75, contaIds: ['barra','instituto'] },
    { categoria: 'Benefícios', tipo: 'Variável', valor: 16845.40, contaIds: ['barra','instituto'] },
    { categoria: 'Marketing / Captação', tipo: 'Variável', valor: 22874.13, contaIds: ['barra','instituto'] },
    { categoria: 'Tarifas Bancárias', tipo: 'Variável', valor: 1284.39, contaIds: ['barra','instituto'] }
  ],

  intercompany: [
    {
      data: '08/06/2026',
      origemId: 'pf',
      destinoId: 'barra',
      origem: 'PF do Sócio',
      destino: 'Clínica da Barra',
      valor: 30000.00,
      desc: 'PIX TRANSF CLINICA08/06',
      natureza: 'Mútuo sócio → empresa',
      status: 'estimado',
      documentacao: 'pendente',
      alerta: 'red'
    },
    {
      data: '03/07/2026',
      origemId: 'instituto',
      destinoId: null,
      origem: 'Instituto da Plástica',
      destino: 'Parte relacionada (a identificar)',
      valor: 30000.00,
      desc: 'SAÍDA PIX ENVIADO INSTITUTO DA...',
      natureza: 'Pagamento a parte relacionada',
      status: 'pendente',
      documentacao: 'pendente',
      alerta: 'yellow'
    },
    {
      data: '13/07/2026',
      origemId: 'instituto',
      destinoId: null,
      origem: 'Instituto da Plástica',
      destino: 'Parte relacionada (a identificar)',
      valor: 30000.00,
      desc: 'SAÍDA PIX ENVIADO INSTITUTO DA...',
      natureza: 'Pagamento a parte relacionada',
      status: 'pendente',
      documentacao: 'pendente',
      alerta: 'yellow'
    },
    {
      data: '06/07/2026',
      origemId: 'barra',
      destinoId: null,
      origem: 'Clínica da Barra',
      destino: 'SJDI 122 (imóvel/holding)',
      valor: 92453.25,
      desc: 'SAÍDA BOLETO PAGO SJDI 122',
      natureza: 'Pagamento de despesa de relacionada',
      status: 'estimado',
      documentacao: 'pendente',
      alerta: 'red'
    },
    {
      data: '05/06/2026',
      origemId: 'pf',
      destinoId: null,
      origem: 'PF do Sócio',
      destino: 'SJDI 122 (imóvel/holding)',
      valor: 91646.75,
      desc: 'PAG BOLETO SJDI 122',
      natureza: 'Pagamento a parte relacionada',
      status: 'pendente',
      documentacao: 'pendente',
      alerta: 'red'
    },
    {
      data: '10/06/2026',
      origemId: 'pf',
      destinoId: 'pf',
      origem: 'PF do Sócio',
      destino: 'Rogerio',
      valor: 30000.00,
      desc: 'PIX TRANSF ROGERIO10/06',
      natureza: 'Movimentação particular',
      status: 'estimado',
      documentacao: 'dispensada',
      alerta: 'yellow'
    }
  ],

  movimentacoesPF: [
    {
      data: '22/07/2026',
      lancamento: 'TED 001.1823.ELISABETE M',
      valor: 25027.20,
      classificacao: 'Distribuição de lucros',
      status: 'estimado'
    },
    {
      data: '22/07/2026',
      lancamento: 'PIX TRANSF MARIA E22/07',
      valor: 19000.00,
      classificacao: 'A classificar',
      status: 'pendente'
    },
    {
      data: '17/07/2026',
      lancamento: 'PIX TRANSF JULCIME17/07',
      valor: 50000.00,
      classificacao: 'Distribuição de lucros',
      status: 'estimado'
    },
    {
      data: '17/07/2026',
      lancamento: 'PIX TRANSF TIAGO C17/07',
      valor: 15000.00,
      classificacao: 'A classificar',
      status: 'pendente'
    }
  ],

  resumoExecutivo: [
    {
      titulo: 'Receita operacional consolidada em patamar relevante',
      texto: 'A operação encerrou julho com receita bruta consolidada de R$‌ 952,4 mil nas pessoas jurídicas, mantendo predominância de recebimentos por PIX e boa concentração de entradas nas contas operacionais.'
    },
    {
      titulo: 'Margem pressionada por estrutura e tributos',
      texto: 'Apesar do bom volume de receita, a combinação entre despesas operacionais e carga tributária reduz significativamente o resultado líquido gerencial do período.'
    },
    {
      titulo: 'Liquidez consolidada positiva ao final do mês',
      texto: 'O grupo encerrou o período com saldo consolidado positivo, embora tenha havido oscilações e dias pontuais de saldo negativo em conta operacional.'
    },
    {
      titulo: 'Partes relacionadas seguem como principal foco de revisão',
      texto: 'Há operações relevantes entre sócio, empresas e partes relacionadas ainda dependentes de formalização documental e enquadramento contábil definitivo.'
    },
    {
      titulo: 'Base histórica comparativa ainda parcialmente estimada',
      texto: 'Os meses anteriores utilizados para comparação permanecem parcialmente estimados, o que recomenda cautela na leitura evolutiva até substituição por dados fechados.'
    }
  ],

  alertasExecutivos: [
    {
      titulo: 'Monitorar avanço do RBT12 no Simples Nacional',
      texto: 'O acumulado de receita dos últimos 12 meses já consome parcela material do limite anual e deve ser acompanhado mensalmente com base conciliada.',
      cor: 'yellow',
      icone: '🟡'
    },
    {
      titulo: 'Formalização de operações com relacionadas é prioritária',
      texto: 'Transferências e pagamentos a partes relacionadas permanecem com documentação pendente, elevando risco contábil, societário e fiscal.',
      cor: 'red',
      icone: '🔴'
    },
    {
      titulo: 'Conta PF exige revisão de classificação',
      texto: 'Há saídas relevantes ainda não enquadradas de forma definitiva entre lucros, reembolso, mútuo ou despesa particular.',
      cor: 'yellow',
      icone: '📌'
    },
    {
      titulo: 'Encerramento de caixa consolidado foi positivo',
      texto: 'Mesmo com oscilações intramês, o saldo final consolidado permaneceu positivo no fechamento do período.',
      cor: 'green',
      icone: '🟢'
    }
  ],

  pendenciasCompliance: [
    {
      titulo: 'Formalização de mútuos e repasses entre sócio e empresas',
      texto: 'Operações financeiras identificadas entre conta PF e pessoas jurídicas requerem instrumento formal, suporte e definição da contrapartida contábil.',
      cor: 'red',
      icone: '📌'
    },
    {
      titulo: 'Identificação do beneficiário econômico em transferências do Instituto',
      texto: 'Há transferências com descrição genérica cuja natureza e destino final precisam ser evidenciados documentalmente.',
      cor: 'yellow',
      icone: '🔍'
    },
    {
      titulo: 'Classificação pendente em saídas relevantes da conta PF',
      texto: 'Movimentações ainda sem enquadramento final devem permanecer como pendentes até análise documental suficiente.',
      cor: 'yellow',
      icone: '🧾'
    }
  ],

  indicadoresGovernanca: [
    {
      nome: 'Operações com partes relacionadas em revisão',
      valor: '5 ocorrências materiais',
      status: 'critico',
      observacao: 'As operações exigem validação documental e enquadramento contábil/fiscal apropriado.'
    },
    {
      nome: 'Lançamentos PF pendentes de classificação final',
      valor: '2 ocorrências relevantes',
      status: 'atencao',
      observacao: 'Persistem saídas sem base suficiente para definição definitiva.'
    },
    {
      nome: 'Base comparativa histórica',
      valor: 'Parcialmente estimada',
      status: 'atencao',
      observacao: 'Os comparativos mensais ainda dependem de substituição por dados fechados.'
    },
    {
      nome: 'Nível de conciliação bancária x gerencial',
      valor: 'Parcial',
      status: 'atencao',
      observacao: 'A estrutura principal está consistente, porém ainda há diferenças associadas a relacionadas e conta PF.'
    }
  ],

  conciliacaoResumo: {
    statusFechamento: 'Parcial',
    saldoBancarioFinal: 419315.61,
    saldoContabilReferencia: 371862.36,
    diferencaApurada: 47453.25,
    observacao: 'A diferença apurada decorre principalmente de eventos ligados a partes relacionadas e classificações pendentes da conta PF.'
  },

  conciliacaoItens: [
    {
      item: 'Receita operacional do período',
      bancario: 952417.04,
      contabil: 952417.04,
      diferenca: 0.00,
      status: 'ok'
    },
    {
      item: 'Tributos pagos identificados',
      bancario: 107858.90,
      contabil: 107858.90,
      diferenca: 0.00,
      status: 'ok'
    },
    {
      item: 'Operações com partes relacionadas',
      bancario: 182453.25,
      contabil: 150000.00,
      diferenca: 32453.25,
      status: 'critico'
    },
    {
      item: 'Movimentações relevantes da conta PF',
      bancario: 109027.20,
      contabil: 94027.20,
      diferenca: 15000.00,
      status: 'atencao'
    }
  ]
};