import Link from "next/link";
import {getSession} from "next-auth/react";

export default function Profile() {
  return (
    <section className={'container mx-auto text-center'}>
      <h3 className={'text-4xl font-bold'}>Profile</h3>
      <Link href={'/'} className={'mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'}>Home page</Link>
    </section>
  )
}

export async function getServerSideProps({req}) {
  const session = await getSession({req});

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {session}
  }
}