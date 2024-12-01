import './Card.css'

import { FaCircle } from "react-icons/fa";
import UserIcon from '../UserIcon/UserIcon';

const Card = ({ ticket, user, icon, statusIcon, statusColor, bgColor }) => {
    const userIntials = user?.name.split(' ').map(word => word.charAt(0)).join('');
    return (
        <div className='ticket-card'>
            <div className='ticket-card__header'>
                <p className='ticket-card__id'>{ticket?.id}</p>
                {user && <UserIcon intials={userIntials} available={user?.available} bgColor={bgColor} />}
            </div>
            <div className='ticket-card__info'>
                <span className='ticket-card__status' style={{ color: statusColor }}>{statusIcon}</span>
                <p className='ticket-card__text'>
                    {ticket?.title}
                </p>
            </div>
            <div className='ticket-card__footer'>
                {icon && <div>
                    {icon}
                </div>}
                <div className="ticket-card__tag">
                    <FaCircle />
                    {
                        ticket?.tag.map((tg, id) => (
                            <p key={id}>{tg}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Card