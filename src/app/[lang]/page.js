import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Home({ params: { lang } }) {
    // const dict = await getDictionary(lang);

    console.log({lang});

    return (
      <div>
          Home Page <br/>
      </div>
  );
}
