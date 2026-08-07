function AnimatedBackground() {

  return (

    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute w-96 h-96 bg-cyan-500 opacity-20 blur-[120px] rounded-full top-20 left-20 animate-pulse" />

      <div className="absolute w-96 h-96 bg-purple-500 opacity-20 blur-[120px] rounded-full bottom-20 right-20 animate-pulse" />

      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-[120px] rounded-full top-1/2 left-1/2 animate-pulse" />

    </div>

  );

}

export default AnimatedBackground;