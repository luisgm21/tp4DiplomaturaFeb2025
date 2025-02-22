import TareaRepository from "../repository/tareaRepository.mjs";
import Tarea from "../models/tarea.mjs";

const tareaRepo = new TareaRepository();

export function listarTareas() {
    return tareaRepo.obtenerTodas();
}

export function listarTareasCompletadas() {
    const tareas = tareaRepo.obtenerTodas();
    return tareas.filter(tarea => tarea.completada); 
}

export function crearTarea(id,titulo, descripcion, completada = false) {
    const tareas = tareaRepo.obtenerTodas();
    
    const nuevaTarea = new Tarea(id, titulo, descripcion, completada);
    
    nuevaTarea.validar();

    tareas.push(nuevaTarea);
    
    tareaRepo.guardar(tareas);
}

export function completarTarea(id) {
    const tareas = tareaRepo.obtenerTodas();
    const tarea = tareas.find(tarea => tarea.id === id);
    
    if (tarea) {
        tarea.completar();
        tareaRepo.guardar(tareas);
    }
}

export function eliminarTarea(id) {
    tareaRepo.eliminar(id);
}
