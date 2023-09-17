import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";

export const Header = () => {
  const {t}=useTranslation()
  console.log(t)
  const handleclick=(lang)=>{
    return  ()=>{
      i18n.changeLanguage(lang)
      localStorage.setItem("data",lang)
    }
  }
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/home" className="mr-5 hover:text-gray-900">Home</Link>
            <Link to="/about" className="mr-5 hover:text-gray-900">About</Link>
           
          </nav>
      
     
          {/* <Button  onClick={handleclick}/> */}
          {/* <Button onClick={handleclick}/> */}
          {/* <button  onClick={props.onClick('en')}>English</button>
        <button onClick={props.onClick('hi')}>Hindi</button>
        <button onClick={props.onClick('gj')}>Gujrati</button> */}
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleclick('en')}>English</button>
        <button  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleclick('hi')}>हिंदी</button>
        <button  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleclick('gj')}>ગુજરાતી</button>
     


        </div>
      </header>
    </>
  );
};
