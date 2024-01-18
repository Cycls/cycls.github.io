//======= Intercom
window.intercomSettings = {
  api_base: "https://api-iam.intercom.io",
  app_id: "m8131ekj",
  // user_id: user.id, // a UUID for your user
};

// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/m8131ekj'
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/m8131ekj';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();


//======= Google 
//======== Google Analytics
var script = document.createElement('script');
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-EGHX21RZ4N';
script.async = true;
document.head.appendChild(script);
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-EGHX21RZ4N');
//======== Google Ads
var adsScript = document.createElement('script');
adsScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11060586635';
adsScript.async = true;
document.head.appendChild(adsScript);
// No need to redefine window.dataLayer or gtag function if already defined above
gtag('js', new Date());
gtag('config', 'AW-11060586635');

//======= Header 
function toggleNav() {
    document.getElementById('mobileNav').classList.toggle('translate-x-0');
    document.getElementById('mobileNav').classList.toggle('-translate-x-full');
}
