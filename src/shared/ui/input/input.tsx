import { ChangeEvent } from 'react'

interface InputProps {
	type: 'text' | 'number' | 'email' | 'password'
	value: string | number
	placeholder?: string
	error?: boolean
	disabled?: boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
  }

export const Input = ({...props}: InputProps) => {
	return (
		<input
			type={props.type}
			value={props.value}
			placeholder={props.placeholder}
			onChange={props.onChange}
			disabled={props.disabled}
			className='col-start-1 row-start-1 w-[320px] appearance-none rounded-md  text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 pl-3 bg-[#FEF5EF] h-[48px]'
		/>
	)
}