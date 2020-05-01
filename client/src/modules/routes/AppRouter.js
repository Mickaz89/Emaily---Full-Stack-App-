import React, {Suspense, useEffect, useState} from 'react';
import {BrowserRouter , Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Login from "../../components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../../components/DashboardLayout";
import LoadingProgress from "../../components/LoadingProgress";
import {fetchUser} from "../../actions";
import styles from '../../components/styles/AppRouter.module.css'
import {history} from "./history";


const AppRouter = ({fetchUser,auth}) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        fetchUser();
        setTimeout(()=>{
            setLoading(false);
            setAuthenticated(true);
        },3000)
    }, []);


    console.log("App Router Signed in " ,authenticated);
        if(loading){
            return <h1>Loading</h1>;
        }
        if(authenticated && auth){
            return (
                <BrowserRouter>
                    <Suspense fallback={<LoadingProgress/>}>
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to={authenticated ? '/dashboard' : '/login'}/>}/>
                            <Route exact path="/login" component={Login} />
                            <PrivateRoute exact path="/dashboard"  authenticated ={authenticated}><DashboardLayout/></PrivateRoute>
                        </Switch>
                    </Suspense>
                </BrowserRouter>
            );
        }
    return <Login />



};

function mapStateToProps({ auth }) {
    return { auth } ;
}
const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser())
});
export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);