import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student'
import { Body, Controller, Post, UsePipes } from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'

const authenticateBodySchemma = z.object({
  email: z.string().email(),
  password: z.string(),
})

type AuthenticateBodySchemma = z.infer<typeof authenticateBodySchemma>

@Controller('/sessions')
export class AuthenticateController {
  constructor(private authenticateStudent: AuthenticateStudentUseCase) {}

  @Post()
  @UsePipes(new ZodValidationPipe(authenticateBodySchemma))
  async handle(@Body() body: AuthenticateBodySchemma) {
    const { email, password } = body

    const result = await this.authenticateStudent.execute({
      email,
      password,
    })

    if (result.isLeft()) {
      throw new Error()
    }

    const { accessToken } = result.value

    return {
      access_token: accessToken,
    }
  }
}
