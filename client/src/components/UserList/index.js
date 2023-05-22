import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../store/usersSlice';

const UsersList = props => {
  const { isFetching, error, users } = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers({ limit: 10, offset: 0 }));
  }, [dispatch]);

  return (
    <>
      <h1>UserList</h1>
      {isFetching && <h2>Loading...</h2>}
      {error && <h2>Error!</h2>}
      {!isFetching && !error && (
        <section>
          <ol>
            {users.map(user => (
              <li key={user.id}>
                {user.email}
                <Link to={`/users/${user.id}`}>show profile</Link>
                <button onClick={() => {}}>delete user</button>
              </li>
            ))}
          </ol>
        </section>
      )}
    </>
  );
};

//const mapStateToProps = (store) => store.users
// const mapStateToProps = ({ users }) => users;
// const mapDispatchToProps =(dispatch)=>({
//   loadUsers: (currRes) => dispatch(getAllUsers({res:currRes}))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersList;
