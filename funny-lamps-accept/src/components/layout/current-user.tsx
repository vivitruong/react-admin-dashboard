import { Popover, Button, Flex } from "antd"
import CustomAvatar from "../custom-avatar";
import { useGetIdentity } from "@refinedev/core";
import type {User} from '@/graphql/schema.types';
const CurrentUser = () => {
    const {data: user} = useGetIdentity<User>()
    const content = (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>

        </div>
    )
    return(
        <>
        <Popover
        placement="bottomRight"
        trigger="click"
        overlayInnerStyle={{padding: 0}}
        overlayStyle={{zIndex: 999}}
        >

        <CustomAvatar
        name= {user?.name}
        src={user?.avatarURL}
        size="default"
        style={{cursor: 'pointer'}}
        />
        </Popover>
        </>
    )
}

export default CurrentUser;
