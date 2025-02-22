export default class TareasDataSource {
    //Método abstracto para obtener todas las tareas
    obtenerTodas() {
        throw new Error('Este método debe ser implementado por la subclase');
    }

    //Método abstracto para guardar todas las tareas
    guardar(listaTareas) {
        throw new Error('Este método debe ser implementado por la subclase');
    }
    
    //Método abstractro para eliminar una tarea
    eliminar(id) {
        throw new Error('Este método debe ser implementado por la subclase');
    }
}