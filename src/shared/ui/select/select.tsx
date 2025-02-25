import { ChevronDownIcon } from '@heroicons/react/16/solid'

interface ISelectProps {
	options: string[],
}

export const Select = ({options}: ISelectProps) => {

	return (
		<div className="grid shrink-0 grid-cols-1 focus-within:relative">
		<select
		  id="currency"
		  name="currency"
		  aria-label="Currency"
		  className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
		>
			{options.map(o => (
				<option disabled={o === 'Выберите город' ? true : false} >{o}</option>
			))}
		  
		</select>
		<ChevronDownIcon
		  aria-hidden="true"
		  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
		/>
	  </div>
	)
}