import YoutubeIcon from '../../../shared/assets/icons/Youtube.svg'
import GmailIcon from '../../../shared/assets/icons/gmail.svg'
import TelegramIcon from '../../../shared/assets/icons/telegram.svg'
import VKIcon from '../../../shared/assets/icons/vk.svg'
import WhatsAppIcon from '../../../shared/assets/icons/whatsapp.svg'
import ResponsesImg from '../../../shared/assets/imgs/responses.svg'
import { Button } from '../../../shared/ui'


export const Footer = () => {
	return (
		<footer className='w-full h-[491px] bg-[#EDEEF5] px-[280px] py-7'>
			<div className='flex justify-between mb-20 mt-8'>
				<div>
					<img src={ResponsesImg} alt="" />
				</div>
				<div>
					<h2 className='text-base font-semibold mb-4'>Адрес</h2>
					<p className='mb-4'>
						г.Владивосток, ул. <br /> Нижнепортовая 1а, офис <br /> 109
					</p>
					<div className='flex mb-4'>
						<img src={WhatsAppIcon} alt="" className='mr-2'/>
						<p>
							+7 (964) 451-26-94 <br /> отдел продаж
						</p>
					</div>
					<div className='flex mb-4'>
						<img src={GmailIcon} alt="" className='mr-2'/>
						<p>
							grandermii@gmail.com <br /> e-mail компании
						</p>
					</div>
				</div>
				<div className='flex flex-col'>
					<h2 className='text-base font-semibold mb-4'>Перевозка авто</h2>
					<a href="" className='mb-3'>Маршруты автовозов</a>
					<a href="" className='mb-3'>Текст договора</a>
					<a href="" className='mb-3'>Контакты</a>
					<a href="" className='mb-3'>О компании</a>
				</div>
				<div className='flex flex-col'>
					<h2 className='text-base font-semibold mb-4'>Популярные<br />направления</h2>
					<a href="" className='mb-3'>Автовозы в Москву</a>
					<a href="" className='mb-3'>Автовозы в Санкт-Петербург</a>
					<a href="" className='mb-3'>Автовозы в Краснодар</a>
					<a href="" className='mb-5'>Автовозы в Новосибирск</a>
					<Button styles='rounded-2xl bg-none text-sm font-normal text-black shadow-xs hover:bg-white  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-40 h-10 border-black border-2'>
						Отследить заказ
					</Button>
				</div>
				<div>
					<h2 className='text-base font-semibold mb-4'>Соцсети</h2>
					<div className='flex'>
						<img src={YoutubeIcon} alt="" className='mr-2'/>
						<p>Youtube</p>
					</div>
					<div className='flex'>
						<img src={TelegramIcon} alt="" className='mr-2'/>
						<p>Telegram</p>
					</div>
					<div className='flex'>
						<img src={VKIcon} alt="" className='mr-2'/>
						<p>Вконтакте</p>
					</div>
				</div>
			</div>
			<div>
				<hr className='h-[3px] border-gray-500'/>
				<div className='flex items-center justify-between mt-5'>
					<h3>
						© 2024 Гранд Эрмий. Все права защищены. Торговая марка №1055640
					</h3>
					<h3>
						ИНН 2540263030 | ОГРН 1212500019038
					</h3>
					<h3>
						Цены на сайте не являются офертой
					</h3>
				</div>
			</div>
		</footer>
	)
}