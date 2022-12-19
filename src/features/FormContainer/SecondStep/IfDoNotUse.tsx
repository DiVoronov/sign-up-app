import React from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import { ConnectionProcessShopify } from "./../SecondStep/ConnectionProcessShopify";
import { ConnectionProcessEmail } from "./../ThirdStep/ConnectionProcessEmail";
import { DoNotUse } from "../../shared/DoNotUse/DoNotUse";
import { SuccessPage } from "./../SecondStep/SuccessPage";

interface IIfDoNotUseProps {
  stepConnection: string
};

export const IfDoNotUse = ( { stepConnection }: IIfDoNotUseProps ) => {
  
  const statusDotUseShopify = useSelector( (state: RootState) => state.doNotUseShopify);
  const statusDotUseGoogle = useSelector( (state: RootState) => state.doNotUseGoogle);

  const optionsArrayShopify = [
    { id: 1, value: "Salesforce" },
    { id: 2, value: "Ecwid" },
    { id: 3, value: "Other" },
  ];

  const optionsArrayGoogle = [
    { id: 1, value: "Microsoft Outlook" },
    { id: 2, value: "Yahoo" },
    { id: 3, value: "Other" },
  ];

  if ( stepConnection === "shopify" ) {
    return (
      <Box>
        { 
          !statusDotUseShopify 
          ? <ConnectionProcessShopify/> 
          : <DoNotUse title="Shopify" description="Chad Beta is currently only available on Shopify. We’ll send you an email when Chad becomes available on your platform." optionsArray={optionsArrayShopify}/>
        }
      </Box>
    );
  } else if ( stepConnection === "google" ) {
    return (
      <Box>
        { 
          !statusDotUseGoogle 
          ? <ConnectionProcessEmail/>
          : <DoNotUse title="Google" description="Unfortunately, Chad Beta only integrates with Gmail. Let us know what email client you use to receive customer support emails and we’ll let you know when we add it as an integration." optionsArray={optionsArrayGoogle}/>
        }
      </Box>
    );
  } else {
    return <></>
  };
};