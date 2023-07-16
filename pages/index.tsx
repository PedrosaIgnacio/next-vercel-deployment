import Image from 'next/image'
import {MainLayout} from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>pages/index.js</code>
          </p>
          <div>
            <a              
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={"vercelLogo"}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>


        <div className={"grid"}>
          <a
            href="/about"
            className={"card"}
          >
            <h2>
              About <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>
        </div>
    </MainLayout>
  )
}
