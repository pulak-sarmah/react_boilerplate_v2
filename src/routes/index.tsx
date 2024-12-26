import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Root from "../layout/Root";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "/login", element: <Login /> },
		],
	},
]);
