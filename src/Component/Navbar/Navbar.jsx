

const NavLnks = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "Products",
        path: "/products",
    },
    {
        id: 3,
        name: "Abouts",
        path: "/abouts",
    },
    {
        id: 4,
        name: "Shop",
        path: "/shop",
    },
    {
        id: 5,
        name: "Contacts",
        path: "/contacts",
    },
]

const Navbar = () => {
  return (
    <nav className="md:pt-4 relative z-30 bg-white">
        <div className="container py-4 flex justify-between items-center">
            <div className="text-2xl flex items-center gap-2 font-bold">
                <p className="text-primary">FRUVER</p>
                <p className="text-secondary">STORE</p>
            </div>
            <div className="hidden md:block">
                <ul className="flex items-center gap-6 text-gray-600">
                    {NavLnks.map((index) => (
                        <li key={index.id}>
                            <a 
                                href={index.path}
                                className="inline-block py-1 px-3 hover:text-red-500 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                            >
                                {index.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
