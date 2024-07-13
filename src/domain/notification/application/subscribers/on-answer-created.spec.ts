import { makeAnswer } from 'test/factories/make-answer'
import { makeQuestion } from 'test/factories/make-question'
import { InMemoryAnswerAttachmentsRepositories } from 'test/repositories/in-memory-answer-attachments-repository'
import { InMemoryAnswersRepositories } from 'test/repositories/in-memory-answers-repository'
import { InMemoryNotificationRepositories } from 'test/repositories/in-memory-notifications-repository'
import { InMemoryQuestionAttachmentsRepositories } from 'test/repositories/in-memory-question-attachments-repository'
import { InMemoryQuestionsRepositories } from 'test/repositories/in-memory-questions-repository'
import { MockInstance } from 'vitest'
import {
  SendNotificationUseCase,
  SendNotificationUseCaseRequest,
  SendNotificationUseCaseResponse,
} from '../use-cases/send-notification'
import { OnAnswerCreated } from './on-answer-created'

let inMemoryQuestionAttachmentsRepositories: InMemoryQuestionAttachmentsRepositories
let inMemoryQuestionRepository: InMemoryQuestionsRepositories
let inMemoryAnswerAttachmentsRepositories: InMemoryAnswerAttachmentsRepositories
let inMemoryAnswersRepositories: InMemoryAnswersRepositories
let sendNotificationUseCase: SendNotificationUseCase
let inMemoryNotificationRespository: InMemoryNotificationRepositories

let sendNotificationExecuteSpy: MockInstance<
  [SendNotificationUseCaseRequest],
  Promise<SendNotificationUseCaseResponse>
>

describe('On Answer Created', () => {
  beforeEach(() => {
    inMemoryQuestionAttachmentsRepositories =
      new InMemoryQuestionAttachmentsRepositories()
    inMemoryQuestionRepository = new InMemoryQuestionsRepositories(
      inMemoryQuestionAttachmentsRepositories,
    )
    inMemoryAnswerAttachmentsRepositories =
      new InMemoryAnswerAttachmentsRepositories()
    inMemoryAnswersRepositories = new InMemoryAnswersRepositories(
      inMemoryAnswerAttachmentsRepositories,
    )
    inMemoryNotificationRespository = new InMemoryNotificationRepositories()
    sendNotificationUseCase = new SendNotificationUseCase(
      inMemoryNotificationRespository,
    )
    sendNotificationExecuteSpy = vi.spyOn(sendNotificationUseCase, 'execute')

    // eslint-disable-next-line no-new
    new OnAnswerCreated(inMemoryQuestionRepository, sendNotificationUseCase)
  })
  it('should send a notification when an answer is created', () => {
    const question = makeQuestion()
    const answer = makeAnswer({ questionId: question.id })

    inMemoryQuestionRepository.create(question)

    inMemoryAnswersRepositories.create(answer)

    inMemoryAnswersRepositories.create(answer)
  })
})
