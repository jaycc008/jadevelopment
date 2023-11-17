import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import design from '../public/icons/design.svg'
import develop from '../public/icons/develop.svg'
import deploy from '../public/icons/deploy.svg'
import profilePic from '../public/images/jayce.jpg'

import PageSection from '../components/PageSection'
import Contact from '../components/Contact'
import { Cols } from '../components/Cols'
import { Cta } from '../components/Cta'
import Cases from '../data/Cases.json'

const Home = () => {
	return (
		<>
			<Head>
				<title>JA Development | Home</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<main className='container mt-40 lg:mt-60 mx-auto'>
				<section className='pb-20 sm:pb-30 lg:pb-50'>
					<h1 className='text-lg md:text-xl font-serif font-bold'>
						Creative Developer
					</h1>
					<Cols className='mt-8 lg:mt-18'>
						<h2 className='text-sm md:text-md lg:text-lg font-sans col-span-12 sm:col-span-8 xl:col-span-6 xl:col-end-7'>
							I design logo&apos;s and websites with{' '}
							<span className='text-lightgreen'>Illustrator</span> and{' '}
							<span className='text-lightgreen'>Figma</span>
						</h2>
						<h2 className='text-sm md:text-md lg:text-lg font-sans col-span-12 sm:col-span-8 xl:col-span-6 xl:col-end-7'>
							I build webapplications and websites with{' '}
							<span className='text-yellow'>React</span> and{' '}
							<span className='text-yellow'>Vue</span>
						</h2>
					</Cols>
				</section>

				<PageSection index='01' header='About me'>
					<Image
						src={profilePic}
						alt='Profile picture of Jayce'
						className='col-span-6 col-start-4 sm:col-span-4 sm:col-start-5 lg:col-start-1 w-full sm:mb-8 md:mb-0'
					/>
					<article className='col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-7 lg:col-start-6 xl:mt-[22.5rem]'>
						<p className='font-sans text-xs sm:text-sm md:text-md mb-8'>
							Hi, my name is{' '}
							<span className='text-lightgreen font-bold'>Jayce Ardon</span> and
							I&apos;m a passionate webdeveloper with years of experience in
							designing, building and testing products. I love working at the
							crossroads where creativity and technical issues meet. I create
							unique web experiences.
						</p>
						<p className='font-sans text-xs sm:text-sm md:text-md mb-8 sm:mb-12'>
							With a background in testing, I constantly assure I deliver high
							quality. During my studies I branched out into more technical
							disciplines like networks and security while honing my creativity
							by designing during multiple projects. I am multidisciplinary and
							well equipped to deal with anything coming my way.
						</p>
						<Cta href='/about' />
					</article>
				</PageSection>

				<PageSection index='02' header='My services'>
					<div className='col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2'>
						<h3 className='font-serif text-sm sm:text-md md:text-lg mb-4 sm:mb-8'>
							<Image
								src={design}
								alt='design icon'
								width='40'
								className='inline mr-4 md:hidden'
							/>
							Design
						</h3>
						<p className='text-xs md:text-sm mb-8 md:mb-16'>
							To make sure everyone is on the same page about what to develop it
							is important to have a design before diving into programming. As
							such, I prefer to start from scratch by designing and making sure
							the designs are to your liking.
						</p>
					</div>
					<Image
						src={design}
						alt='design icon'
						className='col-span-2 col-start-11 xl:col-start-10 xl:col-span-1 hidden md:flex my-auto'
					/>
					<div className='col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2'>
						<h3 className='font-serif text-sm sm:text-md md:text-lg mb-4 sm:mb-8'>
							<Image
								src={develop}
								alt='development icon'
								width='40'
								className='inline mr-4 md:hidden'
							/>
							Development
						</h3>
						<p className='text-xs md:text-sm mb-8 md:mb-16'>
							Once the design is ready, it&apos;s time to actually build your
							website. This is where I use my knowledge to decide which platform
							and technologies are going to work best. Then I will put my
							programming to use as well as my testing skills to create a high
							quality product.
						</p>
					</div>
					<Image
						src={develop}
						alt='develop icon'
						className='col-span-2 col-start-11 xl:col-start-10 xl:col-span-1 hidden md:flex my-auto'
					/>
					<div className='col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2'>
						<h3 className='font-serif text-sm sm:text-md md:text-lg mb-4 sm:mb-8'>
							<Image
								src={deploy}
								alt='deployment icon'
								width='40'
								className='inline mr-4 md:hidden'
							/>
							Deployment & Hosting
						</h3>
						<p className='text-xs md:text-sm mb-8 md:mb-16'>
							Your product is ready, now all that is left to do is make sure it
							is deployed online. This step is needed so you actually get to see
							your website when you go to your domain. I prefer to work from
							start to finish and as such prefer to help out with hosting as
							well.
						</p>
					</div>
					<Image
						src={deploy}
						alt='deployment icon'
						className='col-span-2 col-start-11 xl:col-start-10 xl:col-span-1 hidden md:flex my-auto'
					/>
					<div className='col-span-12 sm:col-start-2'>
						<Cta href='/services' />
					</div>
				</PageSection>

				<PageSection index='03' header='My work' largerGapX={true}>
					{Cases.map(item => (
						<div
							key={item}
							className='col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-4'
						>
							<h3 className='font-serif text-sm mb-6'>{item.name}</h3>
							<Link href={`/work#${item.slug}`} className='view-more'>
								<Image
									src={item.img1}
									alt={item.alt1}
									className='w-full'
									width='1000'
									height='1000'
								/>
							</Link>
						</div>
					))}
					<div className='col-span-12 sm:col-span-10 sm:col-start-2 lg:col-start-1 mt-4 lg:mt-8'>
						<Cta href='/work' linkText='view all work' />
					</div>
				</PageSection>
				<Contact index='04' />
			</main>
		</>
	)
}

export default Home
