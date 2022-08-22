function Navbar({openAddToDoModel}) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Todo app</a>
                <form className="d-flex input-group w-auto">
                    <button type="button" className="btn btn-primary me-3" style={ { height:35 }} onClick={openAddToDoModel}>
                        ADD TODO
                    </button>
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                </form>
            </div>
        </nav>

    );
}
export default Navbar;