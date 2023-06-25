import React, { Fragment } from "react";
import FormattedDate from "../../Elements/FormattedDate";

const badgeColors = {
    Event: "bg-cornflower-blue",
    Berita: "bg-teal-green",
    Kritik: "bg-cinnabar",
};

export default function Badges({ countData, latestData }) {
    return (
        <Fragment>
            {Object.keys(countData).map((key) => {
                const colorClass = badgeColors[key];

                return (
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4" key={key}>
                        <div
                            className={`relative flex flex-col min-w-0 break-words bg-base-100/60 rounded mb-6 xl:mb-0 shadow-md ${colorClass}/50`}
                        >
                            <div className="flex-auto p-4 bg-white">
                                <div className="flex flex-wrap">
                                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                            {key}
                                        </h5>
                                        <span className="font-semibold text-xl text-blueGray-700">
                                            {countData[key]}{" "}
                                            {key === "Kritik"
                                                ? "Pesan"
                                                : "Data"}
                                        </span>
                                    </div>
                                    <div className="relative w-auto pl-4 flex-initial">
                                        <div
                                            className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${colorClass}`}
                                        >
                                            <i className="far fa-chart-bar"></i>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-blueGray-400 mt-4">
                                    <span className="whitespace-nowrap">
                                        Terbaru:{" "}
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-arrow-up"></i>
                                        <FormattedDate
                                            date={latestData[key].updated_at}
                                        />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Fragment>
    );
}
