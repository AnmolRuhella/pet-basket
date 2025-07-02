"use client";
import { Input } from "@/components/ui/input";


type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="mb-4">
      <Input
        placeholder="Search pets..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
