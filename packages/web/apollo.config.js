const path = require('path')

module.exports = {
  client: {
    includes: ['./pages/**/*.tsx', './components/**/*.tsx'],
    service: {
      name: '@todolist/api',
      localSchemaFile: path.resolve(__dirname, '../api/src/schema.gql'),
    },
  },
}
