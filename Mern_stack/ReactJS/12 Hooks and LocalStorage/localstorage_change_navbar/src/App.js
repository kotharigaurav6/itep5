import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (<>
{/* Must Remember : component will only render when its path match.
    In case of default route(/) or root route(/) when we hit localhost:3000,
    <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
    </Routes>
    none of the component is going to be render,because it searches for root route(/) which is not found. so recomemded approach is to use root route(/) in routes like this : 
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
    </Routes>
    
*/}
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
    </Routes>
  </>);
}

export default App;

/*
The order in which components run in a React application is determined by the component hierarchy and the routes defined in your application. In the provided code, the Navbar component and the components specified in the Routes will run based on the route that is active.

The Navbar component itself doesn't dictate the order in which other components run. Instead, the order is determined by the route specified in the URL. If the URL initially matches a route that corresponds to the Registration component, then the Registration component will be rendered and run.

In your code:

<Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/registration" element={<Registration />} />
</Routes>
If the URL is initially set to /registration, the Registration component will be the first one to run. The Navbar component, being a part of your application layout, will run whenever the page renders, regardless of the specific route.

If you are observing unexpected behavior, you might want to check the initial URL and the initial state of your application. Additionally, you may want to inspect the localStorage values and any logic that might be modifying them in your components. If you have any specific issues or concerns, providing more details could help in providing a more accurate solution.

Note : 
Its a good practice to put default route(/) or root route(/) in <Routes> for proper rendering of components..In this example , when App components render, then firstly Navbar component gets executed and inside that useEffect hook is present which contains callback, so mean while when that callback executes , during that process <Routes> component gets executes and it renders the component according to matched route. And when that matched route executes the component and inside that component if we set localstorage then the value of that localstorage is going to be in use by the statement localStorage.getItem() which is present inside setInterval of Navbar component and according to that it shows result.

*/
