import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CategoryModule, TaskModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
