import express from 'express';
import{listarTareasController,listarTareasCompletadasController,completarTareaController,crearTareaController,eliminarTareaController} from './controllers/tareaController.mjs';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/tareas', listarTareasController);

app.get('/tareas/completadas', listarTareasCompletadasController);

app.post('/tareas', crearTareaController);

app.put('/tareas/:id/completar', completarTareaController);

app.delete('/tareas/:id', eliminarTareaController);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 
