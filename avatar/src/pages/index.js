import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [uri, seturi] = useState("");
  const [tokenid, settokenid] = useState("")

  const contractAddr = ""

  function handleUriChange(event) {
    seturi(event.target.value);
  }

  function handleTokenChange(event) {
    settokenid(event.target.value);
  }

  async function handleMint() {

  }

  async function handleRetrieve() {

  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <p className="text-5xl"> Avatar.NFT </p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Mint your URI
          </h2>

          <form className="flex flex-col" onSubmit={handleMint}>
            <label for="inputString">Input the URI you want to mint:</label>
            <input type="text" id="inputString" name="inputString" onChange={handleUriChange} required/>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Retrive your URI by Token ID
          </h2>

          <form className="flex flex-col" onSubmit={handleRetrieve}>
            <label for="inputString">Input the token ID:</label>
            <input type="text" id="inputString" name="inputString" onChange={handleTokenChange} required/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  )
}
