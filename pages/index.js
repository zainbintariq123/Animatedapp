import React, { useRef, useEffect, createRef, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { TweenMax, Power3, gsap } from 'gsap';
// import  CSSRulePlugin  from 'gsap/CSSRulePlugin';
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";

// /if(typeof window !== 'undefined') {
gsap.registerPlugin(CSSRulePlugin);
// }

export default function Home() {
  
  const [check, setcheck] = useState(false);
  const btnRefs = useRef([]);
  btnRefs.current = [];

  const buttons = [
    {
      data: 'Microwave'
    },
    {
      data: 'freezer'
    },
    {
      data: 'Cupboard'
    },
    {
      data: 'Stave'
    },
    {
      data: 'Fridge'
    }
  ];


  let rule;

  if (typeof window !== 'undefined') {
    rule = CSSRulePlugin.getRule("span:after");
  }

  const changePlace = (id) =>{
    if(!check) {
      let value =   btnRefs.current[id] 
      TweenMax.to(
        value,
        .8,
        {
          y: -150,
          delay:.3
        }
      )
      setcheck(!check);
        return;
    }

    if(check) {
      let value =   btnRefs.current[id] 
      TweenMax.to(
        value,
        .8,
        {
          y: 0,
          delay:.3
        }
      )
      setcheck(!check);
        return;
    }
  }

  const addToRef = (el) => {
    if(el && !btnRefs.current.includes(el)) {
      btnRefs.current.push(el)
    }
    console.log('The btnRef array is', btnRefs.current)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div className="bg-red-600 flex flex-col h-screen items-center justify-center">
          <div className="flex flex-row items-center justify-center w-full">
            <div className="w-2/6">
              <h2
                className="font-extrabold text-4xl ">
                Don't store tomatoes in the as they will lose their taste
                </h2>
            </div>
            <div className={`${styles._border}`}>
              <span className= "border-b-2 px-10"></span>
            </div>
          </div>
          <div className="flex flex-row">
              {
              buttons.map((item,id)=>( 
                <div ref={addToRef}>
                  <button
                    className="bg-white border ml-2 mt-5 focus-within:outline-none px-6 py-2 rounded-2xl"
                    onClick={()=>changePlace(id)}
                  >
                    {item.data}
                  </button>
                </div>
              ))
            }  
          </div>
        </div>   
      </main>
    </div>
  )
}
