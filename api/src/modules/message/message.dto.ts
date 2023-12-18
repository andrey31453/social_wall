export class Create_Message_Dto {
  readonly author: number
  readonly message: string
  readonly timestamp: number
  readonly created_at: Date
  readonly updated_at: Date
  readonly reply_to?: number
}
