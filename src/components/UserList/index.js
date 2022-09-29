import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsUser from '../../actions/actionsUser'

const UserList = (props) => {
  const {users, isFetching, error} = useSelector(({users}) => users);
  const { getUsersRequest, clearUserError, deleteUserRequest } = bindActionCreators(ActionsUser, useDispatch());

  const loadUsers = ({limit=5, offset=users.length} = {})=> getUsersRequest({limit, offset});

  useEffect(()=>{  loadUsers(); // eslint-disable-next-line 
    }, []);

  return (
    <section>
      <h2>User List</h2>
      {isFetching && <p>Loading....</p>}
      {error && <p>{error.message}<button onClick={clearUserError}>X</button></p>}
      <ul>
        {
          users.map(user=>(<li key={user.id}>{user.email} 
          <button onClick={()=>{deleteUserRequest({id:user.id})}}>X</button></li>))
        }
      </ul>
      <button onClick={loadUsers}>load more</button>
    </section>
  );
}

export default UserList;
