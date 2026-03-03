import ListGroup from './components/ListGroup';
import PassingDataUsingProps from './components/PassingDataUsingProps';
import PassingFunctionUsingProps from './components/PassingFunctionUsingProps';
import Alert from './components/alert';
import Button from './components/Button';


function App() {
     let items = ['India', 'London', 'Newyork'];


     const countryList = ["India", "USA", "Germany"];
     const handleCountryClick = (selectedCountry: string) => {alert("You selected: " + selectedCountry);};


  return (
    <div>
      <ListGroup />
      <PassingDataUsingProps items = {items} heading="Cities"/>
      <PassingFunctionUsingProps  title="Passing Function Using Props" items={countryList} onItemClick={handleCountryClick}></PassingFunctionUsingProps>
      <Alert> 
        Hello World 
        <h2>You Selected a Country</h2>
      </Alert>
      <Button onClick={() => alert("Button Clicked!")}> Click Me </Button>
    </div>
  );
   
}

export default App
