import './Home.css';
import Header from '../../components/header/Header'
import Posts from '../../components/posts/posts'
import Sidebar from '../../components/sidebar/Sidebar';

export default function Home() {
  return (
    <>
       <Header></Header>
       <div className='home'>
         <Posts></Posts>
         <Sidebar></Sidebar>
       </div>
    </>
  )
}
