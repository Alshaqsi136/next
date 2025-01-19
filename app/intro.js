import "./intro.css"
import Link from 'next/link'
function Intro(){
    return <div id="intro">
        <div id="intro_center">
            <h1>مـــــــــنصة <span> علـمِفاي</span></h1>
            <p>رفيقك الذكي في رحله التعلم يصمم لك خطة خاصة يختار أفضل المصادر.و يختبر تقدمك بأسلوب ممتع .معك خطوة بخطوة لتحقيق أهدافك بثقة وحماس</p>
            <div id="bnutons"><Link id="login" href="login">تسجيل الدخول </Link><button id="call">اتصل بنا</button></div>
        </div>
    
    </div>
    }
     export default Intro