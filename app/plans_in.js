import React from "react";
import { useState } from "react"
import ArticleIcon from '@mui/icons-material/Article';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import RateReviewIcon from '@mui/icons-material/RateReview';
import QuizIcon from '@mui/icons-material/Quiz';
import "./plans_in.css"
export default function Plans (){
    var [plans,setplans]=useState([{name:"التخصصات",icons:<ArticleIcon/>,position:400,opacity:"1"},{name:"خطتك الدراسيه",icons:<EditCalendarIcon/>,position:700,opacity:"1"},{name:"الاختبارات واللخصات",icons:<QuizIcon/>,position:1000,opacity:"1"},{name:"تقارير وتوصيات",icons:<RateReviewIcon/>,position:1300,opacity:"1"},{name:"الأعلانات",icons:<NotificationsNoneIcon/>,position:1500,opacity:"1"}]);
   
    
    // [{name:"التخصصات",icons:<ArticleIcon/>,position:400,opacity:false},{name:"خطتك الدراسيه",icons:<EditCalendarIcon/>,position:700,opacity:false},{name:"الاختبارات واللخصات",icons:<QuizIcon/>,position:1000,opacity:false},{name:"تقارير وتوصيات",icons:<RateReviewIcon/>,position:1300,opacity:false},{name:"الأعلانات",icons:<NotificationsNoneIcon/>,position:1500,opacity:false}]
   
 return plans.map(function(ele){
    
       return <div id="plans_box" className="opacit_plan"  style={{transition:"1s" ,opacity:ele.opacity}}><div id="plans_type"><h4>{ele.name}</h4><div>{ele.icons}</div></div>
       <div><p>ستزيد من ثقتك بنفسك خاصة إذا أنجزت جميع نشاطاتك على أكمل وجه وقمت بالموازنة في حياتك العملية ى</p></div>
       <div><h3>اقرا اكثر</h3></div>
       </div>
    })
    
        
   

}