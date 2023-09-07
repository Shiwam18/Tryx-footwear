import './App.css';
import Hero from './component/Hero';
import Navigation from './component/Navigation';
import Trending from './component/Trending';
import Essentials from './component/Essentials';
import './index.css';
const App = ()=> {
    return (
        <div>
            <Navigation/>
            <Hero/>
            <Trending/>
            <Essentials/>
        </div>

    );

};

export default App;