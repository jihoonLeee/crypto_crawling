import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

// producer
@Injectable()
export class CrawlerService {
  constructor(@InjectQueue('crawler') private crawlerQueue: Queue) {}

  async addJob() {
    const job = await this.crawlerQueue.add('crawling_job', {
      crawler: 'name',
    });
    return job.id;
  }
}