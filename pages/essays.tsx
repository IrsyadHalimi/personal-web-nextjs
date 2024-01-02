export async function getStaticProps() {
  return {
    props: {
      pageId: "essays",
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

export default function Essays() {
  return <div>Essays</div>
}