import { Controller, Get, Post, Body } from '@nestjs/common';
import { CostsService } from './costs.service';
import { Cost } from './costs.entity';

@Controller('costs')
export class CostsController {
    constructor(private readonly costsService: CostsService) {}

    @Post()
    async createCost(@Body() data: Partial<Cost>) {
        return this.costsService.createCost(data);
    }

    @Get()
    async getCosts() {
        return this.costsService.getCosts();
    }
}
