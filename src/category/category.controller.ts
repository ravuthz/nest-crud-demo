import { Category } from './category.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  index(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  show(@Param('id') id): Promise<Category> {
    const data = null;
    if (!data) {
      throw new NotFoundException('Category not found');
    }
    return this.categoryService.findById(Number(id));
  }

  @Post()
  async create(@Body() body: Category): Promise<any> {
    return this.categoryService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body: Category): Promise<any> {
    body.id = Number(id);
    return this.categoryService.update(body);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.categoryService.delete(id);
  }
}
