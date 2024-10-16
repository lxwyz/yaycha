import {
    Avatar,
    Box,
    Typography,
}from "@mui/material";

import {pink} from "@mui/material/colors";

import Item from "../components/Item";

export default function Profile(){
    return(
        <Box>
            <Box sx={{bgcolor: "banner",height: 150, borderRadius: 4}}></Box>
            <Box
            sx={{
                mb: 4,
                martginTop: "-60px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
            }}>
                <Avatar sx={{width: 100, height: 100, bgcolor:pink[500]}}/>
                <Box sx={{textAlign: "center"}}>
                    <Typography>Alice</Typography>
                    <Typography sx={{fontSize: "0.8cm", color: "text.fade"}}>
                        Alice&apos;s profile bio content here
                    </Typography>
                </Box>
            </Box>
            <Item
            key={1}
            remove={()=>{}}
            item={{
                id:1,
                content: "A post content from Alice",
                name: "Alice",
            }}/>
        </Box>


    )
}