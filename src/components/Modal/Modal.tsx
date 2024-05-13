import * as C from './style.ts';
import { FormComponent } from '../FormComponent/FormComponent.tsx';
import { CloseCircleOutlined } from '@ant-design/icons';

export function Modal({ IsOpen, handleClose }) {
    return(
        <>
            <C.DarkBg>
                <C.Centered>
                    <C.Modal isOpen>
                        <C.CloseButton onClick={handleClose}>
                            <CloseCircleOutlined style={{ fontSize: '24px', color: '#f51457'}}/>
                        </C.CloseButton>
                        <FormComponent />
                    </C.Modal>
                </C.Centered>
            </C.DarkBg>
        </>
    )
}