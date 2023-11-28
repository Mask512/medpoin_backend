import { Global, Module } from '@nestjs/common';
import AnamnesisHelperService from './anamnesisHelper.service';

@Global() // it helps for not doing import in every module just import directly in their service or controller file to the AuthHelperService
@Module({
  providers: [AnamnesisHelperService],
  exports: [AnamnesisHelperService],
})
export class AnamnesisHelperModule {}
