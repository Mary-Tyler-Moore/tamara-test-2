import React from 'react'
import { Link } from "react-scroll";
import Modal from 'react-modal'
import styles from '../styles/components/NavModal.module.scss'

Modal.setAppElement("#___gatsby");

const NavModal = ({ isModalOpen, handleCloseNavModal }) => {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseNavModal}
            className={styles.modal}
            overlayClassName={styles.overlay}
            closeTimeoutMS={250}
        >
            <ul className={styles.navLinks}>
                <Link
                    activeClass="active"
                    to="mission"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={handleCloseNavModal}
                >
                    Mission
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={handleCloseNavModal}
                >
                    Video
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={handleCloseNavModal}
                >
                    About
                </Link>

                <Link
                    activeClass="active"
                    to="photos"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={handleCloseNavModal}
                >
                    Photos
                </Link>

                <Link
                    activeClass="active"
                    to="example"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={handleCloseNavModal}
                >
                    Example
                </Link>

                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={handleCloseNavModal}
                >
                    Contact
                </Link>
            </ul>
        </Modal>
    )
}

export default NavModal
