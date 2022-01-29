export type ErrorKeys = 'internal'

export interface ErrorItem<ErrorName extends string> {
  name: ErrorName
  code: number
  clientMessage?: string
  serverMessage?: string
}

export const ERRORS: Record<ErrorKeys, ErrorItem<ErrorKeys>> = {
  internal: {
    name: 'internal',
    code: 0,
  },
}
