import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div className="h-screen mt-[-96px] flex flex-col justify-center items-center text-white">
      <div className='flex flex-col justify-center items-center max-w-[770px]'>
        <p className="text-[#00df9a] font-semibold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-5xl text-xl font-bold">Grow with data.</h1>
        <TypeAnimation
          className='sm:text-4xl md:text-5xl text-xl font-bold py-4 '
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Fast, flexible financing for BTB',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Fast, flexible financing for BTC',
            1000,
            'Fast, flexible financing for SASS',
            1000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
        />
        <p className='font-bold text-gray-600 text-xl sm:text-3xl md:text-2xl text-center'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] rounded-md w-[200px] py-2 font-medium my-6 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero