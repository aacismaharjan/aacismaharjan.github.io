import React, { useState } from 'react'
import { useEffect } from 'react'
import Section from '../components/Section'
import loadingGif from '../assets/aacismaharjan-loading-logo.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import codepens from "../constant/codepen";

const CodepenCard = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true)
  
  const codepenURL = `https://codepen.io/aashish2058/embed/${id}?theme-id=light&default-tab=result`
  const loading = (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className='overlay'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, type: 'spring', stiffness: 2000 }}
          exit={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <img src={loadingGif} alt='Loading aacismaharjan...' />
        </motion.div>
      )}
    </AnimatePresence>
  )

  useEffect(()=> {
    setIsLoading(true);
  }, [id])

  return (
    <div className='codepen-card mb-5' data-aos='fade-up'>
      <iframe
        scrolling='no'
        src={codepenURL}
        frameBorder='no'
        loading='lazy'
        allowtransparency='true'
        allowFullScreen={true}
        title={id}
        onLoad={() => setIsLoading(false)}
      />
      {loading}
    </div>
  )
}

const Codepen = () => {
  const [currentShow, setCurrentShow] = useState(0);
  const handlePrevClick = () => {
    if (currentShow > 0) {
      setCurrentShow((currentShow) => currentShow - 1);
    } else {
      if (codepens.length > 0) {
        setCurrentShow(codepens.length - 1);
      } else {
        setCurrentShow(0);
      }
    }
  }

  const handleNextClick = () => {
    if (currentShow < codepens.length - 1) {
      setCurrentShow((currentShow) => currentShow + 1);
    } else {
      if (currentShow >= codepens.length - 1) {
        setCurrentShow(0);
      } else {
        setCurrentShow(0);
      }
    }
  }

  return (
    <Section id='codepen' title='Codepen'>
      <div className='codepen-cards'>
        <CodepenCard id={codepens[currentShow]} />

        <div className='d-flex justify-content-center'>
          <button
            className='btn btn-primary mt-2 btn-lg mr-4'
            onClick={handlePrevClick}
          >
            <FaArrowLeft></FaArrowLeft>
          </button>

          <button
            className='btn btn-primary mt-2 btn-lg'
            onClick={handleNextClick}
          >
            <FaArrowRight></FaArrowRight>
          </button>
        </div>

      </div>
    </Section>
  )
}

export default Codepen
