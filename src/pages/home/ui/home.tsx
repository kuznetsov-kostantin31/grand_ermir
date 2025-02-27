import Car1Img from '../../../shared/assets/icons/car1_img.svg'
import Car2Img from '../../../shared/assets/icons/car2_img.svg'
import Car3Img from '../../../shared/assets/icons/car3_img.svg'
import Car4Img from '../../../shared/assets/icons/car4_img.svg'
import Calender from '../../../shared/assets/imgs/calender-dynamic-color.svg'
import MainImage from '../../../shared/assets/imgs/main_img_car.svg'
import Mobile from '../../../shared/assets/imgs/mobile-dynamic-color.svg'
import Shield from '../../../shared/assets/imgs/sheild-dynamic-color.svg'
import { Button, FlightCard, TariffCard } from '../../../shared/ui'
import { Flight } from '../../../widgets/flight'
import { Footer } from '../../../widgets/footer'
import { Header } from '../../../widgets/header'
import { TariffForm } from '../../../widgets/tariff-form'

export const HomePage = () => {
	return (
	  <>
		<Header/>
		<div className='flex h-140'>
			<div className='flex z-20 justify-between w-full p-28 px-72'>
				<div>
					<h1 className='text-5xl font-bold mb-7'>
						Перевозка автомобилей <br /> 
						на автовозах Гранд Эрмий
					</h1>
					<h3 className='text-1.5xl font-normal mb-7 '>
						Без очередей на отправку, с гарантиями <br /> 
						и отслеживанием в пути в личном кабинете
					</h3>
					<Button styles='rounded-2xl bg-red-500 text-xl font-semibold text-white shadow-xs hover:bg-red-400  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 w-76 h-14'>
						Оставить заявку
					</Button>
				</div>
				<Flight horizontal={false}/>
			</div>
			<img src={MainImage} alt="" className='absolute left-4/12 z-0 w-8xl h-140'/>
		</div>
		<div className='flex flex-col px-72 py-[90px] w-full h-[747px]'>
			<h1 className='text-[44px] font-bold mb-7'>
				Выбирайте маршрут и смотрите расписание рейсов <br /> с ценами прямо сейчас
			</h1>
			<div className='flex mb-7'>
				<FlightCard icon={Car4Img}>
					Владивосток - Москва
				</FlightCard>
				<FlightCard icon={Car2Img}>
					Владивосток - Санкт-Петербург
				</FlightCard>
			</div>
			<div className='flex mb-7'>
				<FlightCard icon={Car1Img}>
					Владивосток - Краснодар
				</FlightCard>
				<FlightCard icon={Car3Img}>
					Владивосток - Новосибирск
				</FlightCard>
			</div>
			<Flight horizontal={true}/>
		</div>
		<div className='flex flex-col justify-center items-center mb-24'>
			<h1 className='text-[44px] font-bold mb-7'>
				Гранд Эрмий выбирают за преимущества
			</h1>
			<div className='flex flex-row'>
				<div className='text-xl font-semibold'>
					<TariffCard icon={Calender} stylesIcon='mt-4'>
						<p>
							Нет очередей,<br />можно забронировать<br />заранее
						</p>
					</TariffCard>
					<TariffCard icon={Shield} stylesIcon='mb-1'>
						<p>
							Отвечаем<br />за мелкие сколы <br />и царапины
						</p>
					</TariffCard>
					<TariffCard icon={Mobile} stylesIcon='mt-1'>
						<p>
							Отслеживайте<br />Ваш авто<br />в личном кабинете
						</p>
					</TariffCard>
				</div>
				<TariffForm/>
			</div>
			
		</div>
		<Footer/>
	  </>
	)
}
  