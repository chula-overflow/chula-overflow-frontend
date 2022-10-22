import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-cuof-grey-01 py-8 px-2 text-[13px]">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-row justify-between items-center max-w-[320px]">
              <Link href="/">
                <div className="w-1/2 hover:cursor-pointer">
                  <Image src="/graphic/cuof-logo-text.svg" width="297" height="98" alt="" />
                </div>
              </Link>
              <a href="https://www.github.com/chula-overflow" target="_blank">
                <div className="flex flex-row mr-2">
                  <Image src="/graphic/github-icon.svg" width="18" height="18" alt="" />
                  <p className="font-medium pl-1">/chula-overflow</p>
                </div>
              </a>
            </div>
            <div className="flex flex-col items-centers space-y-1">
              <div className="flex justify-center items-center">
                <p className="font-medium">Created by</p>
              </div>
              <div className="flex flex-row items-center justify-center space-x-4">
                <div>
                  <p>Panithi Makthiengtrong</p>
                  <p>Pannawich Lohanimit</p>
                  <p>Purich Nuamchit</p>
                </div>
                <div>
                  <p>Saharat Nuamchit</p>
                  <p>Tanadon Santisan</p>
                  <p>Thanarit Trimaharoek</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <p>Copyright &copy; 2022, All rights reserved</p>
            </div>
          </div>
        </div>
        <div className="w-full h-4 bg-cuof-gradient-h"></div>
      </footer>
    </div>
  )
}

export default Footer
