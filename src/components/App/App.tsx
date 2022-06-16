import { Card } from '../../components/Card/Card';
import { data } from '../../assets/data';


const cards = data.map(item => <Card key={item.id} {...item}/>);

function App() {
  return (
    <main className="app">
      <h1 className="visually-hidden">Интернет-магазин товаров для животных</h1>
      <h2 className="app__heading">Ты сегодня покормил кота?</h2>
      <ul className="catalog">{cards}</ul>
    </main>
  );
}

export default App;
