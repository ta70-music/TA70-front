export const usersFixtures = [
  {name: "Bob", img: '../../assets/img/3.jpg', password: "toto123", description: "Totoyoto"},
  {name: "Bob2", img: '../../assets/img/5.jpg', password: "toto123", description: "Totoyoto"},
  {name: "Bob3", img: '../../assets/img/15.jpg', password: "toto123", description: "Totoyoto"},
  {name: "Bob4", img: '../../assets/img/mec_random.jpg', password: "toto123", description: "Totoyoto"},
];



export const categoriesFixtures = [
  {name: 'Pop', id: 1},
  {name: 'Métal', id: 2},
  {name: 'Film & série', id: 3},
  {name: 'Non binaires', id: 4},
];

export const musicsFixtures = [
  {img: '../../assets/img/Euri.jpg' ,name: 'Sweat Dream', id: 1, file: '../../assets/musics/Euri.mp3', author: usersFixtures[0], category: categoriesFixtures[0]},
  {img: '../../assets/img/Janet.jpg' ,name: 'Young Love', id: 2, file: '../../assets/musics/Janet.mp3', author: usersFixtures[0], category: categoriesFixtures[0]},
  {img: '../../assets/img/madness.jpg' ,name: 'Madness', id: 3, file: '../../assets/musics/madness.mp3', author: usersFixtures[1], category: categoriesFixtures[0]},
  {img: '../../assets/img/ram.jpg' ,name: 'Imperial March', id: 5, file: '../../assets/musics/ram.mp3', author: usersFixtures[0], category: categoriesFixtures[2]},
  {img: '../../assets/img/nofx.jpg' ,name: 'Nofx', id: 4, file: '../../assets/musics/nofx.mp3', author: usersFixtures[1], category: categoriesFixtures[1]},
  {img: '../../assets/img/Ramst.jpg' ,name: 'Ramst', id: 6, file: '../../assets/musics/Ramst.mp3', author: usersFixtures[2], category: categoriesFixtures[1]},
];
