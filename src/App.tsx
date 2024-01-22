import "./App.css";
import NavBar from "./components/NavBar";
import OverView from "./components/OverView";
import SideBarMenu from "./components/SideBarMenu";
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <div className="flex min-w-full h-full">
        <div>
          <SideBarMenu />
        </div>
        <div className="w-full">
          <div className="ml-6 p-3">
            <NavBar />
          </div>
          <div className="border-b-2 border-outlineGrey"></div>
          <div className="ml-6 p-3 mt-4">
            <OverView />
          </div>
          <div className="ml-4 p-1 mt-4 ">
            <Transactions />
          </div>
          <div className="text-center">
            Made by{" "}
            <div className="text-[#7e22ce] font-bold text-xl inline-flex p-2">
              <a href="https://twitter.com/basavaraj9600" target="_blank">
                Basavaraj
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
