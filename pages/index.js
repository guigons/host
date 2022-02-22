import dynamic from 'next/dynamic'

const Nav = dynamic(() => import("remote/Nav"), {
  ssr: false,
  loading: () => (<h1>Loading ...</h1>),
})

export default function Home() {
  return (
    <div>
      <div>Name: host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <Nav/>
    </div>
  )
}
