import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
import Button from ',,/components/Button';
function ButtonPage() {

    const handleClick = () => {
        console.log('Clicked!');
    };

    return (
        <div>
            <div>
                <Button primary className="mb-1" onClick={handleClick} >
                    <GoBell />
                    Primary
                </Button>
            </div>
            <div>
                <Button secondary rounded>
                    <GoCloud />
                    Secondary
                </Button>
            </div>
            <div>
                <Button success rounded>
                    <GoDatabase />
                    Success
                </Button>
            </div>
            <div>
                <Button warning outline>Warning</Button>
            </div>
            <div>
                <Button danger rounded outline>Danger</Button>
            </div>
            <div>
                <Button>Plain</Button>
            </div>
        </div>
    );
}

export default ButtonPage;