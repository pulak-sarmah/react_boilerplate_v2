import type { FunctionComponent } from "@/common/types";
import { Link } from "react-router-dom";

const BrandLogo = (): FunctionComponent => {
	return (
		<div>
			<Link className="flex items-center py-4 px-2" to="/">
				<span className="font-semibold text-foreground text-lg text-white">
					Brand
				</span>
			</Link>
		</div>
	);
};

export default BrandLogo;
