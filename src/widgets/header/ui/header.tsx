import Logo from '../../../shared/assets/icons/logo_black 1.svg'
import { Button } from '../../../shared/ui'

export const Header = () => {
	return (
	  <header className='flex w-full h-18 py-3 px-16 justify-between items-center'>
		<img src={Logo} alt="" />
		<a href="" className='text-sm font-medium'>Маршруты автовозов</a>
		<a href="" className='text-sm font-medium'>Текст договора</a>
		<a href="" className='text-sm font-medium'>Контакты</a>
		<a href="" className='text-sm font-medium'>О компании</a>
		<div>
			<h2 className='font-semibold'>+7 964 451-26-94</h2>
			<p className='text-xs'>г. Владивосток</p>
		</div>
		<Button styles='rounded-2xl bg-white text-sm font-normal text-black shadow-xs hover:bg-white  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-40 h-10 border-black border-2'>
			Отследить заказ
		</Button>
	  </header>
	)
}
  