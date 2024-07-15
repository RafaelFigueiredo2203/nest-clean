import { StudentAlradyExistsError } from '@/domain/forum/application/use-cases/errors/student-already-exists-error'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student'
import { Public } from '@/infra/auth/public'
import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'

const createAccountBodySchemma = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type CreateAccountBodySchemma = z.infer<typeof createAccountBodySchemma>

@Controller('/accounts')
@Public()
export class CreateAccountController {
  constructor(private registerStudent: RegisterStudentUseCase) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createAccountBodySchemma))
  async handle(@Body() body: CreateAccountBodySchemma) {
    const { name, email, password } = body

    const result = await this.registerStudent.execute({
      name,
      email,
      password,
    })

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case StudentAlradyExistsError:
          throw new ConflictException(error.message)
        default:
          throw new BadRequestException(error.message)
      }
    }
  }
}
