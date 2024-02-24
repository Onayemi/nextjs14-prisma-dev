import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-5 font-bold">Next.Js Tutorials</h1>
      <Link href="/client" className="btn btn-accent">Get Started</Link>
    </div>
  )
}

export default HomePage
