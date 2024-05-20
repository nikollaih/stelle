import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
    const initialFilters = {
        location: [],
        type: [],
        categories: []
    };

    const initialAppliedFilters = {
        location: [],
        type: [],
        categories: []
    };

    const [filters, setFilters] = useState(initialFilters);
    const [appliedFilters, setAppliedFilters] = useState(initialAppliedFilters);

    const updateFilter = (item, type) => {
        const currentFilters = { ...appliedFilters };
        const allFilters = { ...filters };
        const exists = checkIfExistsFilter(item, type);

        switch (type) {
            case "location":
                currentFilters.location = exists >= 0 ? [] : [item];
                break;
            case "type":
                const { categories, ...newItem } = item;
                currentFilters.type = exists >= 0 ? [] : [newItem];
                allFilters.categories = exists >= 0 ? [] : item.categories;
                currentFilters.categories = [];
                break;
            case "categories":
                currentFilters.categories = updateArray(currentFilters.categories, exists, item);
                break;
            default:
                break;
        }

        setAppliedFilters(currentFilters);
        setFilters(allFilters);
    };

    const checkIfExistsFilter = (item, type) => {
        return appliedFilters[type].findIndex((filter) => JSON.stringify(filter) === JSON.stringify(item));
    };

    const updateArray = (array, index, item) => {
        const newArray = [...array];
        if (index >= 0) {
            newArray.splice(index, 1);
        } else {
            newArray.push(item);
        }
        return newArray;
    };

    const clearFilters = () => {
        setAppliedFilters(initialAppliedFilters);
    }

    return (
        <FilterContext.Provider value={{ filters, appliedFilters, updateFilter, setFilters, clearFilters }}>
            {children}
        </FilterContext.Provider>
    );
};
