import { FakeHasher } from 'test/criptography/fake-hasher'
import { InMemoryStudentsRepositories } from 'test/repositories/in-memory-students-repository'
import { RegisterStudentUseCase } from './register-student'

let inMemoryStudentsRepositories: InMemoryStudentsRepositories
let fakeHasher: FakeHasher

let sut: RegisterStudentUseCase
describe('Register Student', () => {
  beforeEach(() => {
    inMemoryStudentsRepositories = new InMemoryStudentsRepositories()
    fakeHasher = new FakeHasher()
    sut = new RegisterStudentUseCase(inMemoryStudentsRepositories, fakeHasher)
  })

  it(' should be able to register a new student', async () => {
    const result = await sut.execute({
      name: 'jhon doe',
      email: 'jhondoe@example.com',
      password: '123456',
    })

    expect(result.isRight()).toBe(true)
    expect(result.value).toEqual({
      student: inMemoryStudentsRepositories.items[0],
    })
  })

  it(' should hash student password upon registration', async () => {
    const result = await sut.execute({
      name: 'jhon doe',
      email: 'jhondoe@example.com',
      password: '123456',
    })

    const hashedPassword = await fakeHasher.hash('123456')

    expect(result.isRight()).toBe(true)
    expect(inMemoryStudentsRepositories.items[0].password).toEqual(
      hashedPassword,
    )
  })
})
