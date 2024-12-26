import { Outlet } from "react-router-dom";
import type { FunctionComponent } from "../common/types";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

const Root = (): FunctionComponent => {
	return (
		<div className="min-h-screen bg-background  flex flex-col">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
