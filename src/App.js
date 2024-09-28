import Body from './components/Bodyody';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
function App() {
//  async function api(){
//   const data= await fetch('https://m.youtube.com/youtubei/v1/browse?prettyPrint=false');
//   const products = await data.json();
// console.log(products);
// }
//api();
  return (
    <div className="App">
    <Header/>
    <Body/>
    </div>
  );
}

export default App;
