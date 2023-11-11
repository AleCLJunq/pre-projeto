import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { TaskService } from './task/task.service';
import { CategoryModule } from './category/category.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [CategoryModule, TaskModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, TaskService],
})
export class AppModule {}
