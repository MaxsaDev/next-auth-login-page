import Head from "next/head";
import Layout from "@nauth/layout/layout";
import Link from "next/link";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className={'w-3/4 mx-auto flex flex-col gap-10'}>
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4 underline">Login</h1>
          <p className={'w-3/4 mx-auto text-gray-400'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <form className={'flex flex-col gap-5'} action="">
          <div className="input-group">
            <label htmlFor="email" className="text-gray-400">Email</label>
            <input type="email"
                   name="email"
                   id="email"
                   placeholder={'Enter your email'}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="text-gray-400">Password</label>
            <input type="password"
                   name="password"
                   id="password"
                   placeholder={'Enter your password'}
            />
          </div>

          <div className="input-buttons">
            <button type={'submit'}>
              Login
            </button>
          </div>

          <div className="input-buttons">
            <button type={'submit'}>
              Sign with Google
            </button>
          </div>

          <div className="input-buttons">
            <button type={'submit'}>
              Sign with Github
            </button>
          </div>

        </form>
        <p className={'text-center text-grey-400'}>
          Don't have an account? <Link href={'/register'} className={'text-blue-700'}>Register</Link>
        </p>
        <div className="bottom"></div>
      </section>
    </Layout>
  );
};
