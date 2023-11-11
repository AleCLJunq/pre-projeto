import { Category } from '@prisma/client'
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CategoryEntity implements Category {
    @IsNumber({}, {message: `Category name must be a number`})
    @IsOptional()
    taskId: number
    
    @IsNotEmpty({message: `Category must have a name`})
    @IsNumber({}, {message: `Category name must be a number`})
    id: number

    @IsNotEmpty({message: `Category must have a name`})
    @IsString({message: `Category name must be a string`})
    name: string
}
