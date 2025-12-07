import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const user = {name: '김쿼카' }
  const navigate = useNavigate();

  const logoutUser =() => {
    navigate('/')
  }


  return (
    <div className='shadow bg-white' >
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all' >
        <Link to='/'>
          <img src = "/logo.svg" alt="logo" className='h-11 w-auto' />
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <p className="text-slate-700 font-medium"
          >안녕하세요 {user?.name || "방문자"} 님</p>

          <button onClick={logoutUser} className="bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all">
              Logout
          </button>
        </div>
      
      </nav>

    </div>
  )
}

export default Navbar