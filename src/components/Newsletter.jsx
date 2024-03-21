
function Newsletter() {
  return (
    <div className="grid md:grid-cols-3 text-white w-full py-10 max-w-[1240px] items-center mx-auto">
      <div className="col-span-2">
        <h1 className="text2xl sm:text-3xl md:text-4xl font-bold">Want tips & tricks to optimize your flow?</h1>
        <p>Sign up to our newsletter and stay up to date.</p>
      </div>
      <div className="ml-3">
        <div>
          <form className="flex my-5">
            <input className="py-3 pl-2 rounded" type="text" placeholder="Enter Email"/>
            <button className="bg-[#00df9a] text-black mx-2 rounded w-[200px] py-1">Notify Me</button>
          </form>
        </div>
        <p>We care bout the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy.</span></p>
      </div>
    </div>
  )
}

export default Newsletter