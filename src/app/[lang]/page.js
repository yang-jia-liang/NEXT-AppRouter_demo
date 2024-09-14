import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Home({ params: { lang } }) {
    const dict = await getDictionary(lang);

    console.log('loggggggg')

    return (
      <div>
          { dict.common.Home } <br/>
      </div>
  );
}
