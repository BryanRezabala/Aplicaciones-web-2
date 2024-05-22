import { consultarCursos } from './consultas';

// Llamar a la función para consultar los cursos
consultarCursos()
  .catch(e => {
    throw e;
  });
