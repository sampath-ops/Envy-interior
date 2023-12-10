const Navbar = () => {
    return (
        <div className="flex justify-center p-6">
            <ul className="flex w-1/2 justify-between items-center text-white font-medium">
                <li>Home</li>
                <li>Gallery</li>
                <li>Services</li>
                <li>About Us</li>
                <button className=" bg-[#14d299] p-1 px-4 text-white rounded-lg font-medium">Log in</button>
            </ul>
        </div>
      );
}
 
export default Navbar;