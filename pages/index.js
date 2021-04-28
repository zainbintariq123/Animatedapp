import React, {useRef, useEffect} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {TweenMax, Power3, gsap} from 'gsap';
// import  CSSRulePlugin  from 'gsap/CSSRulePlugin';
import  { CSSRulePlugin }  from "gsap/dist/CSSRulePlugin";

// /if(typeof window !== 'undefined') {
  gsap.registerPlugin(CSSRulePlugin);
// }

export default function Home() {
  let rule;

  if (typeof window !== 'undefined') {
    rule = CSSRulePlugin.getRule("span:after");
  }

  let tl = gsap.timeline({defaults: {duration: 1}});
  
  let firstElement = useRef(null);
  let secondElement = useRef(null);
  let content = useRef(null);
  let images = useRef(null);
  let box = useRef(null);

  
  useEffect(()=>{
    TweenMax.to(
      firstElement,
      .8,
      {
        opacity: 1,
        y: -65,
        ease: Power3.easeOut
      }
    )
    TweenMax.to(
      secondElement,
      .8,
      {
        opacity:1,
        opacity: 1,
        y: -65,
        ease: Power3.easeOut,
        delay: .5
      }
    )

    tl.from( content,.8,{  y: -50, ease: Power3.easeInOut, stagger: 0.6})
    .to( rule, { duration :1.8, cssRule: { scaleY : 0 }},"-=2.2")
    .from(box, .8, {  backgroundPosition: '300px 12px', opacity: 0},"-=1.5")
    .from(images, .9, { duration: 1, y:30, opacity: 0, x:40})
  })

  const startAnimation = () =>{
    tl.reversed() ? tl.play() : tl.reverse();
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div className="flex flex-row items-center justify-center">
          <div
           className="flex flex-col w-2/5">
            <div>
              <h2
                ref={el=>{content = el}}
                className="font-extrabold text-4xl w-3/6">
                <span>
                  Build your first app with gsap
                </span>
              </h2>
            </div>
            <div className="mt-6">
              <p
                ref={el=>{content = el}}
                className="opacity-100 w-11/12">
                In publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum ma
                be
              </p>
            </div>
            <div className="mt-12">
              <button
                ref={el=>{content = el}}
                className="bg-purple-600 border focus-within:outline-none font-bold px-9 py-3 rounded-3xl text-white"
                onClick={startAnimation}  
                >
                  Start Working
              </button>              
            
            </div>
          </div>
          <div
            ref={el=>{box=el}}
            className={`${styles.slider} w-auto`}>
            <img
              ref={el=>{images = el}}
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/swirl.png"></img>
          </div>
        </div>
          <div className="hidden" >
            <img
             ref={el=>{firstElement = el}}
             className="w-1/2 h-1/2" src="/first.jpg" alt="next js starter" /> 
            <p
              ref={el=>{secondElement = el}} 
              className="text-3xl my-5 ml-5"> 
              Next js Starter
            </p>
          </div>
      </main>
    </div>
  )
}
