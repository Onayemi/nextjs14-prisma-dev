import Link from "next/link"

const AboutInfoPage = () => {
  return (
    <div>
      <h1 className="text-5xl">About Info Page</h1>
      <Link href="/about" className="text-2xl">Info Page</Link>
    </div>
  )
}

export default AboutInfoPage
