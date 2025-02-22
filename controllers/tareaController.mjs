import {listarTareas,listarTareasCompletadas,crearTarea,completarTarea,eliminarTarea} from '../services/tareaService.mjs';
import { renderizarListaTareas,renderizarMensaje,renderizarTarea } from '../views/tareaVista.mjs';

export function listarTareasController(req, res) {
    const tareas = listarTareas();
    res.send(renderizarListaTareas(tareas));
}

export function listarTareasCompletadasController(req, res) {
    const tareas = listarTareasCompletadas();
    res.send(renderizarListaTareas(tareas));
}

export  function crearTareaController(req, res) {
    const {id, titulo, descripcion, completada} = req.body;
    crearTarea(id, titulo, descripcion, completada);
    res.send(renderizarMensaje('Tarea creada correctamente'));
}

export function completarTareaController(req, res) {
    const {id} = req.params;
    completarTarea(parseInt(id));
    res.send(renderizarMensaje('Tarea marcada como completada'));
}

export function eliminarTareaController(req, res) {
    const {id} = req.params;
    eliminarTarea(parseInt(id));
    res.send(renderizarMensaje('Tarea eliminada correctamente'));
}