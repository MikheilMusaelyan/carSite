export function getData(id: number){
    if(id == 1){
        return [
            {
                sender: 'them',
                message: '1'
            },
            {
                sender: 'me',
                message: 'dsa'
            }
        ]
    }
    return [
        {
            sender: 'them',
            message: 'hey'
        },
        {
            sender: 'them',
            message: 'bb'
        }
    ]
}