import React from 'react'
import Arrow from '../../Assets/Images/Arrow.svg'
const Initial = () => {
  return (
    <section className='section-initial'>
        <div>
            <span>
            Olá, me chamo <strong>Gabriel Hipólito, desenvolvedor frontend e designer
              </strong>, meu objetivo é levar sua empresa para o mundo web com performace e otmização.
            </span>
            <img src={Arrow} alt="" />
        </div>
    </section>
  )
}

export default Initial