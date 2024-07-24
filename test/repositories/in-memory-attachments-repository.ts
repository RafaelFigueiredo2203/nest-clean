import { DomainEvents } from '@/core/events/domain-events'
import { AttachmentsRepository } from '@/domain/forum/application/repositories/attachments-repository'
import { Attachment } from '@/domain/forum/enterprise/entities/attachment'

export class InMemoryAttachmentRepository implements AttachmentsRepository {
  public items: Attachment[] = []

  async create(attachment: Attachment) {
    this.items.push(attachment)

    DomainEvents.dispatchEventsForAggregate(attachment.id)
  }
}
