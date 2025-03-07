import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./shared/Router";

const queryClent = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClent}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
