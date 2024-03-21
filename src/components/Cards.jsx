import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4">
          <img className='w-20 mx-auto mt-[-3rem]' src={Single} alt="" />
          <h2 className="font-bold text-xl sm:text-2xl py-8 text-center">Single User</h2>
          <p className="text-center text-xl font-bold sm:text-2xl">$149</p>
          <div className="text-center font-medium">
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] rounded-md w-[200px] py-3 font-medium my-6 mx-auto">Start Trial</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4">
          <img className='w-20 mx-auto mt-[-3rem]' src={Double} alt="" />
          <h2 className="font-bold text-xl sm:text-2xl py-8 text-center">Single User</h2>
          <p className="text-center text-xl font-bold sm:text-2xl">$149</p>
          <div className="text-center font-medium">
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] rounded-md w-[200px] py-3 font-medium my-6 mx-auto">Start Trial</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4">
          <img className='w-20 mx-auto mt-[-3rem]' src={Triple} alt="" />
          <h2 className="font-bold text-xl sm:text-2xl py-8 text-center">Single User</h2>
          <p className="text-center text-xl font-bold sm:text-2xl">$149</p>
          <div className="text-center font-medium">
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] rounded-md w-[200px] py-3 font-medium my-6 mx-auto">Start Trial</button>
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Cards