export class Create_Message_Dto {
  readonly author: number
  readonly message: string
  readonly timestamp: number
  readonly reply_to?: number
}
