import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { FunctionComponent } from "./common/types";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const queryClient = new QueryClient();

const App = (): FunctionComponent => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
