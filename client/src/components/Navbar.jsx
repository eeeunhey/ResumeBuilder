import { Link } from "react-router-dom"

const Navbar = () => {
  const user = {name: '김은혜' }
  return (
    <div className='shadow bg-white' >
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all' >
        <Link to='/'>
          <img src = "/logo.svg" alt="logo" className='h-11 w-auto' />
        </Link>
        <div>
          <p className="text-slate-700 font-medium"
          >안녕하세요 {user?.name || "방문자"} 님</p>
        </div>
      
      </nav>

    </div>
  )
}

export default Navbar