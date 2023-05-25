import React from 'react'

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
        <h2 className='section__title'>Entre em contato</h2>
        <span className='section__subtitle'>Contate-me</span>

        <div className='contact__container container grid'>
            <div className='contact__content'>
            
                <div className='contact__info'>
                    <div className='contact__card'>
                    <i class="uil uil-envelope-minus contact__card-icon"></i>

                        <h3 className='contact__card-title'>Email</h3>
                        <span className='contact__card-data'>mayvitad@hotmail.com</span>

                        <a href="malito:mayvitad@hotmail.com" className='contact__button'> - Escreva-me{" "}
                        <i className="bx bx-right-arrow-alt 
                        contact__button-icon"></i>
                        </a>
                    </div>

                    <div className='contact__card'>
                    <i class="uil uil-whatsapp contact__card-icon"></i>
                        <h3 className='contact__card-title'>Whatsapp</h3>
                        <span className='contact__card-data'>(11) 99817-0488</span>

                        <a href="https://api.whatsapp.com/send?phone=5511998170488&text=Hello, more information!" className='contact__button'> - Escreva-me{" "}
                        <i className="bx bxl-right-arrow-alt 
                        contact__button-icon"></i>
                        </a>
                    </div>

                   
                </div>
            
            </div>

            
        </div>
    </section>
  )
}

export default Contact