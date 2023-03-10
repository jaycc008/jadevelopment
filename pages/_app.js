import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }) => {
	return (
		<div className='w-full relative xl:px-10 lg:px-8 md:px-6 px-4 overflow-x-hidden'>
			<Header />
			<section className='container mx-auto'>
				<Component {...pageProps} />
			</section>
			<Footer />
		</div>
	)
}

export default MyApp
