import { schema } from 'normalizr'

import LoginSchema from './schemas/Login'

const QuerySchema = new schema.Entity('Query', {
  Login: LoginSchema,
  Logins: [LoginSchema]
})

export default QuerySchema