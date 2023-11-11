import { PickType, PartialType } from '@nestjs/mapped-types';
import { CategoryEntity } from '../entities/category.entity';

export class UpdateCategoryDto extends PartialType(
    PickType(CategoryEntity, [
    "name"
]) 
){}
