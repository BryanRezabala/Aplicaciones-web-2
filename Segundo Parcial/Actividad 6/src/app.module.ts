import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LanguageModule } from './language/language.module';
import { IdiomaModule } from './idioma/idioma.module';
import { InstructorModule } from './instructor/instructor.module';
import { AprendizajeModule } from './aprendizaje/aprendizaje.module';

@Module({
  imports: [LanguageModule, IdiomaModule, InstructorModule, AprendizajeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
