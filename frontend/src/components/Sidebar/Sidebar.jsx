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

];

const Sidebar = () => {
    return (
        <div className="sidebar">
            {users.map((user, index) => (
                <div key={index} className="user">
                    <img src={user.image} alt={user.name} className="avatar" />
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
