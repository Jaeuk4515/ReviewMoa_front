export default function Button({...props}) {
	return (
		<button {...props}>{props.children}</button>
	)
}