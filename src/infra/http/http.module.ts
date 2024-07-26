import { Module } from '@nestjs/common'

import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question'
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student'
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/application/use-cases/choose-question-best-answer'
import { CommentOnAnswerUseCase } from '@/domain/forum/application/use-cases/comment-on-answer'
import { CommentOnQuestionUseCase } from '@/domain/forum/application/use-cases/comment-on-question'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/delete-answer'
import { DeleteAnswerCommentUseCase } from '@/domain/forum/application/use-cases/delete-answer-comment'
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/delete-question'
import { DeleteQuestionCommentUseCase } from '@/domain/forum/application/use-cases/delete-question-comment'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'
import { FetchAnswerCommentsUseCase } from '@/domain/forum/application/use-cases/fetch-answer-comments'
import { FetchQuestionAnswersUseCase } from '@/domain/forum/application/use-cases/fetch-question-answers'
import { FetchQuestionCommentsUseCase } from '@/domain/forum/application/use-cases/fetch-question-comments'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student'
import { UploadAndCreateAttachmentUseCase } from '@/domain/forum/application/use-cases/upload-and-create-attachment'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { DatabaseModule } from '../database/database.module'
import { StorageModule } from '../storage/storage.module'
import { AnswerQuestionController } from './controllers/answer-question.controller'
import { AuthenticateController } from './controllers/authenticate.controller'
import { ChooseQuestionBestAnswerController } from './controllers/choose-question-best-answer.controller'
import { CommentOnQuestionController } from './controllers/coment-on-question.controller'
import { CommentOnAnswerController } from './controllers/comment-on-answer.controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { DeleteAnswerCommentController } from './controllers/delete-answer-comment.controller'
import { DeleteAnswerController } from './controllers/delete-answer.controller'
import { DeleteQuestionCommentController } from './controllers/delete-question-comment.controller'
import { DeleteQuestionController } from './controllers/delete-question.controller'
import { EditAnswerController } from './controllers/edit-answer.controller'
import { EditQuestionController } from './controllers/edit-question.controller'
import { FetchQuestionsAnswersController } from './controllers/fetch-question-answers.controller'
import { FetchQuestionsCommentsController } from './controllers/fetch-question-comment.controller'
import { FetchAnswerCommentsController } from './controllers/fetch-question-comments.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { GetQuestionBySlugController } from './controllers/get-question-by-slug.controller'
import { UploadAttachmentController } from './controllers/upload-attachment.controller'

@Module({
  imports: [DatabaseModule, CryptographyModule, StorageModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController,
    EditQuestionController,
    DeleteQuestionController,
    AnswerQuestionController,
    EditAnswerController,
    DeleteAnswerController,
    FetchQuestionsAnswersController,
    ChooseQuestionBestAnswerController,
    CommentOnQuestionController,
    DeleteQuestionCommentController,
    CommentOnAnswerController,
    DeleteAnswerCommentController,
    FetchQuestionsCommentsController,
    FetchAnswerCommentsController,
    UploadAttachmentController,
  ],
  providers: [
    CreateQuestionUseCase,
    GetQuestionBySlugUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentUseCase,
    AuthenticateStudentUseCase,
    EditQuestionUseCase,
    DeleteQuestionUseCase,
    AnswerQuestionUseCase,
    EditAnswerUseCase,
    DeleteAnswerUseCase,
    FetchQuestionAnswersUseCase,
    ChooseQuestionBestAnswerUseCase,
    CommentOnQuestionUseCase,
    DeleteQuestionCommentUseCase,
    CommentOnAnswerUseCase,
    DeleteAnswerCommentUseCase,
    FetchQuestionCommentsUseCase,
    FetchAnswerCommentsUseCase,
    UploadAndCreateAttachmentUseCase,
  ],
})
export class HttpModule {}
