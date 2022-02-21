export default function Faq() {
  return (
    <>
<div id="faq" className="bg-gray-800 py-16">
    <div className="sm:text-xl max-w-prose mx-auto px-4">
        <h2 className="text-5xl text-pink-500 mb-4 font-VT323">FAQ</h2>
        <div className="space-y-6">
            <div className="space-y-2">
                <h3>Where can I find the GMONKS collection?</h3>
                <p>All the minted MONKS can be seen on <a href="https://opensea.io/collection/gmonks" rel="noopener noreferrer" target="_blank">OpenSea</a>.</p>
            </div>
            <div className="space-y-2">
                <h3>Where are the original images stored?</h3>
                <p>GMONKS images and metadata are securely stored on <a href="https://ipfs.io/" rel="noopener noreferrer" target="_blank">IPFS</a>.</p>
            </div>
            <div className="space-y-2">
                <h3>Are GMONKS ERC721 tokens?</h3>
                <p>Yes. MONKS is compliant with the latest <a href="https://openzeppelin.com/" rel="noopener noreferrer" target="_blank">OpenZeppelin</a> implementation of <a href="https://docs.openzeppelin.com/contracts/4.x/erc721" rel="noopener noreferrer"
                        target="_blank">ERC721</a>.</p>
            </div>
        </div>
    </div>
</div>
    </>
  );
}
