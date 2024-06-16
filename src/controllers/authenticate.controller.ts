import { Controller, Post } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

// const createAccountBodySchemma = z.object({
//  name: z.string(),
//  email: z.string().email(),
//  password: z.string(),
// })

// type CreateAccountBodySchemma = z.infer<typeof createAccountBodySchemma>

@Controller('/sessions')
export class AuthenticateController {
  constructor(private jwt: JwtService) {}

  @Post()
  // @UsePipes(new ZodValidationPipe(createAccountBodySchemma))
  async handle() {
    const token = this.jwt.sign({ sub: 'user-id' })

    return token
  }
}
