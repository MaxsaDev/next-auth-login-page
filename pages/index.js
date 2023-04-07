import {useState} from "react";
import Head from 'next/head'
import Link from 'next/link'
import styles from '@nauth/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react";


export default function Home() {
  // const [session, setSession] = useState(true);
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
        {session ? User({session}) : Guest()}
    </div>
  )
}

function Guest() {
  return (
    <main className={'container mx-auto text-center py-20'}>
      <h3 className={'text-4xl font-bold'}>
        Guest Page
      </h3>
      <div className={'flex justify-center'}>
        <Link href={'/login'} className={'mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'}>Sign In</Link>
      </div>
    </main>
  )
}

function User({session}) {
  return (
    <main className={'container mx-auto text-center py-20'}>
      <h3 className={'text-4xl font-bold'}>
        Autorize User Page
      </h3>
      <div className={'details'}>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
      <div className={'flex justify-center'}>
        <button className={'mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50'}>
          Sign Out
        </button>
      </div>
      <div className={'flex justify-center'}>
        <Link href={'/profile'} className={'mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'}>Profile page</Link>
      </div>
    </main>
  )
}

