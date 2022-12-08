import Header from "./Components/Header";
import Calendar from "./Calendar/Calendar"
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="flex flex-col md:flex-row">
        <Calendar/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
