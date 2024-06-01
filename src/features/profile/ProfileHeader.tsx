import React from "react";

const ProfileHeader = ({
  onClick,
  title,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
}) => {
  return (
    <header className="flex items-center justify-between border-b-2 pb-2 border-green-500">
      <h4 className="lg:text-xl font-semibold text-lg">{title}</h4>
      <span
        onClick={onClick}
        className="cursor-pointer text-blue-500 font-medium"
      >
        مرحله قبل؟
      </span>
    </header>
  );
};

export default ProfileHeader;
