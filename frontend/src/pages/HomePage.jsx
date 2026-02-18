const HomePage = () => {
  return (
    <div className="relative inset-0 h-full w-full">

      <div className="absolute inset-0 -z-10 h-full w-full bg-white
      bg-[linear-gradient(to_right,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.12)_1px,transparent_1px)] 
      bg-[size:6rem_5rem] 
      [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]">
      </div>

      <div className="min-h-screen flex items-center justify-center mx-auto text-center">
        <div className="max-w-screen mx-auto text-center">
          <div className="text-gray-800 text-6xl font-bold mb-7">
            AppName
          </div>
          <div className="text-blue-800 text-3xl font-bold mb-12">
            Welcome sa webapp ni opao. Sana okay lang kayo
          </div>
          <button className="btn bg-red-700 border-none text-white hover:bg-red-600 px-14 mr-5">
            Create
          </button>
          <button className="btn bg-green-700 border-none text-white hover:bg-red-600 px-14">
            Edit
          </button>
        </div>
      </div>

    </div>
  )
}

export default HomePage
