interface IFlightCardProps{
	children: string,
	icon: string
}

export const FlightCard = ({children, icon}: IFlightCardProps) => {
	return (
	  	<div className='flex items-center p-3 text-[24px] font-bold underline shadow-lg w-[648px] h-[120px] rounded-[30px] mr-7'>
			<img src={icon} alt="" className='mr-3'/>
	  		{children}
	  	</div>
	)
}