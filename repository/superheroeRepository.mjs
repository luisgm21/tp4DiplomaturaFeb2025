import SuperHeroeDataSource from "./superHeroeDataSource.mjs";
import SuperHeroe from "../models/superHeroe.mjs";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { sortHeroesById } from "../utils/superHeroesSort.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filename));


export default class SuperHeroeRepository extends SuperHeroeDataSource{ 
    constructor(){
        super();
        this.filePath = path.join(__dirname, 'superheroes.txt');
    }
    
    obtenerTodos(){
        try {
                    const data = fs.readFileSync(this.filePath, 'utf-8');
                    const superheroes =JSON.parse(data);
                    superheroes.map(superheroe => new SuperHeroe(superheroe.id, superheroe.nombreSuperheroe, superheroe.nombreReal, superheroe.nombreSociedad, superheroe.edad, superheroe.planetaOrigen, superheroe.debilidad, superheroe.poder, superheroe.habilidadEspecial, superheroe.aliado, superheroe.enemigo));
                    return superheroes;
        } catch (error) {
            console.error('Error al leer el archivo', error);
        }
    }
    
     guardar(superHeroes){
        try {
            const data = JSON.stringify(superHeroes);
            fs.writeFileSync(this.filePath, data, 'utf-8');
        } catch (error) {
            console.error('Error al guardar el archivo', error);
        }
    }
    
    eliminar(id){
        try {
            const superHeroes = this.obtenerTodos();
            const superHeroesActualizado = superHeroes.filter(superHeroe => superHeroe.id !== id);
            this.guardar(superHeroesActualizado);
        } catch (error) {
            console.error('Error al eliminar el archivo', error);
        }
    }
    modificar(id, query){
        try {
            
            const superHeroes = this.obtenerTodos();
            const superHeroe = superHeroes.find(superHeroe => superHeroe.id === id);
            const superHeroeModificado = new SuperHeroe(
                superHeroe.id,
                query.nombreSuperheroe || superHeroe.nombreSuperheroe,
                query.nombreReal || superHeroe.nombreReal,
                query.nombreSociedad || superHeroe.nombreSociedad,
                query.edad || superHeroe.edad,
                query.planetaOrigen || superHeroe.planetaOrigen,
                query.debilidad || superHeroe.debilidad,
                query.poder || superHeroe.poder,
                query.habilidadEspecial || superHeroe.habilidadEspecial,
                query.aliado || superHeroe.aliado,
                query.enemigo || superHeroe.enemigo
            );

            const superHeroesAux = superHeroes.filter(superHeroe => superHeroe.id !== id);
            
            const superHeroesActualizado = superHeroesAux.push(superHeroeModificado);

            const superHeroesActualizadoOrdenado = sortHeroesById(superHeroesActualizado);

            this.guardar(superHeroesActualizadoOrdenado);

        } catch (error) {
            console.error('Error al modificar el archivo', error);
        }
    }
}