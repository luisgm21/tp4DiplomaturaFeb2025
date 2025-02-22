// Función para renderizar una lista de tareas en formato JSON
export function renderizarListaTareas(listaTareas) {
    return JSON.stringify(listaTareas,null,2);
}
// Función para renderizar un mensaje genérico en formato JSON
export function renderizarMensaje(mensaje) {
    return JSON.stringify({mensaje},null,2);
}
// Función para renderizar una tarea específica en formato JSON
export function renderizarTarea(tarea) {
    // Formatea una tarea individual en formato JSON con indentación de 2 espacios
    return JSON.stringify(tarea,null,2);
}