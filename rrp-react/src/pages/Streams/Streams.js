import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Streams (){
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, maximum-scale=1" />
        <title>Touching Pitch</title>
        <link rel="icon" href="william cheng copy.png" type="image/png" />
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="js/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="css/font-awesome.css" rel="stylesheet" type="text/css" /> 
        <link href="css/animate.css" rel="stylesheet" type="text/css" />
        {/*[if lt IE 9]>
    
    
    
<![endif]*/}
        {/*Header_section*/}
        <header id="header_wrapper">
          <div className="container">
            <div className="header_box">
              {/* <div class="logo"><a href="#"><img src="img/logo.png" alt="logo"></a></div> */}
              <nav className="navbar navbar-inverse" role="navigation">
                <div className="navbar-header">
                  <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                </div>
                <div id="main-nav" className="collapse navbar-collapse navStyle">
                  <ul className="nav navbar-nav" id="mainNav">
                    <li><a href="index.html" className="scroll-link">Touching Pitch</a></li>
                    <li><a href="Albums.html" className="scroll-link">Albums</a></li>
                    <li><a href="Team.html" className="scroll-link">The Team</a></li>
                    <li><a href="cipher/cipher.html" className="scroll-link">Cipher</a></li>
                    <li className="active"><a href="Streams.html" className="scroll-link">Live Streams</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/*Header_section*/} 
        <div style={{paddingBottom: '56.25%', position: 'relative'}}><iframe width="100%" height="100%" src="https://player.twitch.tv/?autoplay=false&channel=lorikingston&parent=touchingpitch.com" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%'}}>&lt;small&gt;Twitch embedding powered by &lt;a href="https://embed.tube"&gt;embed.tube&lt;/a&gt;&lt;/small&gt;</iframe></div>
        {/*Footer*/}
        {/*<footer class="footer_wrapper" id="contact">*/}
        <div className="container">
          <section className="page_section contact" id="contact">
            <div className="contact_section">
              <h2 style={{color: 'rgb(255, 255, 255)'}}>Contact form.</h2>
              <div className="row">
                <div className="col-lg-4">
                </div>
                <div className="col-lg-4">
                </div>
                <div className="col-lg-4">
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 wow fadeInLeft">	
                <div className="contact_info">
                  <div className="detail">
                    <h4 style={{color: 'rgb(255, 255, 255)'}}>EMAIL US</h4>
                    {/*<p style = "color: black">EMAIL NOT FOUND</p>*/}
                    <p style={{color: 'white'}}>william.cheng@dartmouth.edu</p>
                  </div> 
                </div>
              </div>
              <div className="col-lg-8 wow fadeInLeft delay-06s">
                <center>
                  <div className="form">
                    <textarea className="input-text text-area" cols={0} rows={0} onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;" defaultValue={"MESSAGE"} />
                    <input className="input-btn" type="submit" defaultValue="send" onclick="myFunction()" />
                  </div>
                  <center>
                  </center></center></div>
            </div>
          </section>
        </div>
        {/*</footer>*/}
      </div>
    );
  };
