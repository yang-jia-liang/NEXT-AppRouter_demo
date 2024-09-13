export const metadata = {
    title: 'login',
    description: '登录',
}


import Link from "next/link";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default function Login({ params: { lang } }) {

  return (
   <div>
       login <br/>
       { lang || '123' } <br/>
       <Link href="/about">about</Link>
   </div>
  );
}
