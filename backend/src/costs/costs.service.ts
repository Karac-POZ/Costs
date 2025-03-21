import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cost } from './costs.entity';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

@Injectable()
export class CostsService {
    constructor(
        @InjectRepository(Cost)
        private costsRepository: Repository<Cost>, 
    ) {}

    async createCost(data: Partial<Cost>): Promise<Cost>{
        const cost = this.costsRepository.create(data);
        return this.costsRepository.save(cost);
    }

    async getCosts(): Promise<Cost[]> {
        return this.costsRepository.find();
    }
}
