import Link from 'next/link'
const page = () => {
  return <>
    <h1>home page</h1>
    <Link href="/admin">admin</Link>
    <Link href="/doctor">doctor</Link>
  </>
}

export default page