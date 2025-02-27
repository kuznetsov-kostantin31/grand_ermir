interface IButtonProps {
	children: string,
	styles?: string
}

export const Button = ({children, styles}: IButtonProps) => {
	return (
		<button
			type="submit"
			className={styles || "rounded-2xl bg-amber-500 text-[20px] font-medium text-white shadow-xs hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 w-80 h-14"}
		>
			{children}
	  </button>
	)
}