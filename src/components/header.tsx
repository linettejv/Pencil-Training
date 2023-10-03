import { ButtonSize } from "@/components-ui/enums/ui";
import { SecondaryButton } from "./button/secondary-button";
import { Winner } from "@/components-ui/icons";

export const Header = ({
  title,
  children,
}: {
  title: string;
  children?: any;
}) => {
  return (
    <>
      <div className="mb-5 w-full h-[76px] rounded-xl border border-gray-3 bg-white flex justify-between items-center px-8">
        <div className="font-nunito text-xl font-semibold">{title}</div>
        <SecondaryButton
          label={"Use copy to generate Ideas"}
          size={ButtonSize.BASE_MD}
        />  
      </div>
    </>
  );
};
