import Navbar from "@/Components/Fragments/Partials/Navbar";
import Footer from "@/Components/Fragments/Partials/Footer";
import { Head } from "@inertiajs/react";
import { Fragment } from "react";

export default function MainLayout(props) {
    return (
        <Fragment>
            <Head title={props.title} />
            <Navbar pages={props.pages} />
            <main>{props.children}</main>
            <Footer name={"homepage"} />
        </Fragment>
    );
}
