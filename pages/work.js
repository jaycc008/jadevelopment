import Image from 'next/image'
import { useState } from 'react'
import Head from 'next/head'

import design from '../public/icons/design.svg'
import develop from '../public/icons/develop.svg'
import deploy from '../public/icons/deploy.svg'
import test from '../public/icons/test.svg'
import arrowDown from '../public/icons/arrow-down.svg'

import KeyVisual from '../components/KeyVisual'
import Contact from '../components/Contact'
import PageSection from '../components/PageSection'
import CaseModal from '../components/CaseModal'
import { Cols } from '../components/Cols'
import Case from '../components/Case'
import Cases from '../data/Cases.json'

const Work = () => {
	const [show, setShow] = useState(false)
	const [activeCase, setActiveCase] = useState(0)

	return (
		<>
			<Head>
				<title>JA Development | Work</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
			</Head>
			<main>
				<KeyVisual pageName='My work' pageHeader='Projects & Experience' />
				<PageSection index='01' header='Experience'>
					<div className='col-span-12 sm:col-start-2 sm:col-span-10 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2'>
						<h3 className='font-serif text-sm sm:text-md md:text-lg mb-4 sm:mb-8'>
							<Image
								src={develop}
								alt='development icon'
								width='40'
								className='inline mr-4 md:hidden'
							/>
							Development
						</h3>
						<p className='text-xs sm:text-sm mb-8 md:mb-16'>
							I have worked most of my career as a Fullstack Webdeveloper, but
							worked solely on Frontend as well. I started out with PHP and
							ASP.NET, went through Angular and React and eventually learned Vue
							as well.
						</p>
					</div>
					<Image
						src={develop}
						alt='development icon'
						className='col-span-2 col-start-11 xl:col-start-10 xl:col-span-1 hidden md:flex my-auto'
					/>
					<div className='col-span-12 sm:col-start-2 sm:col-span-10 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2'>
						<h3 className='font-serif text-sm sm:text-md md:text-lg mb-4 sm:mb-8'>
							<Image
								src={design}
								alt='design icon'
								width='40'
								className='inline mr-4 md:hidden'
							/>
							Design
						</h3>
						<p className='text-xs sm:text-sm mb-8 md:mb-16'>
							While more of a complementary skill, I have designed multiple
							applications and websites. Due to my background as Quality Assurance
							Tester, I would usually chip in with design decisions wherever I
							worked.
						</p>
					</div>
					<Image
						src={design}
						alt='design icon'
						className='col-span-2 col-start-11 xl:col-start-10 xl:col-span-1 hidden md:flex my-auto'
					/>
					<div className='col-span-12 sm:col-start-2 sm:col-span-10 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2'>
						<h3 className='font-serif text-sm sm:text-md md:text-lg mb-4 sm:mb-8'>
							<Image
								src={deploy}
								alt='deployment icon'
								width='40'
								className='inline mr-4 md:hidden'
							/>
							Deployment & Hosting
						</h3>
						<p className='text-xs sm:text-sm mb-8 md:mb-16'>
							During my career I have had ample opportunity to deploy websites,
							webapplications and webshops. I also helped my own clients from A-Z
							with deploying and hosting numerous websites, some were custom
							built, some were WordPress. During my studies I learned how to
							run/manage my own server on AWS.
						</p>
					</div>
					<Image
						src={deploy}
						alt='deployment icon'
						className='col-span-2 col-start-11 xl:col-start-10 xl:col-span-1 hidden md:flex my-auto'
					/>
					<div className='col-span-12 sm:col-start-2 sm:col-span-10 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2'>
						<h3 className='font-serif text-sm sm:text-md md:text-lg mb-4 sm:mb-8'>
							<Image
								src={test}
								alt='test icon'
								width='40'
								className='inline mr-4 md:hidden'
							/>
							Quality Assurance Tester
						</h3>
						<p className='text-xs sm:text-sm mb-8 md:mb-16'>
							Before I got into developing I worked as a tester, where I had to
							document, write testcases and perform functional-, acceptance- and
							regression tests. This created a deeper understanding in how the end
							user thinks, because you really dive into their line of thinking.
						</p>
					</div>
					<Image
						src={test}
						alt='test icon'
						className='col-span-2 col-start-11 xl:col-start-10 xl:col-span-1 hidden md:flex my-auto'
					/>
					<a className='font-serif text-md text-yellow col-span-12 col-start-2'
						href="/files/cv_jayce-ardon.pdf"
						alt="download curriculum Vitae file"
						target="_blank"
						rel="noopener noreferrer">
						download cv
						<Image className='inline ml-4' alt='' src={arrowDown} />
					</a>
				</PageSection>
				<PageSection index='02' header='Cases' largerGapY={true}>
					{Cases.map((item, index) =>
						index % 2 === 0 ? (
							<Cols className='col-span-12' key={index}>
								<div className='col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-4'>
									<h3 className='font-serif text-sm sm:text-md xl:text-lg xl:mb-10'>
										{item.name}
									</h3>
									<p className='text-xs lg:text-sm'>{item.subtitle}</p>
								</div>
								<Image
									src={item.img1}
									width={1000}
									height={1000}
									alt={item.alt1}
									className='col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-7 md:col-start-6 w-full view'
									onClick={() => {
										setShow(true)
										setActiveCase(index)
									}}
								/>
							</Cols>
						) : (
							<Cols className='col-span-12' key={index}>
								<Image
									src={item.img1}
									width={1000}
									height={1000}
									alt={item.alt1}
									className='order-2 md:order-1 col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-7 w-full view'
									onClick={() => {
										setShow(true)
										setActiveCase(index)
									}}
								/>
								<div className='order-1 md:order-2 col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-4 md:col-start-9'>
									<h3 className='font-serif text-sm sm:text-md xl:text-lg xl:mb-10'>
										{item.name}
									</h3>
									<p className='text-xs lg:text-sm'>{item.subtitle}</p>
								</div>
							</Cols>
						)
					)}
				</PageSection>
				<Contact index='03' />
				<CaseModal
					show={show}
					onClose={() => setShow(false)}
					caseHeader={Cases[activeCase].name}
				>
					<Case item={Cases[activeCase]} />
				</CaseModal>
			</main>
		</>
	)
}

export default Work
