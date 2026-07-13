import type { CSSProperties } from "react";
import {
    footerMapLandPaths,
    footerMapNodes,
    footerMapRoutes,
} from "./footerNetworkMapData";

type NetworkRouteStyle = CSSProperties & {
    "--route-duration": string;
    "--route-delay": string;
};

type NetworkNodeStyle = CSSProperties & {
    "--node-delay": string;
};

export function FooterNetworkMap() {
    return (
        <div
            className="footer-network-map"
            aria-hidden="true"
        >
            <svg
                className="footer-network-map__svg"
                viewBox="0 0 1600 680"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
            >
                <defs>
                    <linearGradient
                        id="footer-network-flow-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop
                            className="footer-network-map__flow-start"
                            offset="0%"
                        />
                        <stop
                            className="footer-network-map__flow-middle"
                            offset="46%"
                        />
                        <stop
                            className="footer-network-map__flow-end"
                            offset="100%"
                        />
                    </linearGradient>
                </defs>

                <g className="footer-network-map__land">
                    {Object.entries(footerMapLandPaths).map(
                        ([continent, path]) => (
                            <path
                                className="footer-network-map__continent"
                                d={path}
                                fillRule="evenodd"
                                key={continent}
                            />
                        ),
                    )}
                </g>

                <g className="footer-network-map__routes">
                    {footerMapRoutes.map((route) => {
                        const routeStyle: NetworkRouteStyle = {
                            "--route-duration": `${route.duration}s`,
                            "--route-delay": `${route.delay}s`,
                        };

                        return (
                            <g
                                className={`footer-network-map__route is-${route.priority}`}
                                key={route.id}
                                style={routeStyle}
                            >
                                <path
                                    id={`footer-network-route-${route.id}`}
                                    className="footer-network-map__route-base"
                                    d={route.path}
                                />

                                <path
                                    className="footer-network-map__route-glow"
                                    d={route.path}
                                />

                                <path
                                    className="footer-network-map__route-flow"
                                    d={route.path}
                                />

                                {Array.from({
                                    length: route.particles,
                                }).map((_, particleIndex) => {
                                    const begin =
                                        route.delay -
                                        (route.duration / route.particles) *
                                        particleIndex;

                                    return (
                                        <circle
                                            className="footer-network-map__particle"
                                            r={particleIndex === 0 ? 3.2 : 2.4}
                                            key={`${route.id}-${particleIndex}`}
                                        >
                                            <animateMotion
                                                begin={`${begin}s`}
                                                dur={`${route.duration}s`}
                                                repeatCount="indefinite"
                                            >
                                                <mpath
                                                    href={`#footer-network-route-${route.id}`}
                                                />
                                            </animateMotion>
                                        </circle>
                                    );
                                })}
                            </g>
                        );
                    })}
                </g>

                <g className="footer-network-map__nodes">
                    {footerMapNodes.map((node, index) => {
                        const nodeStyle: NetworkNodeStyle = {
                            "--node-delay": `${index * -0.34}s`,
                        };

                        return (
                            <g
                                className={`footer-network-map__node is-importance-${node.importance}`}
                                key={node.id}
                                style={nodeStyle}
                                transform={`translate(${node.x} ${node.y})`}
                            >
                                <circle
                                    className="footer-network-map__node-wave"
                                    r="15"
                                />
                                <circle
                                    className="footer-network-map__node-ring"
                                    r="7"
                                />
                                <circle
                                    className="footer-network-map__node-core"
                                    r="2.8"
                                />
                            </g>
                        );
                    })}
                </g>
            </svg>
        </div>
    );
}