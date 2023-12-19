export class Create_Message_Dto {
  readonly author: string
  readonly message: string
  readonly level: number
  readonly reply_to?: string
}

export class Update_Message_Dto {
  readonly author: string
  readonly message: string
  readonly level: number
  readonly reply_to?: string
}
