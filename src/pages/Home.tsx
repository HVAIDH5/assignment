import Cards1 from '../components/Card1';
import Cards2 from '../components/Card2';
import Cards from '../components/Cards';
import Graph from '../components/Graph';
import NavBar from '../components/NavBar';


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     <NavBar/>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
         <Cards title="Total Users" value="1,234" />
         <Cards title="Active Projects" value="42" />
         <Cards title="Revenue" value="$98,765" />
        </div>

        <Graph/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <Cards1/>
         <Cards2/> 
        </div>
      </div>
    </div>
  );
};

export default Home;