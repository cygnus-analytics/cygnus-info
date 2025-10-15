import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-6",
        "auto-rows-[minmax(200px,auto)] sm:auto-rows-[minmax(250px,auto)] md:auto-rows-[16rem]",
        className
      )}
    >
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
        "group/bento relative overflow-hidden flex flex-col justify-start rounded-lg border border-neutral-200 bg-transparent shadow-input transition duration-200 hover:shadow-xl",
        "min-h-[220px] sm:min-h-[280px] md:min-h-[16rem]",
        className
      )}
    >
      <div className="absolute inset-0">{header}</div>

      <div className="relative z-10 p-4 transition-transform duration-200 group-hover/bento:translate-x-2">
        {title && (
          <div className="font-sans text-xl sm:text-2xl font-bold text-black drop-shadow-lg">
            {title}
          </div>
        )}
        {description && (
          <div className="mt-2 font-sans text-sm sm:text-md text-gray-800 drop-shadow-md">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
