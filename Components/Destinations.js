export const getDestinationsByPreference = (preferencia) => {
  const destinos = {
    praia: [
      {
        nome: 'Fernando de Noronha',
        descricao: 'Ilha paradisíaca com águas cristalinas.',
        atividades: ['Mergulho', 'Trilhas', 'Praias'],
        imagem: require('../Img/FernandoDeNoronha.jpg'),
        valor: '450,00',
      },
      {
        nome: 'Praia do Rosa',
        descricao: 'Destino famoso para surf e natureza.',
        atividades: ['Surf', 'Observação de baleias', 'Caminhadas'],
        imagem: require('../Img/PraiaDoRosa.jpg'),
        valor: '320,00',
      },
    ],
    montanha: [
      {
        nome: 'Campos do Jordão',
        descricao: 'Cidade charmosa na serra da Mantiqueira.',
        atividades: ['Passeios de teleférico', 'Fondue', 'Trilhas'],
        imagem: require('../Img/CamposDoJordao.jpg'),
        valor: '280,00',
      },
      {
        nome: 'Monte Verde',
        descricao: 'Destino romântico com clima frio.',
        atividades: ['Cavalgadas', 'Trilhas', 'Compras'],
        imagem: require('../Img/MonteVerde.jpeg'),
        valor: '300,00',
      },
    ],
    'cidade histórica': [
      {
        nome: 'Ouro Preto',
        descricao: 'Cidade colonial com arquitetura barroca.',
        atividades: ['Museus', 'Igrejas', 'Passeios guiados'],
        imagem: require('../Img/OuroPreto.jpg'),
        valor: '250,00',
      },
      {
        nome: 'Paraty',
        descricao: 'Centro histórico preservado e belas praias.',
        atividades: ['Passeios de barco', 'Centro histórico', 'Cachoeiras'],
        imagem: require('../Img/Paraty.jpg'),
        valor: '270,00',
      },
    ],
  };

  return destinos[preferencia] || [];
};
