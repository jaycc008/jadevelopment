import Image from 'next/image'
import { useEffect, useState } from 'react'

import sorryThieves from '../public/images/sorry-thieves.png'
import wintersport from '../public/images/wintersport.png'
import design from '../public/icons/design.svg'
import develop from '../public/icons/develop.svg'
import deploy from '../public/icons/deploy.svg'
import test from '../public/icons/test.svg'
import arrowDown from '../public/icons/arrow-down.svg'

import KeyVisual from '../components/KeyVisual'
import Contact from '../components/Contact'
import PageSection from '../components/PageSection'
import CaseModal from '../components/CaseModal'
import Case from '../components/Case'
import Cases from '../data/Cases.json'

const Work = () => {
	const [show, setShow] = useState(false)
	const [activeCase, setActiveCase] = useState(0)

	console.log(activeCase)

	useEffect(() => {
		document.title = 'JA Development | Work'
	}, [])

	return (
		<main>
			<KeyVisual pageName='My work' pageHeader='Projects & Experience' />
			<PageSection index='01' header='Experience'>
				<div className='col-span-6 col-start-2 '>
					<h3 className='font-serif text-lg mb-8'>Development</h3>
					<p className='text-sm mb-16'>
						I have worked most of my career as a Fullstack Webdeveloper, but
						worked solely on Frontend as well. I started out with PHP and
						ASP.NET, went through Angular and React and eventually learned Vue
						as well.
					</p>
				</div>
				<Image
					src={develop}
					alt='develop icon'
					className='col-span-1 col-start-10 mt-11'
				/>
				<div className='col-span-6 col-start-2 '>
					<h3 className='font-serif text-lg mb-8'>Design</h3>
					<p className='text-sm mb-16'>
						While more of a complementary skill, I have designed multiple
						applications and websites. Due to my background as Quality Assurance
						Tester, I would usually chip in with design decisions wherever I
						worked.
					</p>
				</div>
				<Image
					src={design}
					alt='design icon'
					className='col-span-1 col-start-10 mt-11'
				/>
				<div className='col-span-6 col-start-2 '>
					<h3 className='font-serif text-lg mb-8'>Deployment & Hosting</h3>
					<p className='text-sm mb-16'>
						During my career I have had ample opportunity to deploy websites,
						webapplications and webshops. I also helped my own clients from A-Z
						with deploying and hosting numerous websites, some were custom
						built, some were WordPress. During my studies I learned how to
						run/manage my own server on AWS.
					</p>
				</div>
				<Image
					src={deploy}
					alt='deploy icon'
					className='col-span-1 col-start-10 mt-11'
				/>
				<div className='col-span-6 col-start-2 '>
					<h3 className='font-serif text-lg mb-8'>Quality Assurance Tester</h3>
					<p className='text-sm mb-16'>
						Before I got into developing I worked as a tester, where I had to
						document, write testcases and perform functional-, acceptance- and
						regression tests. This created a deeper understanding in how the end
						user thinks, because you really dive into their line of thinking.
					</p>
				</div>
				<Image
					src={test}
					alt='test icon'
					className='col-span-1 col-start-10 mt-11'
				/>
				<a className='font-serif text-md text-yellow col-span-12 col-start-2'>
					download cv
					<Image className='inline ml-4' alt='' src={arrowDown} />
				</a>
			</PageSection>
			<PageSection index='02' header='Cases' largerGapY={true}>
				{Cases.map((item, index) =>
					index % 2 === 0 ? (
						<>
							<div className='col-span-4'>
								<h3 className='font-serif text-lg mb-10'>{item.name}</h3>
								<p className='text-sm'>{item.subtitle}</p>
							</div>
							<Image
								src={item.img1}
								width={1000}
								height={1000}
								alt={item.alt1}
								className='col-span-7 col-start-6 w-full view'
								onClick={() => {
									setShow(true)
									setActiveCase(index)
								}}
							/>
						</>
					) : (
						<>
							<Image
								src={item.img1}
								width={1000}
								height={1000}
								alt={item.alt1}
								className='col-span-7 w-full copy'
								onClick={() => {
									setShow(true)
									setActiveCase(index)
								}}
							/>
							<div className='col-span-4 col-start-9'>
								<h3 className='font-serif text-lg mb-10'>SorryThieves</h3>
								<p className='text-sm'>
									Campaign page for E-Bike store VanMoof.
								</p>
							</div>
						</>
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
	)
}

export default Work
