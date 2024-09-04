import React, { ReactNode } from "react";
import { Text } from "react-native";

const SmartTitle: React.FC<{ children: ReactNode; class?: any }> = ({
  children,
  class: className,
}) => {
  return (
    <Text style={{ fontFamily: "Baloo2-ExtraBold" }} className={className}>
      {children}
    </Text>
  );
};

export default SmartTitle;
