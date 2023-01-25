
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import EventListPage from "./pages/EventListPage";
import EventPage from "./pages/EventPage";
import NavBar from "./components/Header";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
          <Routes>
            <Route path="/event-list" element={<EventListPage />} />
          </Routes>
          <Routes>
            <Route path="/event/:id" element={<EventPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
