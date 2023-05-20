/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FuncPanelOverridesProps = {
    FuncPanel?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "\u8FFD\u52A0"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FuncPanelProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FuncPanelOverridesProps | undefined | null;
}>;
export default function FuncPanel(props: FuncPanelProps): React.ReactElement;
