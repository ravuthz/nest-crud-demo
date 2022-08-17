import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>,
  ) {}

  async findById(id): Promise<Category> {
    return this.repository.findOne(id);
  }

  async findAll(): Promise<Category[]> {
    return await this.repository.find();
  }

  async create(data: Category): Promise<Category> {
    return await this.repository.save(data);
  }

  async update(data: Category): Promise<UpdateResult> {
    return await this.repository.update(data.id, data);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
