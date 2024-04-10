type ContainerProps<T extends React.ElementType> =  {
    component?: T,
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<T>

function Container<T extends React.ElementType>({component, children, ...props}: ContainerProps<T>) {
    let Component = component || 'div'
    
  return (
    <Component {...props}></Component>
  )
}

export default Container