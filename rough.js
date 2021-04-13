import React from "react";

const friends = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = React.useState(users);
  const filterUsers = (e) => {
    const searchValue = e.target.value;
    const currentUsers = [...users];
    const matches = currentUsers.filter((user) => {
      const email = user.email.toLowerCase();
      return email.startsWith(searchValue);
    });
    setFilteredUsers(matches);
  };

  return (
    <div>
      <h1 class="text-2xl m-5">Search for friends</h1>
      <input
        onChange={filterUsers}
        class="border-black border-2 m-5 p-1"
      ></input>
      {filteredUsers.map((user) => (
        <p class=" m-6">{user.email}</p>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`http://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
};

export default friends;
