import Laptop from '../assets/laptop.jpg';

function Analytics() {
  return (
    <div className="bg-white grid md:grid-cols-2 items-center py-20">
      <img src={Laptop} alt="" />
      <div>
        <p className='font-semibold text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
        <h1 className='text-xl sm:text-2xl md:text-5xl font-bold'>Manage Data Analytics Centrally</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, sunt suscipit? Aliquid maxime quaerat ullam accusamus, dolor facere nihil illum necessitatibus delectus labore rem ex voluptate, vel soluta odit nostrum blanditiis, similique nesciunt! Aperiam autem maiores quae aliquid, sit reiciendis?</p>
        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3'>Get Started</button>
      </div>
    </div>
  )
}

export default Analytics