import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import { GlobalProvider } from "../contexts/GlobalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function AppRouter() {
  console.log("AppRouter rendered");
  return (
    <BrowserRouter basename="/TgBot-frontend">
      <GlobalProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </QueryClientProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}
