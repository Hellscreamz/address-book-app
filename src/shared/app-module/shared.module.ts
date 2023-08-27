import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { CarsModule } from 'src/cars/cars.module';
import { RealEstatesModule } from 'src/real-estates/real-estates.module';
import { UserModule } from 'src/user/user.module';
import { AddressBookModule } from 'src/address-book/address-book.module';
import { DatabaseModule } from 'src/database/database.module';
import { UserValidationModule } from 'src/validation/user/user-validation.module';
import { AuthInterceptor } from 'src/interceptor/auth-intercetor';
import { JWTModule } from 'src/token/jwt.module';
import { ConfigModule } from '../../config/config.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    DatabaseModule,
    CarsModule,
    RealEstatesModule,
    UserModule,
    AddressBookModule,
    UserValidationModule,
    JWTModule,
    ConfigModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthInterceptor,
    },
  ],
})
export class SharedModule {}
