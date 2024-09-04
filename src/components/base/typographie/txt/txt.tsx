import React, {ReactNode, useEffect, useState} from 'react';
import {Text} from 'react-native';

const SmartText: React.FC<{
  children: ReactNode;
  class?: any;
  italic?: boolean;
  weight?: 'bold' | 'regular' | 'light';
}> = ({children, class: className, italic = false, weight = 'regular'}) => {
  const [font, setFont] = useState<string>('JosefinSans-Regular');

  useEffect(() => {
    if (italic) {
      if (weight === 'bold') setFont('JosefinSans-BoldItalic');
      if (weight === 'regular') setFont('JosefinSans-Italic');
      if (weight === 'light') setFont('JosefinSans-LightItalic');
    } else {
      if (weight === 'bold') setFont('JosefinSans-Bold');
      if (weight === 'regular') setFont('JosefinSans-Regular');
      if (weight === 'light') setFont('JosefinSans-Light');
    }
  }, [italic, weight]);

  return (
    <Text style={{fontFamily: font}} className={className}>
      {children}
      {italic}
    </Text>
  );
};

export default SmartText;
