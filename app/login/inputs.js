import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./login.css";
export default function Inputs(){
    return (<div id="inputs">
          <div id='boys'>
            <div id='boy_hold' ></div>
            
        </div>
        
        <div id="enterInput">
            <div id="inf">
            <h1>العنوان </h1>
           <h3>محافظه مسقط </h3>
            </div>
            <div id="inf">
            <h1>الهاتف</h1>
           <h3>98898559</h3>
            </div>
            <div id="inf">
            <h1>البريد الالكتروني </h1>
           <h3>alshaqsi136@gmail.com  </h3>
            </div>
            <div id="inf">
            <h1>التواصل الاجتماعي </h1>
           <h3 id='icon'><InstagramIcon id='icons' /><XIcon id='icons'/><LinkedInIcon id='icons'/><WhatsAppIcon id='icons'/><FacebookIcon id='icons'/></h3>
            </div>



            
        </div>
        <form id="infro">
        <input placeholder="الاسم"   />
        <input placeholder="البريد الالكتروني"   />
        <input placeholder="كلمه المرور"   />
        <input placeholder="تاكيد كلمه المرور "  />
        <input placeholder="الهاتف"  />
        <input placeholder="المواد الدراسيه"   />
        <input type="submit" value='ارسال'/>
        </form>

        
        
        </div>)
}