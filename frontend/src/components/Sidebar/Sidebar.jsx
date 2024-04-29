import './style.css'; 

const users = [
    {
        id: 1,
        name: 'John Doe',
        image: 'rectangle-17@2x.png',
    },
    {
        id: 2,
        name: 'John Doe',
        image: 'rectangle-17@2x.png',
    },
    {
        id: 3,
        name: 'John Doe',
        image: 'rectangle-17@2x.png',
    },
    {
        id: 4,
        name: 'John Doe',
        image: 'rectangle-17@2x.png',
    },
    {
        id: 5,
        name: 'John Doe',
        image: 'rectangle-17@2x.png',
    },
    {
        id: 6,
        name: 'John Doe',
        image: 'rectangle-17@2x.png',
    },
    {
        id: 7,
        name: 'John Doe',
        image: 'rectangle-17@2x.png',
    },
];

const Sidebar = ({ possibleMatches }) => {
    const users = possibleMatches && possibleMatches.matchedUsers ? possibleMatches.matchedUsers : [];
    console.log("users in sidebar:", users);
    const defaultImage = "uploads/default.jpeg"; 

    return (
        <div className="sidebar">
            {users.map((user, index) => (
                <div key={index} className="user">
                    <img src={user.image || defaultImage} alt={user.name} className="avatar" />
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
