export const Checkbox = () => {
	return (
		<div className="flex h-8 shrink-0 items-center">
            <div className="group grid size-5 grid-cols-1">
                <input
                    defaultChecked
                    id="comments"
                    name="comments"
                    type="checkbox"
                    aria-describedby="comments-description"
                    className="col-start-1 row-start-1 appearance-none  border border-gray-300 bg-white checked:border-black checked:bg-white indeterminate:border-indigo-600 indeterminate:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                />
                <svg
                    fill="none"
                    viewBox="0 0 14 14"
                    className="pointer-events-none col-start-1 row-start-1 size-4 self-center justify-self-center stroke-black group-has-disabled:stroke-gray-950/25"
                >
                    <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-checked:opacity-100"
                    />
                    <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-indeterminate:opacity-100"
                    />
                </svg>
            </div>
        </div>
	)
}