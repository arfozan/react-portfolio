export default function FantasyLeague() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">

      <h1 className="text-4xl font-bold mb-6">
        Custom Fantasy Premier League
      </h1>

      <p className="text-gray-400 mb-8">
        A custom fantasy football platform with player transfers,
        budgets, league tables and match statistics.
      </p>

      <div className="space-y-4 text-gray-400">
        <p><b>Backend:</b> Django</p>
        <p><b>Frontend:</b> React (Android Expo)</p>
        <p><b>Hosting:</b> PythonAnywhere</p>
      </div>

      <div className="mt-8 flex gap-6">

        <a
          href="https://github.com/yourrepo"
          className="px-6 py-3 bg-blue-500 rounded-lg"
        >
          GitHub
        </a>

        <a
          href="https://demo-link"
          className="px-6 py-3 border border-blue-500 rounded-lg"
        >
          Live Demo
        </a>

      </div>

    </section>
  )
}