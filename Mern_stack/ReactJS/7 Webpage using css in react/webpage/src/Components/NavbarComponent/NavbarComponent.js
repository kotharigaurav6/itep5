import hum from '../../images/hum.png';

function NavbarComponent(){
    return (<>
            <div id="nav">
            <input type="checkbox" id="humber" />
            <label for="humber"><img src={hum} height="30" width="30" alt="" /></label>

            <ul>
                <li><a href="webpage.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="product.html">Product &#9662;</a>
                    <ul>
                        <li><a href="">Vegetables</a><br/></li>
                        <li><a href="">Fruits</a><br/></li>
                        <li><a href="">Dry Fruits</a><br/></li>
                        <li><a href="">Grocery</a><br/></li>
                        <li><a href="">Drinks</a><br/></li>
                    </ul>
                </li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="signin.html">SignIn</a></li>
            </ul>

        </div>

    </>);
}

export default NavbarComponent;