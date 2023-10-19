import { Module, ConsoleLogger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './models/user.entity';
import { UserResolver } from './user.resolver';


@Module({
	imports: [TypeOrmModule.forFeature([User])],  
	//把user.entity引進來
	providers: [ConsoleLogger, UserService, UserResolver],
	exports: [UserService],
})
export class UserModule {}
