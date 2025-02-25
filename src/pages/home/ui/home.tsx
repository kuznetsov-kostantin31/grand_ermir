import { Flight } from '../../../widgets/flight'
import { Footer } from '../../../widgets/footer'
import { Header } from '../../../widgets/header'
import { TariffForm } from '../../../widgets/tariff-form'

export const HomePage = () => {
	return (
	  <>
		<Header/>
		<Flight/>
		<TariffForm/>
		<Footer/>
	  </>
	)
}
  