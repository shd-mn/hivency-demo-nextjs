import Image from "next/image";
import underline from "@/public/assets/images/underline.png";

type PropTypes = {
  el?: keyof JSX.IntrinsicElements;
  part1: string;
  underLine: string;
  part2?: string;
  className: string;
};
function Title({ el = "h2", part1, underLine, part2, className }: PropTypes) {
  const Element = el as keyof JSX.IntrinsicElements;
  return (
    <Element className={className}>
      <span>{part1}</span>
      <span className="relative inline-block">
        {underLine}
        <Image
          src={underline}
          alt={`${part1} ${underLine} ${part2}`}
          className="absolute w-full object-contain"
        />
      </span>
      <span>{part2}</span>
    </Element>
  );
}

export default Title;
