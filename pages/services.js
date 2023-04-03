import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import arrowRight from '../public/icons/arrow-right.svg'
import KeyVisual from '../components/KeyVisual'
import Contact from '../components/Contact'
import PageSection from '../components/PageSection'

const Services = () => {
	useEffect(() => {
		document.title = 'JA Development | Services'
	}, [])

	return (
		<main>
			<KeyVisual
				pageName='Services'
				pageHeader='Development & deployment with an eye for design'
			/>
			<PageSection index='01' header='Intake'>
				<div className='col-span-7 col-start-2'>
					<p className='mb-8 text-sm'>
						My goal is to bring your vision to life with innovation, creativity,
						and a commitment to quality. I help you stand out in a crowded
						market and turn your ideas into attractive and functional products
						of the future.
					</p>
					<p className='mb-12 text-sm'>
						After working in FinTech, e-commerce, startups and even the Dutch
						Ski Association I have seen my fair share of different projects.
						With my diverse work experience, it was only logical to build my own
						brand and so JA (which is Dutch for YES) was born.
					</p>
					<Link
						href='/contact'
						className='font-serif text-md text-yellow mb-20'
					>
						contact me
						<Image className='inline ml-4' alt='' src={arrowRight} />
					</Link>
				</div>
			</PageSection>
			<PageSection index='02' header='Design'>
				<p className='col-span-10 col-start-2 text-md mb-4'>
					While I am not a designer by trade, I have a keen eye for design and
					can create a beautiful UI for you myself or guide you in this process.
				</p>
				<div className='col-span-5 col-start-2'>
					<h3 className='text-sm font-bold mb-4'>Logo design</h3>
					<p className='text-sm mb-8'>
						At the front of every brand there is a logo, these can be
						illustrative or more textual. I can create your logo with
						Illustrator or Figma.
					</p>
					<h3 className='text-sm font-bold mb-4'>UI Design</h3>
					<p className='text-sm'>
						Before starting the programming phase, it is always good to start
						out with a design, so I have a good guide of what your project
						should look like. I can provide you with a well-thought out design
						made with Figma.
					</p>
				</div>
			</PageSection>
			<PageSection index='03' header='Development'>
				<p className='col-span-10 col-start-2 text-md mb-4'>
					In my career I have worked mostly as a Fullstack developer and would
					love to provide you with the full package as well.
				</p>
				<div className='col-span-5 col-start-2 mb-20'>
					<h3 className='text-sm font-bold mb-4'>Frontend</h3>
					<p className='text-sm mb-8'>
						This is where the interaction takes place, this corresponds to what
						is designed. I can create your Frontend with{' '}
						<span className='font-bold text-lightgreen'>React</span> or{' '}
						<span className='font-bold text-lightgreen'>Vue</span> in
						combination with UI frameworks like{' '}
						<span className='font-bold text-lightgreen'>Tailwind CSS</span> or{' '}
						<span className='font-bold text-lightgreen'>Vuetify</span>.
					</p>
					<h3 className='text-sm font-bold mb-4'>Fullstack</h3>
					<p className='text-sm'>
						Whether you need me to fix your Backend that is already built or
						create a CMS or API for you. I prefer to work with{' '}
						<span className='font-bold text-yellow'>NodeJs</span>,{' '}
						<span className='font-bold text-yellow'>GraphQL</span>,
						<span className='font-bold text-yellow'>Apollo</span> and{' '}
						<span className='font-bold text-yellow'>Express</span>, but I can
						work with older stacks like SQL/MySQL, PHP and .NET as well.
					</p>
				</div>
				<div className='col-span-5 col-start-7 m-auto'>
					<h3 className='text-sm font-bold'>Backend</h3>
					<p className='text-sm mb-16'>
						I love developing full custom websites with JAMStack, which consists
						of: <span className='font-bold text-lightgreen'>React</span> or{' '}
						<span className='font-bold text-lightgreen'>Vue</span> combined with{' '}
						<span className='font-bold text-yellow'>NodeJS</span>,{' '}
						<span className='font-bold text-yellow'>GraphQL/Apollo</span> and a{' '}
						<span className='font-bold text-yellow'>Headless CMS</span>.
					</p>
				</div>
			</PageSection>
			<PageSection index='04' header='Deployment'>
				<p className='col-span-10 col-start-2 text-md mb-4'>
					I have seen many people struggle with the deployment of their website,
					domain registration and management of their website in general.
					Because of this, I like to help you from A to Z by helping with all of
					these processes.
				</p>
				<div className='col-span-5 col-start-2 mb-20'>
					<h3 className='text-sm font-bold mb-4'>Domain registration</h3>
					<p className='text-sm mb-8'>
						During a consultation we can see which Registrar (company that
						registers domains) works best for you. This is oftentimes coupled
						with where you want your site to be hosted. In case you already
						registered your domain but would like it to be hosted elsewhere, I
						can manage the process of moving it as well.
					</p>
					<h3 className='text-sm font-bold mb-4'>
						Continuous Integration and Delivery (CI/CD)
					</h3>
					<p className='text-sm'>
						I can setup a workflow in which any changes to your site can be put
						online as soon as they are ready.
					</p>
				</div>
				<div className='col-span-5 col-start-7 m-auto'>
					<h3 className='text-sm font-bold'>Deployment of your website</h3>
					<p className='text-sm mb-16'>
						Once your site is ready, you need to put it online so that people
						can visit it when they enter your domain. I will make sure your
						website is set up correctly on your hosted domain.
					</p>
				</div>
			</PageSection>
			<PageSection index='05' header='Aftercare'>
				<p className='col-span-10 col-start-2 text-md mb-4'>
					After everything is set up, I will make sure you feel confident in
					managing your content. I will give you the right tools to make sure
					you know how to updates on your website. In case something goes wrong,
					we can create an agreement in which I can continuously provide my
					services.
				</p>
			</PageSection>
			<Contact index='06' />
		</main>
	)
}

export default Services
