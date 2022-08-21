import {IResponse} from "../store/types";

const transformData = (data: any[]): IResponse[] => {
    return data.map((item) => {

        const tags = item.tags.map((tag:{title: string, type: string}) => {
            return tag.title
        })

        return {
            id: item.id,
            image: item.urls.small,
            user: {
                first_name: item.user.first_name,
                last_name: item.user.last_name
            },
            username: item.user.username,
            tags
        }
    })
}

export default transformData