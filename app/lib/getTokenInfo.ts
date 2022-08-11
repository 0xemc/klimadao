import { StaticImageData } from "components/Image";
import { AllowancesToken } from "@klimadao/lib/types/allowances";

import BCT from "public/icons/BCT.png";
import NCT from "public/icons/NCT.png";
import MCO2 from "public/icons/MCO2.png";
import KLIMA from "public/icons/KLIMA.png";
import USDC from "public/icons/USDC.png";
import UBO from "public/icons/UBO.png";
import NBO from "public/icons/NBO.png";

type TokenInfoMap = {
  [key in AllowancesToken]: {
    key: string;
    icon: StaticImageData;
    label: string;
  };
};

export const tokenInfo: TokenInfoMap = {
  ubo: { key: "ubo", icon: UBO, label: "UBO" },
  nbo: { key: "nbo", icon: NBO, label: "NBO" },
  bct: { key: "bct", icon: BCT, label: "BCT" },
  nct: { key: "nct", icon: NCT, label: "NCT" },
  mco2: { key: "mco2", icon: MCO2, label: "MCO2" },
  usdc: { key: "usdc", icon: USDC, label: "USDC" },
  klima: { key: "klima", icon: KLIMA, label: "KLIMA" },
  sklima: { key: "sklima", icon: KLIMA, label: "sKLIMA" },
  wsklima: { key: "wsklima", icon: KLIMA, label: "wsKLIMA" },
  pklima: { key: "pklima", icon: KLIMA, label: "pklima" },
};