import { Select } from '../../../shared/ui'

const options: string[] = ['Выберите город', 'Москва', 'Новосибирск']

export const Flight = () => {
	return (
		<>
			<h1>Flight</h1>
			<Select options={options}/>
		</>
	)
}