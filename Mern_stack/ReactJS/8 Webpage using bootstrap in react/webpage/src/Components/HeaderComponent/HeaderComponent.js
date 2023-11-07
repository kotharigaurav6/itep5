
import logo from '../../images/logo.jpg';

function HeaderComponent(){
    return(<>
         <div id="header">
            <img src={logo} id="logo" alt=""/>
             {/* <span id="heading">SuperMarket</span>  */}
        </div>
    </>);
}

export default HeaderComponent;