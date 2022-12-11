import React from "react";
import { Box } from "@mui/material";
import { Description } from "../shared/Description/Description";

import { GoogleEmailItem } from "../shared/GoogleEmailItem/GoogleEmailItem";

import { ReactComponent as UserCircle } from "./UserCircle.svg";
import { ReactComponent as GmailLogo } from "./GmailLogo.svg";
import { ReactComponent as IconInfo } from "./IconInfo.svg";

interface ISignWithGoogleProps {
  title: string
  color: string
};

interface ICircleBoxProps {
  size: string
  background: string
};

interface IGoogleArticlesProps {
  logo: React.ReactNode
  title: string
};

interface ICancelAllowButtonProps {
  title: string
};

const CircleBox = ( { size, background }: ICircleBoxProps ) => (<Box sx={{borderRadius: "50%", background: background, width: size, height: size,}}></Box>)

const GoogleArticles = ( { logo, title }: IGoogleArticlesProps ) => {

  return (
    <Box sx={{display: "flex", width: "90%", margin: "1rem auto"}}>
      <Box sx={{width: "10%"}}>
        { logo }
      </Box>
      <Box sx={{width: "85%"}}>
        <Description color="#2F3237" width="100%" size="14px" weight="500">{ title }</Description>
      </Box>
      <Box sx={{width: "5%", cursor: "pointer"}}>
        <IconInfo/>
      </Box>
    </Box>
  );
};

const CancelAllowButton = ( { title }: ICancelAllowButtonProps ) => (
<Box 
  component="button" 
  sx={{
    width: "187px",
    height: "36px",
    border: "1px solid #E3E5E8",
    borderRadius: "4px",
    background: "none",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer"
  }}
>
  <Description color="#2F70EE" width="max-content" size="14px">{ title }</Description>
</Box>
)

export const ConnectGoogleSecond = ( { title, color }: ISignWithGoogleProps ) => {

  return (
    <Box sx={{width: "90%"}}>

      <Box sx={{display: "flex", flexDirection: "column", gap: "16px", flexWrap: "wrap", justifyContent: "center", margin: "3rem auto 1rem auto", alignContent: "center", ["& > span"]: {justifyContent: "center"}}}>
        <Description color="#24272D" width="334px" size="24px" weight="500" accentColor="#2F70EE"><p><a>Chad</a> wants to access your</p></Description>
        <Description color="#24272D" width="334px" size="24px" weight="500" ><p>Google Account</p></Description>
      </Box>

      <Box sx={{display: "flex", gap: "8px", justifyContent: "center"}}>
        <CircleBox size="20px" background={color}/>
        <Description color="#24272D" width="max-content" size="14px" font="Product Sans">{title}</Description>
      </Box>

      <Box sx={{m: 2.5, mt: 4, mb: 4}}>
        <Description color="#24272D" width="max-content" size="16px" font="Product Sans" accentColor="#2F70EE" weight="700"><p>This will allow <a>Chad</a> to:</p></Description>
      </Box>

      <GoogleArticles logo={<CircleBox size="16px" background="#2F70EE"/>} title="Send email on your behalf" />
      <GoogleArticles logo={<GmailLogo/>} title="Read, compose and send emails from your Gmail account" />

      <Box sx={{display: "flex", gap: "16px", flexDirection: "column", m: 3}}>

        <Description color="#24272D" width="max-content" size="16px" font="Product Sans" weight="700"><p>Make sure that you trust Chad</p></Description>

        <Description color="#24272D" width="100%" size="13px" accentColor="#2F70EE" weight="500"><p>You may be sharing sensitive info with this site or app. You can always see or remove access in your <a>Google Account.</a></p></Description>
        <Description color="#24272D" width="100%" size="13px" accentColor="#2F70EE" weight="500"><p>Learn how Google helps you <a>share data safely.</a></p></Description>
        <Description color="#24272D" width="100%" size="13px" accentColor="#2F70EE" weight="500"><p>See <a>Chad’s privacy policy</a> and <a>Terms of Service.</a></p></Description>

      </Box>

      <Box sx={{display: "flex", gap: "16px", m: 3, mb: 8}}>
        <CancelAllowButton title="Cancel"/>
        <CancelAllowButton title="Allow"/>
      </Box>

    </Box>
  );
};