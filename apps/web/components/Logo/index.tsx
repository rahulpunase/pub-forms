import React from "react";
import Image from "next/image";
import { Size, View, Card } from "ui";

const Logo = ({ height, width }: any) => {
  return (
    <Size height={height} width={width}>
      <Card background="black">
        <View>H</View>
      </Card>
    </Size>
  );
};

export default Logo;
