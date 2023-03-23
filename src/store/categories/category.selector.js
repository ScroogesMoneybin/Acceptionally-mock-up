import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;


//memoization of the categories reducer, so it only runs if the categories change
export const selectCategories = createSelector([selectCategoryReducer],(categoriesSlice)=>categoriesSlice.categories);

export const selectorCategoriesMap = createSelector([selectCategories], (categories)=> categories.reduce((accumulator, category)=>{
    const {title, items} = category;
    accumulator[title.toLowerCase()]=items;
    return accumulator;
}, {})
);

export const selectIsCategoriesLoading = createSelector([selectCategoryReducer],(categoriesSlice)=>categoriesSlice.isLoading);