import { Task } from '@prisma/client'
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class TaskEntity implements Task {
    @IsNumber({}, {message: `Task name must be a number`})
    @IsOptional()
    categoryId : number
    
    @IsNotEmpty({message: `Task must have a name`})
    @IsBoolean({message: `Task must have a name`})
    isActive: boolean
    
    @IsNotEmpty({message: `Task must have a name`})
    @IsNumber({}, {message: `Task name must be a number`})
    taskId: number
    
    @IsNotEmpty({message: `Task must have a name`})
    @IsNumber({}, {message: `Task name must be a number`})
    id: number;

    @IsNotEmpty({message: `Task must have a name`})
    @IsString({message: `Task name must be a string`})
    name: string;
}
