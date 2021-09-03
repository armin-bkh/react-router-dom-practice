import { Route } from "react-router-dom"
import Dashboard from "../Components/Dashboard/Dashboard";
import Downloads from "../Components/Downloads/Downloads";
import SideBar from "../Components/SideBar/SideBar"

const Profile = () => {
    return ( 
        <section>
        <h1>
            Hello dear Armin
        </h1>
        <SideBar />
        <Route path="/profile/dashboard" component={Dashboard} />
        <Route path="/profile/downloads" component={Downloads} />
        </section>
     );
}
 
export default Profile;