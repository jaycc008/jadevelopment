import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }) => {
	return (
		<div className='px-20'>
			<Header />
			<section className='w-full'>
				<Component {...pageProps} />
			</section>
			<Footer />
		</div>
	)
}

export default MyApp
