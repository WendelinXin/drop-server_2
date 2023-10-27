import { Field, InputType } from '@nestjs/graphql';

@InputType()  //export那一行中的UserInput就是我們定義好的"輸入參數"的類型
export class UserInput {
    @Field({ description: '暱稱' })  //為了讓GraphQL知道我們有那些字串，所以使用裝飾器
    name?: string;
    @Field({ description: '簡介' })
    desc: string;

}