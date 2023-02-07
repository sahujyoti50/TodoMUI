const FilteredList = ({ filteredTodos }) => {
    return (
        <div>
            {filteredTodos.map((filtered) => {
                <p key={filtered.id}>
                    {filtered.name}</p>
            }
            )}</div >
    )
}
export default FilteredList;