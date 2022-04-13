import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-container">
      <h1 className="home-heading">Home Route</h1>
    </div>
    <LogoutButton />
  </div>
)
export default Home
