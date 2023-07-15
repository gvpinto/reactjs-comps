import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handeClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>
                I Accept
            </Button>
        </div>
    );
    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Please accept the agreement that we decided</p>
        </Modal>
    );


    return (
        <div>
            <Button primary onClick={handeClick}>Open Model</Button>
            {showModal && modal}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla lacus, dictum ac molestie luctus, congue nec diam. Suspendisse id finibus orci. Cras eros quam, posuere ut tempus vel, pretium volutpat ligula. Duis porta laoreet dapibus. Suspendisse ut nulla eu odio viverra mollis. Nulla ac ultricies velit. Duis vel pulvinar ante, non cursus ipsum. Phasellus rutrum lacus id efficitur pellentesque. Morbi sodales nisl sed volutpat maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fringilla, metus quis rutrum facilisis, justo lacus varius diam, ac convallis dolor tortor at dui. In vitae diam nec nisl volutpat cursus. Cras placerat suscipit vehicula. Maecenas efficitur in sem eu ullamcorper. Morbi mollis, risus quis aliquet vehicula, dolor dolor porta enim, mattis viverra massa libero et nulla. Integer a ligula ullamcorper, semper mauris ut, rutrum purus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla lacus, dictum ac molestie luctus, congue nec diam. Suspendisse id finibus orci. Cras eros quam, posuere ut tempus vel, pretium volutpat ligula. Duis porta laoreet dapibus. Suspendisse ut nulla eu odio viverra mollis. Nulla ac ultricies velit. Duis vel pulvinar ante, non cursus ipsum. Phasellus rutrum lacus id efficitur pellentesque. Morbi sodales nisl sed volutpat maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fringilla, metus quis rutrum facilisis, justo lacus varius diam, ac convallis dolor tortor at dui. In vitae diam nec nisl volutpat cursus. Cras placerat suscipit vehicula. Maecenas efficitur in sem eu ullamcorper. Morbi mollis, risus quis aliquet vehicula, dolor dolor porta enim, mattis viverra massa libero et nulla. Integer a ligula ullamcorper, semper mauris ut, rutrum purus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla lacus, dictum ac molestie luctus, congue nec diam. Suspendisse id finibus orci. Cras eros quam, posuere ut tempus vel, pretium volutpat ligula. Duis porta laoreet dapibus. Suspendisse ut nulla eu odio viverra mollis. Nulla ac ultricies velit. Duis vel pulvinar ante, non cursus ipsum. Phasellus rutrum lacus id efficitur pellentesque. Morbi sodales nisl sed volutpat maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fringilla, metus quis rutrum facilisis, justo lacus varius diam, ac convallis dolor tortor at dui. In vitae diam nec nisl volutpat cursus. Cras placerat suscipit vehicula. Maecenas efficitur in sem eu ullamcorper. Morbi mollis, risus quis aliquet vehicula, dolor dolor porta enim, mattis viverra massa libero et nulla. Integer a ligula ullamcorper, semper mauris ut, rutrum purus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla lacus, dictum ac molestie luctus, congue nec diam. Suspendisse id finibus orci. Cras eros quam, posuere ut tempus vel, pretium volutpat ligula. Duis porta laoreet dapibus. Suspendisse ut nulla eu odio viverra mollis. Nulla ac ultricies velit. Duis vel pulvinar ante, non cursus ipsum. Phasellus rutrum lacus id efficitur pellentesque. Morbi sodales nisl sed volutpat maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fringilla, metus quis rutrum facilisis, justo lacus varius diam, ac convallis dolor tortor at dui. In vitae diam nec nisl volutpat cursus. Cras placerat suscipit vehicula. Maecenas efficitur in sem eu ullamcorper. Morbi mollis, risus quis aliquet vehicula, dolor dolor porta enim, mattis viverra massa libero et nulla. Integer a ligula ullamcorper, semper mauris ut, rutrum purus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla lacus, dictum ac molestie luctus, congue nec diam. Suspendisse id finibus orci. Cras eros quam, posuere ut tempus vel, pretium volutpat ligula. Duis porta laoreet dapibus. Suspendisse ut nulla eu odio viverra mollis. Nulla ac ultricies velit. Duis vel pulvinar ante, non cursus ipsum. Phasellus rutrum lacus id efficitur pellentesque. Morbi sodales nisl sed volutpat maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fringilla, metus quis rutrum facilisis, justo lacus varius diam, ac convallis dolor tortor at dui. In vitae diam nec nisl volutpat cursus. Cras placerat suscipit vehicula. Maecenas efficitur in sem eu ullamcorper. Morbi mollis, risus quis aliquet vehicula, dolor dolor porta enim, mattis viverra massa libero et nulla. Integer a ligula ullamcorper, semper mauris ut, rutrum purus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla lacus, dictum ac molestie luctus, congue nec diam. Suspendisse id finibus orci. Cras eros quam, posuere ut tempus vel, pretium volutpat ligula. Duis porta laoreet dapibus. Suspendisse ut nulla eu odio viverra mollis. Nulla ac ultricies velit. Duis vel pulvinar ante, non cursus ipsum. Phasellus rutrum lacus id efficitur pellentesque. Morbi sodales nisl sed volutpat maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fringilla, metus quis rutrum facilisis, justo lacus varius diam, ac convallis dolor tortor at dui. In vitae diam nec nisl volutpat cursus. Cras placerat suscipit vehicula. Maecenas efficitur in sem eu ullamcorper. Morbi mollis, risus quis aliquet vehicula, dolor dolor porta enim, mattis viverra massa libero et nulla. Integer a ligula ullamcorper, semper mauris ut, rutrum purus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla lacus, dictum ac molestie luctus, congue nec diam. Suspendisse id finibus orci. Cras eros quam, posuere ut tempus vel, pretium volutpat ligula. Duis porta laoreet dapibus. Suspendisse ut nulla eu odio viverra mollis. Nulla ac ultricies velit. Duis vel pulvinar ante, non cursus ipsum. Phasellus rutrum lacus id efficitur pellentesque. Morbi sodales nisl sed volutpat maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fringilla, metus quis rutrum facilisis, justo lacus varius diam, ac convallis dolor tortor at dui. In vitae diam nec nisl volutpat cursus. Cras placerat suscipit vehicula. Maecenas efficitur in sem eu ullamcorper. Morbi mollis, risus quis aliquet vehicula, dolor dolor porta enim, mattis viverra massa libero et nulla. Integer a ligula ullamcorper, semper mauris ut, rutrum purus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla lacus, dictum ac molestie luctus, congue nec diam. Suspendisse id finibus orci. Cras eros quam, posuere ut tempus vel, pretium volutpat ligula. Duis porta laoreet dapibus. Suspendisse ut nulla eu odio viverra mollis. Nulla ac ultricies velit. Duis vel pulvinar ante, non cursus ipsum. Phasellus rutrum lacus id efficitur pellentesque. Morbi sodales nisl sed volutpat maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fringilla, metus quis rutrum facilisis, justo lacus varius diam, ac convallis dolor tortor at dui. In vitae diam nec nisl volutpat cursus. Cras placerat suscipit vehicula. Maecenas efficitur in sem eu ullamcorper. Morbi mollis, risus quis aliquet vehicula, dolor dolor porta enim, mattis viverra massa libero et nulla. Integer a ligula ullamcorper, semper mauris ut, rutrum purus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla lacus, dictum ac molestie luctus, congue nec diam. Suspendisse id finibus orci. Cras eros quam, posuere ut tempus vel, pretium volutpat ligula. Duis porta laoreet dapibus. Suspendisse ut nulla eu odio viverra mollis. Nulla ac ultricies velit. Duis vel pulvinar ante, non cursus ipsum. Phasellus rutrum lacus id efficitur pellentesque. Morbi sodales nisl sed volutpat maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fringilla, metus quis rutrum facilisis, justo lacus varius diam, ac convallis dolor tortor at dui. In vitae diam nec nisl volutpat cursus. Cras placerat suscipit vehicula. Maecenas efficitur in sem eu ullamcorper. Morbi mollis, risus quis aliquet vehicula, dolor dolor porta enim, mattis viverra massa libero et nulla. Integer a ligula ullamcorper, semper mauris ut, rutrum purus.</p>
        </div>
    );
}

export default ModalPage;