import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Sequelize, DataTypes, Op } from 'sequelize';
import * as dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Determinar el entorno y cargar la configuración correspondiente
const environment = process.env.NODE_ENV || 'development';
const dbStorage = environment === 'production' ? './prod_database.sqlite' : './dev_database.sqlite';

// Configurar la conexión a la base de datos
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbStorage
});

// Definir el modelo de Evento
const Evento = sequelize.define('Evento', {
  codigo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  etiqueta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  adversarios: {
    type: DataTypes.STRING,
    allowNull: false
  },
  deporteClasificacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precioEconomico: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fechaUltimoTorneo: {
    type: DataTypes.DATE,
    allowNull: false
  },
  empresa: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

// Sincronizar la base de datos
sequelize.sync({ alter: true }).then(() => {
  console.log('Base de datos sincronizada');
});

// Endpoint para agregar 100 eventos de prueba
app.post('/eventos/agregar100', async (req, res) => {
  if (environment !== 'development') {
    return res.status(403).json({ message: "Operación no permitida en producción" });
  }

  const empresas = ["Manta Mall S.A", "Chone LTDA", "Deportes S.A.", "EventoPlus", "Sports Inc"];
  const deportes = ["Futbol", "Tenis", "Basquet", "Padel"];
  const etiquetas = ["Final copa manta 2024", "Encuentro Basquet benefico IS", "Semifinal regional", "Torneo local 2024", "Liga amateur"];
  const adversarios = ["Manta FC", "Lakers de Chone", "Team A vs Team B", "Equipo X vs Equipo Y", "Duelo de titanes"];

  const eventos = [];
  for (let i = 0; i < 100; i++) {
    eventos.push({
      codigo: `E-${i.toString().padStart(3, '0')}`,
      etiqueta: etiquetas[i % etiquetas.length],
      adversarios: adversarios[i % adversarios.length],
      deporteClasificacion: deportes[i % deportes.length],
      precioEconomico: Math.floor(Math.random() * 1000),
      fechaUltimoTorneo: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
      empresa: empresas[i % empresas.length],
    });
  }

  try {
    await Evento.bulkCreate(eventos);
    res.status(200).json({ message: "100 eventos de prueba agregados con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al agregar eventos de prueba", error });
  }
});

// Endpoint para obtener todos los eventos
app.get('/eventos', async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener eventos", error });
  }
});

// Endpoint para actualizar la empresa en todos los eventos
app.patch('/eventos/actualizarEmpresa', async (req, res) => {
  const { empresaOrigen, empresaDestino }: { empresaOrigen: string; empresaDestino: string } = req.body;

  if (!empresaOrigen || !empresaDestino) {
    return res.status(400).json({ message: "Faltan parámetros: empresaOrigen o empresaDestino" });
  }

  // Contador para eventos actualizados
  let eventosActualizados = 0;

  // Actualizar todos los eventos que coinciden con la empresa de origen
  try {
    const [updatedCount] = await Evento.update({ empresa: empresaDestino }, {
      where: { empresa: empresaOrigen }
    });
    eventosActualizados = updatedCount;

    // Obtener todos los eventos después de la actualización
    const eventosActualizadosLista = await Evento.findAll({ where: { empresa: empresaDestino } });

    // Verificar si se actualizaron eventos y retornar la respuesta
    res.status(200).json({
      message: `${eventosActualizados} eventos actualizados con la nueva empresa ${empresaDestino}`,
      eventosActualizados: eventosActualizadosLista
    });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar eventos", error });
  }
});

// Endpoint para eliminar eventos por IDs
app.delete('/eventos/eliminarIDs', async (req, res) => {
  const { ids }: { ids: number[] } = req.body;

  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ message: "El parámetro 'ids' debe ser un arreglo no vacío de números" });
  }

  try {
    const eventosIniciales = await Evento.count();
    await Evento.destroy({ where: { id: ids } });
    const eventosEliminados = eventosIniciales - await Evento.count();

    res.status(200).json({
      message: `${eventosEliminados} eventos eliminados con éxito`
    });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar eventos", error });
  }
});

// Endpoint para eliminar eventos por año
app.delete('/eventos/eliminarPorAnios', async (req, res) => {
  const { anios }: { anios: number[] } = req.body;

  if (!Array.isArray(anios) || anios.length === 0) {
    return res.status(400).json({ message: "El parámetro 'anios' debe ser un arreglo no vacío de números" });
  }

  try {
    const eventosIniciales = await Evento.count();
    await Evento.destroy({
      where: {
        fechaUltimoTorneo: {
          [Op.in]: anios.map(a => new Date(a, 0, 1))
        }
      }
    });
    const eventosEliminados = eventosIniciales - await Evento.count();

    res.status(200).json({
      message: `${eventosEliminados} eventos eliminados con éxito`
    });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar eventos", error });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
