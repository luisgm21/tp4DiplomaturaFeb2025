import express from 'express';
import { obtenerSuperHeroePorIdController,buscarSuperHeroesPorAtributoController,obtenerSuperHeroesMayoresDe30Controller, obtenerTodosLosSuperHeroesController, guardarSuperHeroeController, modificarSuperHeroeController, eliminarSuperHeroeController } from './controllers/superHeroesController.mjs';

const app = express();
const PORT = 3005;

app.use(express.json());

// Rutas
// Obtener un superhéroe por ID
// Ejemplo: GET /superheroes/id/1
app.get('/superheroes/id/:id', obtenerSuperHeroePorIdController); 

// Buscar superhéroes por atributo
// Ejemplo: GET /superheroes/atributos/nombre/Spiderman
app.get('/superheroes/atributos/:atributo/:valor',buscarSuperHeroesPorAtributoController);

// Obtener superhéroes mayores de 30 años
// Ejemplo: GET /superheroes/edad/mayorA30
app.get('/superheroes/edad/mayorA30',obtenerSuperHeroesMayoresDe30Controller);

// Modificar un superhéroe por ID
// Ejemplo: PUT /superheroes/id/1
// Body: { "nombreSuperheroe": "Ironman", "nombreReal": "Tony Stark", "nombreSociedad": "Avengers", "edad": 35, "planetaOrigen": "Tierra", "debilidad": "Ego", "poder": "Tecnología avanzada", "habilidadEspecial": "Ingeniería", "aliado": "War Machine", "enemigo": "Mandarín" }
app.post('/superheroes', guardarSuperHeroeController);

// Modificar un superhéroe por ID
// Ejemplo: PUT /superheroes/id/1
// Body: { "nombre": "Spiderman", "edad": 25, "poder": "Trepar paredes" }
app.put('/superheroes/id/:id', modificarSuperHeroeController);

// Obtener todos los superhéroes
// Ejemplo: GET /superheroes
app.get('/superheroes', obtenerTodosLosSuperHeroesController);

// Eliminar un superhéroe por ID
// Ejemplo: DELETE /superheroes/id/1
app.delete('/superheroes/id/:id', eliminarSuperHeroeController); 

// Inicialización del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
