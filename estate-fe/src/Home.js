import './App.css';
import './Home.css';
import { Buffer } from 'buffer';
import WalletConnectProvider from "@maticnetwork/walletconnect-provider"
import Web3 from "web3"
import Matic from "maticjs"
Buffer.from('anything','base64');
window.Buffer = window.Buffer || require('buffer').Buffer;


const maticProvider = new WalletConnectProvider(
  {
    host: `https://rpc-mumbai.matic.today`,
    callbacks: {
      onConnect: console.log('connected'),
      onDisconnect: console.log('disconnected!')
    }
  }
)

const ropstenProvider = new WalletConnectProvider({
  host: `https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc`,
  callbacks: {
    onConnect: console.log('connected'),
    onDisconnect: console.log('disconnected')
  }
})

const maticWeb3 = new Web3(maticProvider)
const ropstenWeb3 = new Web3(ropstenProvider)

const contract = require("./MyNFT.json");
const myContractAddress = '0x52411F6Eada3408259Da3BBa8C48e343dAeCEc31';
const myContractAbi = contract.abi;
const myContractInstance = maticWeb3.eth.contract(myContractAbi, myContractAddress)
const myContractInstanceW = ropstenWeb3.eth.contract(myContractAbi, myContractAddress)


console.log(myContractAbi)

const tx = {
  from: '',
  to: myContractAddress,
  gas: 800000,
  data: '',
}

window.a = myContractInstance
window.m = maticWeb3
window.w = ropstenWeb3

const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <h1 style={{color: 'DarkBlue', fontSize: '60px'}}>Taiwan ESTATE</h1>
        </div>
        <div>
          <h2 style={{color: 'Indigo'}}>
            {/* Taiwan ESTATE */}
          </h2>
        </div>
      </header>
      <article className='App-article'>
        <div className='row'>
          <section className='col-lg-6 col-md-12'>
            <h2 style={{textAlign: 'center'}}>Test taiwan estate NFT</h2>
          </section>
          <section className='col-lg-6 col-md-12'>
            <div className='d-flex justify-content-center align-items-center' style={{width: '100%', height:'50%', minHeight: '120px'}}
              onClick={()=>{
                console.log(myContractInstance)
              }}>
              <button className='btn btn-warning btn-enter'>Test</button>
            </div>
            <div style={{height:'50%'}}>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

export default Home;
