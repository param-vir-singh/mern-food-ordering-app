import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./components/component_pages/UserProfilePage";
import Layout from "./layouts/layout";
import Root1 from "./components/component_pages/Root";
import Auth0ProviderwithNavigate from "./auth/Auth0ProviderwithNavigate";

const router = createBrowserRouter([
  {
    // path: "/",
    element: (
      <Auth0ProviderwithNavigate>
        <Layout>
          <Root1></Root1>
        </Layout>
      </Auth0ProviderwithNavigate>
    ),
    // errorElement: <>PAGE NOT FOUND!</>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        errorElement: <>PAGE AFTER ÍUSER PROFILE PAGE NOT FOUND</>,
      },
      {
        path: "user-profile",
        element: <UserProfilePage />,
        errorElement: <>PAGE AFTER ÍUSER PROFILE PAGE NOT FOUND</>,
      },
    ],
  },
]);

export default router;
