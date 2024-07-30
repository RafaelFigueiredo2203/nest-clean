import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'

import { envSchema } from './env/env'
import { EnvModule } from './env/env.module'
import { EnvService } from './env/env.service'
import { EventModule } from './events/event.module'
import { HttpModule } from './http/http.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
    EnvModule,
    EventModule,
  ],
  providers: [EnvService],
})
export class AppModule {}
