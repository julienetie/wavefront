import { pasteInto } from '../../src/index.js'
import staticListOfItems from './static-list-of-items/controller.js'
import asyncListOfItems from './async-list-of-items/controller.js'

const data = [
  ['https://google.com', 'Google'],
  ['https://amazon.com', 'Amazon'],
  ['https://twitter.com', 'Twitter'],
  ['https://netflix.com', 'Netflix'],
  ['https://facebook.com', 'Facebook'],
  ['https://youtube.com', 'YouTube'],
  ['https://microsoft.com', 'Microsoft'],
  ['https://alibaba.com', 'Alibaba'],
  ['https://baidu.com', 'Baidu'],
  ['https://wikipedia.com', 'Wikipedia'],
  ['https://Yandex.com', 'Yandex']

]

const appView = pasteInto('#root', ({ staticListOfItems, asyncListOfItems }) => `
    <div class="app">  
        ${staticListOfItems}
        ${asyncListOfItems}
    </div>
`)
const props = {
  staticListOfItems: staticListOfItems(data),
  asyncListOfItems: asyncListOfItems(data)
}
appView(props)
