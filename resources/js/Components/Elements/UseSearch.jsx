import { useState } from "react";

const useSearch = (allData, initialData, searchFields = ["title"]) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchKeyword(value);
    setIsSearching(value !== "");
  };

  const filteredData = isSearching
    ? allData.filter((item) => {
        const normalizedKeyword = searchKeyword.toLowerCase();
        return searchFields.some((field) => {
          const fieldValue = item[field]?.toLowerCase() || "";
          return fieldValue.includes(normalizedKeyword);
        });
      })
    : initialData;

  return {
    searchKeyword,
    handleSearchInputChange,
    filteredData,
  };
};

export default useSearch;
