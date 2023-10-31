import { Controller, Get, Param, Res ,Req, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
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
