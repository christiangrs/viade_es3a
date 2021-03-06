import React from "react";
import ShowMap from "../Map/Map";
import ShareRoute from "./ShareRoute";
import "./ShareRoute.css";

const LeftPanel = () => {
    return (
        <nav className="leftPanel_leftPart" data-testid="shareRoutePart">
            <ShareRoute />
        </nav>
    );
};

const RightPanel = () => {
    return (
        <div className="rightPanel_mapa" id="jeje" data-testid="mapPart">
            <ShowMap></ShowMap>
        </div>
    );
};

const ShareRoutePanel = () => {
    return (
        <div className="leftPanel_leftPart">
            <div className="leftPanel">
                <LeftPanel />
                <RightPanel />
            </div>
        </div>
    );
};

export default ShareRoutePanel;