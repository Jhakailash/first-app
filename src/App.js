import logo from './logo.svg';
import './App.css';

import Logo from './component/logo/logo';
import Link from './component/link/link';
import Button from './component/button/button';
function App() {
  const arr=["Services","Projects","About"];
  return (
    <div className="App">
     <div className="container">
       <Logo/>
        <div className='link'>
          {
            arr.map(name=>{
              return <Link key={name} name={name}/>

            })
          }
           
        </div>
        
       <Button/>



     </div>
    </div>
  );
}

export default App;
