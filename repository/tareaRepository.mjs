import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
//Importamos la interfaz de persistencia
import TareasDataSource from './tareasDataSource.mjs';
import Tarea from '../models/tarea.mjs';

//Obtener la ruta del archivo tareas.json
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filename));
const filePath = path.join(__dirname, 'tareas.txt');

export default class TareaRepository extends TareasDataSource {
    constructor() {
        super(); //Llamamos al constructor de la clase padre
    }
    //Implementación del método obtenerTodas()
    obtenerTodas() {
        try {
            //Leer el archivo de texto en formato UTF-8
            const data = fs.readFileSync(filePath, 'utf8');
            //Convertir el contenido del archivo en un array de objetos JSON
            const tareas = JSON.parse(data);
            //Convertir los objetos JSON en instancias de la clase Tarea
            return tareas.map(tareaData => new Tarea(tareaData.id, tareaData.titulo, tareaData.descripcion, tareaData.fecha, tareaData.completada));
        } catch (error) {
            // Si ocurre un error, como el archivo no exista,devolver un array vacío
            console.error('Error al obtener las tareas', error);
            return [];
        }
    }

    //Implementación del método guardar()
    guardar(tareas){
        try {
            //Convertimos el array de tareas en un string JSON con indentación de 2 espacios
            const data = JSON.stringify(tareas, null, 2);
            // Guardar la cadena JSON en el archivo de texto
            fs.writeFileSync(filePath, data, 'utf8');
        } catch (error) {
            // Si ocurre un error al guardar las tareas, mostrar un mensaje en consola
            console.error('Error al guardar las tareas', error);
        }
    }
    //Implementación del método eliminar()
    eliminar(id){
        try {
            const tareas = this.obtenerTodas(); // Obtener todas las tareas

            // Filtrar la tarea por ID
            const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
            this.guardar(tareasActualizadas); // Guardar la lista de tareas actualizada
        } catch (error) {
            console.error('Error al eliminar la tarea', error);
        }
    }
}