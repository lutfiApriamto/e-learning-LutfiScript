import { Link } from 'react-router-dom';
import { useState } from 'react';
import ButtonAbout from "../Component/ButtonAbout"
import LandingCard from "../Component/LandingCard"
import Footer from "../Component/Footer"
import Sosmed from '../Component/Sosmed';

const LandingPage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState("");

    const cardDataJavascript = [
        {
          id : 1,
          cardTitle : "What Is JavaScript ?",
          imageUrl : "../public/img/javascript1.jpg",
          description : "",
          url: "",
        },
        {
          id : 2,
          cardTitle : "Javascript Historys",
          imageUrl : "../public/img/javascript2.jpg",
          description : "",
          url : ""
        },
        {
          id : 3,
          cardTitle : "Benefit Javasript",
          imageUrl : "../public/img/javascript3.jpg",
          description : "",
          url : ""
        }
      ]

      const cardDataAbout = [
        {
          id: 1,
          title: "About us",
          path: "/about-us",
        },
        {
          id: 2,
          title: "Features",
          path: "/features",
        },
        {
          id: 3,
          title: "Benefits",
          path: "/benefits",
        }
      ];
      
    
    const Links = [
      {
        name : "Author",
        link : "#author"
      },
      {
        name : "About Us",
        link : "#about"
      },
      {
        name : "What Is Javascript",
        link : "#what-is-javascript"
      }
    ]

    const toggleMenu = () => {
      if (isMenuOpen) {
        setMenuAnimation("menu-exit");
        setTimeout(() => {
          setIsMenuOpen(false);
          setMenuAnimation("");
        }, 500); // Waktu harus sesuai dengan durasi animasi
      } else {
        setIsMenuOpen(true);
        setMenuAnimation("menu-enter");
      }
    };

    return(
        <>
       <header className="py-5 w-full bg-white bg-opacity-90 fixed top-0 z-10">
      <nav className="lg:px-5 md:px-5 flex justify-between items-center px-3 relative">
        <h1 className="text-2xl font-black text-yellow-300 italic">LutfiScript</h1>

        <div>
          <div className="md:hidden absolute top-1 right-4" onClick={toggleMenu}>
            <button className="text-black focus:outline-none">
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          <ul className={`md:flex md:gap-x-7 md:static absolute bg-white bg-opacity-90 w-full left-0 top-12 md:top-0 md:bg-transparent ${isMenuOpen ? 'block' : 'hidden'} ${menuAnimation} md:flex-row flex-col md:items-center py-10 md:py-0`}>
            {Links.map((data) => (
              <li key={data.name} className="text-center md:text-left">
                <a href={data.link} className="text-black hover:text-yellow-300 duration-500 transition sm:text-lg block py-2 md:py-0">{data.name}</a>
              </li>
            ))}
            <div className='text-center md:text-start'>
              <Link to="/login" className="bg-yellow-300 italic font-bold py-2 px-4 text-xs rounded-xl mt-3 md:mt-0 md:ml-4">Getting Started</Link>
            </div>
          </ul>
        </div>
      </nav>
    </header>



    {/* hero section start */}
    <section id="hero" className="w-full h-[100vh] flex flex-col items-start justify-end bg-cover bg-top bg-no-repeat bg-fixed pl-4 pb-52 sm:pb-8 md:pb-20 md:pl-8 lg:pb-24" style={{ backgroundImage: "url('../public/img/login.jpg')"}}>
      <h1 className="text-white  text-base w-2/3 sm:w-2/5 capitalize sm:text-lg md:text-2xl lg:w-2/3 lg:text-4xl">"Learn <span className="text-yellow-300 font-bold italic">JavaScript</span> at your own pace with <span className="text-yellow-300 font-bold italic">LutfiScript</span>  flexible courses."</h1>

      <div className="mt-2 sm:mt-4 lg:mt-5">
        <Link to="/login" className="bg-yellow-300 text-xs px-3 py-2 lg:px-5 md:px-4 md:py-3 md:text-base rounded-lg mr-7 md:mr-5 lg:mr-12 font-bold hover:bg-yellow-600  transition duration-700 italic">Getting Started</Link>
        <button className="bg-white text-white bg-opacity-10 border border-white text-xs px-3 py-2 lg:px-5 md:px-4 md:py-3 md:text-base rounded-lg  font-bold hover:bg-black hover:bg-opacity-55 transition duration-700">Learn More</button>
      </div>
    </section>
    {/* hero section end */}

    {/* portfolio start */}
    <section id="author" className="w-full py-10 px-4 sm:px-10 sm:py-5 md:px-4 md:py-10 lg:py-12 lg:px-6">
      <div className="md:w-full md:flex">


        <div className="w-full flex items-center justify-center  pb-4 md:pb-0 md:w-2/3">
          <img src="../public/img/lutfi.png" alt="" className="w-1/2 sm:w-1/3 md:w-full"/>
        </div>

        <div className="text-center gap-y-3 flex flex-col w-full md:text-start md:justify-center md:items-start md:px-8">

          <h1 className="text-white font-black  text-4xl sm:text-5xl md:text-4xl lg:text-6xl">Hay, It’s Lutfi</h1>
          <p className="text-white text-base font-light sm:px-7 md:px-0 md:text-sm lg:text-xl">
          Halo perkenalkan namaku Muhammad Lutfi Apriamto, aku adalah seorang front-end developer. tujuanku membuat project ini agar kalian dapat mempelajari bahasa pemrograman javascript dengan mudah. selamat belajar !!
          </p>
          <Sosmed></Sosmed>
          <div>
          <button className="bg-yellow-300 text-xs px-3 py-2 lg:px-5  md:text-sm rounded-lg font-bold hover:bg-yellow-600  transition duration-700">Contact Me!</button>
          </div>

        </div>

      </div>
    </section>
    {/* portfolio end */}

    {/* About Section start */}
    <section id="about" className="w-full bg-white py-10">
      <div className=" w-full px-3 md:flex md:px-6 lg:px-0 lg:justify-center">

        <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-between md:gap-y-20 lg:w-2/5 ">
          <h1 className="capitalize text-center text-3xl font-bold sm:text-5xl md:text-3xl md:text-start lg:text-4xl lg:w-3/4 mb-8 md:mb-0" >Everythings about <span className="text-yellow-300 italic">LutfiScript</span></h1>

          <div className="sm:px-36 md:px-0 md:w-3/4">
  {cardDataAbout.map(data => (
    <ButtonAbout
      key={data.id}
      title={data.title}
      path={data.path}
    />
  ))}
</div>

          
        </div>

        <div className="w-full h-40  md:h-96 md:w-1/2 flex items-center jusce pt-5">
          <img src="../public/img/about-home.jpg" alt=""  className="w-full h-full object-cover object-center rounded-xl" />
        </div>

      </div>
    </section>
    {/* about section end */}

    {/* javascript section start */}
    <section id="what-is-javascript" className="w-full py-8">
      <h1 className="text-white text-center capitalize font-black text-4xl sm:text-6xl md:text-5xl">Why <span className="italic text-yellow-300">Javascript ?</span></h1>

      <div className="w-full mt-7 sm:mt-10 md:flex md:justify-evenly md:gap-y-4 lg:px-10">
        {cardDataJavascript.map((card) => (
          <LandingCard
          key={card.id}
          cardTitle={card.cardTitle}
          imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </section>
    {/* javscript section end */}
    
    <Footer/>

    </>
    )
}

export default LandingPage;