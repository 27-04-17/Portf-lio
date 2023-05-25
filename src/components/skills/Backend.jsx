import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className='skills__title'>Backend  Developer</h3>
        
        <div className='skills__box'>
            <div className='skills__group'>
                {/* PHP */}
                <div className='skills__data'>
                <i class="uil uil-check-circle"></i>

                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>
               
                {/* PYTHON */}
                <div className='skills__data'>
                <i class="uil uil-check-circle"></i>

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>
                {/* MYSQL */}
                <div className='skills__data'>
                <i class="uil uil-check-circle"></i>

                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>
            </div>


        </div>  
    </div>           
                

  )
}

export default Backend