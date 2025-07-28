import React from "react";

type ContactInfoProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

export default function ContactInfo({ icon, label, value }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-4 p-4 mb-2">
      <span className="flex-shrink-0">{icon}</span>
      <div className="flex flex-col">
        <span className="text-[#443C3A]" style={{fontFamily: 'Inter, sans-serif', fontSize: '20.46px'}}>{value}</span>
      </div>
    </div>
  );
}
