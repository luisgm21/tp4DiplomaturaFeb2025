import SuperHeroeRepository from "../repository/superheroeRepository.mjs";

const repository = new SuperHeroeRepository();

export function obtenerTodosLosSuperHeroes(){
    const superHeroes = repository.obtenerTodos();
    return superHeroes;
}

export function obtenerSuperHeroeporId(id){
    const superHeroe = repository.obtenerTodos().find(superHeroe => superHeroe.id === id);
    return superHeroe;
}

export function buscarSuperHeroesPorAtributo(atributo, valor){
    const superHeroes = repository.obtenerTodos().filter(superHeroe => String(superHeroe[atributo]).toLocaleLowerCase().includes(valor.toLocaleLowerCase()));
    return superHeroes;
}

export function obtenerSuperHeroesMayoresDe30(){
    const superHeroes = repository.obtenerTodos().filter(superHeroe => superHeroe.edad > 30 && superHeroe.planetaOrigen === 'Tierra' && superHeroe.poder.length > 2); 
    return superHeroes;
}

export function guardarSuperHeroe(superHeroe){
    const superHeroes = repository.obtenerTodos();
    superHeroes.push(superHeroe);
    repository.guardar(superHeroes);
}

export function eliminarSuperHeroe(id){
    repository.eliminar(id);
}

export function modificarSuperHeroe(id, query){
    repository.modificar(id, query);
}