type PropTypes = {
  title: string;
  className?: string;
};

function SubTitle({ title, className }: PropTypes) {
  return (
    <div className={className}>
      <span className="rounded-lg bg-[#E6EFFF] px-3 py-[6px] font-outfit text-xl font-medium text-[#015DFF]">
        {title}
      </span>
    </div>
  );
}

export default SubTitle;
