import { ChangeEvent } from 'react'
import { Input, Select } from '../../../shared/ui'

interface IInputPhoneProps {
	phoneCountry: string[],
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
}

export const InputPhone = ({...props}: IInputPhoneProps) => {

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.setValue(e.target.value)
	}

	const selectStyle = 'col-start-1 row-start-1 w-full appearance-none rounded-md  text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 pl-3 bg-[#FEF5EF]'
	return (
		<div className='flex bg-[]'>
			<Select options={props.phoneCountry} defaultValue={props.phoneCountry[0]} horizontal={false} styles={selectStyle} width='w-[135px]'/>
			<Input type='text' placeholder='Введите номер' onChange={handleNameChange} value={props.value}/>
		</div>
	)
}