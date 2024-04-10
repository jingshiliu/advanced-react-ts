

type Props = {
    label: string,
    id: string,
} & React.ComponentPropsWithoutRef<'input'>

function Input({label, id, ...props}: Props) {
  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} {...props}/>
    </p>
  )
}

export default Input