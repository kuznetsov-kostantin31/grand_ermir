import { useState } from 'react'
import { Button, Checkbox, Select } from '../../../shared/ui'
import { InputPhone } from '../../input-phone'

export const TariffForm = () => {
	const brands = ['Марка', 'Audi']
	const models = ['Модель', 'A4']
	const generation = ['Поколение', '2009-2011']
	const series = ['Серия', '1']
	const whereFrom = ['Откуда', 'Владивосток']
	const whereTo = ['Куда', 'Москва']
	const phoneCountry = ['Страна', 'Россия']

	const [name, setName] = useState('')

	const selectStyle = 'bg-[#FEF5EF] col-start-1 row-start-1 w-full appearance-none rounded-md  text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 pl-3 '

	return (
		<form className='flex flex-col w-[542px] h-[597px] rounded-[20px] shadow-2xl p-3 items-center ml-8'>
			<h1 className='text-[32px] text-amber-500 font-semibold my-4'>
				Пришлем тариф за 2 минуты!
			</h1>

			<div className='flex'>
				<Select options={brands} defaultValue={brands[0]} horizontal={false} styles={selectStyle} width='w-[227px]'/>
				<Select options={models} defaultValue={models[0]} horizontal={false} styles={selectStyle} width='w-[227px]'/>
			</div>

			<Select options={generation} defaultValue={generation[0]} horizontal={false} styles={selectStyle} width='w-[467px]'/>
			<Select options={series} defaultValue={series[0]} horizontal={false} styles={selectStyle} width='w-[467px]'/>

			<div className='flex'>
				<Select options={whereFrom} defaultValue={whereFrom[0]} horizontal={false} styles={selectStyle} width='w-[227px]'/>
				<Select options={whereTo} defaultValue={whereTo[0]} horizontal={false} styles={selectStyle} width='w-[227px]'/>
			</div>

			<InputPhone phoneCountry={phoneCountry} value={name} setValue={setName}/>

			<div className='flex items-center justify-items-start w-full ml-12 my-3.5'>
				<Checkbox/>
				<h2 className='ml-4'>
					Согласен с <line className='underline'>политикой конфиденциальности</line>
				</h2>
			</div>

			<Button styles='rounded-2xl bg-red-500 text-[16px] font-medium text-white shadow-xs hover:bg-red-400  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 w-[470px] h-14'>
				Выслать тариф в WhatsApp
			</Button>
		</form>
	)
}