

const Button = () => {

  const handleClick = (event: MouseEvent<HTMLButtonElement, MouseEvent>) =>
    console.log("jack");

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Button;
