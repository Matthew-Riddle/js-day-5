import fs from 'fs'
import { resolve } from 'url'

export const readFileSync = fileName => JSON.parse(fs.readFileSync(fileName))

export const writeFileSync = (fileName, data) =>
  fs.writeFileSync(fileName, JSON.stringify(data)) ||
  `File ${fileName} saved successfully`
