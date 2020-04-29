# Projeto Clima Stefanini

Projeto submetido à Stefanini para vaga de desenvolvedor mobile (React Native)

## Arquitetura

A arquitetura foi escolhida com base na simplicidade de compreensão e domínio
prévio de trabalhos anteriores, o que permitiu uma melhor produtividade.

## Bibliotecas utilizadas

- react-navigation 5.x : Biblioteca popular que lida com a transição entre as
  telas do aplicativo. Foi escolhida por sua praticidade e poder em executar a
  funcionalidade que se dispõe a cumprir.
- axios: Biblioteca utilizada para consumir API`s REST
- prop-types: Biblioteca para representar os tipos das propriedades de cada
  componente.
- react-native-vector-icons: Biblioteca ampla no quesito de renderização de
  ícones. Utilizada para renderizar icones de termômetro que indicam as
  temperaturas e a estrela de favorito.
- redux: Lidar com o estado da aplicação, servindo como uma espécie de banco de
  dados temporário (enquanto a aplição estiver em execução). Foi utilizada para
  persistir as informações de cidades favoritadas pelo usuário.
- styled-components: Permite que a estilização dos componentes ocorra de forma
  mais compacta, além de ser escrita com CSS nativo.

## O que poderia melhorar

- Melhorar a reutilização dos componentes, devido ao prazo ainda há repetição de
  código.
- Utilizar uma imagem ou animação para informar a ausência de dados na listagem
  de cidades favoritas
- Criptografar a key utilizada na API openweathermap, qualquer um que
  interceptar a requisição pode passar a utilizar a key.
- Adicionar funcionalidade de refresh para tela de cidades favoritas (a cidade
  fica desatualizada até que o usuário acesse seus detalhes), assim, ao arrastar
  a lista para baixo, executaria o update para todas os itens da lista.
- Fazer o uso de um banco de dados, sendo este, o próprio SQLite que foi
  solicitado ou até mesmo um AsyncStorage dado as funcionalidades deste
  protótipo.

## Pontos não entregues

- Não foi possível implementar o SQLite: Atualmente estou atuando sozinho na
  reescrita de um app, portanto estou com uma carga horária bem apertada. Como
  utilizei bibliotecas um tanto quanto "chatinhas" de se instalarem (vide
  react-native-vector-icons), gastei algum tempo arrumando erros de instalação e
  rebuildando o app.
