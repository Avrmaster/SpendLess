const { CodeGen } = require('swagger-js-codegen')
const request = require('superagent')
const path = require('path')
const fs = require('fs')

const coreApiName = 'ApiClient'

const swaggerDefinitionUrl = process.env.SWAGGER
const serverDomain = process.env.HOST

request
  .get(swaggerDefinitionUrl)
  .accept('json')
  .then(res => {
    const swagger = res.body
    return new Promise((resolve, reject) => {
      const reactSourceCode = CodeGen.getCustomCode({
        moduleName: coreApiName,
        className: coreApiName,
        lint: false,
        template: {
          class: fs.readFileSync(
            path.join(__dirname, 'templates', 'react-class.mustache'),
            'utf-8',
          ),
          method: fs.readFileSync(
            path.join(__dirname, 'templates', 'method.mustache'),
            'utf-8',
          ),
        },
        swagger,
        mustache: {
          isNode: true,
          progressToUpload: true,
          domain: serverDomain,
        },
      })

      return fs.writeFile(
        path.join(__dirname, '..', 'src', 'api', `${coreApiName}.js`),
        reactSourceCode,
        err => {
          // throws an error, you could also catch it here
          if (err) {
            return reject(err)
          }
          return resolve()
        },
      )
    })
  })
  .catch(err => {
    console.error(err)
  })
