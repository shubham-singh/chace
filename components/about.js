import ButtonLink from "./buttonLink";
import Card from "./card";

export default function About() {
  return (
    <div id="about" className="flex flex-col justify-center items-center mt-28">
      <h2>Enter the capital markets of the world</h2>
      <h6 className="text-gray-500">
        We are building an interconnected system of broker-dealers, registered
        investment advisors, and exchanges
      </h6>
      <div className="flex flex-wrap my-4">
        <Card size="small">
            <h6 className="text-yellow-400 font-bold">
            Quick integration
            </h6>
            <p className="text-lg">We know time to market matters. We streamline the
            process to help you get to production in a few weeks.</p>
        </Card>
        <Card size="small">
            <h6 className="text-green-400 font-bold">
            Reduced costs
            </h6>
            <p className="text-lg">Offering investments in-house is expensive: hiring a compliance officer, portfolio managers, and analysts to working with big law firms. We take care of the whole process.</p>
        </Card>
        <Card size="small">
            <h6 className="text-blue-400 font-bold">
            Secure and Accredited
            </h6>
            <p className="text-lg">Your customer&#39;s investments are safely managed by a world-renowned accredited clearing and custodian firm.</p>
        </Card>
      </div>
      <ButtonLink href="https://investing.chace.co.in/contact">
        Request API Keys
      </ButtonLink>
    </div>
  );
}
