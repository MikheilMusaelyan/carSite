export function getData(id: number){
    if(id == 1){
        return [
            {
                sender: 'them',
                message: 'Greetings'
            },
            {
                sender: 'me',
                message: 'How are you'
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
            message: 'Hello'
        }
    ]
}