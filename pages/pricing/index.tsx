import {MainLayout} from '../../components/layouts/MainLayout'
import Image from 'next/image'
import React from 'react'

export default function PricingPage() {
  return (
    <MainLayout>
        <h1>Pricing Page</h1>
            <div className={"description"}>
            <p>
                Get started by editing&nbsp;
                <code className={"code"}>pages/pricing.js</code>
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
    </MainLayout>
  )
}
