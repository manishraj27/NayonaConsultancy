function App() {
  const handleButtonClick = () => {
    window.open('https://devcli.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 font-sans">
      <div className="bg-white bg-opacity-5 backdrop-blur-lg p-10 rounded-xl shadow-xl max-w-md text-center border border-gray-700">
        <h1 className="text-2xl font-semibold mb-4 tracking-wide">MERN Project Initialized</h1>
        <p className="text-sm text-gray-300 mb-6">
          This project is powered by{' '}
          <a
            href="https://www.npmjs.com/package/mern-project-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-500 underline transition"
          >
            mern-project-cli
          </a>
          , built with <strong>Tailwind CSS</strong>.
        </p>
        <p className="text-sm text-gray-300 mb-6">
          Check out the official{' '}
          <a
            href="https://devcli.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-500 underline transition"
          >
            DevCLI website
          </a>{' '}
          for more.
        </p>
        
        <button 
          onClick={handleButtonClick}
          className="px-6 py-2 mt-4 text-sm font-medium bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors rounded-md"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;