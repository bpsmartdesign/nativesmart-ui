import React, { ReactNode, useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import SmartText from "../typographie/txt/txt";

interface ButtonProps {
  children: ReactNode;
  class?: any;
  color?: "primary" | "secondary";
  rounded?: "xs" | "sm" | "md" | "lg" | "xl";
  outlined?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const SmartBtn: React.FC<ButtonProps> = ({
  children,
  class: className,
  color = "primary",
  outlined = false,
  loading = false,
  onPress,
}) => {
  const [colorClass, setColorClass] = useState("");
  const textColor = outlined
    ? color === "primary"
      ? "text-primary"
      : "text-secondary"
    : "text-slate-50";

  useEffect(() => {
    if (outlined) {
      if (color === "primary")
        setColorClass("bg-primary-500/[.15] border-primary text-primary");
      else
        setColorClass("bg-secondary-500/[.15] border-secondary text-secondary");
    } else {
      if (color === "primary")
        setColorClass("bg-primary border-transparent text-slate-50");
      else setColorClass("bg-secondary border-transparent text-slate-50");
    }
  }, [outlined]);

  return (
    <TouchableOpacity
      className={`${colorClass} border border-solid w-max rounded-2xl ${className}`}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator animating={true} />
      ) : (
        <SmartText class={`${textColor} text-center`} weight="bold">
          {children}
        </SmartText>
      )}
    </TouchableOpacity>
  );
};

export default SmartBtn;
