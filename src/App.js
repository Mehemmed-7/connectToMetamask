import "./app.css";
import Button from "./component/Button";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

const getLibrary = (provider) => {
  return new Web3(provider);
}
const addClassName = (active) => {
  if(active){
    document.body.classList.add('active');
  }else{
    document.body.classList.remove('active');
  }
}

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Button addClassName = {addClassName} />
      </div>
    </Web3ReactProvider>
  );
};

export default App;
