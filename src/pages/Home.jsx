import React from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import i18n  from 'i18next'

export const Home = () => {

  const {t}=useTranslation()

  useEffect(()=>{
    let currentlang=localStorage.getItem('data')
    i18n.changeLanguage(currentlang)
  },[])
  return (
    <div>
         
   < h2>{t("title")}</h2>;
   < h2>{t("content")}</h2>;
   < h2>{t("about")}</h2>;
   < h2>{t("more")}</h2>;


    
    </div>
  )
}
