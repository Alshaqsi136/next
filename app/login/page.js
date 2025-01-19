import Header from '../header';
import "../header.css"
import "./login.css"
import Login from './login';
import Inputs from './inputs';
export default function(){
    return (
        <div className="Applogin" >
          <div id='header_holder' style={{position: "relative","borderBottom":"solid 1px rgba(100, 68, 0, 0.144)","background":"linear-gradient(45deg ,rgb(100, 68, 0) 10%,transparent 11%, transparent 89% , #e39b46 90%),linear-gradient(135deg , #e39b46 10%,transparent 11%, transparent 89% , #e39b46 90%),radial-gradient(circle, transparent 25%, #ffffff  26%),linear-gradient(0deg, transparent 44%, #e39b46 45%, #e39b46 55%, transparent 56%), linear-gradient(90deg, transparent 44%, #e39b46 45%, #e39b46 55%, transparent 56%)","backgroundSize":"4em 4em","backgroundColor":"#ffffff","opacity":"1"}} ><Header/> </div>
          <div id='login_holder' ><Login/><Inputs/></div>
          <div id='loginFoter'>
            <div></div>
            <div id="meanHeader"> <a >اتصل بنا </a> <a>الرئيسية  </a></div>
            <div id="meanHeader"><div><img id='fotterimg'/></div></div>











          </div>
    
        </div>
    
      );
}