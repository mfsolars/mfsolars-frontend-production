import "./NotFound.css";

import { Link } from 'react-router-dom';

function NotFound() {
    return ( <>
    <div className="main-page-wrapper mfsolars-8s4lA" style={{ marginTop: "2rem" , padding:"1rem 0", backgroundColor:"white"}}>
  <div className="container">
    <div className="row content-layout-wrapper align-items-start">
      <div className="site-content col-12" role="main">
        <header className="page-header">
          <h3 className="title">Not Found</h3>
        </header>
        <div className="page-content">
          <h1>This is somewhat embarrassing, isn’t it?</h1>
          <p>
            It looks like nothing was found at this location. Maybe try a
            search?
          </p>
          <Link to="/products/shop" style={{ textDecoration: "underline"}}>Want to look for something great. Let's go shop</Link>
        </div>
      </div>
    </div>
  </div>
</div>
</> );
}

export default NotFound;