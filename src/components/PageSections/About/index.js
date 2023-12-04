import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import { ImgDataMe } from '../../../data/dataUser';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../../../assets/styles/components/ImgAbout/imgAbout.css';

// import ContactUs from './components/ContactUs';
// import Alliances from './components/Alliances';

const AboutComponent = () => {

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3  gap-1">
      <div className="col-span-1  xl:col-span-2 flex flex-col justify-center mx-2 xl:ml-6">
        <h2 className="text-6xl xl:text-5xl text-center  text-primary font-bold">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
        <div className="col-span-2 xl:col-span-1 flex flex-col ">
        <AutoplaySlider
                  bullets={false}
                  mobileTouch={true}
                  // organicArrows={false}
                  // infinite={true}
                  startupScreen={3000}
                  // startup={true}
                  // transitionDelay={1000}
                  play={true}
                  cancelOnInteraction={false} 
                  interval={4000}
                  className="awsBtn"
                >
                        {ImgDataMe?.length  > 0 ?  
                            ImgDataMe.map((item) =>
                            <div key={item.id}>
                              <img
                                src={item.img}
                                alt="slide-1"
                                className="rounded-full h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[400px] xl:h-[400px] xl:mt-20 xl:mx-2"
                              />
                            </div>
                        ) : null}
                </AutoplaySlider>
          {/* <img
            src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681682/Projects/unne/img/experienciaUsuarios/mujer.png"
            alt="about-img"
            className="rounded-full  h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[400px] xl:h-[400px] xl:mt-20 xl:mx-2"
          /> */}
        </div>
        <div className="col-span-2 xl:col-span-1">
          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1  xl:text-left">
            En el año 2022 formamos PyC para ayudar a nuestros clientes a buscar la mejor opción y
            alternativa en sus intereses inmobiliarios, con la confianza,
            seguridad y compromiso que necesita. 
            <br />
            <br />
            Patricia González ex agente de Remax Central con estudio de corretaje
            inmobiliario en ACOP(Cámara Nacional de Servicios Inmobiliarios), de
            profesión Ingeniero con diplomado en Finanzas de la UC y Carla Segura
            profesional en Administración de Empresas buscan entregar a sus
            clientes la asesoría que necesitan para dejar su propiedad o la
            búsqueda de su propiedad en las manos de profesionales.  
            <br />
            <br />
            Comprometidas a entregar las herramientas y conocimientos a
            nuestros clientes para tomar siempre la mejor decisión. Por eso a
            partir de este año somos socios de Unne, la cual es una gran empresa
            que reúne a los mejores agentes inmobiliarios lo que permite mayor
            rapidez y gestión en el proceso de venta o arriendo de la propiedad.
            <br />
            <br />
          </p>

          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1  xl:text-left">
            Patricia González y Carla Segura.
          </p>
          <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1  xl:text-left">
            Fundadoras y Gerentas de PyC.
          </p>
        </div>
    
        </div>
       
  
      </div>
      <div className="col-span-1 md:col-span-1 xl:col-span-1 flex flex-col justify-center mx-2 xl:ml-24">
      <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          />
      </div>

      {/* 
        <div className="pt-10">
          <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
            “Un largo camino
            <br />
            se inicia con un solo paso...”
          </h2>
        </div> */}
    </div>
    {/* </Fade>  */}
  </Section>
    // <Fragment>
    //   <About />
    // </Fragment>
  );
};

export default AboutComponent;
