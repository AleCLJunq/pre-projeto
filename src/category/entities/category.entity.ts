import {Category} from '@prisma/client'
import { IsNumber, IsString } from 'class-validator'

export class CategoryEntity implements Category {
    @IsNumber()
    taskId: number
   
    @IsNumber()
    id: number

    @IsString()
    name: string
}
