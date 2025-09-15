import CommonLayout from "./components/layout/CommonLayout";
import { Outlet } from "react-router";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <CommonLayout>
      <Toaster position="top-center"></Toaster>
      <Outlet></Outlet>
    </CommonLayout>
  );
}

export default App;
