import loadingImg from "../../assets/logo.png"; // replace with your image path

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <div className="text-6xl font-bold text-gray-400">L</div>
        <div className="w-14 h-14">
          <img
            src={loadingImg}
            alt="loading"
            className="w-full h-full object-cover rounded-full animate-spin"
          />
        </div>
        <div className="text-gray-400 font-medium text-6xl tracking-widest">
          OADING
        </div>
      </div>
    </div>
  );
}
