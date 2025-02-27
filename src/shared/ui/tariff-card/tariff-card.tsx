import { JSX } from 'react'

interface ITariffCardProps{
	children: JSX.Element,
	icon: string,
	stylesIcon?: string
}

export const TariffCard = ({children, icon, stylesIcon}: ITariffCardProps) => {
	return (
	  <div className='flex items-center bg-[#E2E3EE] w-[460px] h-[185px] mb-5 rounded-3xl justify-between px-4'>
	  	{children}
		<img src={icon} alt="" className={stylesIcon}/>
	  </div>
	)
}