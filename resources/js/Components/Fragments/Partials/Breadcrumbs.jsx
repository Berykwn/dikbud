import React from "react";

export default function Breadcrumbs({ title, pages }) {
  return (
    <nav className="text-md breadcrumbs ml-2 lg:ml-0">
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href={pages}>{pages}</a>
        </li>
        <li>
          <a href={title}>{title}</a>
        </li>
      </ul>
    </nav>
  );
}
