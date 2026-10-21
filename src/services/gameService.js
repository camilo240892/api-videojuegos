import games from '../data/games.js'; // ¡La extensión .js es obligatoria en ESM!

export const getAllGames = () => games;

export const getGameById = (id) => games.find(game => game.id === parseInt(id));