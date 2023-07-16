import {MainLayout} from '../components/layouts/MainLayout'
import {DarkLayout} from '../components/layouts/DarkLayout'
import Image from 'next/image'

export default function AboutPage(){
    return(
        <>
            <h1>About Page</h1>
            <div className={"description"}>
            <p>
                Get started by editing&nbsp;
                <code className={"code"}>pages/about.js</code>
            </p>
            <div>
                <a
                href="/"
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
                    href="/"
                    className={"card"}
                >
                    <h2>
                        Home <span>-&gt;</span>
                    </h2>
                    <p>
                        Find in-depth information about Next.js features and&nbsp;API.
                    </p>
                </a>
            </div>
        </>
    )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ){
    return(
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}