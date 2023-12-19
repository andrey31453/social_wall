export interface i_create_user {
  name: string
  photo_id: number
}

export interface i_user extends i_create_user {
  _id: string
  updated_at: Date
  created_at: Date
}
