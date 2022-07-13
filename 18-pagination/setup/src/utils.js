const paginate = (data, currentPage, postsPerPage) => {
    const indexOfLastPage = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const paginatedData = data.slice(indexOfFirstPage, indexOfLastPage);
    return paginatedData;
}

export default paginate
