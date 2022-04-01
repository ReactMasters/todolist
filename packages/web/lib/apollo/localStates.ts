import { makeVar } from '@apollo/client'

const signForm = makeVar({
  email: '',
  password: '',
})

const selectedItems = makeVar<string[]>(['todo1', 'todo2'])

const localStates = {
  signForm,
  selectedItems,
}

export default localStates
