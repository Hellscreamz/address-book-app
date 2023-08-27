import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  constructor(private configService: ConfigService) {}

  getSecretKey(): string {
    return this.configService.get<string>('JWT_SECRET_KEY');
  }

  generateToken(userId: string): string {
    const payload = { userId };
    const secretKey = this.getSecretKey();
    const expiresIn = this.configService.get<string>('JWT_EXPIRATION_TIME');
    const token = jwt.sign(payload, secretKey, { expiresIn });
    return token;
  }
}
