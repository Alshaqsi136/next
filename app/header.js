'use client'
import { useState } from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link'
function Header(){
    return <div id="header">
       <div id="message"><p ></p><a id="mailIcon"><EmailIcon id="mailIcon"/> <p>اترك لنا خطا </p></a></div>
       <div id="headerspace"></div>
       <div id="meanHeader"><a>الدفع</a> <a >اتصل بنا </a> <a>الرئيسية  </a><div><img id='ghost_an'/></div></div>
    </div>

}
export default Header;