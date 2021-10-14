import Link from 'next/link'
import { withAuthenticator } from '@aws-amplify/ui-react'

function SignIn () {
  return (
    <div>
      <h1>Hello!</h1>
      <Link href='/'>Home</Link>
    </div>
  )
}

export default withAuthenticator(SignIn)
