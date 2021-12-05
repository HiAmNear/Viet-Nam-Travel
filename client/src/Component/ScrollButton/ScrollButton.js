import react, { Component } from 'react';
import { useEffect, useState } from "react";
import "../ScrollButton/ScrollButton.css"
export default function ScrollButton() {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
    }, []);
  
    return (
      <div className="scroll-to-top">
        {isVisible && 
          <div onClick={scrollToTop}>
            <i class="fas fa-chevron-up"></i>
          </div>}
      </div>
    );
  }