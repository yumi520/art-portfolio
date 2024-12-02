import { NavbarWrapper, NavWrapper } from "../ui/navbar/navbar.styles";
import Image from 'next/image';

export default function navbar() {
    return (
    <header>
        <NavWrapper>
        <Image
            src="/assets/yumifav48x48 copy.png"
            width={50}
            height={50}
            alt="Picture of the author"
        />
            <NavbarWrapper>
                <li>Home</li>
                <li>About</li>
                <li>Commissions</li>
                <li>Portfolio</li>
            </NavbarWrapper>
        </NavWrapper>
    </header>
    );
  }