import Head from 'next/head'
import HeaderCompound from '../compounds/HeaderCompound'
import JumboCompound from "../compounds/JumboCompound";
import OptFormCompound from "../compounds/OptFormCompound";
import Seperator from "../componets/Seperator/Seperator";
import AccordionCompound from "../compounds/AccordionCompound";
import FooterCompound from "../compounds/FooterCompound";
export default function Home() {
  return (
    <>
      <Head>
        <title>Wycliffe Netflix Clone V1</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Netflix Clone Built Using NEXT.JS and Tailwind-css" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <HeaderCompound>
        <OptFormCompound/> 
      </HeaderCompound>
      <Seperator />
      <JumboCompound />
      <AccordionCompound />
      <OptFormCompound />
      <Seperator />
      <FooterCompound />
      
    </>
  )
}
