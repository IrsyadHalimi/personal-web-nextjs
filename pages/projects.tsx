import Image, { StaticImageData } from "next/image"
import imageSample from "../public/images/sample.jpg"

export async function getStaticProps() {
  return {
    props: {
      pageId: "projects",
      metadata: {
        title: "Grace Huang",
        description: "Discover the work of Grace Huang on her personal website. ",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com"
        }
      }
    }
  }
}

export default function Projects() {
  return <div className="mt-16 px-8">
    <header>
      <h1 className="font-bold text-4xl text-zinc-800">Things I Do</h1>
      <p className="text-base mt-6 text-zinc-600">I have been working on a
      number of small creative projects</p>
    </header>
    <div className="mt-16">
      <h2 className="text-2xl">Apps</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
        <ProjectItem name={"TallyCoin: Tracking Chores And Rewards"} url={"https://apps.apple.com/us/app/tallycoin/id1633932632"} urlDisplay={"App Store"} imageSrc={imageSample} />
        <ProjectItem name={"RedacApp: Redact Text In Images"} url={"https://gracehuang.gumroad.com/l/redac"} urlDisplay={"gumroad.com"} imageSrc={imageSample} />
      </ul>
    </div>
    <div className="mt-16">
      <h2 className="text-2xl">Books</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
        <ProjectItem name={"Building macOS apps with SwiftUI: A Practical Learning Guide"} url={"https://www.amazon.com/gp/product/B0BP5P9H31"} urlDisplay={"amazon.com"} imageSrc={imageSample} />
        <ProjectItem name={"Nail A Coding Interview: Six-Step Mental Framework"} url={"https://gracehuang.gumroad.com/l/coding-interview"} urlDisplay={"gracehuang.gumroad.com"} imageSrc={imageSample} />
        <ProjectItem name={"A Practical Guide to Writing a Software Tech Design Doc"} url={"https://gracehuang.gumroad.com/l/mqmUt"} urlDisplay={"gracehuang.gumroad.com"} imageSrc={imageSample} />
        <ProjectItem name={"Code Reviews in Tech: The Missing Guide"} url={"https://gracehuang.gumroad.com/l/codereviews"} urlDisplay={"gracehuang.gumroad.com"} imageSrc={imageSample} />
      </ul>
    </div>
  </div>
}

type ProjectItemProps = {
  name: string
  url: string
  urlDisplay: string
  imageSrc: StaticImageData
}

function ProjectItem(props: ProjectItemProps) {
  let { name, url, urlDisplay, imageSrc: image } = props
  return <li>
    <a href={url}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full" src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
        </div>
        <div className="px-6 pb-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1
          text-sm font-semibold text-gray-700 mr-2 mb-2">🔗 {urlDisplay}</span>
        </div>
      </div>
    </a>
  </li>
}