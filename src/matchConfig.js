
import HelloWorld from './containers/HelloWorld'
import PreloadHelloWorld from './containers/PreloadHelloWorld'
import JsonAPI from './containers/JsonAPI'
import Heavy from './containers/Heavy'

const matchConfig = [
  {
    path: '/api',
    component: JsonAPI,
    initState: JsonAPI.initState
  },
  {
    path: '/preload',
    component: PreloadHelloWorld,
    initState: PreloadHelloWorld.initState
  },
  {
    path: '/server/heavy',
    component: Heavy,
    initState: Heavy.initState
  },
  {
    path: '/',
    component: HelloWorld,
    initState: HelloWorld.initState,
    exact: false
  }
]

export default matchConfig
