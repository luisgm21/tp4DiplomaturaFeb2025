export default class Tarea {
  constructor(id,titulo ,descripcion, fecha, completada = false) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.completada = completada;
  }

  // Metodo para marcar una tarea como completada
  completar() {
    this.completada = true;
  }

  // Metodo para validar que el titulo de la tarea no este vacio
  validar() {
    if (!this.titulo || this.descripcion.trim() === '') {
      throw new Error('El título de la tarea es obligatorio');
    }
  }
}