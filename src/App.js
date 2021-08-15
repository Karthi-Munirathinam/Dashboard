import './App.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Products from './Products';
import Users from './Users';
import CreateUser from './CreateUser';
import Editusers from './EditUser';
import { UserProvider } from './UsersContext';
import { ProductProvider } from './ProductsContext';
import CreateProducts from './CreateProducts';
import Editproducts from './Editproducts';


function App() {
  return (
    <Router>
      <div className="App wrapper">
        <Sidebar />
        <div className="content-wrapper d-flex flex-column">
          <div className="content">
            <Topbar />
            <Switch>
              <Route path="/" component={Dashboard} exact={true} />
              <UserProvider>
                <Route path="/users" component={Users} exact={true} />
                <Route path="/createuser" component={CreateUser} exact={true} />
                <Route path="/users/edit/:id" component={Editusers} exact={true} />
                <ProductProvider>
                  <Route path="/products" component={Products} exact={true} />
                  <Route path="/createproducts" component={CreateProducts} exact={true} />
                  <Route path="/products/edit/:id" component={Editproducts} exact={true} />
                </ProductProvider>
              </UserProvider>

            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
