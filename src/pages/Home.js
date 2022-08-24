import { Link, Outlet } from "react-router-dom";
import Navbar from '../component/Navbar';

const Home = () => {
  return (
    <>
    <Navbar />
    <section className='section'>
      <h2>Team Django</h2>
     
      <Outlet />
    </section>
    </>
  );
};
export default Home;
