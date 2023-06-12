import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 shadow dark:bg-gray-900  bottom-0 top-auto">
    <div className="w-full px-3  py-3">
        <div >
            <a href="/assests/images/logo.png" className="flex items-center mb-4 ">
                <img src="/assests/images/logo.png" className="h-8 " alt="Logo" />
            </a>
            <nav>
            <ul className="  text-center text-white ">
                <li>
                    <a href="#" className=" hover:underline ">About</a>
                </li>
                <li >
                    <a href="#" className=" hover:underline ">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline  ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
            </nav>
        </div>
        <hr className="my-3 border-gray-200  dark:border-gray-700 " />
        <span className="block text-sm text-gray-200  text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">CompanyName</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer
