import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  constructor(private configService: ConfigService) {}

  async fetchJwtToken(): Promise<void> {
    console.log('Test');
  }
}
