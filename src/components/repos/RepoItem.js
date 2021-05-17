import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const RepoItem = ( { repo } ) => {
    return (
        <div className="card">
            <h3>
                <a href={repo.html_url}>{repo.name}</a>
                {/* <Link to={repo.html_url}>{repo.name}</Link> */}
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem
                                                                                          