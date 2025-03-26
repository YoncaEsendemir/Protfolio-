const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-moto font-bold">
        hello Yonca<span className="animate-blink ml-1"></span>
      </div>
      <div className="w-[200px] h-[2px] bg-green-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-600 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;  // <-- Export default kullanıldı
