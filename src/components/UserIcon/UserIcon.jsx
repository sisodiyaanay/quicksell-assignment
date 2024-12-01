import './UserIcon.css'

const UserIcon = ({ intials, available, bgColor }) => {
    console.log(bgColor);
    return (
        <div className='user'>
            <div className='user_icon' style={{ backgroundColor: bgColor }}>{intials}</div>
            <div
                className="dot"
                style={{
                    color: available ? "#50B053" : undefined,
                    border: "2px solid",        
                    borderColor: available ? "#f4f5f8" : "#f4f5f8", 
                    backgroundColor: available ? "#50B053" : "gray",
                    borderRadius: "50%",         
                    width: "10px",               
                    height: "10px",              
                    display: "inline-block" 
                }}
            ></div>
        </div>
    )
}

export default UserIcon