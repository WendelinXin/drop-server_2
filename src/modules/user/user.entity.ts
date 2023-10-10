import { Entity, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity ('user') 
export class  User{
@Column({
    comment: '暱稱',
    default: '',
})
@IsNotEmpty()
name:　string;

@Column({
    comment: '描述信息',
    default: '',
})
desc: string;

@Column({
    comment: '手機號碼',
    nullable: true,
})
tel: string;

@Column({
    comment: '密碼',
    nullable: true,
})
password: string;

@Column({
    comment: '帳戶信息',
    nullable: true,
})
account: string;

}
