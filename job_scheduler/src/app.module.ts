import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubController } from './sub.controller';

@Module({
  imports: [],
  controllers: [SubController,AppController],
  providers: [AppService],
})
export class AppModule {}
