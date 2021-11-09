export default function Card({ size = "small", additionalCSS = "", children }) {
    function sizeSelect(size) {
        if (size === "x-small") {
            return "h-60 w-60"
        }
        if (size === "small") {
            return "w-80 h-72"
        }
        if (size === "large") {
            return "w-4/5 h-96"
        }

    }
  return <div className={`flex flex-col justify-start bg-black text-white rounded-2xl p-6 m-4 border-solid border ${sizeSelect(size)} ${additionalCSS}`}>{children}</div>;
}
