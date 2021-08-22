import {format, parse } from "date-fns";

export const COLUMNS = [
    {
        accessor: "id",
        label: "ID"
    },
    {
        accessor: "name",
        label: "Name"
    },
    {
        accessor: ({dateOfBirth}: any) => format(parse(dateOfBirth, "dd-MM-yyyy", new Date()), "do MMM yyyy"),
        label: "Date of Birth"
    },
    {
        accessor: "favouriteFood",
        label: "Favourite Food"
    }
]