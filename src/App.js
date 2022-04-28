import './App.css';
import Top_navbar from './components/top_navbar/Top_navbar';
import Side_navbar from './components/Side_navbar/Side_navbar'
import Table from './components/Table/Table';
function App() {
  return (
    <div className="Dashboard">
      <Side_navbar/>
      <div className="page">
        <Top_navbar/>
        <Table/>
      </div>
    </div>
  );
}

export default App;
