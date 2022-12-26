import './App.css';
import SelectBox from './components/SelectBox';

function App() {
  const options = [
    { label: 'Russia', value: 'Russia' },
    { label: 'Russian Federation', value: 'Russian Fedration' },
    { label: 'Russia', value: 'Russia' },
    { label: 'Russian Federation', value: 'Russian Fedration' },
    { label: 'Russia', value: 'Russia', description: 'Lorem ipsum dolor sit amet, consectetur' },
    { label: 'Russian Federation', value: 'Russian Fedration' },
    { label:'A' ,  value:'A'},
    { label:'B' ,  value:'B'},
    { label:'C' ,  value:'C'},
    { label:'D' ,  value:'D'},
    { label:'E' ,  value:'E'},
    { label:'F' ,  value:'F'},
    { label:'G' ,  value:'G'},
    { label:'H' ,  value:'H'},
    { label:'I' ,  value:'I'},
    { label:'J' ,  value:'J'},
  ]
  return (
    <div className="App">
      <SelectBox 
        label={'Label'} 
        helperText={'Please enter the text'} 
        options={options} 
        multi={true}
        searchable={true}  
        cleareable={true}
      />
    </div>
  );
}

export default App;
