import {useState} from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@nauth/layout/layout";
import styles from '@nauth/styles/Form.module.css';
import {HiAtSymbol, HiFingerPrint} from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const [show, setShow] = useState(false);

  const handleGoogleSignIn = async () => {
    signIn('google', {callbackUrl: 'http://localhost:3000'})
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className={'w-3/4 mx-auto flex flex-col gap-10'}>

        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className={'w-3/4 mx-auto text-gray-400'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <form className={'flex flex-col gap-5'} action="">

          <div className={styles.input_group}>
            <input type="email"
                   name="email"
                   id="email"
                   placeholder={'Enter your email'}
                   className={styles.input_text}
            />
            <span className={'icon flex items-center px-4'}>
              <HiAtSymbol size={25}/>
            </span>
          </div>

          <div className={styles.input_group}>
            <input type={show ? 'text' : 'password'}
                   name="password"
                   id="password"
                   placeholder={'Enter your password'}
                   className={styles.input_text}
            />
            <span className={'icon flex items-center px-4'}
                  onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25}/>
            </span>
          </div>

          <div className="input-buttons">
            <button type={'submit'}
                    className={styles.button}
            >
              Login
            </button>
          </div>

          <div className="input-buttons">
            <button type={'button'}
                    className={styles.button_custom}
                    onClick={handleGoogleSignIn}
            >
              Sign with Google <Image src={'assets/google.svg'} alt={'google auth'} width={'20'} height={20}/>
            </button>
          </div>

          <div className="input-buttons">
            <button type={'button'}
                    className={styles.button_custom}
            >
              Sign with Github <Image src={'assets/github.svg'} alt={'github auth'} width={25} height={25}/>
            </button>
          </div>

        </form>

        <p className={'text-center text-grey-400'}>
          don't have an account? <Link href={'/register'} className={'text-blue-700'}>Sign Up</Link>
        </p>


      </section>

    </Layout>
  );
};
