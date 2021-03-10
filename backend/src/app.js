require('dotenv').config();

import express from 'express';
import './database';

import paradaRoutes from './routes/parada';
import linhaRoutes from './routes/linha';
import veiculoRoutes from './routes/veiculo';
import posicaoVeiculoRoutes from './routes/posicaoVeiculo';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/parada', paradaRoutes);
    this.app.use('/linha', linhaRoutes);
    this.app.use('/veiculo', veiculoRoutes);
    this.app.use('/posicaoveiculo', posicaoVeiculoRoutes);
  }
}

export default new App().app;
