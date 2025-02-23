export function sortHeroesById(superHeroes){
    return superHeroes.sort((a,b) => a.id - b.id);
}