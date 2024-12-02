import Image from 'next/image';
import About from '../ui/about/about.styles';
import Button from '../ui/button/button';
import Title from '../ui/title/title.styles';
import Paragraph from '../ui/paragraph/paragraph.styles';


export default function commissionBlurb() {
    return (
        <About>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <Image
                    src="/assets/Chow,Yumiko._CatHaven_ copy.jpg"
                    width={600}
                    height={900}
                    alt="Three cats enjoying the grass"
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#FFFBF8',
                        padding: '3em',
                        borderRadius: '8px',
                        textAlign: 'center',
                    }}
                >
                    <Title style={{ fontSize: '1.5rem'}}>
                        Commissions are open!
                    </Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </Paragraph>
                    <Button message={'Contact Me'} />
                </div>
            </div>
        </About>
    );
  }