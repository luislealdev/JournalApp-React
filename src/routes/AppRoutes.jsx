import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import {Loading} from '../ui/components'

export const AppRoutes = () => {

  const {status} = useSelector(state=>state.auth)
  if(status=='checking') return <Loading/>
  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes/>}/>

        <Route path="/*" element={<JournalRoutes/>}/>
    </Routes>
  )
}
