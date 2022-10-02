export const required = 'Это обязательное поле'

export const title = {
  required,
  minLength: {
    value: 4,
    message: 'Не менее 4 символов'
  },
  maxLength: {
    value: 10,
    message: 'Не более чем 10 символов'
  },
}

export const desc = {
  required,
  minLength: {
    value: 4,
    message: 'Не менее 4 символов'
  },
  maxLength: {
    value: 100,
    message: 'Не более чем 100 символов'
  }
}
