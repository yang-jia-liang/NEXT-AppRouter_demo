'use client'

import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'


export default function About() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())

    console.log(params);

    return (
   <div>
       About <br/>
       {params.toString()} <br/>
       <button onClick={() => router.push('/login')}>login</button>
   </div>
  );
}
