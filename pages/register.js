import Head from "next/head";
import Layout from "@nauth/layout/layout";
import Link from "next/link";
import styles from '@nauth/styles/Form.module.css';
import {HiOutlineUser, HiAtSymbol, HiFingerPrint} from "react-icons/hi";
import {useState} from "react";
import {useFormik} from "formik";
import {registerValidate} from "@nauth/lib/validate";
import {useRouter} from "next/router";

export default function Register() {
  const [show, setShow] = useState({password: false, cpassword: false});
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: ''
    },
    validate: registerValidate,
    onSubmit
  })

  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }

    await fetch('http://localhost:3000/api/auth/signup', options)
      .then(res => res.json())
      .then((data) => {
        if (data) router.push('http://localhost:3000')
      })
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>

      <section className={'w-3/4 mx-auto flex flex-col gap-10'}>

        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className={'w-3/4 mx-auto text-gray-400'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <form className={'flex flex-col gap-5'} onSubmit={formik.handleSubmit}>

          <div className={`${styles.input_group} ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
            <input type="text"
                   name="username"
                   placeholder={'Enter your name'}
                   className={styles.input_text}
                   {...formik.getFieldProps('username')}
            />
            <span className={'icon flex items-center px-4'}>
              <HiOutlineUser size={25}/>
            </span>
          </div>
          {/*{formik.errors.username && formik.touched.username ? <div className={'text-rose-600'}>{formik.errors.username}</div> : null}*/}

          <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
            <input type="email"
                   name="email"
                   placeholder={'Enter your email'}
                   className={styles.input_text}
                   {...formik.getFieldProps('email')}
            />
            <span className={'icon flex items-center px-4'}>
              <HiAtSymbol size={25}/>
            </span>
          </div>
          {/*{formik.errors.email && formik.touched.email ? <div className={'text-rose-600'}>{formik.errors.email}</div> : null}*/}

          <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
            <input type={show.password ? 'text' : 'password'}
                   name="password"
                   placeholder={'Enter your password'}
                   className={styles.input_text}
                   {...formik.getFieldProps('password')}
            />
            <span className={'icon flex items-center px-4'}
                  onClick={() => setShow({...show, password: !show.password})}
            >
              <HiFingerPrint size={25}/>
            </span>
          </div>
          {/*{formik.errors.password && formik.touched.password ? <div className={'text-rose-600'}>{formik.errors.password}</div> : null}*/}

          <div className={`${styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600' : ''}`}>
            <input type={show.cpassword ? 'text' : 'password'}
                   name="cpassword"
                   placeholder={'Confirm password'}
                   className={styles.input_text}
                   {...formik.getFieldProps('cpassword')}
            />
            <span className={'icon flex items-center px-4'}
                  onClick={() => setShow({...show, cpassword: !show.cpassword})}
            >
              <HiFingerPrint size={25}/>
            </span>
          </div>
          {/*{formik.errors.cpassword && formik.touched.cpassword ? <div className={'text-rose-600'}>{formik.errors.cpassword}</div> : null}*/}

          <div className="input-buttons">
            <button type={'submit'}
                    className={styles.button}
            >
              Sign Up
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
