import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Info, Mail, ShoppingBag, User } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Products', path: '/products', icon: ShoppingBag },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Contact', path: '/contact', icon: Mail }
]

const ResponseiveMenu = ({ openNav, setOpenNav }) => {
  const linkDelay = 150 // ms

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-500 ease-in-out ${
        openNav ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={() => setOpenNav(false)}
      ></div>

      {/* Menu Content */}
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-xs bg-gray-900 shadow-2xl transition-transform duration-500 ease-in-out ${
          openNav ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#111827', borderLeft: '1px solid rgba(255, 255, 255, 0.1)' }}
      >
        <div className="flex flex-col h-full p-8 text-white">
          {/* User Section */}
          <div
            className={`transition-all duration-500 ${openNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            style={{ transitionDelay: `${linkDelay}ms` }}
          >
            <SignedIn>
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-white/10">
                <UserButton afterSignOutUrl='/' />
                <div>
                  <h2 className="font-semibold text-lg">Welcome Back</h2>
                  <p className="text-sm text-gray-300">Let's go shopping!</p>
                </div>
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-white/10">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full">
                  <User size={24} className="text-gray-400" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">Guest User</h2>
                  <SignInButton>
                    <button className="text-sm text-red-400 font-semibold hover:underline">
                      Sign in to shop
                    </button>
                  </SignInButton>
                </div>
              </div>
            </SignedOut>
          </div>

          {/* Navigation */}
          <nav className="mt-12 flex-grow">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li
                  key={link.name}
                  className={`transition-all duration-500 ${openNav ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${linkDelay * (index + 2)}ms` }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setOpenNav(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium transition-colors duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-red-500/30 to-purple-500/30 text-white'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >
                    <link.icon className="w-6 h-6" />
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div
            className={`text-center text-gray-500 text-sm transition-all duration-500 ${openNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${linkDelay * (navLinks.length + 2)}ms` }}
          >
            <p>&copy; {new Date().getFullYear()} Zaptro</p>
            <p>Modern Ecommerce Experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponseiveMenu
