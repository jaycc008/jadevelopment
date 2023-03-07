import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }) => {
	return (
		<div className="w-full">
			<Header />
			<section className='mt-60 container mx-auto'>
				<Component {...pageProps} />
			</section>
			<Footer />
		</div>
	)
}

export default MyApp
