import React from "react";
import { Fragment } from "react";
import CardEvent from "../Card/CardEvent";

export default function LatestEvent({ events, pages, isDark }) {
    return (
        <Fragment>
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid grid-cols-1 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {events.map((event) => (
                        <div key={event.id} className="block">
                            <CardEvent
                                {...event}
                                url={route("event.detail")}
                                pages={pages}
                                isDark={isDark}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}
