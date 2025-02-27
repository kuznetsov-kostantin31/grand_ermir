import { ChevronDownIcon } from '@heroicons/react/16/solid'

interface ISelectProps {
	options: string[],
	defaultValue?: string,
	horizontal: boolean,
	styles?: string,
	width?: string
}

export const Select = ({options, defaultValue, horizontal, styles, width}: ISelectProps) => {

	const verticalStyle = `grid shrink-0 grid-cols-1 focus-within:relative bg-white rounded-2xl h-12 mb-4 ${width ? width : 'w-80'} mr-3`

	const horizontalStyle = 'grid shrink-0 grid-cols-1 focus-within:relative bg-white rounded-2xl w-[413px] h-12 mr-7'

	return (
		<div className={horizontal ? horizontalStyle : verticalStyle}>
		<select
		  id="currency"
		  name="currency"
		  aria-label="Currency"
		  className={styles || "col-start-1 row-start-1 w-full appearance-none rounded-md  text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 pl-3"}
		>
			{options.map(o => (
				<option disabled={o === defaultValue ? true : false} >{o}</option>
			))}
		  
		</select>
		<ChevronDownIcon
		  aria-hidden="true"
		  className="pointer-events-none col-start-1 row-start-1 mr-2 size-8 self-center justify-self-end text-gray-500 sm:size-4"
		/>
	  </div>
	)
}