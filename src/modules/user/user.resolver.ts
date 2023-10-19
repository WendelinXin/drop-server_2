import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from './user.service';
import { UserType } from "./dto/user.type";
import { UserInput } from './dto/user-input.type';

@Resolver()
export class UserResolver{
    constructor(private readonly userService: UserService) {}

    @Mutation(() => Boolean)  //新增(create)都是用Mutation
        async create(@Args('params') params: UserInput): Promise<boolean>{
        //@Args：裝飾器。
        //'params': 傳進去的參數的名稱。
        //params: any。說明params的類型是any。
        //Promise<boolean>：返回值的類型是boolean。
        return await this.userService.create(params);
    }

    @Query(() => UserType, {description:'使用ID查詢用戶'})  //只有更新(@Mutation)但沒有查詢，apollo就會報錯，所以要加一個查詢
        async find(@Args('id') id: string): Promise<UserType>{
        return await this.userService.find(id);
    }
}