import '../styles/globals.css'

import Amplify, { AuthModeStrategyType } from 'aws-amplify'
import awsconfig from '../src/aws-exports'

Amplify.configure({
  ...awsconfig,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
})

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
