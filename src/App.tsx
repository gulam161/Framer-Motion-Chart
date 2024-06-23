import Table from "./components/Table";
import Doughnut from "./components/chart/Doughnut";
import PieChart from "./components/chart/Pie";

function App() {
  return (
    <div
      id="pdf"
      className="w-full h-screen flex flex-col justify-center items-center gap-y-6"
    >
      {/* <Table /> */}
      {/* <PieChart /> */}
      <Doughnut />
    </div>
  );
}

export default App;
