import React, { useRef, useEffect, createRef, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { TweenMax, Power3, gsap } from 'gsap';
// import  CSSRulePlugin  from 'gsap/CSSRulePlugin';
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import {ScrollTrigger} from 'gsap/dist/scrollTrigger';

if(typeof window !== 'undefined') {
  gsap.registerPlugin(CSSRulePlugin);
  // gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [newValue, setNewValue] = useState();
  const [check, setcheck] = useState(true);
  const [check1, setcheck1] = useState(true);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setthird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fivth, setFivth] = useState(false);
  const [idCheck, setIdCheck] = useState();

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

  useEffect(()=>{
    let value1 = btnRefs.current[0];
    let value2 = btnRefs.current[1];
    let value3 = btnRefs.current[2];
    let value4 = btnRefs.current[3];
    let value5 = btnRefs.current[4];

    TweenMax.to(
      value1,
      {
        delay: .7,
        // y: -10, 
        ease: Power3.easeInOut,
        y:-200,
        rotate: 360,
        duration: 3,
        // ScrollTrigger: {
        //   trigger: "value1",
        //   toggleActions: "restart pause resume" 
        // } 
      }
    )
    TweenMax.to(
      value2,
      {
        delay: .8,
        // y: -10, 
        ease: Power3.easeInOut,
        y:-200,
        rotate: 360,
        duration: 3,
      }
    )
    TweenMax.to(
      value3,
      {
        delay: .9,
        // y: -10, 
        // ease: Power3.easeInOut
        y:-200,
        rotate: 360,
        duration: 3,
      }
    )
    TweenMax.to(
      value4,
      {
        delay: .10,
        // y: -10, 
        // ease: Power3.easeInOut
        y:-200,
        rotate: 360,
        duration: 3,
      }
    )
    TweenMax.to(
      value5,
      {
        delay: .11,
        // y: -10, 
        // ease: Power3.easeInOut
        y:-200,
        rotate: 360,
        duration: 3,
      }
    )

  },[])

  const changePlace = (id) => {

    let value = btnRefs.current[id];
    let value1 = btnRefs.current[0];
    let value2 = btnRefs.current[1];
    let value3 = btnRefs.current[2];
    let value4 = btnRefs.current[3];
    let value5 = btnRefs.current[4];

    if (check) {
      if (idCheck == null) {
        setIdCheck(id);
      }
      if (id == 0) {
        setIdCheck(id);
        if (id == idCheck) {
          let value = btnRefs.current[id]
          TweenMax.to(
            value,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
            }
          )
          setIdCheck(null);
          return;
        } else {
          TweenMax.to(
            value,
            {
              duration: .4,
              y: -325,
              x: 392,
              ease: Power3.easeInOut 
            }
          )

          TweenMax.to(
            value2,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
            }
          )

          TweenMax.to(
            value3,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )

          TweenMax.to(
            value4,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
          TweenMax.to(
            value5,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
          return;
        }

        // setcheck(!check);
        // setcheck1(false);

      }

      if (id == 1) {
        setIdCheck(id);
        if (id == idCheck) {
          let value = btnRefs.current[id]
          TweenMax.to(
            value,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
          setIdCheck(null);
          return;
        } else {
          TweenMax.to(
            value,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -326,
              x: 272,
              
            }
          )
          TweenMax.to(
            value1,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,              
            }
          )
          TweenMax.to(
            value3,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )

          TweenMax.to(
            value4,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
          TweenMax.to(
            value5,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
          // setcheck(!check);
          return;
        }
      }

      if (id == 2) {
        setIdCheck(id);
        if (id == idCheck) {
          let value = btnRefs.current[id]
          TweenMax.to(
            value,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
          setIdCheck(null);
          return;
        }
        else {
          TweenMax.to(
            value,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -326,
              x: 155,
              
            }
          )

          TweenMax.to(
            value1,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )

          TweenMax.to(
            value2,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )

          TweenMax.to(
            value4,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
          TweenMax.to(
            value5,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
          return;
        }
      }

      if (id == 3) {
        setIdCheck(id);
        if (id == idCheck) {
          let value = btnRefs.current[id]
          TweenMax.to(
            value,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
          setIdCheck(null);
          return;
        }
        else {
          TweenMax.to(
            value,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -326,
              x: 40,
              
            }
          )
          TweenMax.to(
            value1,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )

          TweenMax.to(
            value2,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }

          )
          TweenMax.to(
            value5,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )

          TweenMax.to(
            value3,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
          // setcheck(!check);
          return;
        }
      }

      if (id == 4) {
        setIdCheck(id);
        if (id == idCheck) {
          let value = btnRefs.current[id]
          TweenMax.to(
            value,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
          setIdCheck(null);
          return;
        } else {
          TweenMax.to(
            value,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -326,
              x: -50,
              
            }
          )
          TweenMax.to(
            value1,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
  
          TweenMax.to(
            value2,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
  
          TweenMax.to(
            value3,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,
              
            }
          )
  
          TweenMax.to(
            value4,
            {
              duration: .4,
              ease: Power3.easeInOut,
              y: -200,
              x: 0,              
            }
          )
          return;
        }
      }
    }

    else {
      let value = btnRefs.current[id]
      TweenMax.to(
        value,
        {
          duration: .4,
          ease: Power3.easeInOut,
          y: 0,
          x: 0,
          
        }
      )
      setcheck(!check);
      return;
    }
  }

  const addToRef = (el) => {
    if (el && !btnRefs.current.includes(el)) {
      btnRefs.current.push(el)
    }
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
            <div className="w-1/4">
              <h2
                className="font-extrabold text-2xl text-white">
                Don't store tomatoes in the as they will lose their taste
                </h2>
            </div>
            <div className={`${styles._border}`}>
              <span className="border-b-2 ml-4 px-14"></span>
            </div>
          </div>
          <div className="flex flex-row mt-56">
            {
              buttons.map((item, id) => (
                <div ref={addToRef}>
                  <button
                    className="bg-white border ml-2 mt-5 focus-within:outline-none px-6 py-2 rounded-2xl"
                    onClick={() => changePlace(id)}
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
