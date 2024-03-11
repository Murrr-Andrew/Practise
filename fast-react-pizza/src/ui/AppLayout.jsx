import { Outlet, useNavigation } from "react-router-dom";

import Loader from "./Loader";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  // Hook to know the status of the page (loading / idle)
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
