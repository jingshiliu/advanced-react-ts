import Input from "./components/Input";

function App() {
  const Comp = 'input'
  return (
    <>
      <Input label="Name" type="text" id='name'></Input>
      <Input label="Age" type="number" id='age'></Input>
      <Comp />
    </>
  );
}

export default App;
