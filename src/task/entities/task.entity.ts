import {Task} from '@prisma/client'
import { IsBoolean, IsNumber, IsString } from 'class-validator'

export class TaskEntity implements Task {
    @IsBoolean()
    isActive: boolean
    
    @IsNumber()
    taskId: number
   
    @IsNumber()
    id: number

    @IsString()
    name: string
}
