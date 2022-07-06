import React from 'react';
import {Link} from 'react-router-dom';
import {GiCoffeeMug} from 'react-icons/gi';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

function Header() {
  const [nav, setNav] = React.useState(false);
  const [color, setColor] = React.useState('transparent');
  const [textColor, setTextColor] = React.useState('white');
  const handleNav = () => {
    setNav(!nav);
  };

  React.useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#14532D');
        setTextColor('#fff');
      } else {
        setColor('transparent');
        setTextColor('#fff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div className=" fixed right-0 left-0  z-20 w-full rounded-xl">
      <div
        style={{
          backgroundColor: `${color}`,
          borderBottomRightRadius: '20px',
          borderBottomLeftRadius: '20px',
        }}
        className="flex h-[60px] items-center justify-between px-10 text-white"
      >
        <Link to="/">
          <div style={{color: `${textColor}`}} className="flex items-center gap-3">
            <span className="text-2xl font-semibold">TeaShop</span>
            <GiCoffeeMug size={30} />
          </div>
        </Link>
        <div className="flex items-center gap-10">
          <ul style={{color: `${textColor}`}} className="hidden items-center gap-10 md:flex">
            <li className=" hover:text-green-200">
              <Link to="/">Home</Link>
            </li>
            <li className=" hover:text-green-200">
              <Link to="/menu">Menu</Link>
            </li>
            <li className=" hover:text-green-200">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
          <div onClick={handleNav} className="z-40 block md:hidden">
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
        <div
          className={
            nav
              ? 'absolute top-0 left-0 right-0 bottom-0 z-30 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden '
              : 'absolute top-0 left-[100%] right-0 bottom-0 z-30 flex h-screen w-full items-center justify-center  text-center duration-300 ease-in sm:hidden '
          }
        >
          <ul className="flex flex-col gap-10">
            <li className=" text-5xl hover:text-green-200">
              <Link to="/">Home</Link>
            </li>
            <li className=" text-5xl hover:text-green-200">
              <Link to="/menu">Menu</Link>
            </li>
            <li className=" text-5xl hover:text-green-200">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
