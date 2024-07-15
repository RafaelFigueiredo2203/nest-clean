import { Encrypter } from '@/domain/forum/application/cryptography/encrypter'
import { HashCompare } from '@/domain/forum/application/cryptography/hash-compare'
import { HashGenerate } from '@/domain/forum/application/cryptography/hash-generator'
import { Module } from '@nestjs/common'
import { BCryptHasher } from './bcrypt-hasher'
import { JWTEcrypter } from './jwt-encrypter'

@Module({
  providers: [
    { provide: Encrypter, useClass: JWTEcrypter },
    { provide: HashCompare, useClass: BCryptHasher },
    { provide: HashGenerate, useClass: BCryptHasher },
  ],
  exports: [Encrypter, HashCompare, HashGenerate],
})
export class CryptographyModule {}
