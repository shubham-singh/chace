import Card from "./card";
import Image from "next/image";

export default function Features() {
  return (
    <div
      id="features"
      className="flex flex-col justify-center items-center mb-28"
    >
      <h2>Build your own investment apps</h2>
      <h6 className="text-gray-500">
        Create and offer the next generation of wealth management services to
        your users.
      </h6>

      <div className="flex flex-col items-center flex-wrap my-4 w-full">
        <Card
          size="large"
          additionalCSS="bg-yellow-500 flex-row justify-center items-center"
        >
          <h1 className="text-black font-semibold">
            Embed Investments inside your app
          </h1>
          <h4 className="text-black">
            Build an investment management arm inside your app
          </h4>
        </Card>
        <Card
          size="large"
          additionalCSS="bg-blue-500 flex-row justify-center items-center"
        >
          <h1 className="text-black font-semibold">Visualize Performance</h1>
          <h4 className="text-black text-center">
            Show instant investment performance and additional information about
            your customers&#39; investments.
          </h4>
        </Card>
        <Card
          size="large"
          additionalCSS="bg-green-500 flex-row justify-center items-center"
        >
          <h1 className="text-black font-semibold text-center">
            Offer Wealth Management with low minimums
          </h1>
          <h4 className="text-black text-center">
            Your users’ funds will be invested in professionally-managed
            portfolios.
          </h4>
        </Card>
        <Card
          size="large"
          additionalCSS="bg-red-500 flex-row justify-center items-center"
        >
          <h1 className="text-black font-semibold text-center">Plug & Play</h1>
          <h4 className="text-black text-center">
            With a few lines of code, we simplify regulations, taxes, and
            investment management.
          </h4>
        </Card>
      </div>

      <div className="flex flex-row justify-center items-center">
        <div>
          <h5 className="font-semibold">APIs for the whole investment management process</h5>
          <h6>
            Securely access a robust suite of tools in one effortless
            integration
          </h6>
        </div>
        <Image src="/images/code_snippet.png" alt="code" width="540px" height="390px" />
      </div>
    </div>
  );
}
