import { Button, Select } from '../../../shared/ui'

interface IFlightProps {
	horizontal: boolean
}

export const Flight = ({horizontal}: IFlightProps) => {
	const options: string[] = [
		'Выберите город',
		'Владивосток',
		'Москва',
		'Новосибирск',
	]

	const verticalStyle = 'flex flex-col justify-center items-center w-92 h-60 bg-orange-100 rounded-3xl p-1 shadow-lg'

	const horizontalStyle = 'flex flex-row justify-center items-center w-[1290px] h-25 bg-orange-100 rounded-3xl p-1 shadow-lg'

	return (
		<form className={horizontal ? horizontalStyle : verticalStyle}>
			<Select options={options} defaultValue={options[0]} horizontal={horizontal}/>
			<Select options={options} defaultValue={options[0]} horizontal={horizontal}/>
			<Button>Смотреть цены и рейсы</Button>
		</form>
	)
}
