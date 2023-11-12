import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  prismaService: any;
  constructor(private prisma: PrismaService) {}
  
  async create(createTaskDto: CreateTaskDto) {
    const taskExists = await this.prisma.task.findFirst({
      where: { name: CreateTaskDto.name },
      });
    if (taskExists) {
      throw new Error('Task already exists');
    }
    const task = await this.prisma.task.create({
      data: createTaskDto
    });
    return task;
  }

  async findAll() {
    return this.prisma.task.findMany();
    }

  async findOne(id: number) {
    const task = this.prisma.task.findUnique({
      where: { id },
    });
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const taskExists = await this.prisma.task.findUnique({
      where: { 
        id
      },
    });
    if (!taskExists) {
      throw new Error('Task not found');
    }
    await this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async remove(id: number) {
    const taskExists = await this.prisma.task.findUnique({
      where: {
        id
        },
        });
    if (!taskExists) {
      throw new Error('Task not found');
      }
    await this.prisma.task.delete({
      where: { 
        id
      },
      });
  }
}
