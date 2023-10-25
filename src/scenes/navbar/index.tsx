import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/images/Logo (1).png"

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between";


  return <nav>
    <div className="{'${flexbetween} fixed top-0 z-30 w-full py-6}">
        <div>
            
        </div>

    </div>
  </nav>;
  
};

export default Navbar;