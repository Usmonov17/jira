export enum EnumStatus {
  'todo' = 'todo',
  'in_progress' = 'in_progress',
  'produced' = 'produced',
  'done' = 'done',
}

export interface IBaseField {
  $crearedAt: string
  $id: string
}

export interface IComment extends IBaseField {
  text: string
}

export interface IDeal extends IBaseField {
  name: string
  status: EnumStatus
  description: string
  comments: IComment[]
}