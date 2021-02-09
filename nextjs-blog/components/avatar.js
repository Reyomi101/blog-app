import Link from 'next/link';
import Image from 'next/image';

function Avatar(){
  return (
    <>
    <h1>Avatar</h1>
    <h2>
        <Link href="/">
            <a>Back to home</a>
        </Link>
    </h2>

    <Image src="/me.jpg" alt="me" width="64" height="64" />

    </>
  )
}

export default Avatar