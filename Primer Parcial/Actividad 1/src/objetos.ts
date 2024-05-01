const idiomas: Idioma[] = [
    {
        ID: "1",
        Descripcion_del_idioma: "Inglés"
    }
];

const instructores: Instructor[] = [
    {
        ID: "1",
        Nombre: "John Doe",
        fecha_de_nacimiento: 1980,
        experiencia: 5
    }
];

const aprendizajes: Aprendizaje[] = [
    {
        ID: "1",
        ID_Idioma: "1",
        ID_Instructor: "1",
        Fecha: 20220430,
        Hora: 9,
        Número_de_horas_del_curso: 20,
        Nivel: "Intermedio"
    },
    {
        ID: "2",
        ID_Idioma: "2",
        ID_Instructor: "2",
        Fecha: 20220515,
        Hora: 10,
        Número_de_horas_del_curso: 30,
        Nivel: "Avanzado"
    },
    {
        ID: "3",
        ID_Idioma: "3",
        ID_Instructor: "3",
        Fecha: 20220601,
        Hora: 11,
        Número_de_horas_del_curso: 25,
        Nivel: "Básico"
    }
];

// Mis interfaces //

interface Idioma {
    ID: string;
    Descripcion_del_idioma: string;
}

interface Instructor {
    ID: string;
    Nombre: string;
    fecha_de_nacimiento: number;
    experiencia: number;
}

interface Aprendizaje {
    ID: string;
    ID_Idioma: string;
    ID_Instructor: string;
    Fecha: number;
    Hora: number;
    Número_de_horas_del_curso: number;
    Nivel: string;
}

function eliminarElementoPorID<T>(arreglo: T[], id: string, atributo: keyof T, callback: (elementoEliminado: T) => void): T[] {
    const elementoEliminado = arreglo.find((elemento) => elemento[atributo] === id);
    if (elementoEliminado) {
        console.log('Elemento eliminado:');
        console.log(elementoEliminado);
    } else {
        console.log('No se encontró ningún elemento con el ID proporcionado.');
    }
    return arreglo.filter((elemento) => elemento[atributo] !== id);
}
const idAEliminar = "1"; 
const nuevoArregloAprendizajes = eliminarElementoPorID(aprendizajes, idAEliminar, "ID", (elementoEliminado) => {
});
console.log('Arreglo de aprendizajes después de eliminar:');
console.log(nuevoArregloAprendizajes);

export { instructores, idiomas, aprendizajes,};


