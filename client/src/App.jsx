import './app.css'
import Leftbar  from './components/leftBar'
import TopBar from './components/topBar';
import Gallery from './components/Gallery/Gallery';

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-20 h-[100%]">
        <Leftbar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <TopBar />

        {/* Main Content */}
        <main className="flex-1 ">
          <Gallery/>
        </main>
      </div>
    </div>
  );
};

export default App;
