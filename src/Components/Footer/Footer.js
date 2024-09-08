import React from 'react';
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import footerlogo from '../../assets/companylogo/white5122.png'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  return (
    <>
      <footer className="bg footerhere">
        <div className="container py-4">
          <div className="row py-3">

          <div className="col-lg-5 col-md-6 mb-lg-0">
          <img src={footerlogo} alt="ProductXperts Logo" style={{ maxHeight: '65px', marginRight: '10px' }} />
              <p className=" mb-4" style={{color: 'whitesmoke' , font: 'Roboto' , fontWeight: '500', fontSize: '15px'}}>  Building Bridges Between Ideas and Impact.</p>
              <a href="https://www.linkedin.com/company/productxperts/about/" target='blank'><LinkedInIcon style={{color: 'whitesmoke'}} /></a>


              <ul className="list-inline mt-4">
                <li className="list-inline-item" ><a href="#" target="_blank" title="twitter"><i className="fab  fa-2x fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fab fa-2x fa-facebook-f"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fab fa-2x fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fab fa-2x fa-youtube"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fab fa-2x fa-google"></i></a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4" style={{color: 'white'}}>CONSULTING</h6>
              <ul className="list-unstyled mb-0">
              <Link to="./Productstrategy" style={{textDecoration: 'none'}} onClick={scrollToTop} >
                <li className="mb-2"><a href="" className="" style={{textDecoration: 'none', color: 'whitesmoke', fontSize:'13px'}}>PRODUCT STRATEGY</a></li></Link>

                <Link to='./Projectsaving' style={{textDecoration: 'none'}}onClick={scrollToTop} >
                <li className="mb-2"><a href="" className="" style={{textDecoration: 'none', color: 'whitesmoke' , fontSize:'13px'}}>PROJECT SAVING</a></li></Link>
                
                <Link to="./Customerdevelopment" style={{textDecoration: 'none'}} onClick={scrollToTop}>
                <li className="mb-2"><a href="#" className="" style={{textDecoration: 'none', color: 'whitesmoke' , fontSize:'13px'}}>CUSTOMER DEVELOPMENT</a></li></Link>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4" style={{color: 'white'}}>TRAINING</h6>
              <ul className="list-unstyled mb-0">

              <Link to="./IntroductiontoPM" style={{textDecoration: 'none'}} onClick={scrollToTop}>
                <li className="mb-2"><a href="#" className="" style={{textDecoration: 'none', color: 'whitesmoke' , fontSize:'13px'}}>INTRODUCTION TO PM</a></li></Link>

                <Link to="./PMforFounders"  style={{textDecoration: 'none'}} onClick={scrollToTop}>
                <li className="mb-2"><a href="#" className="" style={{textDecoration: 'none', color: 'whitesmoke' , fontSize:'13px'}}>PM FOR FOUNDERS</a></li></Link>

                <Link to="./AdvancedPM" style={{textDecoration: 'none'}}onClick={scrollToTop} >
                <li className="mb-2"><a href="#" className="" style={{textDecoration: 'none', color: 'whitesmoke' , fontSize:'13px'}}>ADVANCED PM</a></li></Link>
              </ul>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4" style={{color: 'white'}}>COACHING</h6>
              <ul className="list-unstyled mb-0">

              <Link to='/Productmanagementforpm' style={{textDecoration: 'none'}} onClick={scrollToTop} >
                <li className="mb-2"><a href="#" className="" style={{textDecoration: 'none', color: 'whitesmoke' , fontSize:'13px'}}>PRODUCT MANAGEMENT FOR PMs</a></li></Link>

                <Link to='/Productmanagementforfounders' style={{textDecoration: 'none'}} onClick={scrollToTop}>
                <li className="mb-2"><a href="#" className="" style={{textDecoration: 'none', color: 'whitesmoke' , fontSize:'13px'}}>PRODUCT MANAGEMENT FOR FOUNDERS</a></li></Link>

                <Link to='/Groupcoaching' style={{textDecoration: 'none'}} onClick={scrollToTop}>
                <li className="mb-2"><a href="#" className="" style={{textDecoration: 'none', color: 'whitesmoke' , fontSize:'13px'}}>GROUP COACHING</a></li></Link>
              </ul>
            </div>
           {/*  <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4" style={{color: 'whitesmoke'}}>Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="" style={{textDecoration: 'none', color: 'whitesmoke'}}>Login</a></li>
                <li className="mb-2"><a href="#" className="" style={{textDecoration: 'none', color: 'whitesmoke'}}>Register</a></li>
                <li className="mb-2"><a href="#" className="" style={{textDecoration: 'none', color: 'whitesmoke'}}>Sitemap</a></li>
                <li className="mb-2"><a href="#" className="" style={{textDecoration: 'none', color: 'whitesmoke'}}>Our Products</a></li>
              </ul>
            </div> */}
            
          </div>
        </div>

       
        <div className="bg footerhere py-2">
          <div className="container text-center copyright">
            <p className=" mb-0 py-2">© 2024 Halibut Technology Pvt Ltd | Bangalore, Karnataka, India.</p>
          </div>
        </div>
      
      </footer>
    </>
  );
}

export default Footer;