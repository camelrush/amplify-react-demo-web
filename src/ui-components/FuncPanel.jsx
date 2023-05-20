/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function FuncPanel(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-end"
      alignItems="flex-end"
      overflow="hidden"
      position="relative"
      padding="15px 23px 15px 23px"
      backgroundColor="rgba(255,255,255,1)"
      opacity="0.4000000059604645"
      {...getOverrideProps(overrides, "FuncPanel")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="20px"
        padding="9px 78px 9px 78px"
        backgroundColor="rgba(53,84,192,1)"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Text
          fontFamily="Noto Sans"
          fontSize="24px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="32.6879997253418px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="追加"
          {...getOverrideProps(overrides, "\u8FFD\u52A0")}
        ></Text>
      </Flex>
    </Flex>
  );
}
