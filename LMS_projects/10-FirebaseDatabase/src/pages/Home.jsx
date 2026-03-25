// src/pages/Home.jsx
import Header from "../components/Header";
import DataForm from "../components/DataForm";
import DataList from "../components/DataList";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <DataForm />
      <DataList />
    </div>
  );
}