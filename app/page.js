import ContractTracker from "./components/contractTracker/contractTraker";
import ContractDeliverables from "./components/contractDeliverables/contractDeliverables";
import ContractSummary from "./components/contractSummary/ContractSummary";
export default function Home() {
  return (
    <div className="main-layout flex flex-col lg:flex-row">
      <div className="container p-4 lg:p-6 space-y-6 lg:space-y-0  lg:w-[72%]">
        <ContractTracker />
        <ContractDeliverables />
      </div>
      {/* ContractSummary moves below on smaller screens */}
      <div className="w-full lg:w-[28%] p-4 lg:p-6">
        <ContractSummary />
      </div>
    </div>
  );
}
