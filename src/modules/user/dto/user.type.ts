import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()   //定義這是一個"Object"
export class UserType{
    @Field()
    id?: string; //"?"是指id是可有可無的
    @Field()
    name?: string;
    @Field()
    desc: string;
    @Field({description:'帳戶訊息'})
    account:string;
}