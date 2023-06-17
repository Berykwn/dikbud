import { useState } from "react";
import AlertNotFound from "../../Elements/Alert/AlertNotFounddd";
import FormSearch from "../Form/FormSearch";
import CardEvent from "../Card/CardEvent";
import DescriptionPage from "../Partials/DescriptionPage";

export default function ListEvent({ events, allEvents, pages, url }) {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchKeyword(value);
        setIsSearching(value !== "");
    };

    const filteredEvents = isSearching
        ? allEvents.filter((event) => {
              const { judul_event, deskripsi } = event;
              const normalizedKeyword = searchKeyword.toLowerCase();
              return (
                  judul_event.toLowerCase().includes(normalizedKeyword) ||
                  deskripsi.toLowerCase().includes(normalizedKeyword)
              );
          })
        : events;

    const renderPageHeader = () => {
        const data = {
            title: "Event Kebudayaan Kabupaten Lahat.",
            desc: "Mari bergabung dan menjadi bagian dari kegiatan melestarikan budaya lokal di Kabupaten Lahat, manfaatkan kesempatan ini untuk memupuk rasa persaudaraan dan kebanggaan terhadap warisan budaya kita yang kaya.",
        };

        return (
            <div className="py-6">
                <DescriptionPage
                    key="event-list"
                    title={data.title}
                    desc={data.desc}
                    url={url}
                />
                <div className="w-3/5 mx-auto">
                    <FormSearch
                        searchKeyword={searchKeyword}
                        handleSearchInputChange={handleSearchInputChange}
                        pages={pages}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {renderPageHeader()}
            {filteredEvents.length > 0 ? (
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid grid-cols-1 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {filteredEvents.map((event) => (
                            <div key={event.id} className="block">
                                <CardEvent
                                    {...event}
                                    url={route("event.detail")}
                                    pages={pages}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <AlertNotFound />
            )}
        </div>
    );
}
