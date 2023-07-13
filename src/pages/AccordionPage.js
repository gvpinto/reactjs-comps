import Accordion from "../components/Accordion";
function AccordionPage() {

    const items = [
        {
            id: 'asdfasdf',
            label: 'Would I like to learn React?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis malesuada libero, vel pretium dolor. Quisque tincidunt, dui non facilisis egestas, risus sem dapibus enim, sed finibus urna tortor mattis nunc. In posuere ex vel eros lacinia elementum. Mauris eget purus nec quam suscipit porta et sit amet ipsum'
        },
        {
            id: 'dfhgfdsd',
            label: 'Would I like to learn Vue?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis malesuada libero, vel pretium dolor. Quisque tincidunt, dui non facilisis egestas, risus sem dapibus enim, sed finibus urna tortor mattis nunc. In posuere ex vel eros lacinia elementum. Mauris eget purus nec quam suscipit porta et sit amet ipsum'
        },
        {
            id: 'ghjghgg',
            label: 'Would I like to learn Angular?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis malesuada libero, vel pretium dolor. Quisque tincidunt, dui non facilisis egestas, risus sem dapibus enim, sed finibus urna tortor mattis nunc. In posuere ex vel eros lacinia elementum. Mauris eget purus nec quam suscipit porta et sit amet ipsum'
        },
    ];

    return (
        <Accordion items={items} />
    );
}

export default AccordionPage;