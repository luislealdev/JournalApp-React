import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes/>}/>

        <Route path="/*" element={<JournalRoutes/>}/>
    </Routes>
  )
}
