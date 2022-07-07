import {signIn, useSession, getProviders} from 'next-auth/react'
import {useRouter} from 'next/router'
// import { useEffect } from 'react'

export default function LoginPage() {

  const{data: session, status} = useSession()
  const router = useRouter()

  // useEffect(() => {
  //   (async() => {
  //     const providers = await getProviders()
  //     console.log(providers)
  //   })();

  
  // }, [])
  

  if (status !== 'loading' && status === 'authenticated') {
    router.push('/')
  }

  return (
    <div>
        <button onClick={()=> signIn('github')}>
            Singin with GitHub
        </button>
    </div>
  )
}
