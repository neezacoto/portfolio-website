import React from 'react'

function PersonalSection(props) {
  return (
    <section id="personal-section">
            <div className='personal-content-container'>
                <div className='title right'>
                    <h2>- Personal Background</h2>
                    <h1>Outside The Office</h1>
                </div>
                <div className='bio-container'>
                    <div className='gallery'>
                        <div className='personal img-1'>
                            <img src="https://cdn.discordapp.com/attachments/827006903388471337/941835011613687868/6photo.png" />
                        </div>
                        <div className='personal img-2'>
                            <img src="https://cdn.discordapp.com/attachments/857973303880187916/954197110285275146/EE365643-6AA4-41A1-872B-5EB81117F909.jpg" />
                        </div>
                        <div className='personal img-3'>
                            
                            <img src="https://cdn.discordapp.com/attachments/857973303880187916/954199203599499264/263522527_2695636460738287_4005296526571001602_n.jpg"/>
                        </div>
                        <div className='personal img-4'>
                            <img src="https://cdn.discordapp.com/attachments/857973303880187916/954205531818565683/image_8.png" />
                        </div>
                    </div>
                    <div className='bio'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

                                Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.<br/><br/>

                                Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.

                                Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.<br/><br/>

                                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
                            </p>
                    </div>
                </div>
            </div>
            
            
        </section>
  )
}

export default PersonalSection