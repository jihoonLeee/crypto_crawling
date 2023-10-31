import { Controller, Get, Param, Res ,Req, Body } from '@nestjs/common';

@Controller({host :'api.localhost'})
export class SubController {
  @Get()
  getHello(): string {
    return "헬로";
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
