import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import Main from "./Main";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  </QueryClientProvider>
);
