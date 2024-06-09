import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-warning-content  ">
  {/* <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div> */}
  <div className="flex-none">
    <a className="btn btn-ghost text-xl">Resume Building</a>
  </div>

  <div className="flex-1">
    <a href='/' className="btn btn-ghost text-xl">Home</a>
  </div>
  <div className="flex-1">
    <a href='/about' className="btn btn-ghost text-xl">About</a>
  </div>

  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li><a href='/login' className="btn btn-ghost text-xl kbd kbd-sm">Login</a></li>
  <li><a href='/signup'  className="btn btn-ghost text-xl kbd kbd-sm">Signup</a></li>
          </ul>

   
  </div>


  {/* <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div> */}
</div>
    </div>
  )
}

export default Navbar