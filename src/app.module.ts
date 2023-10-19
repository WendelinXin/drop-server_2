import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', //本地的host
      port: 3306,
      username: 'root',
      password: 'wdbdd_zlk9o9o9O',  //自己改成當初設定的密碼
      database: 'water-drop_2',
      entities: [`${__dirname}/../modules/**/*.entity{.ts,.js}`],
      logging: true, //開啟日誌，開啟後所有SQL的操作都會被print出來
      synchronize: true, //同步：開啟。開啟後一但我們對這些檔案做修改，就會被更新到資料庫中
      autoLoadEntities: true, //如果本地端沒有該數據表，則會自動創建
    }),
    GraphQLModule.forRoot({  //引入自@nestjs/graphql
        driver: ApolloDriver,  //驅動器
        autoSchemaFile: true,
        }),  
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
