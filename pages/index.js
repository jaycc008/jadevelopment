import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import design from '../public/icons/design.svg'
import develop from '../public/icons/develop.svg'
import deploy from '../public/icons/deploy.svg'
import vue from '../public/icons/vue.svg'
import nuxt from '../public/icons/nuxt.svg'
import vuetify from '../public/icons/vuetify.svg'
import react from '../public/icons/react.svg'
import nextjs from '../public/icons/nextjs.svg'
import expressjs from '../public/icons/expressjs.svg'
import graphql from '../public/icons/graphql.svg'
import mysql from '../public/icons/mysql.svg'
import apollo from '../public/icons/apollo.svg'
import reactSpring from '../public/icons/react-spring.svg'

import profilePic from '../public/jayce.svg'
import rob from '../public/images/rob.png'
import sorryThieves from '../public/images/sorry-thieves.png'
import wintersport from '../public/images/wintersport.png'

import PageSection from '../components/PageSection'
import Contact from '../components/Contact'
import ListIcon from '../components/ListIcon'
import { Cols } from '../components/Cols'
import { Cta } from '../components/Cta'

const Home = () => {
	return (
		<>
			<Head>
				<title>JA Development | Home</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
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
							memorable web experiences.
						</p>
						<p className='font-sans text-xs sm:text-sm md:text-md mb-8 sm:mb-12'>
							With a background in testing, I constantly assure I deliver high
							quality. Branching out into highly technical topics such as networks
							and security as well as honing my creativity through multiple
							projects, I am multidisciplinary and well equipped to deal with
							anything coming my way.
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
							To make sure you get what you want it is important to have a design
							before diving into programming. As such, import I prefer to start
							from scratch by designing and making sure the designs are to your
							liking.
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
							website and put it live. This is where I use my programming skills
							as well as my testing skills to create a high quality product.
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
							Your product is ready, now all that is left to do is make sure it is
							deployed online. This step is needed so you actually get to see your
							website when you go to your domain. I prefer to work from start to
							finish and as such prefer to help out with hosting as well.
						</p>
					</div>
					<Image
						src={deploy}
						alt='deployment icon'
						className='col-span-2 col-start-11 xl:col-start-10 xl:col-span-1 hidden md:flex my-auto'
					/>

					<Cta href='/services' className='col-span-12 sm:col-start-2' />
				</PageSection>

				<PageSection index='03' header='My work'>

					<div className='order-2 lg:order-1 col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-4 lg:col-start-2 lg:mt-30 xl:mt-50'>
						<Link href='https://robstuurman.nl/' target='_blank' className='hidden lg:block mb-8 xl:mb-16'>
							<h3 className='font-serif text-lg text-lightgreen'>
								Rob Stuurman
							</h3>
						</Link>
						<ul className='flex flex-row sm:flex-col'>
							<ListIcon src={vue} alt='vue icon' text='Vue.js'/>
							<ListIcon src={nuxt} alt='nuxt.js icon' text='NuxtJS'/>
							<ListIcon src={vuetify} alt='vuetify icon' text='Vuetify'/>
						</ul>
					</div>

					<div className="order-1 lg:order-2 col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-7 lg:col-start-6">
						<Link href='https://robstuurman.nl/' target='_blank' className='block lg:hidden mb-4 sm:mb-8'>
							<h3 className='font-serif text-sm sm:text-md md:text-lg text-lightgreen'>
								Rob Stuurman
							</h3>
						</Link>
						<Image
							src={rob}
							alt='Screenshot of robstuurman.nl website'
							className='w-full sm:mb-8'
						/>
					</div>

					<div className="order-3 col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-7 lg:col-start-1 mt-8 lg:mt-10 xl:mt-50">
						<Link href='https://www.vanmoof.com/shop/sorrythieves/' target='_blank' className='block lg:hidden mb-4 sm:mb-8'>
							<h3 className='font-serif text-sm sm:text-md md:text-lg text-lightgreen'>
								VanMoof - SorryThieves
							</h3>
						</Link>
						<Image
							src={sorryThieves}
							alt="Screenshot of VanMoof's SorryThieves campaign website"
							className='w-full sm:mb-8'
						/>
					</div>

					<div className='order-4 col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-5 lg:col-start-9 lg:mt-40 xl:mt-100'>
						<Link href='https://www.vanmoof.com/shop/sorrythieves/' target='_blank' className='hidden lg:block mb-8 xl:mb-16'>
							<h3 className='font-serif text-lg text-lightgreen'>
								VanMoof - SorryThieves
							</h3>
						</Link>
						<ul className='flex flex-row sm:flex-col'>
							<ListIcon src={react} alt='react icon' text='React.js'/>
							<ListIcon src={nextjs} alt='next.js icon' text='Next.js'/>
							<ListIcon src={reactSpring} alt='react spring icon' text='React Spring'/>
						</ul>
					</div>

					<div className='order-6 lg:order-5 col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-4 lg:col-start-2 lg:mt-40 xl:mt-50'>
						<Link href='https://wintersport.nl/' target='_blank' className='hidden lg:block mb-8 xl:mb-16 xl:mt-40 2xl:mt-50'>
							<h3 className='font-serif text-lg text-lightgreen'>
								Wintersport
							</h3>
						</Link>
						<ul className='flex flex-row sm:flex-col'>
							<ListIcon src={vue} alt='vue icon' text='Vue.js'/>
							<ListIcon src={nuxt} alt='nuxt.js icon' text='NuxtJS'/>
							<ListIcon src={vuetify} alt='vuetify icon' text='Vuetify'/>
							<ListIcon src={graphql} alt='graphql icon' text='GraphQL'/>
							<ListIcon src={apollo} alt='apollo icon' text='Apollo'/>
							<ListIcon src={expressjs} alt='expressjs icon' text='Express'/>
							<ListIcon src={mysql} alt='my sequel icon' text='MySQL'/>
						</ul>
					</div>

					<div className="order-5 lg:order-6 col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-7 lg:col-start-6 mt-8 lg:10 xl:mt-50">
						<Link href='https://wintersport.nl/' target='_blank' className='block lg:hidden mb-4 sm:mb-8'>
							<h3 className='font-serif text-sm sm:text-md md:text-lg text-lightgreen'>
								Wintersport
							</h3>
						</Link>
						<Image
							src={wintersport}
							alt='Screenshot of wintersport.nl website'
							className='w-full'
						/>
					</div>

					<Cta
						href='/work'
						className='order-7 col-span-12 sm:col-span-10 sm:col-start-2 mt-4 lg:mt-8'
						linkText='view more'
					/>
				</PageSection>
				<Contact index='04' />
			</main>
		</>
	)
}

export default Home
