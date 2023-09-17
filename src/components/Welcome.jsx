import React, { useTransition } from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import i18n  from 'i18next'

export const Welcome = () => {
    const {t}=useTranslation()
    useEffect(()=>{
    let language=localStorage.getItem("data")
    i18n.changeLanguage(language)

    },[])
  return (
    <div className='flex justify-center items-center h-96 text-5xl' >{t('welcome')} </div>
  )
}
