import './App.css';

function App() {
  const name = 'tube';
  const list = ['우유', '빵', '커피'];
  return(
  <>
    <h1>hello</h1>
    <h2>hello {name}</h2>
    <ul>
      {
        list.map((item => (
          <li>{item}</li> 
        )))
      }
    </ul>
  </>);
};

export default App;
