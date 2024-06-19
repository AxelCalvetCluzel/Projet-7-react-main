
import data from "../data.json";
const App = () => {
  return (
    <div>
      <h1>image de l'appli</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age}
          </li>
        ))} </ul>
    </div>
  );
}

export default App;