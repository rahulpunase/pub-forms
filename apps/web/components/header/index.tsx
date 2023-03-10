import React from "react";
import {
  Flex,
  Space,
  Size,
  Card,
  View,
  Button,
  MuiView,
  MuiCard,
  MuiFlex,
} from "ui";
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
              <MuiFlex display="flex">
                <MuiCard backgroundColor="red">
                  <MuiView>Some data</MuiView>
                </MuiCard>
              </MuiFlex>
            </View>
          </Flex>
        </Space>
      </Card>
    </Size>
  );
};

export default Header;
