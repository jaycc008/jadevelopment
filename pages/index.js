import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

import arrowRight from '../public/icons/arrow-right.svg'
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
import robStuurman from '../public/rob-stuurman.png'
import sorryThieves from '../public/sorry-thieves.png'
import wintersport from '../public/wintersport.png'

const Home = () => {
	useEffect(() => {
		document.title = 'JA Development | Home'
	}, [])

	return (
		<main className='container mt-60 mx-auto'>
			<section className='pb-40'>
				<h1 className='text-[80px] font-serif font-bold'>Creative Developer</h1>
				<div className='grid grid-cols-12 gap-5 mt-18'>
					<h2 className='text-[2.5rem] mt-8 font-sans col-span-6 col-end-7'>
						I design logo&apos;s and websites with{' '}
						<span className='text-lightgreen'>Illustrator</span> and{' '}
						<span className='text-lightgreen'>Figma</span>
					</h2>
					<h2 className='text-[2.5rem] mt-8 font-sans col-span-6 col-end-7'>
						I build webapplications and websites with{' '}
						<span className='text-yellow'>React</span> and{' '}
						<span className='text-yellow'>Vue</span>
					</h2>
				</div>
			</section>

			<section className='pb-50'>
				<h2 className='font-serif'>
					<span className='text-lightgreen'>01</span> - About me
				</h2>
				<div className='grid grid-cols-12 gap-5 mt-8'>
					<Image
						src={profilePic}
						alt='Profile picture of Jayce'
						className='col-span-4 w-full'
					/>
					<article className='col-span-7 col-start-6 mt-[22.5rem]'>
						<p className='font-sans text-[2rem] mb-8'>
							Hi, my name is{' '}
							<span className='text-lightgreen font-bold'>Jayce Ardon</span> and
							I&apos;m a passionate webdeveloper with years of experience in
							designing, building and testing products. I love working at the
							crossroads where creativity and technical issues meet. I create
							memorable web experiences.
						</p>
						<p className='font-sans text-[2rem] mb-12'>
							With a background in testing, I constantly assure I deliver high
							quality. Branching out into highly technical topics such as
							networks and security as well as honing my creativity through
							multiple projects, I am multidisciplinary and well equipped to
							deal with anything coming my way.
						</p>
						<Link href='/about' className='font-serif text-cta text-yellow'>
							read more
							<Image className='inline ml-4' alt='' src={arrowRight} />
						</Link>
					</article>
				</div>
			</section>

			<section className='pb-50'>
				<h2 className='font-serif  mb-18'>
					<span className='text-lightgreen'>02</span> - My services
				</h2>
				<div className='grid grid-cols-12 gap-5'>
					<div className='col-span-6 col-start-2 '>
						<h3 className='font-serif text-[2.5rem] mb-8'>Design</h3>
						<p className='text-2xl mb-16'>
							To make sure you get what you want it is important to have a
							design before diving into programming. As such, I prefer to start
							from scratch by designing and making sure the designs are to your
							liking.
						</p>
					</div>
					<Image
						src={design}
						alt='design icon'
						className='col-span-1 col-start-10 mt-11'
					/>
					<div className='col-span-6 col-start-2 '>
						<h3 className='font-serif text-[2.5rem] mb-8'>Development</h3>
						<p className='text-2xl mb-16'>
							Once the design is ready, it&apos;s time to actually build your
							website and put it live. This is where I use my programming skills
							as well as my testing skills to create a high quality product.
						</p>
					</div>
					<Image
						src={develop}
						alt='develop icon'
						className='col-span-1 col-start-10 mt-11'
					/>
					<div className='col-span-6 col-start-2 '>
						<h3 className='font-serif text-[2.5rem] mb-8'>
							Deployment & Hosting
						</h3>
						<p className='text-2xl mb-16'>
							Your product is ready, now all that is left to do is make sure it
							is deployed online. This step is needed so you actually get to see
							your website when you go to your domain. I prefer to work from
							start to finish and as such prefer to help out with hosting as
							well.
						</p>
					</div>
					<Image
						src={deploy}
						alt='deploy icon'
						className='col-span-1 col-start-10 mt-11'
					/>
					<Link
						href='/services'
						className='font-serif text-cta text-yellow col-span-12 col-start-2'
					>
						read more
						<Image className='inline ml-4' alt='' src={arrowRight} />
					</Link>
				</div>
			</section>

			<section className='pb-50'>
				<h2 className='font-serif mb-18'>
					<span className='text-lightgreen'>03</span> - My work
				</h2>
				<div className='grid grid-cols-12 gap-5'>
					<div className='col-span-4 col-start-2'>
						<h3 className='font-serif text-[2.5rem] mt-50 mb-16'>
							robstuurman.nl
						</h3>
						<ul>
							<li className='flex items-center mb-10'>
								<Image src={vue} alt='vue icon' className='mr-4' />
								<span className='text-[1.5rem]'>Vue.js</span>
							</li>
							<li className='flex items-center mb-10'>
								<Image src={nuxt} alt='nuxt.js icon' className='mr-4' />
								<span className='text-[1.5rem]'>NuxtJS</span>
							</li>
							<li className='flex items-center mb-10'>
								<Image src={vuetify} alt='vuetify icon' className='mr-4' />
								<span className='text-[1.5rem]'>Vuetify</span>
							</li>
						</ul>
					</div>
					<Image
						src={robStuurman}
						alt='Screenshot of robstuurman.nl website'
						className='col-span-7 col-start-6 w-full'
					/>

					<Image
						src={sorryThieves}
						alt="Screenshot of VanMoof's SorryThieves campaign website"
						className='col-span-7 col-start-1 w-full mt-50'
					/>
					<div className='col-span-5 col-start-9 mt-100'>
						<h3 className='font-serif text-[2.5rem] mb-16'>
							VanMoof - SorryThieves
						</h3>
						<ul>
							<li className='flex items-center mb-10'>
								<Image src={react} alt='react icon' className='mr-4' />
								<span className='text-[1.5rem]'>React.js</span>
							</li>
							<li className='flex items-center mb-10'>
								<Image src={nextjs} alt='next.js icon' className='mr-4' />
								<span className='text-[1.5rem]'>Next.js</span>
							</li>
							<li className='flex items-center mb-10'>
								<Image
									src={reactSpring}
									alt='react spring icon'
									className='mr-4'
									height='45'
									width='45'
								/>
								<span className='text-[1.5rem]'>React Spring</span>
							</li>
						</ul>
					</div>

					<div className='col-span-4 col-start-2 mt-50'>
						<h3 className='font-serif text-[2.5rem] mt-50 mb-16'>
							wintersport.nl
						</h3>
						<ul>
							<li className='flex items-center mb-10'>
								<Image src={vue} alt='vue icon' className='mr-4' />
								<span className='text-[1.5rem]'>Vue.js</span>
							</li>
							<li className='flex items-center mb-10'>
								<Image src={nuxt} alt='nuxt.js icon' className='mr-4' />
								<span className='text-[1.5rem]'>NuxtJS</span>
							</li>
							<li className='flex items-center mb-10'>
								<Image src={vuetify} alt='vuetify icon' className='mr-4' />
								<span className='text-[1.5rem]'>Vuetify</span>
							</li>
							<li className='flex items-center mb-10'>
								<Image src={graphql} alt='graphql icon' className='mr-4' />
								<span className='text-[1.5rem]'>GraphQL</span>
							</li>
							<li className='flex items-center mb-10'>
								<Image src={apollo} alt='apollo icon' className='mr-4' />
								<span className='text-[1.5rem]'>Apollo</span>
							</li>
							<li className='flex items-center mb-10'>
								<Image src={expressjs} alt='expressjs icon' className='mr-4' />
								<span className='text-[1.5rem]'>Express</span>
							</li>
							<li className='flex items-center mb-10'>
								<Image src={mysql} alt='my sequel icon' className='mr-4' />
								<span className='text-[1.5rem]'>MySQL</span>
							</li>
						</ul>
					</div>
					<Image
						src={wintersport}
						alt='Screenshot of wintersport.nl website'
						className='col-span-7 col-start-6 w-full  mt-50'
					/>

					<Link
						href='/work'
						className='font-serif text-cta text-yellow col-span-12 col-start-2 mt-8'
					>
						view more <Image className='inline' alt='' src={arrowRight} />
					</Link>
				</div>
			</section>

			<section className='w-full'>
				<h2 className='font-serif mb-18'>
					<span className='text-lightgreen'>04</span> - Contact
				</h2>
				<div className='grid grid-cols-12 gap-5 mt-24'>
					<span className='text-2xl col-span-5 col-start-2'>
						Want to work together?
					</span>
					<span className='text-2xl col-span-5 col-start-7 text-right'>
						Send me a message!
					</span>
				</div>

				<div className='flowing-gradient flex my-40'>
					<a
						className='text-[96px] font-serif m-auto copy'
						onClick={e => {
							const classes = e.target.classList
							if (!classes.contains('copied')) classes.add('copied')
							navigator.clipboard.writeText('jayce.ardon@gmail.com')
						}}
						onMouseEnter={e => {
							const classes = e.target.classList
							if (classes.contains('copied')) classes.remove('copied')
						}}
					>
						jayce.ardon@gmail.com
					</a>
				</div>
			</section>
		</main>
	)
}

export default Home
