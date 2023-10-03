export const Header = ({ title }: { title: string }) => {
  return (
    <>
      <div className="mb-5 w-full h-[76px] rounded-xl border border-gray-3 bg-white flex justify-between items-center px-8">
        <div className="font-nunito text-xl font-semibold">{title}</div>
      </div>
    </>
  );
};
