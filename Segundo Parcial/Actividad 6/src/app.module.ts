import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdiomaModule } from './idioma/idioma.module';
import { InstructorModule } from './instructor/instructor.module';
import { AprendizajeModule } from './aprendizaje/aprendizaje.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [IdiomaModule,InstructorModule, AprendizajeModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'Práctica 3',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
