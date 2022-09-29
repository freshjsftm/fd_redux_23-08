import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsUser from '../../actions/actionsUser'

const UserList = (props) => {
  const {users, isFetching, error} = useSelector(({users}) => users);
  const { getUsersRequest } = bindActionCreators(ActionsUser, useDispatch());

  const loadUsers = ({limit=5, offset=users.length} = {})=> getUsersRequest({limit, offset});

  useEffect(()=>{  loadUsers(); // eslint-disable-next-line 
    }, []);

  return (
    <section>
      <h2>User List</h2>
      {isFetching && <p>Loading....</p>}
      {error && <p>{JSON.stringify(error)}</p>}
      <ul>
        {
          users.map(user=>(<li key={user.id}>{user.email}</li>))
        }
      </ul>
      <button onClick={loadUsers}>load more</button>
    </section>
  );
}

export default UserList;
