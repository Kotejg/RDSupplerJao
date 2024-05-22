import { Switch, Route } from "react-router-dom"
import Home from './pages/home/Home'


export const Routes = () => {
    return (
        <Switch>
            <Route path="/home" component={Home}/>
        </Switch>
    )
}