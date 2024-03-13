import { Outlet, useNavigation } from "react-router-dom";

import Loader from "./Loader";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  // Hook to know the status of the page (loading / idle)
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <h1>Content</h1>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
