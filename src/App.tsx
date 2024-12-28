import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Departures from "./Departures";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Departures />
    </QueryClientProvider>
  );
}

export default App;
