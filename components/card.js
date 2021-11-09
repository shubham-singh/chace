export default function Card({ size, children }) {
    function sizeSelect(size) {
        if(size === "small") {
            return "w-80 h-72"
        }
    }
  return <div className={`flex flex-col justify-start bg-black text-white rounded-2xl p-6 m-4 border-solid border ${sizeSelect(size)}`}>{children}</div>;
}
