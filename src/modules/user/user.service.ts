import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService{
	constructor(
		@InjectRepository(User) private UserRepository: Repository<User>, 
	){}
	
	//接下來要做增刪改查
	
	//新增：在數據庫中增加一行新的資料的方法
	async create (entity: DeepPartial <User>): Promise<boolean> {
		//create(這裡放接收的東西: 物件類型): 返回值<返回值類型>
		//Promise 是返回值，<>中要放返回值的類型
		//選擇boolean是因為只想知道創建是成功或失敗
		const res = await this.UserRepository.insert(entity);  //把entity傳進來
		if (res && res.raw.affectedRows > 0){
			return true;
		}
		return false;
	}

	//刪除：刪除一個用戶
	async del(id: string): Promise<boolean> {  //delete是個關鍵詞，不能使用
		const res = await this.UserRepository.delete(id);
		if (res.raw.affectedRows > 0){
			return true;
		}
		return false;
	}

	//修改：
	async update(id: string, entity: DeepPartial <User>): Promise<boolean> {  
		const res = await this.UserRepository.update(id, entity);
		if (res.raw.affectedRows > 0){
			return true;
		}
		return false;
	}

	//查詢：
	//這邊使用findOne做查詢，他是ts的，可以查這隻API的功能
	async find(id: string): Promise<User> {  //我們要查的是User這個實體，所以這裡要回傳User
		const res = await this.UserRepository.findOne({
			where: {
				id,  //我們要查的是id，id是上面傳進來的
			},

		});  
		return res;
	}
}
