import './App.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import {
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

    <div className="App wrapper">
      <Sidebar />
      <div className="content-wrapper d-flex flex-column">
        <div className="content">
          <Topbar />
          <Switch>
            <UserProvider>
              <ProductProvider>
                <Route path="/users" component={Users} exact />
                <Route path="/createuser" component={CreateUser} exact />
                <Route path="/users/edit/:id" component={Editusers} exact />
                <Route path="/products" component={Products} exact />
                <Route path="/createproducts" component={CreateProducts} exact />
                <Route path="/products/edit/:id" component={Editproducts} exact />
                <Route path="/" component={Dashboard} exact />
              </ProductProvider>
            </UserProvider>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
