import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./defaultLayout";
import { HomePage } from "./pages/home";
import { AppPhonePage } from "./pages/home/AppPhone";
import { HotelPage } from "./pages/home/Hoteis";

export function Router() {
    return(
        <Routes>
         <Route path="/" element={<DefaultLayout/>}>
         <Route path="/" element={<HomePage/>}></Route>
        <Route path="/AppPhone" element={<AppPhonePage/>}> </Route>
        <Route path="/Hoteis" element={<HotelPage/>}> </Route>
         </Route>
        </Routes>
    )
}