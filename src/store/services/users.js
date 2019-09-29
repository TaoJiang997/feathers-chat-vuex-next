// Bring in the imports from the feathers-client.js file.
import feathersClient, { makeServicePlugin, BaseModel } from '@/feathers-client'

// Extend the base class
class User extends BaseModel {
  constructor(data, options) {
    super(data, options)
  }
  static modelName = 'User'
  static instanceDefaults() {
    return {
      avatar: '',
      email: '',
      githubId: '',
      password: ''
    }
  }
}
const servicePath = 'users'
const servicePlugin = makeServicePlugin({
  Model: User,
  service: feathersClient.service(servicePath),
  servicePath
})

// Optionally add service-level hooks, here:
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
})

export default servicePlugin
