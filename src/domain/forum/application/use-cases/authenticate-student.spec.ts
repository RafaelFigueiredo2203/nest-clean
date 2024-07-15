import { FakeEncrypter } from 'test/criptography/fake-ecnrypter'
import { FakeHasher } from 'test/criptography/fake-hasher'
import { makeStudent } from 'test/factories/make-student'
import { InMemoryStudentsRepositories } from 'test/repositories/in-memory-students-repository'
import { AuthenticateStudentUseCase } from './authenticate-student'

let inMemoryStudentsRepositories: InMemoryStudentsRepositories
let fakeHasher: FakeHasher
let fakeEncrypter: FakeEncrypter

let sut: AuthenticateStudentUseCase
describe('Authenticate Student', () => {
  beforeEach(() => {
    inMemoryStudentsRepositories = new InMemoryStudentsRepositories()
    fakeHasher = new FakeHasher()
    fakeEncrypter = new FakeEncrypter()
    sut = new AuthenticateStudentUseCase(
      inMemoryStudentsRepositories,
      fakeHasher,
      fakeEncrypter,
    )
  })

  it(' should be able to authenticate a new student', async () => {
    const student = makeStudent({
      email: 'jhondoe@example.com',
      password: await fakeHasher.hash('123456'),
    })

    inMemoryStudentsRepositories.items.push(student)

    const result = await sut.execute({
      email: 'jhondoe@example.com',
      password: '123456',
    })

    expect(result.isRight()).toBe(true)
    expect(result.value).toEqual({
      accessToken: expect.any(String),
    })
  })
})
