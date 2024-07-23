import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CarreraUniversitariaModule } from './aprendizaje/CarreraUniversitaria.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ CarreraUniversitariaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
