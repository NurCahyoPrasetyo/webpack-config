import "../styles/index.scss";
import Recipes from "./Recipes";

function App() {
  return (
    <>
      <section className="hero">
        <main>
          <section>
            <h1>Oh Hai, React</h1>
          </section>
        </main>
        <Recipes />
      </section>
    </>
  );
}

export default App;
