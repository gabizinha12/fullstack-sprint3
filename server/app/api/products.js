/* Código simplório, apenas para fornecer o serviço para a aplicação */
const api = {};

const products = [
  {
    image: "assets/c1.webp",
    description:
      "Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18",
    value: "199,90",
  },
  {
    image: "assets/c2.webp",
    description: "Camiseta Infantil Manga Curta Super Mario Azul Tam 4 a 10",
    value: "39,90",
  },
  {
    image: "assets/c3.webp",
    description: "Camiseta Infantil Manga Curta Super Mario Branco Tam 4 a 10",
    value: "49,90",
  },
  {
    image: "assets/c4.webp",
    description:
      "Camiseta Infantil Manga Longa Super Mario Vermelho Tam 4 a 10",
    value: "49,90",
  },
  {
    image: "assets/c5.webp",
    description: "Camiseta Juvenil Manga Curta Mario Bros Cinza",
    value: "39,90",
  },
  {
    image: "assets/c6.webp",
    description: "Camiseta Juvenil Manga Curta Super Mario Azul Tam 10 a 18",
    value: "39,90",
  },
  {
    image: "assets/c7.webp",
    description: "Regata Infantil Mario Bros Branco Tam 4 a 10",
    value: "29,90",
  },
  {
    image: "assets/c8.webp",
    description: "Camiseta Juvenil Manga Curta Super Mario Branco Tam 10 a 18",
    value: "49,90",
  },
  {
    image: "assets/c9.webp",
    description:
      "Camiseta Infantil Manga Curta Super Star Mario Bros Cinza Mescla Chumbo Tam 4 a 10",
    value: "39,90",
  },
  {
    image: "assets/c10.webp",
    description:
      "Blusa de Moletom Juvenil com Capuz Mario Bros Cinza Mescla Tam 10 a 16",
    value: "149,90",
  },
  {
    image: "assets/c11.webp",
    description: "Camiseta Infantil Manga Curta Mario Bros Vermelho Tam 4 a 10",
    value: "49,90",
  },
  {
    image: "assets/c12.webp",
    description: "Camiseta Infantil Manga Curta Mário Bros Vermelha Tam 4 a 10",
    value: "39,90",
  },
];

api.all = function (req, res) {
  res.json(products);
};

module.exports = api;
