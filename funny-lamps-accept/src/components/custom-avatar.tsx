import { Avatar as AntdAvatar, AvatarProps } from "antd";
type Props = AvatarProps & {
    name: string
}

const CustomAvatar = ({name, style, ...rest}: Props) => {

    return(
        <AntdAvatar
        alt={'vivi'}
        size="small"
        style={{backgroundColor: '#89d068',
                display: 'flex',
                alignItems: 'center',
                border: 'none'
    }}
        >
            Vivi
        </AntdAvatar>
    )
}

export default CustomAvatar;