import './App.css';
import HomeContainer from './Container/HomeContainer';
import iphone from './iphone.png'
import sumsung from './samsung.png'
import plus from './1plus.png'


const data = [
  {
    image: iphone,
  name:'IPHONE 14 PRO',
  price:"3000$"
},
  {
    image: sumsung,
  name:'GALAXY S22',
  price:"2800$"
},
  {
    image: plus,
  name:'1PLUS 8T',
  price:"1100$"
}
];

function App() {

  return (
    <div className="App">
    <HomeContainer data={data}/>

    </div>
  );
}

export default App;
