import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  prismaService: any;
  constructor(private prisma: PrismaService) {}
  
  async create(createCategoryDto: CreateCategoryDto) {
    const categoryExists = await this.prisma.category.findFirst({
      where: { name: CreateCategoryDto.name },
    });
    if (categoryExists) {
      throw new Error('Category already exists');
    }

    const category = await this.prisma.category.create({
      data: createCategoryDto
    });
    return category;
  }

  async findAll() {
    return this.prisma.category.findMany();
  }
  async findOne(id: number) {
    const category = this.prisma.category.findUnique({
      where: { id },
    });
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  }
  
  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const categoryExists = await this.prisma.category.findUnique({
      where: { 
        id
      },
    });
    if (!categoryExists) {
      throw new Error('Category not found');
    }

    await this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });

  }
  async remove(id: number) {
    const categoryExists = await this.prisma.category.findUnique({
      where: {
        id
        },
        });
    if (!categoryExists) {
      throw new Error('Category not found');
    }
    await this.prisma.category.delete({
      where: { 
        id
      },
    });
  }
}

