import ButtonLink from "./buttonLink";
import Card from "./card";

export default function Process() {
  return (
    <div id="process" className="flex flex-col justify-center items-center mb-28">
      <h2>How does it work?</h2>
      <h6 className="text-gray-500">
        A seamless experience for you and your user
      </h6>
      <Card
        size="large"
        additionalCSS="bg-black flex-row justify-center items-center"
      >
        <h1 className="font-semibold">Everything Happens Inside of Your App</h1>
        <h6 className="text-center">
          Once an user has created an account, they are able to see instant
          performance of their portfolio without leaving your app.
        </h6>
      </Card>
      <div className="flex flex-row">
        <Card size="x-small" additionalCSS="bg-blue-500">
          <h6>1. Integration Request</h6>
          <p>
            We help you integrate the APIs, and embed it in-app to keep your
            neat user experience.
          </p>
        </Card>
        <Card size="x-small" additionalCSS="bg-green-500">
          <h6>2. New Investing Feature</h6>
          <p>
            Your user sees the “Invest Now” button within your app. They click
            it and fill out a quick form.
          </p>
        </Card>
        <Card size="x-small" additionalCSS="bg-yellow-500">
          <h6>3. Digital Onboarding</h6>
          <p>
            Our onboarding captures and transfers the information. We take care
            of KYC & AML.
          </p>
        </Card>
        <Card size="x-small" additionalCSS="bg-red-500">
          <h6>4. Risk Profiling & Portfolio Creation</h6>
          <p>
            With the information, our investment advisor begins to work on the
            investment portfolios.
          </p>
        </Card>
      </div>
      <h2>Ready to get started?</h2>
      <ButtonLink href="https://investing.chace.co.in/contact">
        Request API Keys
      </ButtonLink>
    </div>
  );
}
