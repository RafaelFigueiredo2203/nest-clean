import { ValueObject } from '@/core/entities/value-object'

export interface CommentWithAuthorProps {
  commentId: string
  content: string
  author: string
  authorId: string
  createdAt: Date
  updatedDate: Date | null
}

export class CommentWithAuthor extends ValueObject<CommentWithAuthorProps> {
  get commentId() {
    return this.props.commentId
  }

  get content() {
    return this.props.content
  }

  get author() {
    return this.props.author
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedDate() {
    return this.props.updatedDate
  }

  static create(props: CommentWithAuthorProps) {
    return new CommentWithAuthor(props)
  }
}
