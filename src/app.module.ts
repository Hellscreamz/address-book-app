import { Module } from '@nestjs/common';

import { SharedModule } from './shared/app-module/shared.module';

@Module({
  imports: [SharedModule],
})
export class AppModule {}
