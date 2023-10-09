import React from "react";
import Header from "../../components/common/Header";
import TabComponent from "../../components/common/TabComponent";
import WECRoutes from "./utils/WECRoutes";
import styled from "@emotion/styled";


// const CenteredContainer = styled("div")({
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center", 
// });

const tabs = [{ label: "Races", path: "/wec/races" }, { label: "Standings", path: "/wec/standings" }];

const Homepage = () => {

    return (
        <>
            <Header />
            {/* <CenteredContainer> */}
            <TabComponent tabs={tabs} />
            {/* </CenteredContainer> */}
            <WECRoutes />
        </>
    );
};

export default Homepage;
