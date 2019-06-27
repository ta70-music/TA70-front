export const usersFixtures = [
  {name: "Bob", img: 'none', password: "toto123", description: "Totoyoto"},
  {name: "Bob2", img: 'none', password: "toto123", description: "Totoyoto"},
  {name: "Bob3", img: 'none', password: "toto123", description: "Totoyoto"},
  {name: "Bob4", img: 'none', password: "toto123", description: "Totoyoto"},
];



export const categoriesFixtures = [
  {name: 'Pop', id: 1},
  {name: 'Métal', id: 2},
  {name: 'Rap', id: 3},
  {name: 'Non binaires', id: 4},
];

export const musicsFixtures = [
  {name: 'Music 1', id: 1, file: '../../assets/musics/1.mp3', author: usersFixtures[0], category: categoriesFixtures[0]},
  {name: 'Music 2', id: 2, file: '../../assets/musics/2.mp3', author: usersFixtures[0], category: categoriesFixtures[2]},
  {name: 'Music 3', id: 3, file: '../../assets/musics/1.mp3', author: usersFixtures[0], category: categoriesFixtures[2]},
  {name: 'Music 4', id: 4, file: '../../assets/musics/1.mp3', author: usersFixtures[0], category: categoriesFixtures[2]},
  {name: 'Music 5', id: 5, file: '../../assets/musics/1.mp3', author: usersFixtures[0], category: categoriesFixtures[3]},
  {name: 'Music 6', id: 6, file: '../../assets/musics/1.mp3', author: usersFixtures[0], category: categoriesFixtures[1]},
  {name: 'Music 7', id: 7, file: '../../assets/musics/1.mp3', author: usersFixtures[0], category: categoriesFixtures[2]},
  {name: 'Music 8', id: 8, file: '../../assets/musics/1.mp3', author: usersFixtures[0], category: categoriesFixtures[1]},
  {name: 'Music 9', id: 9, file: '../../assets/musics/1.mp3', author: usersFixtures[0], category: categoriesFixtures[1]},
];
