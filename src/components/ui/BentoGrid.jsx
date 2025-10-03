import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[16rem] md:grid-cols-6 ",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-start rounded-lg border border-neutral-200 bg-transparent transition duration-200 hover:shadow-xl relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0">{header}</div>
      <div className="relative z-10 p-4 transition duration-200 group-hover/bento:translate-x-2">
        <div className="font-sans text-2xl font-bold text-black drop-shadow-lg">
          {title}
        </div>
        <div className="font-sans text-md font-normal text-gray-800 drop-shadow-md mt-2">
          {description}
        </div>
      </div>
    </div>
  );
};

