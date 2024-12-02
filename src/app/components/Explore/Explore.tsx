
import About from '../ui/about/about.styles';
import Explore from '../ui/explore/explore.styles';
import Title from '../ui/title/title.styles';
import Image from 'next/image';

export default function explore() {
    return (
        <About>
            <Title>Explore the website</Title>
            <Explore>
               <Image
                  src="/assets/makingDumplins.png"
                  width={300}
                  height={400}
                  alt="Mom and sister making dumplings"
               /> 
               <Image
                src="/assets/Chow,Yumiko._CreativeMind_ copy.jpg"
                width={300}
                height={400}
                alt="Self portrait of me with famous art on my hair"
                />
            </Explore>
            <Explore>
             <Image
                src="/assets/selfPortraitOilPaint.jpg"
                width={300}
                height={400}
                alt="Self portrait of me in oil paint"
             />  
             <Image
                  src="/assets/DoggyCommission.png"
                  width={300}
                  height={400}
                  alt="Painting commission of a dog"
               />     
            </Explore>
        
        </About>
    );
  }