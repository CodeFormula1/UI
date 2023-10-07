import React from "react";
import WECRoutes from "./utils/WECRoutes";
import Header from "../../components/common/Header";
import TabComponent from "../../components/common/TabComponent";


const tabs = [{ label: "Races", path: "/wec/races" }, { label: "Standings", path: "/wec/standings" }];

const Homepage = () => {

    return (
        <>
            <Header />
            <TabComponent tabs={tabs} />
            <WECRoutes />
        </>
    );
};

export default Homepage;
