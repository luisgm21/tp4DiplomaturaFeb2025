import SuperHeroe from "../models/superHeroe.mjs";
import { obtenerSuperHeroeporId,buscarSuperHeroesPorAtributo,obtenerSuperHeroesMayoresDe30,obtenerTodosLosSuperHeroes,guardarSuperHeroe, modificarSuperHeroe, eliminarSuperHeroe } from "../services/superHeroeService.mjs";
import { renderizarListaSuperHeroes, renderizarSuperHeroe } from "../views/responseView.mjs";

export function obtenerTodosLosSuperHeroesController(req, res){
    const superHeroes = obtenerTodosLosSuperHeroes();
    res.send(renderizarListaSuperHeroes(superHeroes));
}

export function obtenerSuperHeroePorIdController(req, res){
    const id = req.params.id;
    const superHeroe = obtenerSuperHeroeporId(parseInt(id));
    res.send(renderizarSuperHeroe(superHeroe));

    if(!superHeroe){
        res.status(404).send({ mensaje: 'Superheroe no encontrado' });
    } else {
        res.send(renderizarSuperHeroe(superHeroe));
    }
}

export function buscarSuperHeroesPorAtributoController(req, res){  
    const {atributo, valor} = req.params;
    const superHeroes = buscarSuperHeroesPorAtributo(atributo, valor);
    
    if(superHeroes.length === 0){
        res.status(404).send({ mensaje: 'No se encontraron super heroes con ese atributo' });
    } else {
        res.send(renderizarListaSuperHeroes(superHeroes));
    }
}

export function obtenerSuperHeroesMayoresDe30Controller(req, res){
    const superHeroes = obtenerSuperHeroesMayoresDe30();
    if (superHeroes.length === 0) {
        res.status(404).send({ mensaje: 'No se encontraron super heroes mayores de 30 años' });
    } else {
        res.send(renderizarListaSuperHeroes(superHeroes));
    }
}

export function guardarSuperHeroeController(req, res){
    const {nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen , debilidad, poder ,habilidadEspecial,aliado, enemigo} = req.body
    const superHeroe = new SuperHeroe(obtenerTodosLosSuperHeroes().length + 1,nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo);
    guardarSuperHeroe(superHeroe);
    res.send({ mensaje: 'Superheroe guardado' });
}

export function eliminarSuperHeroeController(req, res){
    const id = req.params.id;
    const superHeroe = obtenerSuperHeroeporId(parseInt(id));
    
    if (!superHeroe) {
        res.status(404).send({ mensaje: 'Superheroe no encontrado para eliminar' });
    } else {
        eliminarSuperHeroe(parseInt(id));
        res.send({ mensaje: 'Superheroe eliminado', superHeroe });
    }
}

export function modificarSuperHeroeController(req, res){
    const id = req.params.id;
    const query = req.body;
    const superHeroe = obtenerSuperHeroeporId(parseInt(id));
    
    if (!superHeroe) {
        res.status(404).send({ mensaje: 'Superheroe no encontrado para modificar' });
    } else {
        modificarSuperHeroe(parseInt(id), query);
        res.send({ mensaje: 'Superheroe modificado', superHeroe });
    }
}