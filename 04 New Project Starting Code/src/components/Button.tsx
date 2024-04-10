type ButtonProps =
  | ({
      el: "button";
    } & React.ComponentPropsWithoutRef<"button">)
  | ({
      el: "a";
    } & React.ComponentPropsWithoutRef<"a">);

function Button(props: ButtonProps) {
  if (props.el === "a") {
    return <a {...props}></a>;
  }

  return <button {...props}></button>;
}

export default Button;
