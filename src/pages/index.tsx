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
            <a
              href="https://www.crytek.com/"
              className="text-green-400 hover:text-green-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crytek
            </a>
          </p>
          <p className="mb-2">
            Currently working on{' '}
            <a
              href="https://store.steampowered.com/app/594650/Hunt_Showdown/"
              className="text-orange-400 hover:text-orange-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hunt Showdown: 1896
            </a>
          </p>
          <p className="text-gray-300">
            📍 Living in{' '}
            <a
              href="https://www.google.com/maps/place/Frankfurt"
              className="text-blue-400 hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Germany
            </a>
          </p>
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
                href="mailto:dev.igorbayerl@gmail.com"
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
            currently focused on{' '}
            <a
              href="https://store.steampowered.com/app/594650/Hunt_Showdown/"
              className="text-orange-400 hover:text-orange-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hunt Showdown: 1896
            </a>{' '}
            at{' '}
            <a
              href="https://www.crytek.com/"
              className="text-green-400 hover:text-green-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crytek
            </a>
            . Based in{' '}
            <a
              href="https://www.google.com/maps/place/Frankfurt"
              className="text-blue-400 hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Germany
            </a>{' '}
            and always interested in new technologies and gaming innovations.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Currently working with GO and creating my own tools that make the
            team keep the speed.
          </p>
        </div>

        {/* Current Active Open Projects */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            Current Active Open Projects
          </h2>
          <div>
            <a
              href="https://github.com/IgorBayerl/AdlerCov"
              className="text-lg font-semibold text-purple-400 hover:text-purple-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AdlerCov
            </a>
            <p className="text-gray-300 mt-1">
              A report and static analysis tool for code coverage and complexity
              of code.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
