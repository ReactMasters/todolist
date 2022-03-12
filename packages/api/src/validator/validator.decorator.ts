import { registerDecorator, ValidationOptions } from 'class-validator'

export function IsPassword(options?: ValidationOptions) {
  return function (target: any, propertyName: string) {
    console.log({ target, propertyName })
    registerDecorator({
      name: 'IsPassword',
      target: target.constructor,
      propertyName,
      options,
      validator: {
        validate(password: string) {
          return /^[0-9A-z*.!@#$%^&(){}\[\]:;<>,.?/~_+\-=|]{8,20}$/.test(
            password
          )
        },
        defaultMessage() {
          return `${propertyName} should be 8~20 length alphabet, number, special charactor`
        },
      },
    })
  }
}
