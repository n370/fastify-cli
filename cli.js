#!/usr/bin/env node

'use strict'

const path = require('path')
const commist = require('commist')()
const help = require('help-me')({
  // the default
  dir: path.join(path.dirname(require.main.filename), 'help')
})
const start = require('./start')
const generate = require('./generate')
const eject = require('./eject')
const generatePlugin = require('./generate-plugin')
const generateReadme = require('./generate-readme')
const printRoutes = require('./print-routes')
const renderDocs = require('./docs')

commist.register('start', start.cli)
commist.register('generate', generate.cli)
commist.register('eject', eject.cli)
commist.register('generate-plugin', generatePlugin.cli)
commist.register('readme', generateReadme.cli)
commist.register('docs', renderDocs)
commist.register('help', help.toStdout)
commist.register('version', function () {
  console.log(require('./package.json').version)
})
commist.register('print-routes', printRoutes.cli)

const res = commist.parse(process.argv.splice(2))

if (res) {
  // no command was recognized
  help.toStdout(res)
}
