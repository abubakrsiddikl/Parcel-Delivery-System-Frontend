import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Role } from "@/constants/role.constants";

type RoleOption = {
  value: string;
  label: string;
};

const ROLE_OPTIONS: RoleOption[] = [
  { value: Role.SENDER, label: "Sender" },
  { value: Role.RECEIVER, label: "Receiver" },
];

type RoleSelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

const RoleSelect: React.FC<RoleSelectProps> = ({
  value,
  onChange,
  placeholder = "Select role",
  className,
  disabled = false,
}) => {
  return (
    <Select
      value={value}
      onValueChange={(val) => onChange && onChange(val)}
      disabled={disabled}
    >
      <SelectTrigger className={className} aria-label="Select role">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {ROLE_OPTIONS.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default RoleSelect;
