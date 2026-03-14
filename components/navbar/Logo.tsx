import Link from 'next/link';
import { Button } from '../ui/button';
import { VscCode } from 'react-icons/vsc';

function Logo() {
  return (
    <Button size='logo' asChild>
        <Link href='/'>
            {/*<VscCode className='w-6 h-6'/>*/}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 80"
                width="300"
                height="80"
            >
                <text
                    x="100"
                    y="40"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif"
                    font-size="28"
                    font-weight="600"
                    fill="#fff"

                >
                    Legacy Furniture
                </text>
            </svg>


        </Link>
   </Button>
  );
}

export default Logo;
