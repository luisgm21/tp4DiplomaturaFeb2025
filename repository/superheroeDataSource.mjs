export default class SuperHeroeDataSource {
    
    obtenerTodos(){
        throw new Error('La función obtenerTodos la debe implementar la clase que herede de SuperHeroeDataSource');
    }
    
    guardar(superHeroe){
        throw new Error('La función guardar la debe implementar la clase que herede de SuperHeroeDataSource');
    }

    eliminar(id){
        throw new Error('La función eliminar la debe implementar la clase que herede de SuperHeroeDataSource');
    }

}