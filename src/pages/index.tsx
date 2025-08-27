export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Hey, Igor Bayerl here! 👋</h1>
        </div>

        {/* Current Job */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Current Position</h2>
          <p className="mb-2">
            <span className="text-blue-400">
              Online Game Developer (Backend)
            </span>{' '}
            & <span className="text-blue-400">QA Automation Engineer</span> at{' '}
            <span className="text-green-400">Crytek</span>
          </p>
          <p className="mb-2">
            Currently working on{' '}
            <span className="text-orange-400">Hunt Showdown: 1896</span>
          </p>
          <p className="text-gray-300">📍 Living in Germany</p>
        </div>

        {/* Contact */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <div className="space-y-2">
            <div>
              <span className="text-gray-400">GitHub:</span>{' '}
              <a
                href="https://github.com/igorbayerl"
                className="text-blue-400 hover:text-blue-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/igorbayerl
              </a>
            </div>
            <div>
              <span className="text-gray-400">LinkedIn:</span>{' '}
              <a
                href="https://linkedin.com/in/igorbayerl"
                className="text-blue-400 hover:text-blue-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/igorbayerl
              </a>
            </div>
            <div>
              <span className="text-gray-400">Email:</span>{' '}
              <a
                href="mailto:igorbayerl@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                dev.igorbayerl@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Backend developer and QA automation engineer passionate about online
            gaming. Working on exciting projects in the gaming industry,
            currently focused on Hunt Showdown: 1896 at Crytek. Based in Germany
            and always interested in new technologies and gaming innovations.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Currently working with GO and creating my own tools that make the
            team keep the speed.
          </p>
        </div>
      </div>
    </div>
  )
}
