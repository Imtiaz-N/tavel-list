import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="app">
      <Logo />;
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
