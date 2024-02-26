import { Container } from "../container";

export default function Footer() {
  return (
    <Container>
      <footer className="w-full mt-6 p-3 bg-[#182237] flex rounded-lg">
        <div className="w-full flex items-center justify-center max-w-7xl mx-auto">
          <h1 className="font-bold text-2xl">
            <span className="text-[#217e29a4]">GREEN</span>
            <span className="text-[#067285d7]"> FUEL</span>
          </h1>
        </div>
      </footer>
    </Container>
  );
}
