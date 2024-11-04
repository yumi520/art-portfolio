// import Button from "../ui/button/button.styles";
import Image from 'next/image';
import About from '../ui/about/about.styles';


export default function aboutBlurb() {
    return (
    <About>
        <Image
            src="/assets/Me.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
        />
        <h2>
            Hey! I am Yumiko!
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nunc ut nunc pretium, eleifend nulla quis,
         pharetra dui. Mauris condimentum tellus magna, sit amet eleifend massa congue eu.
        </p>
    </About>
    );
  }