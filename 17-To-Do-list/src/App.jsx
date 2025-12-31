import Main from './pages/Main'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold tracking-wide">
            To Do Dashboard
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Main />
      </main>

    </div>
  )
}

export default App
