import {getSession, useSession, signOut} from 'next-auth/react'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

export default function Home({session}) {

  // useEffect(() => {
  //   ( async ()=>{
  //     const session = await getSession()
  //     console.log(session)
  //   })();
  
  // }, [])
  

  // const {user} = session
  
  // const {data: session, status} = useSession()
  // const router = useRouter()

  // if (status === 'loading') {
  //   return <p>Loading...</p>
  // }

  // if (status === 'unauthenticated') {
  //   router.push('/login')
  // }

  return (
    <>
     {
      session ? (
        <div>
          <h1>{session.user.name}</h1>
          <p>{session.user.email}</p>
          <img src={session.user.image} alt="" />
        </div>
      ) : (
        <p>Skeleton</p>
      )
     }

     <button onClick={() => signOut()}>
      Logout
     </button>
      
    </>
  );
}

export const getServerSideProps = async (ctx) =>{

  const session = await getSession(ctx)

  if (!session) return{
    redirect: {
      destination: '/login',
      permanent: false
    }
  }

  return{
    props:{
      session:session
    }
  }
}