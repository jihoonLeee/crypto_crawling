import { Controller, Get, Param, Res ,Req, Body } from '@nestjs/common';
import { CrawlerService } from './crawler.service';

@Controller()
export class CrawlerController {
  constructor(private readonly crawlerService: CrawlerService) {}

  @Get()
   addJob(): void {
    this.crawlerService.addJob();
  }
  
	// @Get(':id')
	// ParamTest(@Param('id') id: number) {
	// 	return id;
	// }
    
	// @Get('test1')
	// test1(@Req() request: Request, @Res() response: Response) {
	// 	console.log(request);
	// 	console.log(response);
	// 	return 'test';
	// }
}
