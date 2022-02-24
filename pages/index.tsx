import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
//import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import topImage from '../public/assets/1920x600.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NFT_NAME}</title>
      </Head>

      <Image src={topImage} alt={process.env.NEXT_PUBLIC_NFT_NAME} />

      <div className="bg-gray-800 py-8">
        <Prose>
          <h1 className="text-5xl font-bold mb-2">
            {process.env.NEXT_PUBLIC_NFT_NAME}
          </h1>
<p className="mb-4">An NFT project from Indonesia, a collection of 888 MONKS on the <a href="https://polygon.technology/" rel="noopener noreferrer" target="_blank" className="font-bold">Polygon</a> blockchain. GMONKS complies with the <a href="https://ethereum.org/ja/developers/docs/standards/tokens/erc-721/" rel="noopener noreferrer" target="_blank" className="font-bold">ERC721 standard</a>, so they are all as unique as we are.</p>
<p>You can buy MONKS with <a href="https://opensea.io/collection/gmonks"><span className="text-pink-500 font-normal underline">OpenSea</span> </a></p>
        </Prose>
            
      </div>
	  
      <div className="py-8">
        <Prose>
          <Minting />
        </Prose>
      </div>
	  
      <div className="bg-gray-800 py-8">
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="py-8">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8">
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
