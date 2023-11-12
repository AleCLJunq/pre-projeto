import { PartialType, PickType } from "@nestjs/swagger";
import { TaskEntity } from '../entities/task.entity';

export class UpdateTaskDto extends PartialType(
    PickType(TaskEntity, [
    "name", 
    "isActive",
    "categoryId",
]) 
){}
export class UpdateTaskDtoDone extends PartialType(
    PickType(TaskEntity, [
    "name", 
    "isActive",
    "categoryId",
]) 
){}
