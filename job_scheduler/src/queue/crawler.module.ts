import {Module} from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { CrawlerService } from './crawler.service';
import { CrawlerController } from './crawler.controller';

@Module({
    imports:[BullModule.registerQueue({
        name:'crawler',
        redis:{
            host:'localhost',
            port:6379,
        },
    })],
    providers: [CrawlerService],
    controllers: [CrawlerController],
})
export class CrawlerModule {}