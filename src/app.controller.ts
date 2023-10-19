import { Controller, Get } from '@nestjs/common';
import { User } from './modules/user/models/user.entity';
import { UserService } from './modules/user/user.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
	private readonly userService: UserService,
	private readonly appService: AppService,  //這邊要記得，不然會找不到appService
) {}

  @Get('/create')
	async create(): Promise<boolean> {
		return await this.userService.create({
			name: '水滴超級管理員',
			desc: '管理員',
			tel: '8800888',
			password: '123456',
			account: 'admin',
		});
	}

	@Get('/del')
	async del(): Promise<boolean> {
		return await this.userService.del('21f1e905-692a-4a4f-b304-e7925dd3207c')
	}

	@Get('/update')
	async update(): Promise<boolean> {
		return await this.userService.update(
			'21f1e905-692a-4a4f-b304-e7925dd3207c',
			{
				name: '水滴超級管理員11111',
			},
		);
	}

	@Get('/find')
	async find(): Promise<User> {
		return await this.userService.find('21f1e905-692a-4a4f-b304-e7925dd3207c');
	}

	@Get('/getHello')
  	async getHello(): Promise<string> {
    	return this.appService.getHello();
  	}

}
