import '../styles/app.css'
import React, { useState, useEffect } from 'react';

// import App from 'next/app'

function MyApp({ Component, pageProps }) {

    useEffect(() => {
      // Update the document title using the browser API
      function animateInViewport() {
        var windowHeight = window.innerHeight;
        var elements = document.querySelectorAll('.animate:not(.activated):not(.animating)');
        var array = [];
      
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          var positionFromTop = elements[i].getBoundingClientRect().top;
      
          if (positionFromTop - windowHeight <= -150 || element.classList.contains('run')) {
            if (element.classList.contains('sequence')) {
              element.classList.add('animating');
              array.push(element);
            } else {
              element.classList.add('activated');
            }
          }
        }
      
        if (array.length) {
          array.forEach(function (elm, i) {
            setTimeout(function () {
              elm.classList.add('activated');
            }, i * 100);
          });
        }
      }
      
      animateInViewport();
    });



    return <Component {...pageProps} />
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp