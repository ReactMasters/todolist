import { makeVar } from '@apollo/client'

const signForm = makeVar({
  email: '',
  password: '',
})

const selectedItems = makeVar<string[]>([])

const localStates = {
  signForm,
  selectedItems,
}

export default localStates
