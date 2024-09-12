export const metadata = {
    title: 'login',
    description: '登录',
}


import Link from "next/link";

export default function Login() {

  return (
   <div>
       login <br/>
       <Link href="/about">about</Link>
   </div>
  );
}
