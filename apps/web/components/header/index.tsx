import React from "react";
import { Flex, Space, Size, Card, View, Button } from "ui";
import Logo from "../Logo";

const Header = () => {
  return (
    <Size className="HEADER" height="60px" width="100%">
      <Card background="white">
        <Space padding={[0, 0, 0, 2]}>
          <Flex flexDirection="row" alignItems="center">
            <View>
              <Logo width={10} height={6} />
              <Button>Hey</Button>
            </View>
          </Flex>
        </Space>
      </Card>
    </Size>
  );
};

export default Header;
