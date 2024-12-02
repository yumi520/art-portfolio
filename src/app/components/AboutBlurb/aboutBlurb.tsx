import Image from 'next/image';
import About from '../ui/about/about.styles';
import Blurb from '../ui/blurb/blurb';


export default function aboutBlurb() {
    return (
    <About>
        <Image
            src="/assets/Me.jpg"
            width={300}
            height={400}
            alt="Picture of the author"
        />
        <Blurb 
            title="Hey! I am Yumiko!" 
            paragraph="Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.  Nunc ut
            nunc pretium, eleifend nulla quis, pharetra dui.
            Mauris condimentum tellus magna, sit amet eleifend massa congue eu."
            buttonText="Read More"
        />

    </About>
    );
  }