import Head from "next/head";
import Layout from "@nauth/layout/layout";
import Link from "next/link";
import styles from '@nauth/styles/Form.module.css';
import {HiOutlineUser,  HiAtSymbol, HiFingerPrint} from "react-icons/hi";
import {useState} from "react";

export default function Register() {
  const [show, setShow] = useState({password: false, cpassword: false});

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className={'w-3/4 mx-auto flex flex-col gap-10'}>

        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className={'w-3/4 mx-auto text-gray-400'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <form className={'flex flex-col gap-5'}>

          <div className={styles.input_group}>
            <input type="text"
                   name="useraname"
                   id="email"
                   placeholder={'Enter your name'}
                   className={styles.input_text}
            />
            <span className={'icon flex items-center px-4'}>
              <HiOutlineUser size={25}/>
            </span>
          </div>

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
            <input type={show.password ? 'text' : 'password'}
                   name="password"
                   id="password"
                   placeholder={'Enter your password'}
                   className={styles.input_text}
            />
            <span className={'icon flex items-center px-4'}
                  onClick={() => setShow({...show, password: !show.password})}
            >
              <HiFingerPrint size={25}/>
            </span>
          </div>

          <div className={styles.input_group}>
            <input type={show.cpassword ? 'text' : 'password'}
                   name="cpassword"
                   id="cpassword"
                   placeholder={'Confirm password'}
                   className={styles.input_text}
            />
            <span className={'icon flex items-center px-4'}
                  onClick={() => setShow({...show, cpassword: !show.cpassword})}
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

        </form>

        <p className={'text-center text-grey-400'}>
          Have an account? <Link href={'/login'} className={'text-blue-700'}>Sign In</Link>
        </p>


      </section>

    </Layout>
  );
};
