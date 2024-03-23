import SubTitle from "./components/SubTitle";
import Title from "./components/Title";

function Portfolio() {
  return (
    <section className="pb-[120px] pt-[106px]">
      <div className="container">
        <header className="w-1/2">
          <SubTitle title="Portfolio" className="mb-5" />

          <Title
            part1="Immerse yourself in our latest and most finest "
            underLine="work"
            part2=" ."
            className="mb-10 text-start font-outfit text-[50px] font-medium leading-[60px] tracking-tight"
          />
        </header>
      </div>
    </section>
  );
}

export default Portfolio;
