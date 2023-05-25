import React from 'react';




const Info = () => {
  return (
    <div className="about__info grid">
        <div className='about__box'>
        <i class="uil uil-award about__icon"></i>
            
            <h3 className='about__title'>Experiência</h3>
            <span className='about__subtitle'>3 anos estudando</span>
        </div>

        <div className='about__box'>
        <i class="uil uil-briefcase-alt about__icon"></i> 
            
            <h3 className='about__title'>Completo</h3>
            <span className='about__subtitle'> 5+ Projetos
</span>
        </div>

        <div className='about__box'>
        <i class="uil uil-map-marker-question about__icon"></i>
            
            <h3 className='about__title'>Suporte</h3>
            <span className='about__subtitle'>Online 24/7</span>
        </div>
    </div>
  )
}

export default Info