import Link from "next/link"

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-5xl">About Page</h1>
      <Link href="/" className="text-2xl">Home</Link> <br/>
      <Link href="/about/info" className="text-2xl">Info Page</Link>
    </div>
  )
}

export default AboutPage
